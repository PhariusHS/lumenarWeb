import { REASONS } from "../data/TrustSection";

export default function TrustSection() {
    return (
        <section id="confianza" aria-labelledby="confianza-title" className="bg-surface-alt">
            <div className="mx-auto max-w-300 px-5 py-14 sm:px-8 lg:pb-20 lg:pt-18 xl:px-0">
                <p className="text-[13px] font-bold uppercase leading-[1.45] text-brand">
                    Por qué elegir LUMENAR
                </p>
                <h2
                    id="confianza-title"
                    className="mt-2 text-[1.75rem] font-extrabold leading-[1.2] text-ink sm:text-4xl"
                >
                    Electricidad bien hecha y trato claro
                </h2>

                <ul className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-16">
                    {REASONS.map(({ number, title, text }) => (
                        <li
                            key={number}
                            className="rounded-card-sm bg-surface p-7 leading-[1.45] 
                            transition duration-200 motion-safe:hover:-translate-y-1 
                            hover:shadow-2xl md:min-h-55"
                        >
                            <p className="text-[15px] font-bold text-brand">{number}</p>
                            <h3 className="mt-4.5 text-xl font-bold text-ink sm:text-[21px]">{title}</h3>
                            <p className="mt-3 text-base text-slate-600">{text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>

    );
}