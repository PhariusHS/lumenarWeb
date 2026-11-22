import { ArrowRight, Check } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { SERVICES } from '../data/Services';



export default function Services() {
    return (
        <section id="servicios" aria-labelledby="servicios-title" className="bg-surface">
            <div className="mx-auto max-w-300 px-5 py-14 sm:px-8 lg:py-18 xl:px-0">
                {/*Header pre containers */}
                <p className="text-[13px] font-bold uppercase leading-[1.45] text-brand">
                    Nuestros servicios
                </p>

                <h2
                    id="servicios-title"
                    className="mt-2 text-[1.75rem] font-extrabold leading-[1.2] text-ink sm:text-4xl"
                >
                    Soluciones eléctricas a tu medida.
                </h2>
                <p className="mt-4 max-w-275 text-lg leading-[1.45] text-slate-600">
                    Electricidad domiciliaria y de obra, paneles solares y seguridad, ejecutados por profesionales matriculados bajo normativa vigente.
                </p>

                {/*Service containers map */}
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-13.5">
                    {SERVICES.map(({ id, Icon, eyebrow, title, description, items, cta, s }) => (
                        <article
                            key={id}
                            className={`group/card flex flex-col rounded-card border p-6 transition duration-200
                                 motion-safe:hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(11,15,25,0.35)]
                                  sm:p-7.75 md:min-h-110 ${s.card}`}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <p className={`text-[11px] font-bold uppercase leading-[1.45] ${s.eyebrow}`}>
                                    {eyebrow}
                                </p>
                                <span
                                    aria-hidden="true"
                                    className={`-mt-2 grid size-11 shrink-0 place-items-center rounded-xl transition-transform 
                                        duration-200 group-hover/card:scale-110 motion-reduce:transition-none ${s.badge}`}
                                >
                                    <Icon className="size-5.5" strokeWidth={1.75} />
                                </span>
                            </div>
                            <h3
                                className={`mt-2 text-[1.375rem] font-extrabold leading-tight sm:text-[25px] md:min-h-15.5 ${s.title}`}
                            >
                                {title}
                            </h3>
                            <p className={`mt-4 text-base leading-normal md:min-h-18 ${s.desc}`}>
                                {description}
                            </p>

                            <ul className={`mt-8 text-sm font-medium leading-[1.65] ${s.list}`}>
                                {items.map((item) => (
                                    <li key={item} className="flex items-start gap-2.5">
                                        <Check className="mt-0.75 size-4 shrink-0" aria-hidden="true" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={SITE_CONFIG.PHONE_HREF}
                                className={`group/cta mt-auto inline-flex items-center gap-2 self-start pt-8 
                                    text-[15px] font-bold leading-[1.45] focus-visible:outline-2 focus-visible:outline-offset-4
                                     focus-visible:outline-current ${s.cta}`}
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