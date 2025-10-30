import { useEffect, useRef, useMemo } from 'react'
import { Target } from 'lucide-react'

interface Skill {
  name: string
  level: number
  color: string
}

export default function SkillsRadar() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const skills: Skill[] = useMemo(() => [
    { name: 'Python', level: 95, color: '#00ff41' },
    { name: 'Cybersecurity', level: 98, color: '#00ffff' },
    { name: 'Penetration Testing', level: 92, color: '#b000ff' },
    { name: 'Network Security', level: 90, color: '#ff0040' },
    { name: 'OSINT', level: 96, color: '#ffff00' },
    { name: 'Automation', level: 94, color: '#33ff33' },
  ], [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const maxRadius = Math.min(centerX, centerY) - 40
    const levels = 5

    let animationProgress = 0
    const animationDuration = 2000
    let startTime: number | null = null

    function drawRadar(timestamp: number) {
      if (!ctx || !canvas) return

      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      animationProgress = Math.min(elapsed / animationDuration, 1)

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw concentric circles
      for (let i = 1; i <= levels; i++) {
        const radius = (maxRadius / levels) * i
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(0, 255, 65, ${0.2 - i * 0.03})`
        ctx.lineWidth = 1
        ctx.stroke()

        // Draw level labels
        ctx.fillStyle = '#00ff41'
        ctx.font = '10px monospace'
        ctx.fillText(`${(i * 20)}%`, centerX + 5, centerY - radius + 5)
      }

      // Draw axes
      const angleStep = (Math.PI * 2) / skills.length
      skills.forEach((skill, index) => {
        const angle = angleStep * index - Math.PI / 2

        // Draw axis line
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(
          centerX + Math.cos(angle) * maxRadius,
          centerY + Math.sin(angle) * maxRadius
        )
        ctx.strokeStyle = 'rgba(0, 255, 65, 0.3)'
        ctx.lineWidth = 1
        ctx.stroke()

        // Draw skill labels
        const labelRadius = maxRadius + 20
        const labelX = centerX + Math.cos(angle) * labelRadius
        const labelY = centerY + Math.sin(angle) * labelRadius

        ctx.fillStyle = skill.color
        ctx.font = 'bold 12px monospace'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(skill.name, labelX, labelY)
      })

      // Draw skill polygon
      ctx.beginPath()
      skills.forEach((skill, index) => {
        const angle = angleStep * index - Math.PI / 2
        const radius = (maxRadius * (skill.level / 100)) * animationProgress
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        if (index === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })
      ctx.closePath()
      ctx.fillStyle = 'rgba(0, 255, 65, 0.2)'
      ctx.fill()
      ctx.strokeStyle = '#00ff41'
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw skill points
      skills.forEach((skill, index) => {
        const angle = angleStep * index - Math.PI / 2
        const radius = (maxRadius * (skill.level / 100)) * animationProgress
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        ctx.beginPath()
        ctx.arc(x, y, 5, 0, Math.PI * 2)
        ctx.fillStyle = skill.color
        ctx.fill()
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = 2
        ctx.stroke()

        // Glow effect
        ctx.shadowBlur = 15
        ctx.shadowColor = skill.color
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fillStyle = skill.color
        ctx.fill()
        ctx.shadowBlur = 0
      })

      if (animationProgress < 1) {
        requestAnimationFrame(drawRadar)
      }
    }

    requestAnimationFrame(drawRadar)
  }, [skills])

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-4 mb-12">
          <Target className="text-neon-cyan animate-pulse" size={40} />
          <h2 className="heading-lg text-neon-cyan text-center animate-pulse-neon text-shadow-neon">
            [📊] SKILLS MATRIX
          </h2>
          <Target className="text-neon-cyan animate-pulse" size={40} />
        </div>

        <div className="border-4 border-neon-cyan bg-background-secondary/80 backdrop-blur-sm p-8 scanline relative overflow-hidden neon-glow-intense">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-neon-green animate-pulse"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-neon-green animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-neon-green animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-neon-green animate-pulse"></div>

          <div className="flex justify-center">
            <canvas
              ref={canvasRef}
              width={600}
              height={600}
              className="max-w-full h-auto"
            />
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="border-2 border-neon-green bg-background-primary/50 p-4 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl font-bold font-mono mb-1" style={{ color: skill.color }}>
                  {skill.level}%
                </div>
                <div className="text-terminal text-text-secondary text-sm">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}