import { Phone } from 'lucide-react';
import { SITE_CONFIG, STYLE_CONFIG } from '../config/site';
import { NAV_LINKS } from '../data/Navbar';
import logo from '../assets/logo-lumenar.png';



export default function Navbar() {
    return (
        <header className="sticky top-0 z-40 bg-surface">
            <div className="mx-auto flex h-20 max-w-300 items-center justify-between px-5 sm:h-24 sm:px-8 xl:px-0">
                <a
                    href="#inicio"
                    aria-label="LUMENAR, soluciones eléctricas — ir al inicio"
                    className={`rounded-lg ${STYLE_CONFIG.FOCUS_RING}`}
                >
                    <img
                        src={logo}
                        alt="LUMENAR"
                        width="200"
                        height="35"
                        className="h-7 w-auto sm:h-[35px]"
                    />
                </a> {/*LOGO LUMENAR */}

                <div className="flex items-center lg:gap-28">
                    {/*label container*/}
                    <nav aria-label="Principal" className="hidden lg:block">
                        <ul className="flex items-center gap-12">
                            {NAV_LINKS.map(({ label, href }) => (
                                <li key={href}>
                                    <a
                                        href={href}
                                        className={`relative inline-block py-2 text-[15px] font-semibold leading-[1.45] text-ink transition-colors hover:text-brand motion-reduce:transition-none
                      after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-brand after:transition-transform after:duration-200
                      hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none ${STYLE_CONFIG.FOCUS_RING}`}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>


                    {/*CALL BUTTON*/}
                    <a
                        href={SITE_CONFIG.PHONE_HREF}
                        aria-label={`Llamar al ${SITE_CONFIG.PHONE_DISPLAY}`}
                        className={`inline-flex h-11 items-center justify-center gap-2 rounded-btn bg-brand px-5 text-base font-bold leading-[1.4]
                             text-surface transition duration-200 hover:bg-blue-800 
                            active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100 sm:h-15 sm:w-52.5 sm:px-0 ${STYLE_CONFIG.FOCUS_RING}`}
                    >
                        <Phone className="size-4.5 shrink-0 " aria-hidden="true" />
                        <span className="sm:hidden">Llamanos</span>
                        <span className="hidden sm:inline">{"LLAMANOS"}</span>
                    </a>
                </div>
            </div>
        </header>
    );
}