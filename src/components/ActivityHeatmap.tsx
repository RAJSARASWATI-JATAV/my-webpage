import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ActivityHeatmap() {
  const weeks = 52
  const days = 7

  // Generate random activity data
  const generateActivity = () => {
    const data: number[][] = []
    for (let week = 0; week < weeks; week++) {
      const weekData: number[] = []
      for (let day = 0; day < days; day++) {
        weekData.push(Math.floor(Math.random() * 5))
      }
      data.push(weekData)
    }
    return data
  }

  const [activityData] = useState(generateActivity())
  const [hoveredCell, setHoveredCell] = useState<{ week: number; day: number } | null>(null)

  const getColor = (level: number) => {
    const colors = [
      'bg-background-secondary',
      'bg-neon-green/20',
      'bg-neon-green/40',
      'bg-neon-green/60',
      'bg-neon-green/80',
    ]
    return colors[level]
  }

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

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
            CONTRIBUTION ACTIVITY
          </h2>
          <p className="text-terminal text-text-secondary">
            365 days of continuous development and learning
          </p>
        </motion.div>

        <div className="backdrop-blur-xl bg-background-secondary/50 border border-neon-green/30 rounded-2xl p-8 overflow-x-auto">
          <div className="flex gap-1 min-w-max">
            {/* Day labels */}
            <div className="flex flex-col gap-1 mr-2">
              <div className="h-3" />
              {dayNames.map((day, i) => (
                <div key={day} className={`h-3 text-[10px] text-text-secondary ${i % 2 === 0 ? '' : 'opacity-0'}`}>
                  {day}
                </div>
              ))}
            </div>

            {/* Heatmap grid */}
            {activityData.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((level, dayIndex) => (
                  <motion.div
                    key={`${weekIndex}-${dayIndex}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: (weekIndex * days + dayIndex) * 0.001 }}
                    whileHover={{ scale: 1.5, zIndex: 10 }}
                    onHoverStart={() => setHoveredCell({ week: weekIndex, day: dayIndex })}
                    onHoverEnd={() => setHoveredCell(null)}
                    className={`w-3 h-3 rounded-sm ${getColor(level)} border border-neon-green/20 cursor-pointer transition-all`}
                    title={`Week ${weekIndex + 1}, ${dayNames[dayIndex]}: ${level} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Tooltip */}
          {hoveredCell && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-terminal text-neon-green text-center"
            >
              Week {hoveredCell.week + 1}, {dayNames[hoveredCell.day]}: {activityData[hoveredCell.week][hoveredCell.day]} contributions
            </motion.div>
          )}

          {/* Legend */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="text-terminal text-text-secondary text-xs">Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div key={level} className={`w-3 h-3 rounded-sm ${getColor(level)} border border-neon-green/20`} />
            ))}
            <span className="text-terminal text-text-secondary text-xs">More</span>
          </div>
        </div>
      </div>
    </section>
  )
}