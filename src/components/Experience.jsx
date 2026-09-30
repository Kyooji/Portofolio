import { motion } from "framer-motion";
import experience from "../data/experience";

export default function Experience() {
    return (
        <section
            id="experience"
            className="py-24 px-6 sm:px-10 max-w-6xl mx-auto"
        >
            <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="font-pixel text-[10px] text-electric mb-12"
            >
                &gt; MISSION HISTORY
            </motion.p>

            <div className="relative w-full pl-6 border-l-2 border-blue/50">
                {experience.map((item, i) => (
                    <motion.div
                        key={`${item.year}-${item.role}`}
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="relative mb-12 last:mb-0"
                    >
                        <span className="absolute -left-[31px] top-1 w-3 h-3 bg-electric blue-glow" />
                        <p className="font-pixel text-[10px] text-cyan mb-2">
                            {item.year}
                        </p>
                        <h3 className="font-pixel text-xs text-ink mb-1">
                            {item.role}
                        </h3>
                        <p className="font-retro text-lg text-light-blue mb-2">
                            {item.company}
                        </p>
                        <ul className="font-retro text-lg text-muted w-full space-y-2 list-disc list-outside ml-5">
                            {item.descriptions.map((description) => (
                                <li key={description}>{description}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
