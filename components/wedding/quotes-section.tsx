"use client"

import { motion } from "framer-motion"

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

const quotes = [
  {
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    translation:
      "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.",
    source: "QS. Ar-Rum: 21",
  },
]

export function QuotesSection() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Animated background gradient */}
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30" 
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-4"
          >
            Words of Blessing
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-6"
          >
            Doa & Harapan
          </motion.h2>
          <Divider />
        </motion.div>

        <div className="space-y-10">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Glow effect */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute -inset-2 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
              />
              
              {/* Quote card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="relative bg-card/70 backdrop-blur-md border border-border/50 rounded-2xl p-8 md:p-12 shadow-lg transition-all duration-500 hover:shadow-xl hover:border-primary/30"
              >
                {/* Opening quote */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute -top-4 left-6 text-6xl text-primary/25 font-serif"
                >
                  &ldquo;
                </motion.div>

                {/* Quote text */}
                <div className="relative pt-6">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="font-display text-xl md:text-2xl text-primary/90 leading-relaxed text-center mb-6" 
                    dir="rtl"
                  >
                    {quote.arabic}
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-sm md:text-base text-muted-foreground leading-relaxed text-center italic mb-5"
                  >
                    {quote.translation}
                  </motion.p>

                  {/* Source */}
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-sm text-primary font-medium text-center tracking-wide"
                  >
                    {quote.source}
                  </motion.p>
                </div>

                {/* Closing quote */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute -bottom-4 right-6 text-6xl text-primary/25 font-serif"
                >
                  &rdquo;
                </motion.div>

                {/* Corner decorations */}
                <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-primary/15 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-3 right-3 w-8 h-8 border-r-2 border-t-2 border-primary/15 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 w-8 h-8 border-l-2 border-b-2 border-primary/15 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-primary/15 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional prayer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 relative"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl p-8 md:p-10 text-center shadow-md"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-xl md:text-2xl text-foreground leading-relaxed mb-4 italic"
            >
              &quot;Mugi dados keluarga sakinah, mawaddah, warahmah&quot;
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-muted-foreground text-sm md:text-base"
            >
              Semoga menjadi keluarga yang tentram, penuh cinta kasih, dan diridhoi Allah SWT
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Invitation text */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <motion.div 
            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(var(--primary), 0.2)" }}
            className="inline-block bg-primary/5 border border-primary/15 rounded-xl px-8 py-6 shadow-md"
          >
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Merupakan suatu kebahagiaan dan kehormatan bagi kami,
              <br className="hidden sm:block" />
              apabila Bapak/Ibu/Saudara/i berkenan hadir
              <br className="hidden sm:block" />
              untuk memberikan doa restu kepada kami.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
