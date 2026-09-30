import { motion } from 'framer-motion'
import profile from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="pixel-border bg-bg-dark max-w-md mx-auto py-10 px-6 blue-glow"
      >
        <p className="font-pixel text-xs text-cyan text-glow mb-3">GAME COMPLETE</p>
        <p className="font-retro text-lg text-muted">THANKS FOR VISITING</p>
      </motion.div>

      <div className="flex justify-center gap-6 mt-10 font-pixel text-[10px]">
        <a href={profile.social.github} target="_blank" rel="noreferrer" className="text-muted hover:text-electric">
          GITHUB
        </a>
        <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-electric">
          LINKEDIN
        </a>
      </div>

      <p className="font-retro text-base text-muted mt-8">
        © {year} {profile.name}
      </p>
    </footer>
  )
}
