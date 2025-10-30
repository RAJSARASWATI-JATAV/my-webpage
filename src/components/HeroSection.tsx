import { useState, useEffect } from 'react'
import { Skull, Code2, Shield, Zap } from 'lucide-react'

export default function HeroSection() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'POWERFUL ETHICAL HACKER'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Lightning effects */}
      <div className="absolute top-0 left-1/4 w-1 h-full bg-neon-cyan opacity-20 animate-lightning"></div>
      <div className="absolute top-0 right-1/4 w-1 h-full bg-warning-red opacity-20 animate-lightning" style={{ animationDelay: '0.3s' }}></div>
      
      <div className="max-w-6xl w-full text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="relative animate-float">
            {/* Pulse rings */}
            <div className="absolute inset-0 border-4 border-neon-green rounded-full animate-pulse-ring"></div>
            <div className="absolute inset-0 border-4 border-neon-cyan rounded-full animate-pulse-ring" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute inset-0 border-4 border-accent-purple rounded-full animate-pulse-ring" style={{ animationDelay: '1s' }}></div>
            
            <img
              src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/af1e90ea-210f-4514-af98-5f5f8d8acbf3.png"
              alt="RAJSARASWATI JATAV"
              className="w-64 h-64 object-cover border-4 border-neon-green neon-glow-intense relative z-10"
              style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}
            />
            <Skull className="absolute -top-4 -right-4 text-warning-red animate-pulse z-20" size={48} />
            <Zap className="absolute -bottom-4 -left-4 text-warning-yellow animate-pulse z-20" size={48} />
          </div>
        </div>

        <div className="mb-6">
          <h1 className="heading-hero text-neon-green animate-glitch-intense mb-4 text-shadow-neon">
            ☠️ RAJSARASWATI JATAV ☠️
          </h1>
          <div className="flex items-center justify-center gap-4 mb-4 scanline p-4 bg-background-secondary/50 backdrop-blur-sm border-2 border-neon-cyan">
            <Code2 className="text-neon-cyan animate-pulse" size={32} />
            <p className="heading-lg text-neon-cyan text-shadow-glow font-mono">
              {typedText}
              <span className="inline-block w-3 h-6 bg-neon-cyan ml-2 animate-pulse"></span>
            </p>
            <Shield className="text-neon-cyan animate-pulse" size={32} />
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

        <div className="inline-block px-8 py-4 border-2 border-neon-green bg-background-secondary/50 backdrop-blur-sm neon-glow-hover gradient-border scanline">
          <p className="text-terminal text-neon-green animate-pulse-neon text-shadow-glow">
            &gt; Transforming digital boundaries with unstoppable power & ethical coding.
          </p>
        </div>

        {/* Floating icons */}
        <div className="mt-12 flex justify-center gap-8">
          <div className="animate-float" style={{ animationDelay: '0s' }}>
            <Code2 className="text-neon-green neon-glow" size={40} />
          </div>
          <div className="animate-float" style={{ animationDelay: '0.5s' }}>
            <Shield className="text-neon-cyan neon-glow" size={40} />
          </div>
          <div className="animate-float" style={{ animationDelay: '1s' }}>
            <Zap className="text-accent-purple neon-glow" size={40} />
          </div>
        </div>
      </div>
    </section>
  )
}