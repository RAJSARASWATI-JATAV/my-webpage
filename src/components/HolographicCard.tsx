import { useState, useRef, type MouseEvent, type ReactNode } from 'react'

interface HolographicCardProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function HolographicCard({ children, className = '', style }: HolographicCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10

    setRotation({ x: rotateX, y: rotateY })
    setGlowPosition({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
    setGlowPosition({ x: 50, y: 50 })
  }

  return (
    <div
      ref={cardRef}
      className={`relative transition-transform duration-200 ease-out ${className}`}
      style={{
        ...style,
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Holographic glow effect */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(0, 255, 65, 0.3), transparent 50%)`,
          transform: 'translateZ(1px)',
        }}
      />
      
      {/* Rainbow reflection effect */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-30 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `linear-gradient(${rotation.y * 2}deg, 
            rgba(255, 0, 64, 0.2), 
            rgba(255, 255, 0, 0.2), 
            rgba(0, 255, 65, 0.2), 
            rgba(0, 255, 255, 0.2), 
            rgba(176, 0, 255, 0.2))`,
          transform: 'translateZ(2px)',
        }}
      />

      {children}
    </div>
  )
}