import logo from '../assets/logo-lumenar.png';
import { SITE_CONFIG, STYLE_CONFIG } from '../config/site';

export default function Footer() {
    return (
        <footer className="bg-ink">
            <div className="mx-auto max-w-300 px-5 pb-28 pt-12 sm:px-8 lg:pb-10 lg:pt-16 xl:px-0">
                <div className="grid gap-10 lg:grid-cols-[540px_360px_minmax(0,1fr)] lg:gap-0">
                    <div>
                        <div className="flex h-15 w-56 flex-col items-center rounded-lg bg-surface pt-0.75">
                            <img src={logo} alt="LUMENAR" width="200" height="35" className="h-8.75 w-50 object-contain" />
                            <p className="mt-1.25 text-[9px] font-bold uppercase leading-[1.2] text-ink">
                                {SITE_CONFIG.TAGLINE}
                            </p>
                        </div>

                        <p className={`mt-7.75 ${STYLE_CONFIG.EYEBROW}`}>Llámanos ahora</p>
                        <a
                            href={SITE_CONFIG.PHONE_HREF}
                            className="mt-1 block text-[2rem] font-extrabold leading-[1.45] text-surface transition-colors hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 motion-reduce:transition-none sm:text-[40px]"
                        >
                            {SITE_CONFIG.PHONE_DISPLAY}
                        </a>

                        <div className="mt-5.5 flex flex-wrap gap-4">
                            <a href={SITE_CONFIG.PHONE_HREF} className={STYLE_CONFIG.CALL_BUTTON_STYLE}>
                                Llamar ahora
                            </a>
                            <a href={SITE_CONFIG.WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className={STYLE_CONFIG.CALL_BUTTON_STYLE}>
                                WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="lg:pt-2">
                        <h2 className={STYLE_CONFIG.EYEBROW}>Zonas de cobertura · Galicia</h2>
                        <ul className="mt-6.5 mr-10 text-[17px] leading-[1.9] text-slate-200">
                            {SITE_CONFIG.COVERAGE.map((zone) => (
                                <li key={zone}>{zone}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:pt-2">
                        <h2 className={STYLE_CONFIG.EYEBROW}>Horarios</h2>
                        <ul className="mt-6.5 text-base leading-[1.9] text-slate-200">
                            {SITE_CONFIG.HOURS.map((line) => (
                                <li key={line}>{line}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <hr className="mt-11.25 border-0 border-t border-slate-700" />

                <p className="mt-7.25 text-sm font-medium leading-[1.45] text-slate-300">
                    {SITE_CONFIG.NAME} · {SITE_CONFIG.TAGLINE}
                </p>
                <p className="mt-3 text-[13px] leading-[1.45] text-slate-400">
                    Datos de contacto y disponibilidad pendientes de confirmar.
                </p>
            </div>
        </footer>
    );
}
