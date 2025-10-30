import { useEffect, useRef, useState } from 'react'
import { Globe, Activity } from 'lucide-react'

interface ThreatPoint {
  x: number
  y: number
  type: 'attack' | 'defense' | 'scan'
  intensity: number
}

export default function CyberMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [activeThreats, setActiveThreats] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const threats: ThreatPoint[] = []
    const maxThreats = 50

    // Generate random threat points
    for (let i = 0; i < maxThreats; i++) {
      threats.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        type: ['attack', 'defense', 'scan'][Math.floor(Math.random() * 3)] as 'attack' | 'defense' | 'scan',
        intensity: Math.random(),
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw world map grid
      ctx.strokeStyle = 'rgba(0, 255, 65, 0.1)'
      ctx.lineWidth = 1

      // Horizontal lines
      for (let i = 0; i < canvas.height; i += 40) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(canvas.width, i)
        ctx.stroke()
      }

      // Vertical lines
      for (let i = 0; i < canvas.width; i += 40) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, canvas.height)
        ctx.stroke()
      }

      let activeCount = 0

      // Draw threats
      threats.forEach((threat) => {
        threat.intensity += Math.random() * 0.02 - 0.01
        threat.intensity = Math.max(0, Math.min(1, threat.intensity))

        if (threat.intensity > 0.5) activeCount++

        let color: string
        switch (threat.type) {
          case 'attack':
            color = `rgba(255, 0, 64, ${threat.intensity})`
            break
          case 'defense':
            color = `rgba(0, 255, 65, ${threat.intensity})`
            break
          case 'scan':
            color = `rgba(0, 255, 255, ${threat.intensity})`
            break
        }

        // Draw pulse
        ctx.beginPath()
        ctx.arc(threat.x, threat.y, 20 * threat.intensity, 0, Math.PI * 2)
        ctx.fillStyle = color.replace(/[\d.]+\)$/, '0.1)')
        ctx.fill()

        // Draw point
        ctx.beginPath()
        ctx.arc(threat.x, threat.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()

        // Draw connections
        threats.forEach((other) => {
          const dx = threat.x - other.x
          const dy = threat.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100 && threat !== other) {
            ctx.beginPath()
            ctx.moveTo(threat.x, threat.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(0, 255, 65, ${0.2 * threat.intensity * other.intensity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      setActiveThreats(activeCount)

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="py-20 px-4 bg-background-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-5"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Globe className="text-warning-red animate-pulse" size={40} />
          <h2 className="heading-lg text-warning-red text-center animate-pulse-neon text-shadow-neon">
            [🌍] GLOBAL THREAT MAP
          </h2>
          <Activity className="text-warning-red animate-pulse" size={40} />
        </div>

        <div className="border-4 border-warning-red bg-background-secondary/90 backdrop-blur-sm p-6 scanline relative overflow-hidden neon-glow-intense">
          {/* Stats bar */}
          <div className="flex justify-between items-center mb-4 pb-4 border-b-2 border-warning-red/30">
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-warning-red animate-pulse"></div>
                <span className="text-terminal text-warning-red text-sm">ATTACKS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse"></div>
                <span className="text-terminal text-neon-green text-sm">DEFENSES</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-neon-cyan animate-pulse"></div>
                <span className="text-terminal text-neon-cyan text-sm">SCANS</span>
              </div>
            </div>
            <div className="text-terminal text-neon-green font-bold">
              ACTIVE THREATS: <span className="text-warning-red animate-pulse-neon">{activeThreats}</span>
            </div>
          </div>

          <canvas
            ref={canvasRef}
            className="w-full h-96 border-2 border-neon-green/30"
          />

          <div className="mt-4 text-center text-terminal text-text-secondary text-sm">
            Real-time cyber threat visualization - Educational demonstration
          </div>
        </div>
      </div>
    </section>
  )
}