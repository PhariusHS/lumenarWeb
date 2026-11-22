import { FAQS } from "../data/FAQ";

// Structured data for Google SEO
const FAQ_JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
};

export default function Faq() {
    return (
        <section id="faq" aria-labelledby="faq-title" className="bg-surface mx-auto">
            <div className="mx-auto max-w-300 px-5 py-14 sm:px-8 lg:py-18 xl:px-0">
                <p className="text-[13px] font-bold uppercase leading-[1.45] text-brand">
                    Resolvemos tus dudas
                </p>
                <h2
                    id="faq-title"
                    className="mt-2 text-[1.75rem] font-extrabold leading-[1.2] text-ink sm:text-4xl"
                >
                    Antes de llamarnos
                </h2>

                <dl className="mt-10 lg:mt-13.5">
                    {FAQS.map(({ question, answer }) => (
                        <div key={question} className="border-b border-line pb-7 pt-4.5 first:pt-0 lg:pb-8.25">
                            <dt className="text-xl font-bold leading-[1.45] text-ink sm:text-[21px]">{question}</dt>
                            <dd className="mt-2.5 max-w-285 text-[17px] leading-[1.45] text-slate-600">
                                {answer}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>

            <script type="application/ld+json">{JSON.stringify(FAQ_JSON_LD)}</script>
        </section>
    );
}
