import { motion } from "framer-motion";
import PixelCard from "./PixelCard";
import skills from "../data/skills";

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 sm:px-10 max-w-6xl mx-auto">
            <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="font-pixel text-[10px] text-electric mb-10"
            >
                &gt; SKILL TREE
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6">
                {skills.map((group, i) => (
                    <SkillCard
                        key={group.category}
                        group={group}
                        index={i}
                        delay={i * 0.08}
                    />
                ))}
            </div>
        </section>
    );
}

function SkillCard({ group, index, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4, delay }}
        >
            <PixelCard hoverable className="h-full flex flex-col">
                <div className="flex items-center justify-between gap-3 border-b border-blue/40 pb-4 mb-5">
                    <div className="flex items-center gap-3 min-w-0">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-blue/50 bg-bg font-retro text-xl text-electric">
                            {group.icon}
                        </span>
                        <h3 className="font-pixel text-[10px] text-ink leading-relaxed">
                            {group.category}
                        </h3>
                    </div>
                    <span className="font-pixel text-[9px] text-muted shrink-0">
                        CAT {String(index + 1).padStart(2, "0")}
                    </span>
                </div>
                <div className="flex flex-wrap gap-2 min-h-[92px] content-start">
                    {group.items.map((skill) => (
                        <span
                            key={skill.name}
                            className="inline-flex items-center border border-blue/40 bg-bg/70 px-3 py-1.5 font-retro text-lg text-light-blue transition-colors duration-150 hover:border-electric hover:text-ink"
                        >
                            {skill.name}
                        </span>
                    ))}
                </div>
                {/* <div className="mt-5 flex items-center justify-between border-t border-blue/40 pt-4 font-retro text-base text-muted">
                    <span>Status: Production Verified</span>
                    <span className="text-cyan" aria-label="Verified">
                        ●
                    </span>
                </div> */}
            </PixelCard>
        </motion.div>
    );
}
