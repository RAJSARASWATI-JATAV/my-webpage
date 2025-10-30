import { useState } from 'react'
import { Bot, Bomb, Smartphone, Sparkles, MessageSquare, Shield, Star } from 'lucide-react'

export default function Repositories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const repositories = [
    {
      name: 'Insta-Bot',
      description: 'Instagram Automation Tool | Secure, Fast, Educational',
      icon: Bot,
      color: 'text-accent-purple',
    },
    {
      name: 'SMS-PowerBomb',
      description: 'Powerful SMS Bomber (Education/Prank only, APIs included)',
      icon: Bomb,
      color: 'text-warning-red',
    },
    {
      name: 'Android-OSInstaller',
      description: 'Android OS installer for Desktop & Mobile, GUI & Terminal',
      icon: Smartphone,
      color: 'text-neon-cyan',
    },
    {
      name: 'Matrix-Termux',
      description: 'Futuristic Termux Experience | GUI/X11/Neon Green Matrix',
      icon: Sparkles,
      color: 'text-neon-green',
    },
    {
      name: 'WhatsApp-Bot',
      description: 'WhatsApp Automation Toolkit | Chat, Status, Mods',
      icon: MessageSquare,
      color: 'text-terminal-green',
    },
    {
      name: 'Py-DDOS-Edu',
      description: 'Powerful Python DDoS Educational Toolkit',
      icon: Shield,
      color: 'text-warning-yellow',
    },
  ]

  return (
    <section className="py-20 px-4 bg-background-secondary/30 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 circuit-bg opacity-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Star className="text-neon-green animate-pulse" size={40} />
          <h2 className="heading-lg text-neon-green text-center animate-pulse-neon text-shadow-neon">
            🏴‍☠️ POPULAR REPOSITORIES
          </h2>
          <Star className="text-neon-green animate-pulse" size={40} />
        </div>
        <p className="text-terminal text-text-secondary text-center mb-12">
          All tools are for ethical hacking, educational research, and fun. I am not responsible for any misuse.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repositories.map((repo, index) => {
            const Icon = repo.icon
            const isHovered = hoveredIndex === index
            return (
              <div
                key={index}
                className="border-2 border-neon-cyan bg-background-secondary/80 backdrop-blur-sm p-6 neon-glow-hover transition-all duration-300 hover:scale-110 hover:border-neon-green animate-fade-in scanline relative overflow-hidden tilt-3d"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neon-green"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neon-green"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neon-green"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neon-green"></div>

                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <Icon className={`${repo.color} ${isHovered ? 'animate-pulse-neon' : ''} transition-all duration-300`} size={32} />
                  <h3 className={`text-terminal font-bold text-neon-cyan flex-1 ${isHovered ? 'text-shadow-glow' : ''}`}>
                    {repo.name}
                  </h3>
                </div>
                <p className="text-terminal text-text-secondary text-sm leading-relaxed relative z-10">
                  {repo.description}
                </p>
                <div className="mt-4 pt-4 border-t border-neon-cyan/30 relative z-10">
                  <span className={`text-terminal text-neon-green text-xs ${isHovered ? 'animate-pulse-neon' : ''}`}>
                    $ git clone repo
                  </span>
                </div>

                {/* Hover overlay effect */}
                {isHovered && (
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-green/10 animate-pulse pointer-events-none"></div>
                )}
              </div>
            )
          })}
        </div>
        <div className="mt-12 text-center">
          <div className="inline-block border-2 border-neon-green bg-background-secondary/50 backdrop-blur-sm px-8 py-4">
            <p className="text-terminal text-neon-green">
              📊 200+ contributions in past year
            </p>
            <p className="text-terminal text-text-secondary text-sm mt-2">
              Focus: Python Automation, Android Hacking, AI, Cyberpunk UIs
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}