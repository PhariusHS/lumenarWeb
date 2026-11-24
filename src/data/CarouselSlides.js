import { Lightbulb, Plug, Sprout, Zap } from 'lucide-react';

export const SLIDES = [
    {
        id: 'cuadros',
        label: 'Cuadros eléctricos',
        alt: 'Cuadro eléctrico con magnetotérmicos y cableado ordenado',
        src: '/images/reference1.jpg',
        Icon: Zap,
    },
    {
        id: 'iluminacion',
        label: 'Iluminación',
        alt: 'Salón con iluminación LED empotrada en el techo',
        src: '/images/reference2.jpg',
        Icon: Lightbulb,
    },
    {
        id: 'enchufes',
        label: 'Enchufes y tomas',
        alt: 'Instalación de enchufes y tomas de corriente',
        // TODO: añadir esta foto en public/images (si no existe, se ve el fondo degradado).
        src: './images/reference3.jpg',
        Icon: Plug,
    },
    {
        id: 'paneles',
        label: 'Paneles Solares',
        alt: 'Instacion de paneles solares',
        // TODO: añadir esta foto en public/images (si no existe, se ve el fondo degradado).
        src: './images/reference4.jpg',
        Icon: Sprout,
    },
];
