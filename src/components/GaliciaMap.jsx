
/* -------------------------------------------------------------------------- */
/*  2.5D MAP MADE WITH AI               */
/* -------------------------------------------------------------------------- */

const OUTLINE = [
    [-9.32, 43.05], [-9.3, 43.08], [-9.25, 43.115], [-9.23, 43.18], [-9.17, 43.21], [-9.06, 43.205],
    [-9.015, 43.255], [-8.995, 43.3], [-8.93, 43.31], [-8.925, 43.34], [-8.865, 43.345], [-8.86, 43.38],
    [-8.81, 43.365], [-8.77, 43.32], [-8.7, 43.31], [-8.62, 43.34], [-8.555, 43.35], [-8.475, 43.38],
    [-8.425, 43.4], [-8.375, 43.4], [-8.325, 43.425], [-8.37, 43.46], [-8.35, 43.49], [-8.345, 43.57],
    [-8.305, 43.59], [-8.25, 43.585], [-8.2, 43.64], [-8.13, 43.665], [-8.08, 43.72], [-7.99, 43.73],
    [-7.945, 43.765], [-7.91, 43.79], [-7.865, 43.795], [-7.84, 43.735], [-7.8, 43.755], [-7.735, 43.77],
    [-7.7, 43.81], [-7.64, 43.78], [-7.61, 43.74], [-7.575, 43.73], [-7.55, 43.755], [-7.46, 43.745],
    [-7.415, 43.71], [-7.345, 43.69], [-7.305, 43.645], [-7.245, 43.6], [-7.2, 43.58], [-7.16, 43.575],
    [-7.03, 43.575], [-7.01, 43.525], [-7.03, 43.465], [-7.09, 43.41], [-7.135, 43.405], [-7.11, 43.345],
    [-7.055, 43.325], [-7.045, 43.255], [-6.995, 43.24], [-6.95, 43.21], [-6.945, 43.18], [-6.92, 43.165],
    [-6.86, 43.21], [-6.8, 43.15], [-6.85, 43.09], [-6.905, 43.055], [-6.94, 43.05], [-6.9, 43.01],
    [-6.815, 42.965], [-6.805, 42.925], [-6.795, 42.865], [-6.83, 42.85], [-6.82, 42.815], [-6.86, 42.765],
    [-6.93, 42.72], [-7, 42.705], [-6.985, 42.635], [-7.025, 42.62], [-7.04, 42.55], [-6.985, 42.52],
    [-6.92, 42.54], [-6.86, 42.51], [-6.8, 42.485], [-6.79, 42.455], [-6.81, 42.405], [-6.755, 42.385],
    [-6.715, 42.37], [-6.72, 42.29], [-6.75, 42.245], [-6.78, 42.195], [-6.845, 42.21], [-6.885, 42.175],
    [-6.925, 42.13], [-6.985, 42.075], [-6.94, 42.02], [-6.965, 41.96], [-6.99, 41.935], [-7.085, 41.93],
    [-7.14, 41.97], [-7.165, 41.945], [-7.185, 41.86], [-7.245, 41.85], [-7.345, 41.82], [-7.43, 41.785],
    [-7.465, 41.845], [-7.535, 41.815], [-7.625, 41.81], [-7.625, 41.86], [-7.7, 41.885], [-7.765, 41.875],
    [-7.825, 41.86], [-7.89, 41.83], [-7.925, 41.86], [-7.97, 41.855], [-8.03, 41.81], [-8.075, 41.79],
    [-8.175, 41.8], [-8.18, 41.85], [-8.22, 41.865], [-8.235, 41.925], [-8.175, 42], [-8.11, 42.025],
    [-8.115, 42.06], [-8.165, 42.045], [-8.21, 42.07], [-8.21, 42.115], [-8.25, 42.1], [-8.32, 42.065],
    [-8.375, 42.055], [-8.43, 42.05], [-8.505, 42.06], [-8.535, 42.035], [-8.615, 42.035], [-8.64, 41.995],
    [-8.685, 41.965], [-8.73, 41.93], [-8.785, 41.895], [-8.845, 41.855], [-8.88, 41.845], [-8.905, 41.885],
    [-8.91, 41.935], [-8.905, 42.035], [-8.92, 42.125], [-8.885, 42.135], [-8.865, 42.165], [-8.835, 42.18],
    [-8.8, 42.225], [-8.845, 42.235], [-8.88, 42.22], [-8.875, 42.175], [-8.92, 42.16], [-8.935, 42.195],
    [-8.93, 42.235], [-8.94, 42.255], [-8.905, 42.27], [-8.885, 42.27], [-8.885, 42.315], [-8.855, 42.33],
    [-8.845, 42.36], [-8.78, 42.35], [-8.765, 42.37], [-8.82, 42.365], [-8.9, 42.405], [-8.915, 42.365],
    [-8.91, 42.335], [-8.955, 42.33], [-8.97, 42.355], [-8.935, 42.42], [-8.9, 42.41], [-8.9, 42.44],
    [-8.945, 42.435], [-8.965, 42.485], [-8.91, 42.495], [-8.9, 42.515], [-8.95, 42.53], [-8.965, 42.525],
    [-8.985, 42.515], [-8.98, 42.46], [-9.025, 42.445], [-9.04, 42.49], [-9.07, 42.5], [-9.06, 42.53],
    [-9.065, 42.545], [-9.105, 42.555], [-9.1, 42.605], [-9.06, 42.645], [-9.05, 42.71], [-9, 42.76],
    [-9.04, 42.745], [-9.07, 42.72], [-9.11, 42.735], [-9.145, 42.77], [-9.17, 42.815], [-9.155, 42.845],
    [-9.19, 42.855], [-9.18, 42.885], [-9.215, 42.895], [-9.24, 42.9], [-9.28, 42.86], [-9.3, 42.9],
    [-9.32, 42.92], [-9.28, 42.99], [-9.305, 43.03],
];

// lon/lat -> plano local; después proyección isométrica del conjunto.
const project = (lon, lat) => [(lon + 9.32) * 126.08, (43.81 - lat) * 172];
const iso = ([x, y]) => [1.5 * x - 0.3 * y + 110, 1.2 * y + 20];

const OUTLINE_D = `M${OUTLINE.map(([lon, lat]) => project(lon, lat).map((n) => n.toFixed(1)).join(',')).join('L')}Z`;

// Capas de volumen (de abajo a arriba): desplazamiento vertical + color.
const DEPTH = [
    { dy: 16, fill: '#6f8a7a', opacity: 0.06, stroke: '#6f8a7a', sw: 20 },
    { dy: 14, fill: '#6f8a7a', opacity: 0.09, stroke: '#6f8a7a', sw: 10 },
    { dy: 12, fill: '#6f8a7a', opacity: 0.15 },
    { dy: 5, fill: '#8fa890', stroke: '#8fa890', sw: 1.5 },
    { dy: 4, fill: '#9ab39b', stroke: '#9ab39b', sw: 1.5 },
    { dy: 3, fill: '#a6bea6', stroke: '#a6bea6', sw: 1.5 },
    { dy: 2, fill: '#b2c9b0', stroke: '#b2c9b0', sw: 1.5 },
    { dy: 1, fill: '#b9d6ae', stroke: '#b9d6ae', sw: 1.5 },
];

// Relieve: [color, [[lon, lat, rx, ry], ...]]. Las 4 primeras capas generan curvas de nivel.
const RELIEF = [
    ['#d6e6a6', [[-7.6, 43.1, 100, 80], [-8.35, 42.3, 40, 42], [-7.5, 42.1, 70, 50]]],
    ['#e8dc9a', [[-6.85, 42.85, 36, 50], [-7.1, 42.6, 38, 28], [-7.3, 42.15, 40, 28], [-8.1, 41.9, 34, 18], [-7.55, 43.45, 28, 20], [-8.3, 42.2, 24, 28], [-8.95, 42.7, 13, 11]]],
    ['#d3b27c', [[-6.85, 42.87, 24, 34], [-7.1, 42.6, 24, 17], [-7.3, 42.15, 22, 17], [-8.1, 41.9, 20, 10], [-7.55, 43.45, 14, 10]]],
    ['#b98f66', [[-6.85, 42.88, 14, 22], [-7.1, 42.6, 12, 9], [-7.3, 42.15, 11, 9]]],
    ['#f6f1ea', [[-6.84, 42.9, 7, 12], [-7.1, 42.6, 5, 4], [-7.3, 42.15, 5, 5]]],
];

// Pines. `hub` = punto desde el que salen las rutas. `side` = lado de la etiqueta.
const PINS = [
    { name: 'Santiago', lon: -8.544, lat: 42.878, side: 'start', hub: true },
    { name: 'Pontevedra', lon: -8.644, lat: 42.431, side: 'end' },
    { name: 'Ourense', lon: -7.864, lat: 42.336, side: 'start' },
]
    .map((p) => ({ ...p, pos: iso(project(p.lon, p.lat)) }))
    .sort((a, b) => a.pos[1] - b.pos[1]); // los más al sur se dibujan encima

const HUB = PINS.find((p) => p.hub);

const curve = (a, b) =>
    `M${a[0]},${a[1]} Q${(a[0] + b[0]) / 2},${(a[1] + b[1]) / 2 + 22} ${b[0]},${b[1]}`;

const ROUTES = PINS.filter((p) => !p.hub)
    .map((p) => curve(HUB.pos, p.pos))
    .join(' ');

export default function GaliciaMap() {
    return (
        <svg
            viewBox="40 0 540 470"
            role="img"
            aria-labelledby="galicia-map-title galicia-map-desc"
            className="block h-auto w-full"
        >
            <title id="galicia-map-title">Mapa de Galicia con las zonas de trabajo</title>
            <desc id="galicia-map-desc">
                Mapa en relieve de Galicia con pines en A Coruña, Lugo, Santiago de Compostela,
                Pontevedra y Ourense, unidos entre sí.
            </desc>

            <defs>
                <path id="galicia-outline" d={OUTLINE_D} />
                <clipPath id="galicia-clip">
                    <use href="#galicia-outline" />
                </clipPath>
                <filter id="galicia-topo" filterUnits="userSpaceOnUse" x="-20" y="-20" width="380" height="400">
                    <feTurbulence type="fractalNoise" baseFrequency="0.024" numOctaves="3" seed="7" result="n" />
                    <feDisplacementMap in="SourceGraphic" in2="n" scale="30" result="d" />
                    <feGaussianBlur in="d" stdDeviation="5" />
                </filter>
                <filter id="galicia-contour" filterUnits="userSpaceOnUse" x="-20" y="-20" width="380" height="400">
                    <feTurbulence type="fractalNoise" baseFrequency="0.024" numOctaves="3" seed="7" result="n" />
                    <feDisplacementMap in="SourceGraphic" in2="n" scale="30" />
                </filter>
            </defs>

            <g transform="matrix(1.5 0 -0.3 1.2 110 20)">
                {DEPTH.map(({ dy, fill, opacity, stroke, sw }) => (
                    <use
                        key={dy}
                        href="#galicia-outline"
                        transform={`translate(0,${dy})`}
                        fill={fill}
                        opacity={opacity}
                        stroke={stroke}
                        strokeWidth={sw}
                        strokeLinejoin="round"
                    />
                ))}
                <use href="#galicia-outline" fill="#BFE0B5" />

                <g clipPath="url(#galicia-clip)">
                    <g filter="url(#galicia-topo)">
                        {RELIEF.map(([fill, blobs]) => (
                            <g key={fill}>
                                {blobs.map(([lon, lat, rx, ry]) => {
                                    const [cx, cy] = project(lon, lat);
                                    return <ellipse key={`${lon}${lat}${rx}`} cx={cx} cy={cy} rx={rx} ry={ry} fill={fill} />;
                                })}
                            </g>
                        ))}
                    </g>
                    <g filter="url(#galicia-contour)" fill="none" stroke="#5f7f55" strokeWidth="0.5" opacity="0.3">
                        {RELIEF.slice(0, 4).map(([fill, blobs]) =>
                            blobs.map(([lon, lat, rx, ry]) => {
                                const [cx, cy] = project(lon, lat);
                                return <ellipse key={`${fill}${lon}${lat}${rx}`} cx={cx} cy={cy} rx={rx} ry={ry} />;
                            }),
                        )}
                    </g>
                </g>

                <g fill="none" strokeLinejoin="round" strokeLinecap="round">
                    <use href="#galicia-outline" stroke="#00E5FF" opacity="0.14" strokeWidth="6" />
                    <use href="#galicia-outline" stroke="#00E5FF" opacity="0.3" strokeWidth="3.2" />
                    <use href="#galicia-outline" stroke="#12DCF2" strokeWidth="1.3" />
                </g>
            </g>

            {/* Rutas entre pines */}
            <g fill="none" strokeLinecap="round">
                <path d={ROUTES} stroke="#00E5FF" strokeWidth="7" opacity="0.22" />
                <path d={ROUTES} stroke="#00D0EA" strokeWidth="1.6" />
            </g>

            {/* Pines */}
            {PINS.map(({ name, pos: [x, y], side }, i) => (
                <g key={name}>
                    <ellipse cx={x} cy={y} rx="18" ry="7" fill="#00E5FF" opacity="0.25" />
                    <ellipse
                        cx={x}
                        cy={y}
                        rx="18"
                        ry="7"
                        fill="none"
                        stroke="#00E5FF"
                        strokeWidth="1.5"
                        className="origin-center motion-safe:animate-pin-pulse [transform-fill]"
                        style={{ animationDelay: `${i * 0.45}s` }}
                    />
                    <polygon
                        points={`${x - 14},${y} ${x + 14},${y} ${x + 6},${y - 93} ${x - 6},${y - 93}`}
                        fill="#00E5FF"
                        opacity="0.16"
                    />
                    <path d={`M${x},${y} L${x - 8},${y - 27} A9 9 0 1 1 ${x + 8},${y - 27} Z`} fill="#0a8fa8" />
                    <circle cx={x} cy={y - 32} r="3.4" fill="#FFFFFF" />
                    <text
                        x={side === 'end' ? x - 20 : x + 20}
                        y={y - 28}
                        textAnchor={side}
                        fontSize="16"
                        fontWeight="700"
                        fill="#1f3138"
                        stroke="#ffffff"
                        strokeWidth="4"
                        strokeLinejoin="round"
                        style={{ paintOrder: 'stroke' }}
                    >
                        {name}
                    </text>
                </g>
            ))}
        </svg>
    );
}
