import { useState } from "react";
import { motion } from "framer-motion";
import PixelButton from "./PixelButton";
import profile from "../data/profile";

// Status: 'idle' | 'sending' | 'sent'
export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle");

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        // TODO: replace this simulated delay with a real API/form service call,
        // e.g. fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
        await new Promise((resolve) => setTimeout(resolve, 1400));

        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
    };

    return (
        <section id="contact" className="py-24 px-6 sm:px-10 max-w-6xl mx-auto">
            <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="font-pixel text-[10px] text-electric mb-10"
            >
                &gt; SEND TRANSMISSION
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="pixel-border bg-bg-dark p-6 space-y-6"
                >
                    <div className="flex items-center justify-between border-b border-blue/40 pb-4">
                        <h2 className="font-pixel text-xs text-electric">
                            CONTACT DOSSIER
                        </h2>
                        <span className="font-pixel text-[9px] text-cyan">
                            ONLINE
                        </span>
                    </div>

                    <ContactDetail
                        label="ELECTRONIC MAIL"
                        value={profile.email}
                    />
                    <ContactDetail label="PHONE" value={profile.phone} />
                    <ContactDetail
                        label="OPERATING BASE"
                        value={profile.location}
                    />

                    <div className="grid grid-cols-2 gap-3 pt-2 border-t border-blue/40">
                        <a
                            href={profile.social.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="pixel-border px-3 py-3 text-center font-retro text-lg text-light-blue hover:text-cyan transition-colors"
                        >
                            LinkedIn ↗
                        </a>
                        <a
                            href={profile.social.github}
                            target="_blank"
                            rel="noreferrer"
                            className="pixel-border px-3 py-3 text-center font-retro text-lg text-light-blue hover:text-cyan transition-colors"
                        >
                            GitHub ↗
                        </a>
                    </div>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    onSubmit={handleSubmit}
                    className="pixel-border bg-bg-dark p-6 space-y-5"
                >
                    <Field
                        label="NAME"
                        name="name"
                        placeholder="Your Name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                    <Field
                        label="EMAIL"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    <div>
                        <label className="font-pixel text-[9px] text-light-blue block mb-2">
                            MESSAGE
                        </label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full bg-bg border-2 border-blue/50 focus:border-electric outline-none text-ink font-retro text-lg px-3 py-2 resize-none"
                        />
                    </div>

                    <PixelButton type="submit" className="w-full">
                        {status === "sending"
                            ? "SENDING..."
                            : status === "sent"
                              ? "TRANSMISSION SENT!"
                              : "SEND TRANSMISSION"}
                    </PixelButton>

                    {status === "sending" && (
                        <div className="w-full h-3 bg-bg pixel-border overflow-hidden">
                            <motion.div
                                className="h-full bg-electric"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{
                                    duration: 1.4,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>
                    )}

                    <p className="font-retro text-base text-muted">
                        Or reach me directly at {profile.email}
                    </p>
                </motion.form>
            </div>
        </section>
    );
}

function ContactDetail({ label, value }) {
    return (
        <div className="border border-blue/30 bg-bg/40 p-4">
            <p className="font-pixel text-[9px] text-light-blue mb-2">
                {label}
            </p>
            <p className="font-retro text-xl text-ink break-words">{value}</p>
        </div>
    );
}

function Field({ label, name, value, onChange, type = "text", required }) {
    return (
        <div>
            <label className="font-pixel text-[9px] text-light-blue block mb-2">
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full bg-bg border-2 border-blue/50 focus:border-electric outline-none text-ink font-retro text-lg px-3 py-2"
            />
        </div>
    );
}
