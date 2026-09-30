import { motion } from "framer-motion";
import PixelCard from "./PixelCard";
import projects from "../data/projects";

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-24 px-6 sm:px-10 max-w-6xl mx-auto"
        >
            <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="font-pixel text-[10px] text-electric mb-10"
            >
                &gt; QUEST LOG
            </motion.p>

            <div className="flex flex-col gap-6">
                {projects.map((p, i) => (
                    <motion.div
                        key={p.id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                        className="w-full"
                    >
                        <PixelCard className="h-full w-full flex flex-col">
                            <p className="font-pixel text-[9px] text-electric mb-2">
                                {p.code}
                            </p>
                            <h3 className="font-pixel text-xs text-ink mb-3">
                                {p.name}
                            </h3>
                            <p className="font-retro text-lg text-muted flex-1 mb-4">
                                {p.description}
                            </p>
                            <p className="font-retro text-base text-ink leading-relaxed mb-5">
                                {p.fullDescription}
                            </p>
                            <div className="mt-auto border-t border-blue/40 pt-4">
                                <p className="font-pixel text-[9px] text-electric mb-3">
                                    TECH STACK
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {p.tech.map((technology) => (
                                        <span
                                            key={technology}
                                            className="inline-flex items-center border border-blue/40 bg-bg/70 px-3 py-1.5 font-retro text-base text-light-blue transition-colors duration-150 hover:border-electric hover:text-ink"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </PixelCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
