import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Node {
  id: string
  x: number
  y: number
  vx: number
  vy: number
  label: string
  category: 'skill' | 'project' | 'tool'
  color: string
}

interface Connection {
  source: string
  target: string
}

export default function NetworkGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Create nodes
    const nodes: Node[] = [
      // Skills
      { id: 'python', x: 200, y: 200, vx: 0, vy: 0, label: 'Python', category: 'skill', color: '#00ff41' },
      { id: 'security', x: 400, y: 150, vx: 0, vy: 0, label: 'Security', category: 'skill', color: '#00ff41' },
      { id: 'networking', x: 600, y: 200, vx: 0, vy: 0, label: 'Networking', category: 'skill', color: '#00ff41' },
      
      // Projects
      { id: 'scanner', x: 300, y: 350, vx: 0, vy: 0, label: 'Port Scanner', category: 'project', color: '#00ffff' },
      { id: 'analyzer', x: 500, y: 350, vx: 0, vy: 0, label: 'Packet Analyzer', category: 'project', color: '#00ffff' },
      
      // Tools
      { id: 'wireshark', x: 250, y: 500, vx: 0, vy: 0, label: 'Wireshark', category: 'tool', color: '#b000ff' },
      { id: 'metasploit', x: 450, y: 500, vx: 0, vy: 0, label: 'Metasploit', category: 'tool', color: '#b000ff' },
      { id: 'burp', x: 650, y: 500, vx: 0, vy: 0, label: 'Burp Suite', category: 'tool', color: '#b000ff' },
    ]

    const connections: Connection[] = [
      { source: 'python', target: 'scanner' },
      { source: 'python', target: 'analyzer' },
      { source: 'security', target: 'scanner' },
      { source: 'security', target: 'analyzer' },
      { source: 'networking', target: 'analyzer' },
      { source: 'scanner', target: 'wireshark' },
      { source: 'analyzer', target: 'wireshark' },
      { source: 'security', target: 'metasploit' },
      { source: 'security', target: 'burp' },
    ]

    let animationFrameId: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Apply physics
      nodes.forEach(node => {
        // Apply friction
        node.vx *= 0.95
        node.vy *= 0.95

        // Apply repulsion between nodes
        nodes.forEach(other => {
          if (node.id === other.id) return
          const dx = other.x - node.x
          const dy = other.y - node.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            const force = (150 - dist) / 150
            node.vx -= (dx / dist) * force * 0.5
            node.vy -= (dy / dist) * force * 0.5
          }
        })

        // Apply spring force for connections
        connections.forEach(conn => {
          if (conn.source === node.id) {
            const target = nodes.find(n => n.id === conn.target)
            if (target) {
              const dx = target.x - node.x
              const dy = target.y - node.y
              const dist = Math.sqrt(dx * dx + dy * dy)
              const force = (dist - 150) / 150
              node.vx += (dx / dist) * force * 0.1
              node.vy += (dy / dist) * force * 0.1
            }
          }
        })

        // Update position
        node.x += node.vx
        node.y += node.vy

        // Boundary check
        const margin = 50
        if (node.x < margin) { node.x = margin; node.vx = 0 }
        if (node.x > canvas.width - margin) { node.x = canvas.width - margin; node.vx = 0 }
        if (node.y < margin) { node.y = margin; node.vy = 0 }
        if (node.y > canvas.height - margin) { node.y = canvas.height - margin; node.vy = 0 }
      })

      // Draw connections
      connections.forEach(conn => {
        const source = nodes.find(n => n.id === conn.source)
        const target = nodes.find(n => n.id === conn.target)
        if (source && target) {
          ctx.beginPath()
          ctx.moveTo(source.x, source.y)
          ctx.lineTo(target.x, target.y)
          ctx.strokeStyle = hoveredNode === source.id || hoveredNode === target.id 
            ? 'rgba(0, 255, 65, 0.6)' 
            : 'rgba(0, 255, 65, 0.2)'
          ctx.lineWidth = hoveredNode === source.id || hoveredNode === target.id ? 2 : 1
          ctx.stroke()
        }
      })

      // Draw nodes
      nodes.forEach(node => {
        const isHovered = hoveredNode === node.id
        const radius = isHovered ? 35 : 30

        // Glow effect
        if (isHovered) {
          ctx.shadowBlur = 20
          ctx.shadowColor = node.color
        }

        // Node circle
        ctx.beginPath()
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = isHovered ? node.color + '40' : node.color + '20'
        ctx.fill()
        ctx.strokeStyle = node.color
        ctx.lineWidth = 2
        ctx.stroke()

        ctx.shadowBlur = 0

        // Label
        ctx.fillStyle = node.color
        ctx.font = isHovered ? 'bold 14px JetBrains Mono' : '12px JetBrains Mono'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(node.label, node.x, node.y)
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      let found = false
      for (const node of nodes) {
        const dist = Math.sqrt((x - node.x) ** 2 + (y - node.y) ** 2)
        if (dist < 30) {
          setHoveredNode(node.id)
          found = true
          break
        }
      }
      if (!found) setHoveredNode(null)
    }

    canvas.addEventListener('mousemove', handleMouseMove)

    return () => {
      cancelAnimationFrame(animationFrameId)
      canvas.removeEventListener('mousemove', handleMouseMove)
    }
  }, [hoveredNode])

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-neon-green mb-4 animate-pulse-neon">
            SKILL NETWORK GRAPH
          </h2>
          <p className="text-terminal text-text-secondary">
            Interactive visualization of interconnected skills, projects, and tools
          </p>
        </motion.div>

        <div className="backdrop-blur-xl bg-background-secondary/50 border border-neon-green/30 rounded-2xl p-8 overflow-hidden">
          <canvas
            ref={canvasRef}
            className="w-full h-[600px] cursor-pointer"
          />
          
          <div className="flex justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-neon-green/20 border-2 border-neon-green" />
              <span className="text-terminal text-text-secondary text-sm">Skills</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-neon-cyan/20 border-2 border-neon-cyan" />
              <span className="text-terminal text-text-secondary text-sm">Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-accent-purple/20 border-2 border-accent-purple" />
              <span className="text-terminal text-text-secondary text-sm">Tools</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}