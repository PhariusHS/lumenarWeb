import { ArrowRight, Cctv, Check, Lightbulb, Plug, Sprout } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

const SERVICES = [
    {
        id: 'domiciliaria',
        Icon: Lightbulb,
        eyebrow: 'Servicio principal',
        title: 'Electricidad domiciliaria',
        description:
            'Todo lo eléctrico de tu casa, desde un enchufe que no funciona hasta el cambio completo del tablero. Llegamos, diagnosticamos y lo resolvemos con materiales de calidad.',
        items: [
            'Instalaciones y reformas',
            'Fallas y cortocircuitos',
            'Cambio y ampliación de tableros',
            'Urgencias eléctricas',
        ],
        cta: 'Llamar por electricidad',
        s: {
            card: 'border-line bg-surface-alt',
            badge: 'bg-brand-tint text-brand',
            eyebrow: 'text-brand',
            title: 'text-ink',
            desc: 'text-slate-600',
            list: 'text-slate-700',
            cta: 'text-brand',
        },

    },
    {
        id: 'obra',
        Icon: Plug,
        eyebrow: 'Proyectos',
        title: 'Electricidad de obra',
        description:
            'Instalación eléctrica completa para viviendas, locales y oficinas, desde cero y cumpliendo la normativa vigente.',
        items: [
            'Obra nueva y ampliaciones',
            'Viviendas, locales y oficinas',
            'Cableado, tableros y puesta en marcha',
        ],
        cta: 'Pedir presupuesto por teléfono',
        s: {
            card: 'border-ink bg-ink',
            badge: 'bg-surface/10 text-cyan-300',
            eyebrow: 'text-cyan-300',
            title: 'text-surface',
            desc: 'text-slate-300',
            list: 'text-slate-200',
            cta: 'text-surface',
        },
    },
    {
        id: 'solar',
        Icon: Sprout,
        eyebrow: 'Energía solar',
        title: 'Mantenimiento y montaje de paneles solares',
        description:
            'Instalamos tus paneles y los mantenemos al máximo rendimiento para que produzcas tu propia energía y reduzcas tu factura de luz.',
        items: [
            'Montaje e instalación completa',
            'Limpieza y revisión periódica',
            'Control de rendimiento y conexiones',
        ],
        cta: 'Consultar por paneles solares',
        s: {
            card: 'border-solar-line bg-solar-bg',
            badge: 'bg-lime-500/15 text-lime-700',
            eyebrow: 'text-lime-700',
            title: 'text-ink',
            desc: 'text-slate-600',
            list: 'text-slate-700',
            cta: 'text-lime-800',
        },
    },
    {
        id: 'camaras',
        Icon: Cctv,
        eyebrow: 'Seguridad',
        title: 'Cámaras de seguridad',
        description:
            'Instalamos y configuramos sistemas de vigilancia para tu casa o tu negocio, con acceso desde el móvil para que estés tranquilo.',
        items: [
            'Instalación y cableado',
            'Configuración y acceso desde el móvil',
            'Vigilancia para hogar y negocio',
        ],
        cta: 'Consultar por cámaras',
        s: {
            card: 'border-line bg-surface-alt',
            badge: 'bg-brand-tint text-brand',
            eyebrow: 'text-brand',
            title: 'text-ink',
            desc: 'text-slate-600',
            list: 'text-slate-700',
            cta: 'text-brand',
        },
    },
];

export default function Services() {
    return (
        <section id="servicios" aria-labelledby="servicios-title" className="bg-surface">
            <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 lg:py-[72px] xl:px-0">
                {/*Header pre containers */}
                <p className="text-[13px] font-bold uppercase leading-[1.45] text-brand">
                    Nuestros servicios
                </p>
                <h2
                    id="servicios-title"
                    className="mt-2 text-[1.75rem] font-extrabold leading-[1.2] text-ink sm:text-4xl"
                >
                    Cuatro servicios, un solo teléfono
                </h2>
                <p className="mt-4 max-w-[1100px] text-lg leading-[1.45] text-slate-600">
                    Elige lo que necesitas. Te respondemos con claridad, sin rodeos y sin formularios.
                </p>

                {/*Service containers map */}
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-[54px]">
                    {SERVICES.map(({ id, Icon, eyebrow, title, description, items, cta, s }) => (
                        <article
                            key={id}
                            className={`group/card flex flex-col rounded-[22px] border p-6 transition duration-200 motion-safe:hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(11,15,25,0.35)] sm:p-[31px] md:min-h-[440px] ${s.card}`}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <p className={`text-[11px] font-bold uppercase leading-[1.45] ${s.eyebrow}`}>
                                    {eyebrow}
                                </p>
                                <span
                                    aria-hidden="true"
                                    className={`-mt-2 grid size-11 shrink-0 place-items-center rounded-xl transition-transform duration-200 group-hover/card:scale-110 motion-reduce:transition-none ${s.badge}`}
                                >
                                    <Icon className="size-[22px]" strokeWidth={1.75} />
                                </span>
                            </div>
                            <h3
                                className={`mt-2 text-[1.375rem] font-extrabold leading-[1.25] sm:text-[25px] md:min-h-[62px] ${s.title}`}
                            >
                                {title}
                            </h3>
                            <p className={`mt-4 text-base leading-[1.5] md:min-h-[72px] ${s.desc}`}>
                                {description}
                            </p>

                            <ul className={`mt-8 text-sm font-medium leading-[1.65] ${s.list}`}>
                                {items.map((item) => (
                                    <li key={item} className="flex items-start gap-2.5">
                                        <Check className="mt-[3px] size-4 shrink-0" aria-hidden="true" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={SITE_CONFIG.PHONE_HREF}
                                className={`group/cta mt-auto inline-flex items-center gap-2 self-start pt-8 text-[15px] font-bold leading-[1.45] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current ${s.cta}`}
                            >
                                {cta}
                                <ArrowRight
                                    className="size-4 transition-transform duration-200 group-hover/cta:translate-x-1 motion-reduce:transition-none"
                                    aria-hidden="true"
                                />
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}