"use client"

import { motion } from "framer-motion"

export default function GitHubContributions() {
  const months = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"]
  const days = ["Tue", "Thu", "Sat"]

  // Generate contribution data
  const contributions = Array.from({ length: 53 }, (_, weekIndex) =>
    Array.from({ length: 7 }, (_, dayIndex) => ({
      week: weekIndex,
      day: dayIndex,
      count: Math.floor(Math.random() * 5),
      date: new Date(2024, 0, weekIndex * 7 + dayIndex + 1),
    })),
  )

  const getContributionColor = (count: number) => {
    if (count === 0) return "bg-gray-800"
    if (count === 1) return "bg-green-900"
    if (count === 2) return "bg-green-700"
    if (count === 3) return "bg-green-500"
    return "bg-green-400"
  }

  return (
    <motion.div
      className="bg-gray-900/30 p-8 rounded-2xl max-w-full"
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Header - tidak scroll */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-light text-white mb-1">Coding with</h3>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <span className="text-sm text-gray-400">Reno Ardiansyah</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">28 members online</p>
        </div>
        <div className="flex space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-6 h-6 bg-gray-700 rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Bagian bulan dan kontribusi yang bisa scroll horizontal */}
      <div className="overflow-x-auto  max-w-full">
        {/* Month labels */}
        <div className="flex justify-between text-xs text-gray-400 mb-2 ml-8 min-w-[800px]">
          {months.map((month) => (
            <span key={month}>{month}</span>
          ))}
        </div>

        <div className="flex min-w-[800px]">
          {/* Day labels */}
          <div className="flex flex-col justify-between text-xs text-gray-400 mr-2 h-20">
            {days.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>

          {/* Contribution grid */}
          <div className="flex space-x-1">
            {contributions.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col space-y-1">
                {week.map((day, dayIndex) => (
                  <motion.div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`w-3 h-3 rounded-sm ${getContributionColor(day.count)}`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: (weekIndex * 7 + dayIndex) * 0.002,
                      duration: 0.2,
                    }}
                    whileHover={{ scale: 1.2 }}
                    title={`${day.count} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer - tidak scroll */}
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-gray-400">1020 contributions in the last half year</p>
        <div className="flex items-center space-x-1 text-xs text-gray-500">
          <span>Less</span>
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
            <div className="w-3 h-3 bg-green-900 rounded-sm"></div>
            <div className="w-3 h-3 bg-green-700 rounded-sm"></div>
            <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
            <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
          </div>
          <span>More</span>
        </div>
      </div>
    </motion.div>
  )
}
