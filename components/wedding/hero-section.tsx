"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

// Animated divider component
function Divider() {
  return (
    <div className="flex items-center justify-center gap-4">
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-primary/50 origin-right" 
      />
      <motion.div 
        initial={{ scale: 0, rotate: 0 }}
        whileInView={{ scale: 1, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-2.5 h-2.5 rounded-sm bg-primary/50" 
      />
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-primary/50 origin-left" 
      />
    </div>
  )
}

// Floating decorative element
function FloatingElement({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      animate={{ 
        y: [0, -15, 0],
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{ 
        duration: 5,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
      className={className}
    >
      <div className="w-3 h-3 rounded-full bg-primary/30" />
    </motion.div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1.3, 1, 1.3],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-accent/20 via-accent/5 to-transparent rounded-full blur-3xl" 
        />
      </div>

      {/* Floating decorative elements */}
      <FloatingElement className="absolute top-1/4 left-[10%]" delay={0} />
      <FloatingElement className="absolute top-1/3 right-[15%]" delay={1.5} />
      <FloatingElement className="absolute bottom-1/3 left-[20%]" delay={3} />
      <FloatingElement className="absolute bottom-1/4 right-[10%]" delay={2} />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        {/* Top divider */}
        <div className="mb-12">
          <Divider />
        </div>

        {/* Bismillah */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10"
        >
          <motion.p 
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="font-display text-xl md:text-2xl text-primary/90 mb-3"
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </motion.p>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Bismillahirrahmanirrahim
          </p>
        </motion.div>

        {/* Opening text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg text-muted-foreground mb-14 leading-relaxed max-w-xl mx-auto"
        >
          Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud menyelenggarakan acara pernikahan kami
        </motion.p>

        {/* Names section */}
        <div className="relative mb-14">
          {/* Bride name */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h1 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight tracking-wide text-balance cursor-default"
            >
              Azura Nur Rahayu Putri, S.M
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-sm text-muted-foreground mt-3 tracking-wider"
            >
              Putri dari Bapak Suyatno & Ibu Listiana
            </motion.p>
          </motion.div>

          {/* Ampersand with decorative lines */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
            className="flex items-center justify-center my-8"
          >
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-primary/50 origin-right" 
            />
            <motion.span 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="mx-5 font-display text-4xl md:text-5xl text-primary"
            >
              &
            </motion.span>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-primary/50 origin-left" 
            />
          </motion.div>

          {/* Groom name */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.h1 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight tracking-wide cursor-default"
            >
              Hendra Agustian
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-sm text-muted-foreground mt-3 tracking-wider"
            >
              Putra dari Bapak Poniman & Ibu Agustina
            </motion.p>
          </motion.div>
        </div>

        {/* Wedding badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.div 
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(var(--primary), 0.3)" }}
            className="inline-flex items-center gap-2 sm:gap-4 bg-primary/10 border border-primary/25 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 backdrop-blur-sm"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-primary fill-primary/40" />
            </motion.div>
            <span className="text-xs sm:text-sm md:text-base text-foreground font-medium tracking-wide">
              Akan melangsungkan pernikahan
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <Heart className="h-4 w-4 text-primary fill-primary/40" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12"
        >
          <Divider />
        </motion.div>
      </motion.div>
    </section>
  )
}
