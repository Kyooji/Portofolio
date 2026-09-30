import { motion } from 'framer-motion'

export default function PixelCard({ children, className = '', hoverable = true, ...props }) {
  return (
    <motion.div
      className={`pixel-border bg-bg-dark/80 backdrop-blur-sm p-5 ${className}`}
      whileHover={hoverable ? { y: -6, boxShadow: '0 0 20px rgba(0,168,255,0.5)' } : undefined}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
