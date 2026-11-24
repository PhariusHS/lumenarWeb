import { useRef, useState } from 'react';
import { FileText } from 'lucide-react';
import { STYLE_CONFIG } from '../config/site';
import { SLIDES } from '../data/CarouselSlides'

export default function WorkCarousel() {
    const trackRef = useRef(null);
    const [active, setActive] = useState(0);

    const handleScroll = () => {
        const el = trackRef.current;
        if (!el || !el.children.length) return;
        const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
        const step = el.children[0].offsetWidth + gap;
        const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
        const index = atEnd
            ? SLIDES.length - 1
            : Math.min(SLIDES.length - 1, Math.round(el.scrollLeft / step));
        setActive(index);
    };

    const goTo = (index) => {
        const el = trackRef.current;
        if (!el) return;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        el.scrollTo({ left: el.children[index].offsetLeft, behavior: reduce ? 'auto' : 'smooth' });
    };

    return (
        <div
            className="relative mx-auto w-full max-w-[490px] rounded-[32px] bg-[radial-gradient(195px_169px_at_70%_20%,rgba(6,182,212,0.35),transparent),linear-gradient(160deg,var(--color-ink),var(--color-night))] p-4 shadow-[0_30px_60px_rgba(11,15,25,0.25)] sm:p-5 lg:mx-0"
            role="region"
            aria-roledescription="carrusel"
            aria-label="Trabajos de referencia"
        >
            <div
                ref={trackRef}
                onScroll={handleScroll}
                tabIndex={0}
                className={`relative flex h-[320px] snap-x snap-mandatory gap-4 overflow-x-auto rounded-[22px] [scrollbar-width:none] sm:h-[386px] [&::-webkit-scrollbar]:hidden ${STYLE_CONFIG.FOCUS_RING}`}
            >
                {SLIDES.map(({ id, label, alt, src, Icon }) => (
                    <figure
                        key={id}
                        className="relative h-full w-[88%] shrink-0 snap-start overflow-clip rounded-[22px] sm:w-[404px]"
                    >
                        <img
                            src={src}
                            alt={alt}
                            width="404"
                            height="386"
                            loading="lazy"
                            decoding="async"
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
                ))}
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
                <div className="pl-0.5">
                    <div className="flex items-center gap-1" role="group" aria-label="Seleccionar imagen">
                        {SLIDES.map(({ id, label }, i) => (
                            <button
                                key={id}
                                type="button"
                                onClick={() => goTo(i)}
                                aria-label={`Ver ${label}`}
                                aria-current={active === i}
                                className={`grid h-4 place-items-center rounded-full ${STYLE_CONFIG.FOCUS_RING} ${active === i ? 'w-7' : 'w-4'}`}
                            >
                                <span
                                    className={`block h-[7px] rounded-full transition-all duration-200 motion-reduce:transition-none ${active === i ? 'w-6 bg-cyan-500' : 'w-[7px] bg-[#63738c]'
                                        }`}
                                />
                            </button>
                        ))}
                    </div>
                    <p className="mt-1 text-[11px] font-bold leading-4 text-[#d6e0f0]">
                        Desliza para ver más →
                    </p>
                </div>

                <p className="flex h-11 items-center gap-2.5 rounded-[14px] bg-surface px-4 text-sm font-extrabold text-ink drop-shadow-[0_12px_14px_rgba(0,0,0,0.3)]">
                    <FileText className="size-[18px] text-brand" aria-hidden="true" />
                    Presupuesto sin sorpresas
                </p>
            </div>
        </div>
    );
}
