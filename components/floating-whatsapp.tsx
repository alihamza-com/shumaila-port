"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { useState } from "react"

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(true)

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'd like to discuss my digital marketing needs.")
    window.open(`https://wa.me/+923181463425?text=${message}`, "_blank")
  }

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors group"
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </motion.button>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3 }}
        className="absolute right-16 top-1/2 -translate-y-1/2 bg-black/80 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap"
      >
        Chat with me on WhatsApp
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-l-4 border-l-black/80 border-y-4 border-y-transparent" />
      </motion.div>
    </motion.div>
  )
}
