import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = ["about", "experience", "projects", "skills", "contact"];
const WHATSAPP_URL =
    "https://wa.me/6281219929869?text=Hello%20Hery%2C%20I%20would%20like%20to%20discuss%20a%20project.";
const CV_URL = `${import.meta.env.BASE_URL}Hery_Sugiharto_CV.pdf`;

export default function Navbar() {
    const [active, setActive] = useState("about");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            let current = SECTIONS[0];
            for (const id of SECTIONS) {
                const el = document.getElementById(id);
                if (
                    el &&
                    el.getBoundingClientRect().top <= window.innerHeight * 0.4
                ) {
                    current = id;
                }
            }
            setActive(current);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const go = (id) => {
        setOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const closeMenu = () => {
        setOpen(false);
    };

    const goToTop = () => {
        setOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <nav className="fixed top-0 inset-x-0 z-40 bg-bg/90 backdrop-blur-md border-b-2 border-blue/40">
            <div className="max-w-6xl mx-auto flex md:grid md:grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 py-4">
                <button
                    onClick={goToTop}
                    className="font-pixel text-[10px] sm:text-xs text-cyan text-glow md:justify-self-start transition-colors duration-150 hover:text-light-blue hover:drop-shadow-[0_0_6px_rgba(0,168,255,0.8)]"
                >
                    [ Hery Sugiharto ]
                </button>

                {/* Desktop menu */}
                <ul className="hidden md:flex gap-7 font-pixel text-[10px] md:justify-self-center">
                    {SECTIONS.map((id) => (
                        <li key={id}>
                            <button
                                onClick={() => go(id)}
                                className={`relative px-1 py-2 transition-colors duration-150 ${
                                    active === id
                                        ? "text-cyan"
                                        : "text-muted hover:text-light-blue"
                                }`}
                            >
                                {active === id && (
                                    <span className="mr-1">&gt;</span>
                                )}
                                {id.toUpperCase()}
                            </button>
                        </li>
                    ))}
                </ul>

                <ul className="hidden md:flex items-center justify-end gap-6 font-pixel text-[10px] md:justify-self-end">
                    <li>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex py-2 text-muted hover:text-green-400 transition-colors duration-150"
                        >
                            WHATSAPP
                        </a>
                    </li>
                    <li>
                        <a
                            href={CV_URL}
                            download
                            className="py-2 text-muted hover:text-light-blue transition-colors duration-150"
                        >
                            PRINT CV
                        </a>
                    </li>
                </ul>

                {/* Mobile toggle */}
                <button
                    className="md:hidden font-pixel text-[10px] text-electric border-2 border-electric px-4 py-3"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    {open ? "X" : "≡"}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden overflow-hidden border-t-2 border-blue/40 bg-bg-dark flex flex-col"
                    >
                        {SECTIONS.map((id) => (
                            <li key={id}>
                                <button
                                    onClick={() => go(id)}
                                    className={`w-full text-left px-6 py-5 font-pixel text-[10px] ${
                                        active === id
                                            ? "text-cyan"
                                            : "text-muted"
                                    }`}
                                >
                                    {active === id ? "> " : ""}
                                    {id.toUpperCase()}
                                </button>
                            </li>
                        ))}
                        <li>
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noreferrer"
                                onClick={() => setOpen(false)}
                                className="block px-6 py-5 font-pixel text-[10px] text-muted hover:text-green-400 transition-colors duration-150"
                            >
                                WHATSAPP
                            </a>
                        </li>
                        <li>
                            <a
                                href={CV_URL}
                                download
                                onClick={closeMenu}
                                className="block w-full text-left px-6 py-5 font-pixel text-[10px] text-muted"
                            >
                                PRINT CV
                            </a>
                        </li>
                    </motion.ul>
                )}
            </AnimatePresence>
        </nav>
    );
}
