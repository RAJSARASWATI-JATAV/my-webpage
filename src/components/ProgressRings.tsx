import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Skill {
  name: string
  percentage: number
  color: string
}

const skills: Skill[] = [
  { name: 'Penetration Testing', percentage: 95, color: '#00ff41' },
  { name: 'Network Security', percentage: 92, color: '#00ffff' },
  { name: 'Malware Analysis', percentage: 88, color: '#b000ff' },
  { name: 'Cryptography', percentage: 85, color: '#ff0040' },
  { name: 'Forensics', percentage: 90, color: '#ffff00' },
  { name: 'Social Engineering', percentage: 87, color: '#ff6b35' },
]

export default function ProgressRings() {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    setAnimated(true)
  }, [])

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
            SKILL MASTERY LEVELS
          </h2>
          <p className="text-terminal text-text-secondary">
            Circular visualization of expertise across domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const radius = 70
            const circumference = 2 * Math.PI * radius
            const offset = circumference - (animated ? (skill.percentage / 100) * circumference : circumference)

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative backdrop-blur-xl bg-background-secondary/50 border border-neon-green/30 rounded-2xl p-8 flex flex-col items-center"
              >
                {/* SVG Ring */}
                <div className="relative w-40 h-40">
                  <svg className="transform -rotate-90 w-full h-full">
                    {/* Background circle */}
                    <circle
                      cx="80"
                      cy="80"
                      r={radius}
                      stroke="rgba(255, 255, 255, 0.1)"
                      strokeWidth="8"
                      fill="none"
                    />
                    {/* Progress circle */}
                    <motion.circle
                      cx="80"
                      cy="80"
                      r={radius}
                      stroke={skill.color}
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      animate={{ strokeDashoffset: offset }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
                      style={{
                        filter: `drop-shadow(0 0 8px ${skill.color})`,
                      }}
                    />
                  </svg>

                  {/* Percentage in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      className="text-center"
                    >
                      <div className="heading-md" style={{ color: skill.color }}>
                        {skill.percentage}%
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Skill name */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                  className="mt-4 text-terminal text-text-primary text-center font-bold"
                >
                  {skill.name}
                </motion.div>

                {/* Glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}15, transparent 70%)`,
                  }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}