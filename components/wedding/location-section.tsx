"use client"

import { motion } from "framer-motion"
import { MapPin, Navigation, ExternalLink } from "lucide-react"

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

export function LocationSection() {
  const googleMapsUrl = "https://maps.app.goo.gl/9FnnhPctcZBesw1VA"

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-muted/20" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-3">
            Location
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-5">
            Lokasi Acara
          </h2>
          <Divider />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-lg">
            {/* Map embed */}
            <div className="relative aspect-[16/10] md:aspect-video w-full bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15826.5!2d113.63!3d-7.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7d5a5a5a5a5a5%3A0x5a5a5a5a5a5a5a5a!2sBesuk%2C%20Probolinggo!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding Location Map"
                className="w-full h-full"
              />
            </div>

            {/* Address info */}
            <div className="p-5 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>

                {/* Address text */}
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-2">
                    Kediaman Mempelai Wanita
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    Dusun Krajan, RT 004/RW 002
                    <br />
                    Desa Besuk Agung, Kecamatan Besuk
                    <br />
                    (Utara Kecamatan Besuk)
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-medium shadow-md transition-all duration-300 active:bg-primary/90 text-sm"
                >
                  <Navigation className="h-4 w-4" />
                  <span>Buka Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </motion.a>

                <motion.a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-medium border border-border/50 transition-all duration-300 active:bg-secondary/80 text-sm"
                >
                  <span>Petunjuk Arah</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
