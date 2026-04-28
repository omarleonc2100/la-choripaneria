import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { reviews } from '../../data/reviewsData'

function StarRating({ stars }) {
  return (
    <div className="flex gap-1 mb-4" aria-label={`${stars} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map(n => (
        <Star
          key={n}
          size={18}
          className={n <= stars ? 'text-[#F5A623] fill-[#F5A623]' : 'text-white/20 fill-white/10'}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default function Reviews() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef(null)
  const progressRef = useRef(null)
  const headingRef = useRef(null)
  const isHeadingInView = useInView(headingRef, { once: true })

  const INTERVAL = 4000

  const goTo = useCallback(index => {
    setCurrent((index + reviews.length) % reviews.length)
    setProgress(0)
  }, [])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    if (paused) return
    progressRef.current = 0
    const step = 16
    const increment = (step / INTERVAL) * 100

    intervalRef.current = setInterval(() => {
      progressRef.current += increment
      setProgress(Math.min(progressRef.current, 100))
      if (progressRef.current >= 100) {
        next()
      }
    }, step)

    return () => clearInterval(intervalRef.current)
  }, [paused, next])

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 xl:px-24 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="font-mono text-[#F5A623] uppercase tracking-[0.35em] text-[11px] mb-3">
            LO QUE DICEN NUESTROS CLIENTES
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-[52px] text-white font-bold leading-tight">
            Opiniones reales, sabor real
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="rounded-2xl p-7 sm:p-10"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.10)',
                }}
              >
                <StarRating stars={reviews[current].stars} />
                <blockquote>
                  <p className="font-playfair italic text-white text-lg sm:text-xl leading-[1.7] mb-6">
                    &ldquo;{reviews[current].text}&rdquo;
                  </p>
                </blockquote>
                <div>
                  <p className="font-inter text-sm text-white font-semibold">
                    {reviews[current].name}
                  </p>
                  <p className="font-mono text-xs text-[#F5A623] mt-0.5">
                    {reviews[current].city}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav Arrows */}
          <div className="flex items-center justify-between mt-6 gap-4">
            <button
              onClick={prev}
              aria-label="Reseña anterior"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#C8BFB0] hover:border-[#F5A623] hover:text-[#F5A623] transition-colors"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>

            {/* Dots */}
            <div className="flex gap-2 items-center">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Ir a reseña ${i + 1}`}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? 8 : 6,
                    height: i === current ? 8 : 6,
                    backgroundColor: i === current ? '#F5A623' : 'rgba(255,255,255,0.25)',
                    border: i !== current ? '1px solid rgba(255,255,255,0.3)' : 'none',
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Siguiente reseña"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#C8BFB0] hover:border-[#F5A623] hover:text-[#F5A623] transition-colors"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 h-0.5 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#F5A623] rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}
