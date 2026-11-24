import { useRef, useEffect } from 'react';
import { FileText } from 'lucide-react';
import { STYLE_CONFIG } from '../config/site';
import { SLIDES } from '../data/CarouselSlides'

function Slide({ slide, decorative = false }) {
    const { label, alt, src, Icon } = slide;
    return (
        <figure
            aria-hidden={decorative || undefined}
            className="relative mr-4 h-full w-70 shrink-0 overflow-clip rounded-card sm:w-101"
        >
            <img
                src={src}
                alt={decorative ? '' : alt}
                width="404"
                height="386"
                decoding="async"
                draggable="false"
                onError={(e) => {
                    e.currentTarget.style.display = 'none';
                }}
                className="absolute inset-0 size-full object-cover"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,15,25,0.35)_0%,rgba(11,15,25,0)_35%,rgba(11,15,25,0)_68%,rgba(11,15,25,0.56)_100%)]"
            />
            <figcaption className="absolute left-4 top-4 flex h-11 items-center gap-2.5 rounded-full border border-surface/25 bg-ink/90 px-4 text-sm font-bold text-surface">
                <span className="size-2.5 rounded-full bg-lime-500" aria-hidden="true" />
                {label}
            </figcaption>
            <span
                aria-hidden="true"
                className="absolute right-4 top-4 grid size-12 place-items-center rounded-full bg-brand text-surface"
            >
                <Icon className="size-6" />
            </span>
            <span className="absolute bottom-4 left-4 inline-flex h-7 items-center rounded-lg bg-ink/90 px-3 text-[11px] font-bold text-surface">
                Imagen de referencia
            </span>
        </figure>
    );
}

const SPEED = 45; // píxeles por segundo

/**
 * Carrusel infinito en bucle, movido con React + requestAnimationFrame.
 * - Las diapositivas se duplican y el desplazamiento se reinicia con módulo, sin saltos.
 * - Se pausa con el cursor encima y mientras se arrastra (ratón o dedo).
 * - Se pausa fuera de pantalla y con la pestaña oculta.
 */
export default function WorkCarousel() {
    const viewportRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        const viewport = viewportRef.current;
        const track = trackRef.current;
        if (!viewport || !track) return undefined;

        let offset = 0;
        let loopWidth = 0;
        let last = 0;
        let raf = 0;
        let hovering = false;
        let dragging = false;
        let inView = true;
        let startX = 0;
        let startOffset = 0;

        const measure = () => {
            loopWidth = track.offsetWidth / 2; // ancho de una tanda completa
        };

        const apply = () => {
            if (loopWidth) offset = ((offset % loopWidth) + loopWidth) % loopWidth;
            track.style.transform = `translate3d(${-offset}px,0,0)`;
        };

        const tick = (now) => {
            const dt = last ? Math.min(now - last, 64) : 0;
            last = now;
            if (!hovering && !dragging && inView && !document.hidden) {
                offset += (SPEED * dt) / 1000;
                apply();
            }
            raf = requestAnimationFrame(tick);
        };

        const onPointerDown = (e) => {
            if (e.pointerType === 'mouse' && e.button !== 0) return;
            dragging = true;
            startX = e.clientX;
            startOffset = offset;
            viewport.setPointerCapture(e.pointerId);
            viewport.style.cursor = 'grabbing';
        };
        const onPointerMove = (e) => {
            if (!dragging) return;
            offset = startOffset - (e.clientX - startX);
            apply();
        };
        const onPointerEnd = () => {
            dragging = false;
            viewport.style.cursor = '';
        };
        const onEnter = (e) => {
            if (e.pointerType === 'mouse') hovering = true;
        };
        const onLeave = () => {
            hovering = false;
        };

        measure();
        apply();

        const resizeObserver = new ResizeObserver(measure);
        resizeObserver.observe(track);
        const intersectionObserver = new IntersectionObserver(([entry]) => {
            inView = entry.isIntersecting;
        });
        intersectionObserver.observe(viewport);

        viewport.addEventListener('pointerdown', onPointerDown);
        viewport.addEventListener('pointermove', onPointerMove);
        viewport.addEventListener('pointerup', onPointerEnd);
        viewport.addEventListener('pointercancel', onPointerEnd);
        viewport.addEventListener('pointerenter', onEnter);
        viewport.addEventListener('pointerleave', onLeave);

        raf = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(raf);
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
            viewport.removeEventListener('pointerdown', onPointerDown);
            viewport.removeEventListener('pointermove', onPointerMove);
            viewport.removeEventListener('pointerup', onPointerEnd);
            viewport.removeEventListener('pointercancel', onPointerEnd);
            viewport.removeEventListener('pointerenter', onEnter);
            viewport.removeEventListener('pointerleave', onLeave);
        };
    }, []);

    return (
        <div
            className="relative mx-auto w-full sm:max-w-122.5 max-w-80 rounded-card 
            sm:p-5 lg:mx-15 shadow-xs"
            role="region"
            aria-roledescription="carrusel"
            aria-label="Trabajos de referencia"
        >
            <div
                ref={viewportRef}
                className="h-80 cursor-grab touch-pan-y select-none overflow-hidden rounded-card sm:h-96.5"
            >
                <div ref={trackRef} className="flex h-full w-max will-change-transform">
                    {SLIDES.map((slide) => (
                        <Slide key={slide.id} slide={slide} />
                    ))}
                    {/* Segunda tanda, solo visual, para cerrar el bucle sin saltos */}
                    <div className="flex h-full" aria-hidden="true">
                        {SLIDES.map((slide) => (
                            <Slide key={`${slide.id}-loop`} slide={slide} decorative />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}