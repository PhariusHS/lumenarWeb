import { SITE_CONFIG, STYLE_CONFIG } from '../config/site';
import WorkCarousel from './WorkCarousel';


export default function Hero() {
    return (
        <section id="inicio" aria-labelledby="hero-title" className="bg-surface-alt">
            <div className="mx-auto grid max-w-300 
            items-center gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_490px] lg:gap-16 lg:py-16 xl:px-0">
                <div>
                    <p className="inline-flex h-8.5 items-center rounded-full bg-brand-tint px-3.5 text-[11px] font-bold uppercase tracking-wide text-brand">
                        Electricistas en Galicia · Hogar y proyectos
                    </p>

                    <h1
                        id="hero-title"
                        className="mt-7 max-w-152.5 text-[2.5rem] font-extrabold leading-[1.12] text-ink sm:text-5xl lg:text-[56px]"
                    >
                        Tu electricista de confianza, <span className="text-brand">a una llamada.</span>
                    </h1>

                    <p className="mt-6 max-w-142.5 text-lg leading-[1.55] text-slate-600">
                        Instalaciones, fallas, tableros y urgencias eléctricas en tu hogar. Cuéntanos qué pasa
                        y te explicamos los siguientes pasos, con presupuesto antes de empezar.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <a
                            href={SITE_CONFIG.PHONE_HREF}
                            className={`inline-flex h-15 items-center justify-center rounded-btn bg-brand px-6 text-base font-bold text-surface transition duration-200 hover:bg-blue-800 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100 sm:w-50.5 ${STYLE_CONFIG.FOCUS_RING}`}
                        >
                            Llamar ahora
                        </a>
                        <a
                            href={SITE_CONFIG.WHATSAPP_HREF}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex h-15 items-center justify-center rounded-btn border border-ink bg-surface px-6 text-base font-bold text-brand transition duration-200 hover:bg-brand-tint active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100 sm:w-67.5 ${STYLE_CONFIG.FOCUS_RING}`}
                        >
                            Escribir por WhatsApp
                        </a>
                    </div>

                    <ul className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-[15px] font-semibold leading-[1.45] text-slate-700">
                        <li>Presupuesto claro</li>
                        <li aria-hidden="true">·</li>
                        <li>Atención a urgencias</li>
                    </ul>

                    <p className="mt-3.5 text-sm font-medium leading-[1.45] text-slate-500">
                        Cobertura en Galicia: Vigo, Santiago, Ourense, Pontevedra y zona.
                    </p>
                </div>

                <WorkCarousel />
            </div>
        </section>
    );
}
