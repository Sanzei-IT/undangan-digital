"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Animated background */}
      <motion.div 
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" 
      />

      <div className="max-w-2xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-px w-20 bg-gradient-to-r from-transparent to-primary/50 origin-right" 
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="h-6 w-6 text-primary fill-primary/40" />
            </motion.div>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-px w-20 bg-gradient-to-l from-transparent to-primary/50 origin-left" 
            />
          </motion.div>

          {/* Names */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-6"
          >
            Azura & Hendra
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground mb-8 leading-relaxed max-w-md mx-auto text-sm md:text-base"
          >
            Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i, kami mengucapkan
            terima kasih.
          </motion.p>

          {/* Closing greeting */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <p className="font-display text-xl md:text-2xl text-primary italic">
              Wassalamualaikum Wr. Wb.
            </p>
          </motion.div>

          {/* Animated hearts */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center gap-2 mb-12"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: i === 2 ? [1, 1.3, 1] : [1, 1.15, 1],
                  y: [0, i === 2 ? -5 : -2, 0]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.15,
                  ease: "easeInOut"
                }}
              >
                <Heart
                  className={`h-4 w-4 ${
                    i === 2
                      ? "text-primary fill-primary"
                      : "text-primary/40 fill-primary/15"
                  }`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-border to-transparent mb-8" 
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p className="text-xs text-muted-foreground/70 flex items-center justify-center gap-2">
              Made with
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="h-3.5 w-3.5 text-primary fill-primary/60" />
              </motion.span>
              for a special day
            </p>
            <p className="text-xs text-muted-foreground/50 mt-2">
              19 September 2026
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
