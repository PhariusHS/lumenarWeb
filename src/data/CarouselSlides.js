import { Lightbulb, Plug, Zap } from 'lucide-react';


export const SLIDES = [
    {
        id: 'cuadros',
        label: 'Cuadros eléctricos',
        alt: 'Cuadro eléctrico con magnetotérmicos y cableado ordenado',
        src: '../assets/ref-1-cuadros-electricos',
        Icon: Zap,
    },
    {
        id: 'iluminacion',
        label: 'Iluminación',
        alt: 'Salón con iluminación LED empotrada en el techo',
        src: './assets/ref-2-iluminacion.jpg',
        Icon: Lightbulb,
    },
    {
        id: 'enchufes',
        label: 'Enchufes y tomas',
        alt: 'Instalación de enchufes y tomas de corriente',
        // TODO: añadir esta foto en public/images (si no existe, se ve el fondo degradado).
        src: './assets/ref-3-enchufes-y-tomas.jpg',
        Icon: Plug,
    },
];
