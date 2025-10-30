import { useState } from 'react'
import { Terminal, Lock, Unlock, Zap } from 'lucide-react'

export default function HackingSimulator() {
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState<'idle' | 'hacking' | 'complete'>('idle')
  const [logs, setLogs] = useState<string[]>([])

  const hackingSequence = [
    'Initializing breach protocol...',
    'Scanning network topology...',
    'Identifying vulnerabilities...',
    'Exploiting buffer overflow...',
    'Bypassing firewall rules...',
    'Escalating privileges...',
    'Accessing root directory...',
    'Extracting sensitive data...',
    'Covering tracks...',
    'BREACH SUCCESSFUL!'
  ]

  const startHack = () => {
    setStatus('hacking')
    setProgress(0)
    setLogs([])
    
    hackingSequence.forEach((log, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, log])
        setProgress(((index + 1) / hackingSequence.length) * 100)
        
        if (index === hackingSequence.length - 1) {
          setTimeout(() => setStatus('complete'), 500)
        }
      }, index * 800)
    })
  }

  const reset = () => {
    setStatus('idle')
    setProgress(0)
    setLogs([])
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background-primary via-background-secondary to-background-primary opacity-50"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Terminal className="text-warning-red animate-pulse" size={40} />
          <h2 className="heading-lg text-warning-red text-center animate-pulse-neon text-shadow-neon">
            [🎯] BREACH SIMULATOR
          </h2>
          <Zap className="text-warning-red animate-pulse" size={40} />
        </div>

        <div className="border-4 border-warning-red bg-background-secondary/90 backdrop-blur-sm p-8 scanline relative overflow-hidden neon-glow-intense">
          {/* Animated corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-neon-green animate-pulse"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-neon-green animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-neon-green animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-neon-green animate-pulse"></div>

          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {status === 'idle' && <Lock className="text-warning-red" size={32} />}
              {status === 'hacking' && <Zap className="text-warning-yellow animate-pulse" size={32} />}
              {status === 'complete' && <Unlock className="text-neon-green animate-pulse-neon" size={32} />}
              <span className="text-terminal text-neon-green font-bold text-xl">
                {status === 'idle' && 'SYSTEM LOCKED'}
                {status === 'hacking' && 'BREACH IN PROGRESS...'}
                {status === 'complete' && 'ACCESS GRANTED'}
              </span>
            </div>
            <div className="flex gap-2">
              <div className={`w-3 h-3 rounded-full ${status === 'hacking' ? 'bg-warning-yellow' : 'bg-gray-600'} animate-pulse`}></div>
              <div className={`w-3 h-3 rounded-full ${status === 'complete' ? 'bg-neon-green' : 'bg-gray-600'} animate-pulse`}></div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-6 h-8 bg-background-primary border-2 border-neon-green/30 overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-warning-red via-warning-yellow to-neon-green transition-all duration-300 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-scan"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-terminal text-neon-green font-bold text-shadow-glow">
                {Math.floor(progress)}%
              </span>
            </div>
          </div>

          {/* Terminal logs */}
          <div className="bg-background-primary border-2 border-terminal-green p-4 h-64 overflow-y-auto mb-6 font-mono text-sm scrollbar-custom">
            {logs.map((log, index) => (
              <div
                key={index}
                className="text-terminal-green mb-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-neon-cyan">[{new Date().toLocaleTimeString()}]</span>{' '}
                <span className={index === logs.length - 1 && status === 'complete' ? 'text-neon-green font-bold animate-pulse-neon' : ''}>
                  {log}
                </span>
                {index === logs.length - 1 && status === 'hacking' && (
                  <span className="inline-block w-2 h-4 bg-terminal-green ml-1 animate-pulse"></span>
                )}
              </div>
            ))}
          </div>

          {/* Control button */}
          <div className="text-center">
            {status === 'idle' && (
              <button
                onClick={startHack}
                className="px-8 py-4 border-2 border-warning-red bg-warning-red/20 text-warning-red font-bold text-terminal neon-glow-hover transition-all duration-300 hover:bg-warning-red hover:text-background-primary hover:scale-110"
              >
                [INITIATE BREACH]
              </button>
            )}
            {status === 'complete' && (
              <button
                onClick={reset}
                className="px-8 py-4 border-2 border-neon-green bg-neon-green/20 text-neon-green font-bold text-terminal neon-glow-hover transition-all duration-300 hover:bg-neon-green hover:text-background-primary hover:scale-110"
              >
                [RESET SYSTEM]
              </button>
            )}
          </div>
        </div>

        <p className="text-terminal text-text-secondary text-center mt-6 text-sm">
          ⚠️ Educational simulation only - Demonstrates ethical hacking concepts
        </p>
      </div>
    </section>
  )
}