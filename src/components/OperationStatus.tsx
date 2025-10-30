import { useEffect, useState } from 'react'

interface Operation {
  name: string
  percentage: number
  color: string
}

export default function OperationStatus() {
  const [animated, setAnimated] = useState(false)

  const operations: Operation[] = [
    { name: 'Kernel Takeover', percentage: 97, color: 'bg-neon-green' },
    { name: 'Zero-Day Arsenal', percentage: 89, color: 'bg-neon-cyan' },
    { name: 'System Decimation', percentage: 82, color: 'bg-warning-red' },
    { name: 'Shadow Protocol', percentage: 93, color: 'bg-accent-purple' },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-lg text-accent-purple text-center mb-12 animate-pulse">
          [⚔️] OPERATION STATUS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {operations.map((op, index) => (
            <div
              key={index}
              className="border-2 border-accent-purple bg-background-secondary/80 backdrop-blur-sm p-6 neon-glow-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-terminal text-accent-purple font-bold">[&gt;&gt;] {op.name}</span>
                <span className="text-terminal text-neon-green font-bold">{op.percentage}%</span>
              </div>
              <div className="h-6 bg-background-primary border border-accent-purple/30 overflow-hidden">
                <div
                  className={`h-full ${op.color} transition-all duration-1000 ease-out flex items-center justify-end pr-2`}
                  style={{ width: animated ? `${op.percentage}%` : '0%' }}
                >
                  <span className="text-xs text-background-primary font-bold">{'▰'.repeat(Math.floor(op.percentage / 10))}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-2 border-warning-red bg-background-secondary/50 backdrop-blur-sm p-8">
          <h3 className="heading-md text-warning-red text-center mb-6">[🕷️] DIGITAL FOOTPRINTS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-terminal">
            <div className="flex items-center gap-3">
              <span className="text-warning-red">[X]</span>
              <span className="text-text-primary">Location : <span className="text-neon-green">ENCRYPTED</span></span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-warning-red">[X]</span>
              <span className="text-text-primary">Status : <span className="text-neon-cyan">HUNTING</span></span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-warning-red">[X]</span>
              <span className="text-text-primary">Target : <span className="text-accent-purple">DOMINATING</span></span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-warning-red">[X]</span>
              <span className="text-text-primary">Threat Level : <span className="text-warning-red">EXTREME</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}