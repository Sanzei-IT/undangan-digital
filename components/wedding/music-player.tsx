"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Volume2, VolumeX, Music2 } from "lucide-react"

interface MusicPlayerProps {
  isPlaying: boolean
  onToggle: () => void
}

export function MusicPlayer({ isPlaying, onToggle }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.loop = true
    audio.volume = 0.5

    const handleCanPlay = () => setIsLoaded(true)
    audio.addEventListener("canplaythrough", handleCanPlay)

    return () => {
      audio.removeEventListener("canplaythrough", handleCanPlay)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !isLoaded) return

    if (isPlaying) {
      audio.play().catch(() => {
        // Autoplay was prevented
      })
    } else {
      audio.pause()
    }
  }, [isPlaying, isLoaded])

  return (
    <>
      <audio ref={audioRef} src="/audio/wedding-music.mp3" preload="auto" />

      <motion.button
        initial={{ scale: 0, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        onClick={onToggle}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        {/* Glow effect */}
        <motion.div
          animate={
            isPlaying
              ? {
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }
              : { scale: 1, opacity: 0 }
          }
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-primary/30 blur-xl"
        />

        {/* Button container */}
        <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-card/90 backdrop-blur-xl border border-border/50 shadow-xl transition-all duration-300 group-hover:bg-card group-hover:shadow-2xl group-hover:border-primary/30">
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="playing"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="relative"
              >
                <Volume2 className="h-6 w-6 text-primary" />
                
                {/* Sound wave bars */}
                <div className="absolute -right-1 -top-1 flex gap-0.5">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: ["4px", "12px", "4px"],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                      className="w-1 rounded-full bg-primary"
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="muted"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: -180 }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                <VolumeX className="h-6 w-6 text-muted-foreground" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Rotating ring when playing */}
          {isPlaying && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
            />
          )}
        </div>

        {/* Label tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-1.5 shadow-lg whitespace-nowrap pointer-events-none"
        >
          <span className="text-xs text-foreground flex items-center gap-2">
            <Music2 className="h-3 w-3" />
            {isPlaying ? "Matikan musik" : "Putar musik"}
          </span>
        </motion.div>
      </motion.button>
    </>
  )
}
