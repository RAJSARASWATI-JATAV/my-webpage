import { useEffect, useState } from 'react'
import { AlertTriangle, Activity } from 'lucide-react'

interface ThreatItem {
  name: string
  percentage: number
  color: string
  glowColor: string
}

export default function ThreatMatrix() {
  const [animated, setAnimated] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const threats: ThreatItem[] = [
    { name: 'System Breach', percentage: 99, color: 'bg-warning-red', glowColor: 'shadow-[0_0_30px_rgba(255,0,64,0.5)]' },
    { name: 'Deep Infiltration', percentage: 96, color: 'bg-neon-cyan', glowColor: 'shadow-[0_0_30px_rgba(0,255,255,0.5)]' },
    { name: 'Ghost Protocol', percentage: 90, color: 'bg-accent-purple', glowColor: 'shadow-[0_0_30px_rgba(176,0,255,0.5)]' },
    { name: 'Data Extraction', percentage: 85, color: 'bg-neon-green', glowColor: 'shadow-[0_0_30px_rgba(0,255,65,0.5)]' },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-20 px-4 bg-background-secondary/30 relative overflow-hidden">
      {/* Circuit board background */}
      <div className="absolute inset-0 circuit-bg opacity-20"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-4 mb-12">
          <AlertTriangle className="text-warning-red animate-pulse" size={40} />
          <h2 className="heading-lg text-warning-red text-center animate-pulse-neon text-shadow-neon">
            [💀] THREAT MATRIX
          </h2>
          <Activity className="text-warning-red animate-pulse" size={40} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {threats.map((threat, index) => (
            <div
              key={index}
              className={`border-2 border-neon-green bg-background-secondary/80 backdrop-blur-sm p-6 neon-glow-hover animate-fade-in scanline relative overflow-hidden transition-all duration-300 ${hoveredIndex === index ? threat.glowColor : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-green animate-pulse"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-green animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-green animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-green animate-pulse" style={{ animationDelay: '0.6s' }}></div>

              <div className="flex justify-between items-center mb-3 relative z-10">
                <span className="text-terminal text-neon-green font-bold text-shadow-glow">[►] {threat.name}</span>
                <span className="text-terminal text-neon-cyan font-bold text-2xl animate-pulse-neon">{threat.percentage}%</span>
              </div>
              <div className="h-8 bg-background-primary border-2 border-neon-green/30 overflow-hidden relative">
                <div
                  className={`h-full ${threat.color} transition-all duration-1000 ease-out flex items-center justify-end pr-2 relative`}
                  style={{ width: animated ? `${threat.percentage}%` : '0%' }}
                >
                  <span className="text-sm text-background-primary font-bold animate-flicker">{'█'.repeat(Math.floor(threat.percentage / 5))}</span>
                  {/* Animated glow on bar */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-scan"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}