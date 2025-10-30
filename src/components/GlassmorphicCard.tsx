import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlassmorphicCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function GlassmorphicCard({ children, className = '', delay = 0 }: GlassmorphicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 overflow-hidden group ${className}`}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-neon-green/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-neon-cyan/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}