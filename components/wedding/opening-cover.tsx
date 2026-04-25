"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

interface OpeningCoverProps {
  guestName: string
  onOpen: () => void
}

// Floating hearts animation
function FloatingHearts() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: `${15 + i * 15}%`,
            y: "100%",
            opacity: 0,
            scale: 0.5
          }}
          animate={{ 
            y: "-20%",
            opacity: [0, 0.6, 0.6, 0],
            scale: [0.5, 1, 1, 0.8],
            x: `${15 + i * 15 + (i % 2 === 0 ? 5 : -5)}%`
          }}
          transition={{ 
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeOut"
          }}
        >
          <Heart 
            className="text-primary/30 fill-primary/20" 
            style={{ width: 12 + i * 4, height: 12 + i * 4 }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export function OpeningCover({ guestName, onOpen }: OpeningCoverProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.1,
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden touch-none"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-gradient-radial from-accent/20 via-accent/5 to-transparent blur-3xl" 
        />
      </div>

      {/* Floating hearts */}
      <FloatingHearts />

      {/* Top decorative line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 w-40 md:w-56"
      >
        <div className="flex items-center justify-center gap-3">
          <motion.div 
            animate={{ scaleX: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-primary/30" 
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-2 rounded-full bg-primary/50" 
          />
          <motion.div 
            animate={{ scaleX: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/50 to-primary/30" 
          />
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 text-center px-6 max-w-md"
      >
        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4"
        >
          The Wedding of
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-8"
        >
          Azura & Hendra
        </motion.h1>

        {/* Heart icon with pulse */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-10"
        >
          <div className="relative">
            {/* Pulsing rings */}
            <motion.div
              animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full border border-primary/40" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.8, 1.8], opacity: [0.3, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full border border-primary/30" />
            </motion.div>
            {/* Static ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-primary/20" />
            </div>
            {/* Heart */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="relative z-10 h-8 w-8 text-primary fill-primary/40" />
            </motion.div>
          </div>
        </motion.div>

        {/* Open button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -15px rgba(var(--primary), 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpen}
            className="group relative overflow-hidden rounded-full bg-primary px-12 py-4 text-primary-foreground font-medium shadow-xl shadow-primary/30 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="h-5 w-5 fill-primary-foreground/30" />
              </motion.span>
              <span className="text-base">Buka Undangan</span>
            </span>
            {/* Shimmer effect */}
            <motion.div 
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
          </motion.button>
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-8 text-xs text-muted-foreground/80 italic max-w-xs mx-auto leading-relaxed"
        >
          &quot;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup...&quot;
        </motion.p>
      </motion.div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-40 md:w-56"
      >
        <div className="flex items-center justify-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-primary/30" />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], rotate: [0, -180, -360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-2 rounded-full bg-primary/50" 
          />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/50 to-primary/30" />
        </div>
      </motion.div>
    </motion.div>
  )
}
