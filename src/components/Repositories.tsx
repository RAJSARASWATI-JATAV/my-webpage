import { Bot, Bomb, Smartphone, Sparkles, MessageSquare, Shield } from 'lucide-react'

export default function Repositories() {
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
    <section className="py-20 px-4 bg-background-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-lg text-neon-green text-center mb-4">
          🏴‍☠️ POPULAR REPOSITORIES
        </h2>
        <p className="text-terminal text-text-secondary text-center mb-12">
          All tools are for ethical hacking, educational research, and fun. I am not responsible for any misuse.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repositories.map((repo, index) => {
            const Icon = repo.icon
            return (
              <div
                key={index}
                className="border-2 border-neon-cyan bg-background-secondary/80 backdrop-blur-sm p-6 neon-glow-hover transition-all duration-300 hover:scale-105 hover:border-neon-green animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <Icon className={repo.color} size={32} />
                  <h3 className="text-terminal font-bold text-neon-cyan flex-1">{repo.name}</h3>
                </div>
                <p className="text-terminal text-text-secondary text-sm leading-relaxed">
                  {repo.description}
                </p>
                <div className="mt-4 pt-4 border-t border-neon-cyan/30">
                  <span className="text-terminal text-neon-green text-xs">$ git clone repo</span>
                </div>
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