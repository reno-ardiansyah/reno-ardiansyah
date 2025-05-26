"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

// Compute a nice curve path from center to icon (control points create a smooth bezier)
function getCurvePath({ x, y }: Position) {
  const cp1x = x * 0.3;
  const cp1y = 0;
  const cp2x = x * 0.3;
  const cp2y = y;
  return `M0,0 C ${cp1x},${cp1y} ${cp2x},${cp2y} ${x},${y}`;
}

export default function SkillsRadial() {
  // actions: which skills animate, with random delays and unique keys
  const [actions, setActions] = useState<
    { index: number; key: number; delay: number }[]
  >([]);

  const skills = [
    {
      name: "Adobe",
      icon: "A",
      position: { x: -200, y: -100 },
      color: "text-red-500",
    },
    {
      name: "CSS3",
      icon: "🎨",
      position: { x: 200, y: -100 },
      color: "text-blue-500",
    },
    {
      name: "Notion",
      icon: "N",
      position: { x: -250, y: 0 },
      color: "text-gray-400",
    },
    {
      name: "Tailwind",
      icon: "~",
      position: { x: 250, y: 0 },
      color: "text-cyan-400",
    },
    {
      name: "React",
      icon: "⚛",
      position: { x: -200, y: 100 },
      color: "text-blue-400",
    },
    {
      name: "TypeScript",
      icon: "TS",
      position: { x: 200, y: 100 },
      color: "text-blue-600",
    },
    {
      name: "HTML5",
      icon: "5",
      position: { x: -100, y: 150 },
      color: "text-orange-500",
    },
    {
      name: "JavaScript",
      icon: "JS",
      position: { x: 100, y: 150 },
      color: "text-yellow-500",
    },
    {
      name: "Next.js",
      icon: "▲",
      position: { x: 0, y: -150 },
      color: "text-white",
    },
    {
      name: "Node.js",
      icon: "◆",
      position: { x: 0, y: 200 },
      color: "text-green-500",
    },
  ];

  // pick 3 random skills with delays each interval
  useEffect(() => {
    const interval = setInterval(() => {
      const picks = Array.from(
        new Set(
          Array.from({ length: 6 }).map(() =>
            Math.floor(Math.random() * skills.length)
          )
        )
      ).slice(1, 6);
      const newActions = picks.map((idx) => ({
        index: idx,
        key: Date.now() + idx,
        delay: Math.random() * 0.5, // random delay up to 0.5s
      }));
      setActions(newActions);
    }, 1500);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <div className="relative w-full h-[40rem] flex items-center justify-center">
      {/* SVG overlay for animated curves only */}
      <svg
        className="absolute inset-0 z-5 pointer-events-none"
        viewBox="-400 -300 800 600"
        style={{ left: "35px", top: "-50px" }}
      >
        {/* Static subtle curves for all skills */}
        {skills.map((skill, i) => {
          const d = getCurvePath(skill.position);
          return (
            <path
              key={`static-${i}`}
              d={d}
              stroke="rgba(6,182,212,0.2)"
              strokeWidth={1}
              fill="none"
            />
          );
        })}
        {/* Animated highlights for active paths */}
        {actions.map((act) => {
          const skill = skills[act.index];
          const d = getCurvePath(skill.position);
          return (
            <motion.path
              key={act.key}
              d={d}
              stroke="#22D3EE" /* brighter cyan highlight */
              strokeWidth={3}
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1.5], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, delay: act.delay, ease: "easeInOut" }}
            />
          );
        })}
      </svg>

      {/* Central Skills Box */}
      <motion.div
        className="absolute z-20 bg-gray-800/90 backdrop-blur-sm px-8 py-4 rounded-2xl border border-gray-700 shadow-2xl"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{ left: "46%", top: "49%", transform: "translate(-50%, -50%)" }}
      >
        <h3 className="text-3xl font-light text-gray-300">Skills</h3>
      </motion.div>

      {/* Icons */}
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="absolute z-20"
          style={{
            left: `calc(50% + ${skill.position.x}px)`,
            top: `calc(50% + ${skill.position.y}px)`,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 1.8 + index * 0.1,
            duration: 0.6,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
        >
          <div className="relative group">
            <motion.div
              className={`w-12 h-12 bg-gray-800 border border-gray-600 rounded-xl flex items-center justify-center text-lg font-bold ${skill.color} cursor-pointer group-hover:border-gray-400 transition-colors duration-300 shadow-lg`}
              whileHover={{
                backgroundColor: "rgba(55,65,81,0.9)",
                boxShadow: "0 0 20px rgba(75,85,99,0.4)",
              }}
            >
              {skill.icon}
            </motion.div>
            <motion.div
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-600"
              initial={{ y: 10 }}
              whileHover={{ y: 0 }}
            >
              {skill.name}
            </motion.div>
          </div>
        </motion.div>
      ))}

      {/* Ambient Background */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl z-0"
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
