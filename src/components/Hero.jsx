import { motion } from "framer-motion";
import PixelButton from "./PixelButton";
import profile from "../data/profile";

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
};
const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const HERO_IMAGE ="/logo_null.png"; // Replace with the path to your hero image

const hideBrokenImage = (event) => {
    event.currentTarget.style.display = "none";
};

export default function Hero() {
    return (
        <section
            id="hero"
            className="background-transparent min-h-screen flex items-center justify-center pt-24 pb-16 px-6 sm:px-10 max-w-6xl mx-auto"
        >
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative flex min-h-[560px] items-center justify-center w-full"
            >
                {/* <motion.div
                    variants={item}
                    className="hero-side-image relative mb-8 flex justify-center md:absolute md:-left-16 lg:-left-48 md:top-2 md:mb-0"
                    animate={{ y: [-12, -26, -12], rotate: [0, -2, 0] }}
                    transition={{
                        duration: 4.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <div className="hero-image-frame">
                        <img
                            src={HERO_IMAGE}
                            alt="Fantasy landscape example"
                            className="hero-image"
                            onError={hideBrokenImage}
                        />
                    </div>
                </motion.div> */}

                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <motion.p
                        variants={item}
                        className="font-pixel text-[10px] text-electric mb-4"
                    >
                        PLAYER 01
                    </motion.p>
                    <motion.h1
                        variants={item}
                        className="font-pixel text-2xl sm:text-4xl leading-tight text-ink text-glow mb-4"
                    >
                        {profile.name}
                    </motion.h1>
                    <motion.p
                        variants={item}
                        className="font-pixel text-xs sm:text-sm text-cyan mb-6"
                    >
                        {profile.role}
                    </motion.p>
                    <motion.p
                        variants={item}
                        className="font-retro text-xl text-muted max-w-2xl mx-auto mb-8"
                    >
                        {profile.tagline}
                    </motion.p>
                    <motion.div
                        variants={item}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <PixelButton
                            onClick={() =>
                                document
                                    .getElementById("about")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            START EXPLORING
                        </PixelButton>
                        <PixelButton
                            variant="ghost"
                            onClick={() =>
                                document
                                    .getElementById("projects")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            VIEW PROJECTS
                        </PixelButton>
                    </motion.div>
                </div>

                {/* <motion.div
                    variants={item}
                    className="hero-side-image relative mt-8 flex justify-center md:absolute md:-right-16 lg:-right-48 md:top-1/2 md:mt-0"
                    animate={{ y: [12, -4, 12], rotate: [0, 1.5, 0] }}
                    transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <div className="hero-image-frame">
                        <img
                            src={HERO_IMAGE}
                            alt="Fantasy landscape example"
                            className="hero-image"
                            onError={hideBrokenImage}
                        />
                    </div>
                </motion.div> */}
            </motion.div>
        </section>
    );
}
