import { Cctv, Lightbulb, Plug, Sprout } from 'lucide-react';


export const SERVICES = [
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
            'Instalación eléctrica completa para viviendas, locales y oficinas, con firma de planos y certificación oficial.',
        items: [
            'Obra nueva y ampliaciones',
            'Firma de planos y certificados de isntalación',
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
        title: 'Instalación y mantenimiento de paneles solares',
        description:
            'Instalamos tus paneles y los mantenemos al máximo rendimiento para que produzcas tu propia energía y reduzcas tu factura de luz.',
        items: [
            'Montaje e instalación de paneles',
            'Montaje e instalación de baterias',
            'Limpieza y revisión periódica',
            'Control de rendimiento y conexiones',
        ],
        cta: 'Consigue tus paneles solares',
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
        id: 'seguridad',
        Icon: Cctv,
        eyebrow: 'Seguridad',
        title: 'Sistemas de seguridad',
        description:
            'Instalamos y configuramos sistemas de vigilancia y alarma para tu casa o tu negocio, con acceso desde el móvil para que estés tranquilo.',
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