import { Send, Instagram, Youtube, Users, MapPin } from 'lucide-react'

export default function ContactFooter() {
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
    <footer className="py-20 px-4 bg-background-secondary/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-lg text-neon-green text-center mb-12">
          🚀 CONTACT & COMMUNITY
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-neon-green bg-background-secondary/80 backdrop-blur-sm p-8 flex flex-col items-center gap-4 neon-glow-hover transition-all duration-300 hover:scale-105 hover:border-neon-cyan animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className={link.color} size={48} />
                <span className="text-terminal text-neon-green font-bold">{link.name}</span>
                <span className="text-terminal text-text-secondary text-sm text-center break-all">
                  {link.url.replace('https://', '')}
                </span>
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

        <div className="text-center">
          <p className="heading-md text-neon-green animate-pulse-neon mb-4">
            🟢 Stay dark, stay ethical. Upgrade yourself! 🟢
          </p>
          <p className="text-terminal text-text-secondary">
            © 2025 RAJSARASWATI JATAV | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}