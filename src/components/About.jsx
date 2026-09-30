import { motion } from "framer-motion";
import PixelCard from "./PixelCard";
import profile from "../data/profile";
import projects from "../data/projects";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 sm:px-10 max-w-6xl mx-auto">
            <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="font-pixel text-[10px] text-electric mb-8"
            >
                &gt; PLAYER PROFILE
            </motion.p>

            <div className="grid md:grid-cols-[1fr_280px] gap-10 items-start">
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h2 className="font-pixel text-lg text-ink mb-1">
                            {profile.name}
                        </h2>
                        <p className="font-pixel text-[10px] text-cyan mb-4">
                            {profile.role}
                        </p>
                        <p className="font-retro text-xl text-muted leading-relaxed max-w-2xl">
                            {profile.bio}
                        </p>
                        <div className="mt-4 font-retro text-lg text-light-blue flex flex-wrap gap-x-8 gap-y-1">
                            <span>LOCATION: {profile.location}</span>
                            <span>EDUCATION: {profile.educationLevel}</span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {profile.interests.map((i) => (
                                <span
                                    key={i}
                                    className="font-retro text-base text-muted border border-blue/50 px-2 py-0.5"
                                >
                                    {i}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="space-y-6">
                    <StatsCard />
                    <QuoteCard />
                </div>
            </div>
        </section>
    );
}

function StatsCard() {
    const s = profile.stats;
    return (
        <PixelCard hoverable={false} className="max-w-md">
            <div className="font-retro text-xl space-y-3">
                <StatRow label="LEVEL" value={s.level} />
                <StatRow label="FOCUS" value={s.focus} />
                <StatRow label="PROJECTS" value={projects.length} />
                <StatRow label="STATUS" value={s.status} highlight />
            </div>
        </PixelCard>
    );
}

function QuoteCard() {
    return (
        <PixelCard hoverable={false} className="max-w-md">
            <p className="font-pixel text-[9px] text-electric mb-4">
                &gt; QUOTE
            </p>
            <blockquote className="font-retro text-lg text-muted leading-relaxed">
                “{profile.quote}”
            </blockquote>
            <p className="font-pixel text-[9px] text-cyan text-right mt-4">
                — {profile.name}
            </p>
        </PixelCard>
    );
}

function StatRow({ label, value, highlight }) {
    return (
        <div className="flex justify-between">
            <span className="text-light-blue">{label}</span>
            <span className={highlight ? "text-cyan" : "text-ink"}>
                {value}
            </span>
        </div>
    );
}
