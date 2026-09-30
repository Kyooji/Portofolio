import { motion, AnimatePresence } from 'framer-motion'
import PixelButton from './PixelButton'

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg/85 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="pixel-border bg-bg-dark max-w-lg w-full p-6 blue-glow"
          >
            <p className="font-pixel text-[10px] text-electric mb-2">{project.code}</p>
            <h3 className="font-pixel text-sm text-ink mb-4">{project.name}</h3>
            <p className="font-retro text-lg text-muted mb-4">{project.fullDescription}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span key={t} className="font-retro text-base text-light-blue border border-blue/50 px-2 py-0.5">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <PixelButton href={project.github} variant="ghost">
                GITHUB
              </PixelButton>
              {/* <PixelButton href={project.demo}>LIVE DEMO</PixelButton> */}
              <PixelButton variant="ghost" onClick={onClose}>
                CLOSE
              </PixelButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
