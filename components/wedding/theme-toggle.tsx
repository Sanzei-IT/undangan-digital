"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, Sparkles } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    document.documentElement.classList.toggle("dark", newIsDark)
  }

  if (!mounted) return null

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      onClick={toggleTheme}
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 group"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Glow effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className={`absolute inset-0 rounded-full blur-xl ${
          isDark ? "bg-accent/30" : "bg-primary/30"
        }`}
      />

      {/* Button container */}
      <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-card/90 backdrop-blur-xl border border-border/50 shadow-xl transition-all duration-300 group-hover:bg-card group-hover:shadow-2xl group-hover:border-primary/30 overflow-hidden">
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="dark"
              initial={{ y: 20, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -20, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.4, type: "spring" }}
              className="relative"
            >
              <Moon className="h-6 w-6 text-accent" />
              {/* Stars around moon */}
              <motion.div
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                className="absolute -top-1 -right-1"
              >
                <Sparkles className="h-3 w-3 text-accent/60" />
              </motion.div>
              <motion.div
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                className="absolute -bottom-1 -left-1"
              >
                <Sparkles className="h-2 w-2 text-accent/40" />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="light"
              initial={{ y: -20, opacity: 0, rotate: 90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 20, opacity: 0, rotate: -90 }}
              transition={{ duration: 0.4, type: "spring" }}
              className="relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sun className="h-6 w-6 text-primary" />
              </motion.div>
              {/* Sun rays */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Label tooltip */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-1.5 shadow-lg whitespace-nowrap pointer-events-none"
      >
        <span className="text-xs text-foreground">
          {isDark ? "Mode terang" : "Mode gelap"}
        </span>
      </motion.div>
    </motion.button>
  )
}
