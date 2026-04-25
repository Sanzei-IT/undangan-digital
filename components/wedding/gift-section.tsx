"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Gift, Copy, Check } from "lucide-react"
import Image from "next/image"

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

interface PaymentMethod {
  name: string
  type: "bank" | "ewallet"
  accountNumber: string
  accountName: string
  logo: string
}

const paymentMethods: PaymentMethod[] = [
  {
    name: "Bank Mandiri",
    type: "bank",
    accountNumber: "1430016650697",
    accountName: "Azura Nur Rahayu Putri",
    logo: "/images/mandiri.png",
  },
  {
    name: "Dana",
    type: "ewallet",
    accountNumber: "083140716773",
    accountName: "Azura Nur Rahayu Putri",
    logo: "/images/dana.jpg",
  },
]

function PaymentCard({ method, delay }: { method: PaymentMethod; delay: number }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(method.accountNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const textArea = document.createElement("textarea")
      textArea.value = method.accountNumber
      textArea.style.position = "fixed"
      textArea.style.left = "-9999px"
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative w-full"
    >
      <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-5 shadow-md h-full">
        {/* Header with logo */}
        <div className="flex items-center gap-3 mb-4">
          <div className="relative w-10 h-10 rounded-lg bg-white shadow-sm overflow-hidden flex items-center justify-center flex-shrink-0">
            <Image
              src={method.logo}
              alt={method.name}
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-base text-foreground truncate">{method.name}</h3>
            <p className="text-xs text-muted-foreground">
              {method.type === "bank" ? "Transfer Bank" : "E-Wallet"}
            </p>
          </div>
        </div>

        {/* Account details */}
        <div className="space-y-3 mb-4">
          <div className="bg-secondary/50 rounded-lg p-3">
            <p className="text-xs text-muted-foreground mb-1">
              {method.type === "bank" ? "Nomor Rekening" : "Nomor HP"}
            </p>
            <p className="font-mono text-sm sm:text-base text-foreground font-semibold tracking-wider break-all">
              {method.accountNumber}
            </p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Atas Nama</p>
            <p className="text-foreground font-medium text-sm truncate">{method.accountName}</p>
          </div>
        </div>

        {/* Copy button */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={copyToClipboard}
          className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg font-medium shadow-sm transition-all duration-300 text-sm active:bg-primary/90"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="copied"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="flex items-center gap-2"
              >
                <Check className="h-4 w-4" />
                <span>Tersalin!</span>
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="flex items-center gap-2"
              >
                <Copy className="h-4 w-4" />
                <span>Salin Nomor</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.div>
  )
}

export function GiftSection() {
  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="max-w-xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          {/* Icon */}
          <div className="flex justify-center mb-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 shadow-md">
              <Gift className="h-7 w-7 text-primary" />
            </div>
          </div>

          <p className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-3">
            Wedding Gift
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-5">
            Hadiah Pernikahan
          </h2>
          <Divider />
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed text-sm md:text-base mt-5 px-2">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun
            jika Anda ingin memberikan hadiah, kami menyediakan opsi berikut.
          </p>
        </motion.div>

        {/* Payment methods - simplified 2 column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {paymentMethods.map((method, index) => (
            <PaymentCard
              key={method.name}
              method={method}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-xs md:text-sm text-muted-foreground italic">
            Terima kasih atas doa dan hadiah yang diberikan
          </p>
        </motion.div>
      </div>
    </section>
  )
}
