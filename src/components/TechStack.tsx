import { Code2, Terminal, FileCode, Cpu, Binary } from 'lucide-react'

export default function TechStack() {
  const technologies = [
    { name: 'Python', icon: Code2, color: 'text-neon-green', size: 'large' },
    { name: 'Shell/Bash', icon: Terminal, color: 'text-neon-cyan', size: 'medium' },
    { name: 'HTML/CSS/JS', icon: FileCode, color: 'text-accent-purple', size: 'medium' },
    { name: 'C', icon: Cpu, color: 'text-warning-yellow', size: 'small' },
    { name: 'C++', icon: Binary, color: 'text-warning-red', size: 'small' },
  ]

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2 p-12'
      case 'medium':
        return 'md:col-span-1 md:row-span-1 p-8'
      default:
        return 'md:col-span-1 md:row-span-1 p-6'
    }
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-lg text-neon-cyan text-center mb-12">
          🛠️ TECH STACK & TOOLS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            return (
              <div
                key={index}
                className={`border-2 border-neon-green bg-background-secondary/50 backdrop-blur-sm ${getSizeClasses(tech.size)} flex flex-col items-center justify-center gap-4 neon-glow-hover transition-all duration-300 hover:scale-105 animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className={tech.color} size={tech.size === 'large' ? 80 : tech.size === 'medium' ? 60 : 48} />
                <span className={`text-terminal ${tech.color} font-bold text-center`}>{tech.name}</span>
              </div>
            )
          })}
        </div>
        <div className="text-center">
          <p className="text-code text-text-secondary">
            Termux Specialist | Linux Enthusiast | Mobile/Desktop Automation
          </p>
          <p className="text-code text-text-secondary">
            Custom Cyberpunk UI Scripts | Matrix Style Terminals | Instagram Bots
          </p>
        </div>
      </div>
    </section>
  )
}