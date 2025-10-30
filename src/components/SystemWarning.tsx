import { AlertTriangle, XOctagon, Skull, Zap } from 'lucide-react'

export default function SystemWarning() {
  const warnings = [
    { level: 'ALERT', message: 'Unauthorized access detected', icon: AlertTriangle, color: 'text-warning-red' },
    { level: 'WARN', message: 'System defenses compromised', icon: XOctagon, color: 'text-warning-yellow' },
    { level: 'CRIT', message: 'Kernel panic imminent', icon: Skull, color: 'text-warning-red' },
    { level: 'FATAL', message: 'Ghost protocol initiated', icon: Zap, color: 'text-accent-purple' },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-lg text-warning-red text-center mb-8 animate-pulse">
          [ ⚠️ ] SYSTEM WARNING
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {warnings.map((warning, index) => {
            const Icon = warning.icon
            return (
              <div
                key={index}
                className="border-2 border-warning-red bg-background-secondary/80 backdrop-blur-sm p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <Icon className={warning.color} size={32} />
                  <div className="flex-1">
                    <p className="text-terminal font-bold mb-1">
                      <span className={warning.color}>[{warning.level}]</span>
                    </p>
                    <p className="text-terminal text-text-primary">{warning.message}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}