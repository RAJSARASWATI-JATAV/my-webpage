import { useEffect, useRef } from 'react'

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let animationFrameId: number
    let time = 0

    const colors = [
      { r: 0, g: 255, b: 65 },    // neon-green
      { r: 0, g: 255, b: 255 },   // neon-cyan
      { r: 176, g: 0, b: 255 },   // accent-purple
      { r: 255, g: 0, b: 64 },    // warning-red
    ]

    const drawAurora = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      time += 0.005

      for (let i = 0; i < 4; i++) {
        const color = colors[i]
        const gradient = ctx.createRadialGradient(
          canvas.width / 2 + Math.sin(time + i) * 300,
          canvas.height / 2 + Math.cos(time + i * 0.7) * 200,
          0,
          canvas.width / 2 + Math.sin(time + i) * 300,
          canvas.height / 2 + Math.cos(time + i * 0.7) * 200,
          canvas.width / 2
        )

        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.15)`)
        gradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, 0.05)`)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      animationFrameId = requestAnimationFrame(drawAurora)
    }

    drawAurora()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}