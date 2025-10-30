import { Skull, Code2, Shield } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img
              src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/af1e90ea-210f-4514-af98-5f5f8d8acbf3.png"
              alt="RAJSARASWATI JATAV"
              className="w-64 h-64 object-cover border-4 border-neon-green neon-glow animate-pulse-neon"
              style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}
            />
            <Skull className="absolute -top-4 -right-4 text-warning-red animate-pulse" size={48} />
          </div>
        </div>

        <div className="mb-6">
          <h1 className="heading-hero text-neon-green animate-glitch mb-4">
            ☠️ RAJSARASWATI JATAV ☠️
          </h1>
          <div className="flex items-center justify-center gap-4 mb-4">
            <Code2 className="text-neon-cyan" size={32} />
            <p className="heading-lg text-neon-cyan">POWERFUL ETHICAL HACKER</p>
            <Shield className="text-neon-cyan" size={32} />
          </div>
        </div>

        <div className="mb-8">
          <p className="text-code text-text-primary mb-2">🎯 FOCUSING</p>
          <p className="heading-md text-terminal-green mb-6">ᚚ 𝚭𝚯𝐑𝚱</p>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="heading-lg text-neon-cyan mb-4">Code Artist & Cyber Innovator</h2>
          <p className="text-code text-text-secondary leading-relaxed">
            Passionate <span className="text-neon-green">Ethical Hacker</span>, <span className="text-neon-cyan">Cyberpunk OSINT Specialist</span>, and <span className="text-accent-purple">Python3 Automation Architect</span>. Based in India, creating next-level solutions with deep focus on security, automation, and creative open-source coding.
          </p>
        </div>

        <div className="inline-block px-8 py-4 border-2 border-neon-green bg-background-secondary/50 backdrop-blur-sm neon-glow-hover">
          <p className="text-terminal text-neon-green animate-pulse-neon">
            &gt; Transforming digital boundaries with unstoppable power & ethical coding.
          </p>
        </div>
      </div>
    </section>
  )
}