import { Award, Trophy, Target, Zap, Shield, Crown } from 'lucide-react'

export default function AchievementBadges() {
  const achievements = [
    { icon: Crown, title: 'Elite Hacker', description: 'Master of Cybersecurity', color: 'text-warning-yellow' },
    { icon: Trophy, title: 'Code Warrior', description: '200+ Contributions', color: 'text-neon-cyan' },
    { icon: Target, title: 'Precision Strike', description: 'Zero-Day Expert', color: 'text-warning-red' },
    { icon: Zap, title: 'Lightning Fast', description: 'Automation Master', color: 'text-accent-purple' },
    { icon: Shield, title: 'Defender', description: 'Ethical Guardian', color: 'text-neon-green' },
    { icon: Award, title: 'Innovator', description: 'Open Source Hero', color: 'text-neon-cyan' },
  ]

  return (
    <section className="py-20 px-4 bg-background-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-lg text-neon-cyan text-center mb-12 animate-pulse-neon">
          🏆 ACHIEVEMENT UNLOCKED
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="hexagon bg-background-secondary border-2 border-neon-green p-8 flex items-center justify-center neon-glow-hover transition-all duration-300 group-hover:scale-110">
                  <Icon className={`${achievement.color} animate-pulse-neon`} size={48} />
                </div>
                <div className="absolute inset-0 hexagon bg-neon-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-ring"></div>
                <div className="mt-4 text-center">
                  <p className="text-terminal text-neon-green font-bold text-sm">{achievement.title}</p>
                  <p className="text-terminal text-text-secondary text-xs mt-1">{achievement.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}