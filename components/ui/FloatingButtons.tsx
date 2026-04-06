'use client'

import { useState, useEffect } from 'react'
import { ArrowUp, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import company from '@/data/company.json'
import { trackEvent } from '@/lib/tracking'

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

      {/* Call Button */}
      <a
        href={`tel:${company.contact.phoneRaw}`}
        onClick={() =>
          trackEvent('call_click', {
            event_category: 'engagement',
            event_label: 'Floating Call',
            page: window.location.pathname,
            section: 'floating_button',
          })
        }
        className="w-14 h-14 bg-violet-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group relative"
        aria-label="Call Saanidhya Builders"
      >
        <Phone size={24} className="text-white" />
        <span className="absolute right-16 bg-violet-700 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg pointer-events-none">
          {company.contact.phoneDisplay}
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={company.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackEvent('whatsapp_click', {
            event_category: 'engagement',
            event_label: 'Floating WhatsApp',
            page: window.location.pathname,
            section: 'floating_button',
          })
        }
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group relative"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.855L.057 23.943l6.29-1.648A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.366l-.36-.214-3.732.978.995-3.63-.234-.373A9.818 9.818 0 1 1 12 21.818z" />
        </svg>
        <span className="absolute right-16 bg-green-600 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>

      {/* Back to Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => {
              trackEvent('scroll_top_click', {
                event_category: 'engagement',
                event_label: 'Back to Top Button',
              })
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="w-14 h-14 gradient-bg rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="text-white" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  )
}