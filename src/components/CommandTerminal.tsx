import { useState, useEffect } from 'react'
import { Terminal } from 'lucide-react'

export default function CommandTerminal() {
  const [currentLine, setCurrentLine] = useState(0)
  const commands = [
    '> Initializing system...',
    '> Loading kernel modules...',
    '> Establishing secure connection...',
    '> Bypassing firewall protocols...',
    '> Access granted: RAJSARASWATI_JATAV',
    '> Status: ONLINE | Threat Level: EXTREME',
    '> Ready for operation...',
  ]

  useEffect(() => {
    if (currentLine < commands.length) {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [currentLine, commands.length])

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="border-2 border-terminal-green bg-background-secondary/90 backdrop-blur-sm p-8 scanline relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-terminal-green/30">
            <Terminal className="text-terminal-green" size={24} />
            <span className="text-terminal text-terminal-green font-bold">SYSTEM_TERMINAL_v2.0</span>
            <div className="ml-auto flex gap-2">
              <div className="w-3 h-3 rounded-full bg-warning-red animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-warning-yellow animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
          <div className="space-y-2 text-terminal font-mono">
            {commands.slice(0, currentLine).map((cmd, index) => (
              <div
                key={index}
                className="text-terminal-green animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {cmd}
                {index === currentLine - 1 && (
                  <span className="inline-block w-2 h-4 bg-terminal-green ml-1 animate-pulse"></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}