"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar } from "lucide-react"

interface TimeUnit {
  value: number
  label: string
}

function TimeBox({ value, label, delay }: TimeUnit & { delay: number }) {
  const [prevValue, setPrevValue] = useState(value)
  const [isFlipping, setIsFlipping] = useState(false)

  useEffect(() => {
    if (value !== prevValue) {
      setIsFlipping(true)
      const timer = setTimeout(() => {
        setPrevValue(value)
        setIsFlipping(false)
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [value, prevValue])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative"
    >
      {/* Glow effect */}
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, delay: delay * 2 }}
        className="absolute -inset-2 bg-primary/10 rounded-2xl blur-xl"
      />
      
      {/* Card */}
      <motion.div 
        whileHover={{ scale: 1.05, y: -3 }}
        className="relative bg-card/90 backdrop-blur-md border border-border/50 rounded-xl p-3 md:p-5 lg:p-6 min-w-[68px] md:min-w-[95px] lg:min-w-[105px] text-center shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent rounded-xl" />

        {/* Number with flip animation */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={value}
              initial={{ y: isFlipping ? -30 : 0, opacity: isFlipping ? 0 : 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="block font-display text-2xl md:text-3xl lg:text-4xl text-primary font-semibold"
            >
              {String(value).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Label */}
        <span className="relative text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground mt-1.5 block">
          {label}
        </span>

        {/* Corner accent */}
        <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-primary/30 rounded-tr" />
        <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-primary/30 rounded-bl" />
      </motion.div>
    </motion.div>
  )
}

function Separator() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 mx-1.5 md:mx-3">
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-1.5 h-1.5 rounded-full bg-primary/60" 
      />
      <motion.div 
        animate={{ scale: [1.3, 1, 1.3], opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-1.5 h-1.5 rounded-full bg-primary/60" 
      />
    </div>
  )
}

// Animated divider
function Divider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50 origin-right" 
      />
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="w-2.5 h-2.5 rounded-full bg-primary/50" 
      />
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50 origin-left" 
      />
    </div>
  )
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const weddingDate = new Date("2026-09-19T18:00:00")

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = weddingDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits: TimeUnit[] = [
    { value: timeLeft.days, label: "Hari" },
    { value: timeLeft.hours, label: "Jam" },
    { value: timeLeft.minutes, label: "Menit" },
    { value: timeLeft.seconds, label: "Detik" },
  ]

  if (!mounted) {
    return null
  }

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Animated background */}
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" 
      />
      
      {/* Floating particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 6 + i * 2,
            repeat: Infinity,
            delay: i * 1.5
          }}
          className="absolute w-2 h-2 rounded-full bg-primary/30"
          style={{
            left: `${20 + i * 20}%`,
            top: `${30 + i * 10}%`
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4"
          >
            Counting Down
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-6"
          >
            Menuju Hari Bahagia
          </motion.h2>
          <Divider />
        </motion.div>

        <div className="flex justify-center items-center">
          {timeUnits.map((unit, index) => (
            <div key={unit.label} className="flex items-center">
              <TimeBox {...unit} delay={0.1 * (index + 1)} />
              {index < timeUnits.length - 1 && <Separator />}
            </div>
          ))}
        </div>

        {/* Wedding date reminder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 bg-card/70 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3 shadow-md"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Calendar className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-sm md:text-base text-foreground font-medium">
              Sabtu, 19 September 2026
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
