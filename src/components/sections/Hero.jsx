import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, MapPin, Star, Clock, Award, ChevronDown } from 'lucide-react'

const rotatingPhrases = [
  'Auténtico Choripán',
  'El que hambre tiene, en choripán piensa',
]

const floatingCards = [
  { Icon: Star,  text: '4.2 · 59+ reseñas en Google', delay: 0 },
  { Icon: Clock, text: 'Abierto · Cierra a las 20:00', delay: 1 },
  { Icon: Award, text: 'Auténtico desde 2020',          delay: 2 },
]

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex(prev => (prev + 1) % rotatingPhrases.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 120)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const titleWords = ['La', 'Choripanería']

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100dvh', minHeight: '100svh' }}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Fallback image (Ken Burns) if video fails */}
      <div
        className="absolute inset-0 z-0 animate-ken-burns"
        style={{
          backgroundImage: 'url(/foto-restaurante-interior.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />

      {/* Overlay 1: Cinematic gradient */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.80) 85%, rgba(0,0,0,0.95) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Overlay 2: Radial vignette */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.50) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Overlay 3: Bottom border line */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 h-px pointer-events-none"
        style={{ background: 'rgba(245,166,35,0.4)' }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4 sm:px-8">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-mono text-[#F5A623] uppercase tracking-[0.35em] text-[10px] sm:text-xs mb-6"
        >
          EST. 2020 · TLAXCALA, MÉXICO
        </motion.p>

        {/* Title */}
        <h1 className="font-playfair font-bold text-white leading-tight mb-2 text-5xl sm:text-7xl lg:text-[7rem] xl:text-[100px]">
          {titleWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.7, ease: 'easeOut' }}
              className="inline-block"
              style={{ marginRight: i < titleWords.length - 1 ? '0.25em' : 0 }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* SVG animated underline */}
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mb-8 w-full max-w-xs sm:max-w-sm lg:max-w-md"
          viewBox="0 0 400 10"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0 5 Q100 9 200 5 Q300 1 400 5"
            stroke="#F5A623"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8, ease: 'easeInOut' }}
          />
        </motion.svg>

        {/* Rotating phrase */}
        <div className="h-8 mb-10 overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={phraseIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="font-inter text-[#C8BFB0] text-base sm:text-xl"
            >
              {rotatingPhrases[phraseIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="#menu"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-[#F5A623] text-black font-inter font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_28px_rgba(245,166,35,0.5)] w-full sm:w-auto"
          >
            Ver Nuestro Menú
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a
            href="#ubicacion"
            className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#F5A623] text-[#F5A623] font-inter font-semibold rounded-full transition-all duration-300 hover:bg-[rgba(245,166,35,0.15)] w-full sm:w-auto"
          >
            <MapPin size={18} aria-hidden="true" />
            Encuéntranos
          </a>
        </motion.div>

        {/* Floating cards row — below CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 w-full max-w-2xl"
        >
          {floatingCards.map(({ Icon, text, delay }) => (
            <motion.div
              key={text}
              className="flex items-center gap-2.5 rounded-2xl px-4 py-2.5"
              style={{
                backdropFilter: 'blur(20px)',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.14)',
              }}
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay }}
            >
              <Icon size={16} className="text-[#F5A623] flex-shrink-0" aria-hidden="true" />
              <span className="text-white text-xs sm:text-sm whitespace-nowrap">{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>


      {/* Scroll Indicator */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
            aria-hidden="true"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown size={28} className="text-[#F5A623]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
