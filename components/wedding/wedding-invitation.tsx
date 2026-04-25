"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { OpeningCover } from "./opening-cover"
import { MusicPlayer } from "./music-player"
import { ThemeToggle } from "./theme-toggle"
import { HeroSection } from "./hero-section"
import { EventDetails } from "./event-details"
import { CountdownTimer } from "./countdown-timer"
import { LocationSection } from "./location-section"
import { QuotesSection } from "./quotes-section"
import { GiftSection } from "./gift-section"
import { RSVPSection } from "./rsvp-section"
import { Footer } from "./footer"

interface WeddingInvitationProps {
  guestName?: string
}

export function WeddingInvitation({ guestName = "Tamu Undangan" }: WeddingInvitationProps) {
  const [isOpened, setIsOpened] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)

  const handleOpen = () => {
    setIsOpened(true)
    setIsMusicPlaying(true)
  }

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying)
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!isOpened && (
          <OpeningCover guestName={guestName} onOpen={handleOpen} />
        )}
      </AnimatePresence>

      {isOpened && (
        <>
          {/* Floating controls */}
          <MusicPlayer isPlaying={isMusicPlaying} onToggle={toggleMusic} />
          <ThemeToggle />
          
          {/* Main content with entrance animation */}
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative z-0"
          >
            {/* Sections with scroll-triggered animations */}
            <HeroSection />
            
            {/* Divider ornament between sections */}
            <div className="py-4">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="h-px w-1/2 mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              />
            </div>
            
            <CountdownTimer />
            
            <EventDetails />
            
            <LocationSection />
            
            <QuotesSection />
            
            <GiftSection />
            
            <RSVPSection guestName={guestName} />
            
            <Footer />
          </motion.main>
        </>
      )}
    </div>
  )
}
