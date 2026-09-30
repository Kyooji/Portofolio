import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINE = "SYSTEM BOOTING...";

export default function LoadingScreen({ onComplete }) {
    const [typed, setTyped] = useState("");
    const [progress, setProgress] = useState(0);
    const [exiting, setExiting] = useState(false);

    // typing effect
    useEffect(() => {
        let i = 0;
        const t = setInterval(() => {
            i++;
            setTyped(BOOT_LINE.slice(0, i));
            if (i >= BOOT_LINE.length) clearInterval(t);
        }, 40);
        return () => clearInterval(t);
    }, []);

    // progress bar
    useEffect(() => {
        const p = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(p);
                    return 100;
                }
                return prev + Math.ceil(Math.random() * 8);
            });
        }, 90);
        return () => clearInterval(p);
    }, []);

    useEffect(() => {
        if (progress < 100) return;

        setExiting(true);
        const timeout = setTimeout(onComplete, 650);
        return () => clearTimeout(timeout);
    }, [progress, onComplete]);

    const barLength = 20;
    const filled = Math.round((Math.min(progress, 100) / 100) * barLength);
    const bar = "█".repeat(filled) + "░".repeat(barLength - filled);

    return (
        <AnimatePresence>
            {!exiting ? (
                <motion.div
                    key="loading"
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg text-ink px-6"
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(6px)" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <p className="font-pixel text-[10px] sm:text-sm text-electric mb-8">
                        {typed}
                        <span className="animate-pulse">_</span>
                    </p>

                    <div className="w-full max-w-xs sm:max-w-sm font-retro text-lg text-light-blue mb-2 tracking-wider">
                        LOADING
                    </div>
                    <div className="w-full max-w-xs sm:max-w-sm font-retro text-electric text-lg sm:text-xl tracking-tight overflow-hidden whitespace-nowrap">
                        {bar} {Math.min(progress, 100)}%
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                            opacity: progress >= 100 ? 1 : 0,
                            y: progress >= 100 ? 0 : 10,
                        }}
                        transition={{ duration: 0.4 }}
                        className="mt-10 font-pixel text-[10px] text-cyan text-glow"
                    >
                        SYSTEM READY
                    </motion.p>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
}
