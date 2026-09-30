import { useEffect, useRef } from 'react'

export default function PixelCursor() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const move = (e) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return <div ref={ref} className="pixel-cursor" aria-hidden="true" />
}
