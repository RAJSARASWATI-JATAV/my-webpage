export default function AboutSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="border-2 border-neon-cyan bg-background-secondary/50 backdrop-blur-sm p-8 md:p-12 neon-glow animate-slide-up">
          <h2 className="heading-lg text-neon-cyan mb-6">🌟 [ABOUT ME]</h2>
          <p className="text-code text-text-primary mb-8 leading-relaxed">
            I am <span className="text-neon-green font-bold">RAJSARASWATI JATAV</span>, a passionate{' '}
            <span className="text-neon-cyan">Ethical Hacker</span>,{' '}
            <span className="text-accent-purple">Cyberpunk OSINT Specialist</span>, and{' '}
            <span className="text-terminal-green">Python3 Automation Architect</span>.
            <br /><br />
            Based in India, I create next-level solutions with deep focus on security, automation, and creative open-source coding.
          </p>

          <div className="border-l-4 border-neon-green pl-6 py-4 bg-background-primary/50">
            <h3 className="heading-md text-neon-green mb-3">🌟 [VISION]</h3>
            <p className="text-code text-text-secondary italic">
              "Transforming digital boundaries with unstoppable power & ethical coding."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}