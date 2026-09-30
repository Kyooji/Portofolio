import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function MainPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
            <Footer />
        </>
    );
}

export default function App() {
    const [booted, setBooted] = useState(false);

    return (
        <div className="relative min-h-screen bg-bg">
            <div className="crt-overlay" />
            <div className="crt-vignette" />

            <AnimatePresence mode="wait">
                {!booted ? (
                    <LoadingScreen
                        key="loading"
                        onComplete={() => setBooted(true)}
                    />
                ) : (
                    <motion.div
                        key="main"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                        </Routes>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
