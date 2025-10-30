import { useEffect, useRef } from 'react'

export default function DNAHelix() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let offset = 0

    function drawHelix() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const amplitude = 100
      const frequency = 0.01
      const spacing = 20

      for (let y = 0; y < canvas.height + spacing; y += spacing) {
        const adjustedY = y + offset

        // Left strand
        const x1 = centerX + Math.sin(adjustedY * frequency) * amplitude
        ctx.beginPath()
        ctx.arc(x1, y, 3, 0, Math.PI * 2)
        ctx.fillStyle = '#00ff41'
        ctx.fill()

        // Right strand
        const x2 = centerX - Math.sin(adjustedY * frequency) * amplitude
        ctx.beginPath()
        ctx.arc(x2, y, 3, 0, Math.PI * 2)
        ctx.fillStyle = '#00ffff'
        ctx.fill()

        // Connecting lines
        if (Math.abs(x1 - x2) < amplitude * 1.5) {
          ctx.beginPath()
          ctx.moveTo(x1, y)
          ctx.lineTo(x2, y)
          ctx.strokeStyle = `rgba(176, 0, 255, ${0.3 + Math.sin(adjustedY * frequency) * 0.3})`
          ctx.lineWidth = 2
          ctx.stroke()
        }
      }

      offset += 2
      requestAnimationFrame(drawHelix)
    }

    drawHelix()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-10"
      style={{ zIndex: 2 }}
    />
  )
}