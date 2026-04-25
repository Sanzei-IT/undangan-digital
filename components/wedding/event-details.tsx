"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin } from "lucide-react"

// Custom Ring Icon for Akad
function RingIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="15" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="9" cy="12" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="15" cy="12" r="2" fill="currentColor" opacity="0.3" />
    </svg>
  )
}

// Custom Celebration Icon for Resepsi
function CelebrationIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M19 14L19.75 16.25L22 17L19.75 17.75L19 20L18.25 17.75L16 17L18.25 16.25L19 14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M5 14L5.5 15.5L7 16L5.5 16.5L5 18L4.5 16.5L3 16L4.5 15.5L5 14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  )
}

interface EventCardProps {
  title: string
  date: string
  time: string
  location: string
  delay?: number
  type: "akad" | "resepsi"
}

function EventCard({ title, date, time, location, delay = 0, type }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="relative group"
    >
      {/* Card glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.3 }}
        className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Card */}
      <div className="relative bg-card/90 backdrop-blur-md border border-border/50 rounded-2xl p-8 pt-16 shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1">

        {/* Icon badge */}
        <motion.div
          initial={{ scale: 0, y: 20 }}
          whileInView={{ scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2, type: "spring", stiffness: 200 }}
          className="absolute -top-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="relative flex items-center justify-center">
            {/* Animated outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[72px] h-[72px] rounded-full border-2 border-dashed border-primary/30"
            />
            {/* Pulse effect */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute w-16 h-16 rounded-full bg-primary/20"
            />
            {/* Icon container */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary via-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/30"
            >
              {type === "akad" ? (
                <RingIcon className="w-8 h-8 text-primary-foreground" />
              ) : (
                <CelebrationIcon className="w-8 h-8 text-primary-foreground" />
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
          className="font-display text-2xl md:text-3xl text-foreground mb-8 text-center"
        >
          {title}
        </motion.h3>

        {/* Details */}
        <div className="space-y-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay + 0.4 }}
            whileHover={{ x: 5 }}
            className="flex items-center gap-4 group/item"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 transition-colors group-hover/item:bg-primary/20"
            >
              <Calendar className="h-5 w-5 text-primary" />
            </motion.div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">Tanggal</p>
              <p className="text-foreground font-medium text-sm md:text-base">{date}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay + 0.5 }}
            whileHover={{ x: 5 }}
            className="flex items-center gap-4 group/item"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 transition-colors group-hover/item:bg-primary/20"
            >
              <Clock className="h-5 w-5 text-primary" />
            </motion.div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">Waktu</p>
              <p className="text-foreground font-medium text-sm md:text-base">{time}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay + 0.6 }}
            whileHover={{ x: 5 }}
            className="flex items-center gap-4 group/item"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 transition-colors group-hover/item:bg-primary/20"
            >
              <MapPin className="h-5 w-5 text-primary" />
            </motion.div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">Lokasi</p>
              <p className="text-foreground font-medium text-sm md:text-base">{location}</p>
            </div>
          </motion.div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-primary/20 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-primary/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-primary/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-primary/20 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
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

export function EventDetails() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-4"
          >
            Save the Date
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-6"
          >
            Jadwal Acara
          </motion.h2>
          <Divider />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-8 mt-10 sm:mt-12">
          <EventCard
            title="Akad Nikah"
            date="Sabtu, 19 September 2026"
            time="18:00 WIB - Selesai"
            location="Dusun Krajan, Desa Besuk Agung"
            delay={0.1}
            type="akad"
          />
          <EventCard
            title="Resepsi"
            date="Minggu, 20 September 2026"
            time="10:00 WIB - Selesai"
            location="Dusun Krajan, Desa Besuk Agung"
            delay={0.25}
            type="resepsi"
          />
        </div>
      </div>
    </section>
  )
}
