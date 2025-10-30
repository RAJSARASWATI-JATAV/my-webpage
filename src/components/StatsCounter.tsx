import { useEffect, useState, useMemo } from 'react'
import { GitBranch, Users, Code, Award } from 'lucide-react'

interface Stat {
  icon: typeof GitBranch
  label: string
  value: number
  suffix: string
  color: string
}

export default function StatsCounter() {
  const [counts, setCounts] = useState([0, 0, 0, 0])

  const stats: Stat[] = useMemo(() => [
    { icon: GitBranch, label: 'Repositories', value: 50, suffix: '+', color: 'text-neon-green' },
    { icon: Code, label: 'Contributions', value: 200, suffix: '+', color: 'text-neon-cyan' },
    { icon: Users, label: 'Followers', value: 1000, suffix: '+', color: 'text-accent-purple' },
    { icon: Award, label: 'Projects', value: 30, suffix: '+', color: 'text-warning-yellow' },
  ], [])

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    stats.forEach((stat, index) => {
      let currentCount = 0
      const increment = stat.value / steps

      const timer = setInterval(() => {
        currentCount += increment
        if (currentCount >= stat.value) {
          currentCount = stat.value
          clearInterval(timer)
        }
        setCounts(prev => {
          const newCounts = [...prev]
          newCounts[index] = Math.floor(currentCount)
          return newCounts
        })
      }, interval)
    })
  }, [stats])

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="border-2 border-neon-green bg-background-secondary/80 backdrop-blur-sm p-8 text-center neon-glow-hover scanline animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Pulse effect */}
                <div className="absolute inset-0 bg-neon-green/5 animate-pulse"></div>
                
                <Icon className={`${stat.color} mx-auto mb-4 animate-pulse-neon`} size={48} />
                <div className="text-4xl font-bold text-neon-cyan mb-2 font-mono text-shadow-neon">
                  {counts[index]}{stat.suffix}
                </div>
                <div className="text-terminal text-text-secondary text-sm">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}