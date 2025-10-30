import { useState, useEffect } from 'react'
import { Palette } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const themes = [
  { name: 'Matrix', primary: '#00ff41', secondary: '#00ffff', accent: '#b000ff' },
  { name: 'Crimson', primary: '#ff0040', secondary: '#ff6b9d', accent: '#ff00ff' },
  { name: 'Ocean', primary: '#00d4ff', secondary: '#0099ff', accent: '#6c5ce7' },
  { name: 'Sunset', primary: '#ff6b35', secondary: '#f7931e', accent: '#ffd700' },
  { name: 'Toxic', primary: '#39ff14', secondary: '#ccff00', accent: '#00ff00' },
]

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState(0)

  useEffect(() => {
    const root = document.documentElement
    const theme = themes[currentTheme]
    root.style.setProperty('--neon-green', theme.primary)
    root.style.setProperty('--neon-cyan', theme.secondary)
    root.style.setProperty('--accent-purple', theme.accent)
  }, [currentTheme])

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-neon-green/20 to-neon-cyan/20 backdrop-blur-xl border border-neon-green/30 flex items-center justify-center neon-glow-hover"
      >
        <Palette size={24} className="text-neon-green" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 backdrop-blur-xl bg-background-secondary/90 border border-neon-green/30 rounded-2xl p-4 min-w-[200px]"
          >
            <div className="text-terminal text-neon-green mb-3 font-bold">SELECT THEME</div>
            <div className="space-y-2">
              {themes.map((theme, index) => (
                <motion.button
                  key={theme.name}
                  whileHover={{ scale: 1.05, x: 5 }}
                  onClick={() => {
                    setCurrentTheme(index)
                    setIsOpen(false)
                  }}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                    currentTheme === index
                      ? 'bg-neon-green/20 border border-neon-green/50'
                      : 'bg-background-primary/50 border border-white/10 hover:border-neon-green/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.primary }} />
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.secondary }} />
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.accent }} />
                    </div>
                    <span className="text-terminal text-text-primary">{theme.name}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}