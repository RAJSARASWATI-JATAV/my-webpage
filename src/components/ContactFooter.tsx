import { useState } from 'react'
import { Send, Instagram, Youtube, Users, MapPin, Zap } from 'lucide-react'

export default function ContactFooter() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const socialLinks = [
    {
      name: 'Telegram',
      url: 'https://t.me/rajsaraswatijatav',
      icon: Send,
      color: 'text-neon-cyan',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/official_rajsaraswati_jatav',
      icon: Instagram,
      color: 'text-accent-purple',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@RajsaraswatiJatav',
      icon: Youtube,
      color: 'text-warning-red',
    },
  ]

  return (
    <footer className="py-20 px-4 bg-background-secondary/50 relative overflow-hidden">
      {/* Lightning effects */}
      <div className="absolute top-0 left-1/3 w-1 h-full bg-neon-green opacity-10 animate-lightning"></div>
      <div className="absolute top-0 right-1/3 w-1 h-full bg-neon-cyan opacity-10 animate-lightning" style={{ animationDelay: '0.5s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-4 mb-12">
          <Zap className="text-neon-green animate-pulse" size={40} />
          <h2 className="heading-lg text-neon-green text-center animate-pulse-neon text-shadow-neon">
            🚀 CONTACT & COMMUNITY
          </h2>
          <Zap className="text-neon-green animate-pulse" size={40} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            const isHovered = hoveredIndex === index
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-neon-green bg-background-secondary/80 backdrop-blur-sm p-8 flex flex-col items-center gap-4 neon-glow-hover transition-all duration-300 hover:scale-110 hover:border-neon-cyan animate-fade-in scanline relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-cyan"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-cyan"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-cyan"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-cyan"></div>

                <Icon className={`${link.color} ${isHovered ? 'animate-pulse-neon' : ''} transition-all duration-300`} size={48} />
                <span className={`text-terminal text-neon-green font-bold ${isHovered ? 'text-shadow-glow' : ''}`}>{link.name}</span>
                <span className="text-terminal text-text-secondary text-sm text-center break-all">
                  {link.url.replace('https://', '')}
                </span>

                {isHovered && (
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 via-transparent to-neon-cyan/10 animate-pulse pointer-events-none"></div>
                )}
              </a>
            )
          })}
        </div>

        <div className="border-2 border-neon-cyan bg-background-secondary/80 backdrop-blur-sm p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-terminal">
            <div className="flex items-center gap-3">
              <Users className="text-neon-green" size={24} />
              <div>
                <p className="text-neon-green font-bold">Team</p>
                <p className="text-text-secondary text-sm">RAJSARASWATI JATAV CYBER CREW</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-neon-cyan" size={24} />
              <div>
                <p className="text-neon-cyan font-bold">Location</p>
                <p className="text-text-secondary text-sm">INDIA (Matrix Layer)</p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-neon-cyan/30">
            <p className="text-terminal text-accent-purple text-center">
              Status: Next-Level Hacker | Always Upgrading
            </p>
          </div>
        </div>

        <div className="border-2 border-warning-red bg-background-secondary/80 backdrop-blur-sm p-8 mb-12">
          <h3 className="heading-md text-warning-red text-center mb-4">🚨 DISCLAIMER</h3>
          <p className="text-terminal text-text-secondary text-center leading-relaxed">
            All scripts, tools, and content are for <span className="text-warning-red font-bold">EDUCATIONAL & ETHICAL</span> hacking only. 
            No illegal activities or misuse allowed. Use responsibly.
          </p>
        </div>

        <div className="text-center relative">
          <div className="inline-block border-4 border-neon-green bg-background-secondary/80 backdrop-blur-sm px-12 py-6 neon-glow-intense scanline mb-4">
            <p className="heading-md text-neon-green animate-pulse-neon text-shadow-neon">
              🟢 Stay dark, stay ethical. Upgrade yourself! 🟢
            </p>
          </div>
          <p className="text-terminal text-text-secondary">
            © 2025 RAJSARASWATI JATAV | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}