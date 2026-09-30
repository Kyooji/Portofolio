import { motion } from 'framer-motion'

/**
 * Reusable retro arcade button.
 * variant: 'primary' | 'ghost'
 */
export default function PixelButton({ children, onClick, href, variant = 'primary', type = 'button' }) {
  const base =
    'font-pixel text-[10px] sm:text-xs tracking-wide px-5 py-3 pixel-border transition-colors duration-150 inline-flex items-center justify-center gap-2'

  const styles =
    variant === 'primary'
      ? 'bg-electric text-bg hover:bg-cyan'
      : 'bg-transparent text-electric hover:bg-electric/10'

  const Comp = href ? motion.a : motion.button

  return (
    <Comp
      href={href}
      type={href ? undefined : type}
      onClick={onClick}
      target={href ? '_blank' : undefined}
      rel={href ? 'noreferrer' : undefined}
      whileHover={{ y: -3 }}
      whileTap={{ y: 1, scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className={`${base} ${styles}`}
    >
      {children}
    </Comp>
  )
}
