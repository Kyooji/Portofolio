import { motion } from "framer-motion";
import PixelCard from "./PixelCard";
import profile from "../data/profile";

export default function Education() {
    return (
        <section
            id="education"
            className="py-24 px-6 sm:px-10 max-w-6xl mx-auto"
        >
            <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="font-pixel text-[10px] text-electric mb-10"
            >
                &gt; EDUCATION LOG
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
            >
                <PixelCard className="w-full" hoverable>
                    <div className="flex items-center justify-between gap-4 mb-5">
                        <p className="font-pixel text-[9px] text-cyan">
                            ACADEMIC PROFILE
                        </p>
                        <p className="font-pixel text-[9px] text-electric text-right">
                            SEPTEMBER 2026 - JULY 2026
                        </p>
                    </div>
                    <h2 className="font-pixel text-sm text-ink mb-3">
                        {profile.educationLevel}
                    </h2>
                    <p className="font-retro text-lg text-muted">
                        BINUS University
                    </p>
                </PixelCard>
            </motion.div>
        </section>
    );
}
