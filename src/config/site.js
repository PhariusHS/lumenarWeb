
export const SITE_CONFIG = {
    // TODO: sustituir por el teléfono real. Formato internacional sin espacios en el href.
    NAME: 'LUMENAR',
    TAGLINE: 'Soluciones eléctricas',
    PHONE_DISPLAY: '000 000 000',
    PHONE_HREF: 'tel:+000000000',
    WHATSAPP_HREF:
        'https://wa.me/000000000?text=Hola%2C%20necesito%20un%20electricista.',

    COVERAGE: [
        'Pontevedra: Vigo, Pontevedra y Rías Baixas',
        'A Coruña: A Coruña, Santiago y Ferrol',
        'Ourense y alrededores',
        'Lugo y alrededores',
    ],
    HOURS: [
        'Lunes a viernes · [horario]',
        'Sábados · [horario]',
        'Urgencias · [disponibilidad]',
    ],

}

export const STYLE_CONFIG = {

    FOCUS_RING: 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
    CALL_BUTTON_STYLE:
        'inline-flex h-[60px] w-[195px] items-center justify-center rounded-[14px] bg-surface text-base font-bold text-brand transition duration-200 hover:bg-brand-tint active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface',

    EYEBROW: 'text-xs font-bold uppercase leading-[1.45] text-cyan-300',

    ARROW_BUTTON:
        'absolute top-1/2 z-10 hidden size-10 -translate-y-1/2 place-items-center rounded-full border border-surface/25 bg-surface/15 text-surface opacity-60 backdrop-blur-sm transition duration-200 hover:bg-ink/60 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface group-hover/carousel:opacity-90 disabled:pointer-events-none disabled:opacity-0 motion-reduce:transition-none md:grid',

}

