import { useState } from 'react'
import { Code2, Terminal, FileCode, Cpu, Binary, Sparkles } from 'lucide-react'

export default function TechStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const technologies = [
    { name: 'Python', icon: Code2, color: 'text-neon-green', size: 'large', glow: 'shadow-[0_0_50px_rgba(0,255,65,0.6)]' },
    { name: 'Shell/Bash', icon: Terminal, color: 'text-neon-cyan', size: 'medium', glow: 'shadow-[0_0_50px_rgba(0,255,255,0.6)]' },
    { name: 'HTML/CSS/JS', icon: FileCode, color: 'text-accent-purple', size: 'medium', glow: 'shadow-[0_0_50px_rgba(176,0,255,0.6)]' },
    { name: 'C', icon: Cpu, color: 'text-warning-yellow', size: 'small', glow: 'shadow-[0_0_50px_rgba(255,255,0,0.6)]' },
    { name: 'C++', icon: Binary, color: 'text-warning-red', size: 'small', glow: 'shadow-[0_0_50px_rgba(255,0,64,0.6)]' },
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
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Rotating circuit background */}
      <div className="absolute inset-0 circuit-bg opacity-10 animate-rotate-slow"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-4 mb-12">
          <Sparkles className="text-neon-cyan animate-pulse" size={40} />
          <h2 className="heading-lg text-neon-cyan text-center animate-pulse-neon text-shadow-neon">
            🛠️ TECH STACK & TOOLS
          </h2>
          <Sparkles className="text-neon-cyan animate-pulse" size={40} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            const isHovered = hoveredIndex === index
            return (
              <div
                key={index}
                className={`border-2 border-neon-green bg-background-secondary/50 backdrop-blur-sm ${getSizeClasses(tech.size)} flex flex-col items-center justify-center gap-4 neon-glow-hover transition-all duration-300 hover:scale-110 animate-slide-up scanline relative overflow-hidden tilt-3d ${isHovered ? tech.glow : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Animated corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-neon-cyan animate-pulse"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-neon-cyan animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-neon-cyan animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-neon-cyan animate-pulse" style={{ animationDelay: '0.9s' }}></div>

                <Icon 
                  className={`${tech.color} ${isHovered ? 'animate-rotate-slow' : ''} transition-all duration-300`} 
                  size={tech.size === 'large' ? 80 : tech.size === 'medium' ? 60 : 48} 
                />
                <span className={`text-terminal ${tech.color} font-bold text-center text-shadow-glow ${isHovered ? 'animate-pulse-neon' : ''}`}>
                  {tech.name}
                </span>
                
                {/* Hover effect overlay */}
                {isHovered && (
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 via-transparent to-neon-cyan/10 animate-pulse"></div>
                )}
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