import { useEffect, useState } from 'react'

interface ThreatItem {
  name: string
  percentage: number
  color: string
}

export default function ThreatMatrix() {
  const [animated, setAnimated] = useState(false)

  const threats: ThreatItem[] = [
    { name: 'System Breach', percentage: 99, color: 'bg-warning-red' },
    { name: 'Deep Infiltration', percentage: 96, color: 'bg-neon-cyan' },
    { name: 'Ghost Protocol', percentage: 90, color: 'bg-accent-purple' },
    { name: 'Data Extraction', percentage: 85, color: 'bg-neon-green' },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-20 px-4 bg-background-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-lg text-warning-red text-center mb-12 animate-pulse">
          [💀] THREAT MATRIX
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {threats.map((threat, index) => (
            <div
              key={index}
              className="border-2 border-neon-green bg-background-secondary/80 backdrop-blur-sm p-6 neon-glow-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-terminal text-neon-green font-bold">[►] {threat.name}</span>
                <span className="text-terminal text-neon-cyan font-bold">{threat.percentage}%</span>
              </div>
              <div className="h-6 bg-background-primary border border-neon-green/30 overflow-hidden">
                <div
                  className={`h-full ${threat.color} transition-all duration-1000 ease-out flex items-center justify-end pr-2`}
                  style={{ width: animated ? `${threat.percentage}%` : '0%' }}
                >
                  <span className="text-xs text-background-primary font-bold">{'█'.repeat(Math.floor(threat.percentage / 5))}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}