import { Bot, Bomb, Smartphone, Sparkles, MessageSquare, Shield, Star, GitFork, Eye } from 'lucide-react'
import HolographicCard from './HolographicCard'

export default function EnhancedRepositories() {
  const repositories = [
    {
      name: 'Insta-Bot',
      description: 'Instagram Automation Tool | Secure, Fast, Educational',
      icon: Bot,
      color: 'text-accent-purple',
      stars: '1.2k',
      forks: '340',
      views: '5.6k',
    },
    {
      name: 'SMS-PowerBomb',
      description: 'Powerful SMS Bomber (Education/Prank only, APIs included)',
      icon: Bomb,
      color: 'text-warning-red',
      stars: '890',
      forks: '210',
      views: '3.2k',
    },
    {
      name: 'Android-OSInstaller',
      description: 'Android OS installer for Desktop & Mobile, GUI & Terminal',
      icon: Smartphone,
      color: 'text-neon-cyan',
      stars: '2.1k',
      forks: '560',
      views: '8.9k',
    },
    {
      name: 'Matrix-Termux',
      description: 'Futuristic Termux Experience | GUI/X11/Neon Green Matrix',
      icon: Sparkles,
      color: 'text-neon-green',
      stars: '1.8k',
      forks: '420',
      views: '7.3k',
    },
    {
      name: 'WhatsApp-Bot',
      description: 'WhatsApp Automation Toolkit | Chat, Status, Mods',
      icon: MessageSquare,
      color: 'text-terminal-green',
      stars: '1.5k',
      forks: '380',
      views: '6.1k',
    },
    {
      name: 'Py-DDOS-Edu',
      description: 'Powerful Python DDoS Educational Toolkit',
      icon: Shield,
      color: 'text-warning-yellow',
      stars: '950',
      forks: '240',
      views: '4.2k',
    },
  ]

  return (
    <section className="py-20 px-4 bg-background-secondary/30 relative overflow-hidden">
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
            return (
              <HolographicCard
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="border-2 border-neon-cyan bg-background-secondary/80 backdrop-blur-sm p-6 h-full scanline relative overflow-hidden">
                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neon-green"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neon-green"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neon-green"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neon-green"></div>

                  <div className="flex items-start gap-4 mb-4 relative z-10">
                    <Icon className={`${repo.color} animate-pulse-neon`} size={32} />
                    <h3 className="text-terminal font-bold text-neon-cyan flex-1 text-shadow-glow">
                      {repo.name}
                    </h3>
                  </div>
                  
                  <p className="text-terminal text-text-secondary text-sm leading-relaxed mb-4 relative z-10">
                    {repo.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-4 mb-4 text-xs text-terminal relative z-10">
                    <div className="flex items-center gap-1">
                      <Star className="text-warning-yellow" size={14} />
                      <span className="text-text-secondary">{repo.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="text-neon-cyan" size={14} />
                      <span className="text-text-secondary">{repo.forks}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="text-neon-green" size={14} />
                      <span className="text-text-secondary">{repo.views}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neon-cyan/30 relative z-10">
                    <span className="text-terminal text-neon-green text-xs animate-pulse-neon">
                      $ git clone repo
                    </span>
                  </div>
                </div>
              </HolographicCard>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block border-2 border-neon-green bg-background-secondary/50 backdrop-blur-sm px-8 py-4 neon-glow-hover">
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