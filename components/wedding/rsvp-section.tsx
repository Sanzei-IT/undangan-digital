"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Heart, Send } from "lucide-react"

// Simple divider
function Divider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40" />
      <div className="w-2 h-2 rounded-full bg-primary/40" />
      <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/40" />
    </div>
  )
}

interface RSVPSectionProps {
  guestName: string
}

export function RSVPSection({ guestName }: RSVPSectionProps) {
  const [visitorName, setVisitorName] = useState("")
  const [visitorLocation, setVisitorLocation] = useState("")
  
  const phoneNumber = "6282144073207"
  
  const message = encodeURIComponent(
    `Assalamualaikum Wr. Wb.\n\nKepada Yth. Keluarga Bapak/Ibu Azura & Hendra,\n\nPerkenalkan, saya ${visitorName || "[Nama]"} dari ${visitorLocation || "[Daerah/Kota/Kabupaten]"}.\n\nDengan ini saya ingin menyampaikan ucapan selamat atas pernikahan Ananda Azura Nur Rahayu Putri & Hendra Agustian.\n\nSemoga Allah SWT senantiasa memberikan keberkahan dan menjadikan keluarga yang sakinah, mawaddah, warahmah. Aamiin Ya Rabbal Alamin.\n\nTerima kasih.\n\nWassalamualaikum Wr. Wb.`
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          {/* Icon */}
          <div className="flex justify-center mb-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 shadow-md">
              <MessageCircle className="h-7 w-7 text-primary" />
            </div>
          </div>

          <p className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-3">
            RSVP
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-5">
            Kirim Ucapan
          </h2>
          <Divider />
          <p className="text-muted-foreground max-w-md mx-auto mt-5 text-sm md:text-base">
            Kami akan sangat senang menerima doa dan ucapan dari Anda
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="relative bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-10 text-center shadow-lg">
            {/* Hearts decoration */}
            <div className="flex justify-center gap-2 mb-6">
              <Heart className="h-6 w-6 text-primary/20 fill-primary/10" />
              <Heart className="h-8 w-8 text-primary/40 fill-primary/20" />
              <Heart className="h-6 w-6 text-primary/20 fill-primary/10" />
            </div>

            <p className="text-base md:text-lg text-foreground mb-8 leading-relaxed">
              Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
              Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu
              kepada kedua mempelai.
            </p>

            {/* Name input field */}
            <div className="mb-6">
              <label className="block text-sm text-muted-foreground mb-2">Masukkan Nama Anda</label>
              <input
                type="text"
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                placeholder="Ketik nama Anda di sini..."
                className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            {/* Location input field */}
            <div className="mb-8">
              <label className="block text-sm text-muted-foreground mb-2">Daerah/Kota/Kabupaten</label>
              <input
                type="text"
                value={visitorLocation}
                onChange={(e) => setVisitorLocation(e.target.value)}
                placeholder="Contoh: Jakarta, Bandung, Surabaya..."
                className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            {/* WhatsApp button */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center gap-2 sm:gap-2.5 bg-[#25D366] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-medium shadow-lg shadow-[#25D366]/25 transition-all duration-300 active:bg-[#20bd5a] overflow-hidden group text-sm sm:text-base"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current relative z-10"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="relative z-10">Kirim Ucapan via WhatsApp</span>
              <Send className="h-4 w-4 relative z-10" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
