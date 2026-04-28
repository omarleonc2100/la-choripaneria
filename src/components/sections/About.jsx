import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

function StatItem({ target, suffix, label, decimal, display }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!isInView || display) return
    const end = parseFloat(target)
    const steps = 60
    const duration = 2000
    const increment = end / steps
    let step = 0
    const timer = setInterval(() => {
      step++
      const current = Math.min(increment * step, end)
      setVal(decimal ? parseFloat(current.toFixed(1)) : Math.floor(current))
      if (step >= steps) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, target, decimal, display])

  return (
    <div ref={ref} className="text-center">
      <p className="font-playfair text-2xl sm:text-3xl text-white font-bold relative inline-block">
        {display ? display : (decimal ? val.toFixed(1) : val) + suffix}
        {isInView && (
          <motion.span
            className="absolute -bottom-1 left-0 h-0.5 bg-[#F5A623]"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 2, duration: 0.6 }}
          />
        )}
      </p>
      <p className="font-mono text-[10px] sm:text-xs text-[#C8BFB0] mt-2 tracking-wider uppercase leading-tight">
        {label}
      </p>
    </div>
  )
}

const stats = [
  { target: '5', suffix: '+', label: 'Años de experiencia', decimal: false },
  { target: '4.8', suffix: '', label: 'Calificación promedio', decimal: true },
  { target: '10', suffix: 'K+', label: 'Choripanes servidos', decimal: false },
]

export default function About() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const isLeftInView = useInView(leftRef, { once: true, margin: '-80px' })
  const isRightInView = useInView(rightRef, { once: true, margin: '-80px' })

  return (
    <section
      id="nosotros"
      className="py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-16 xl:px-24 bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -60 }}
            animate={isLeftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <p className="font-mono text-[#F5A623] uppercase tracking-[0.35em] text-[11px] mb-4">
              NUESTRA HISTORIA
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[44px] text-white font-bold leading-tight mb-6">
              De Buenos Aires a Tlaxcala,
              <br className="hidden sm:block" /> con todo el sabor
            </h2>

            <div className="space-y-4 text-[#C8BFB0] font-inter text-base leading-relaxed">
              <p>
                La Choripanería nació en 2020 con una misión clara: traer el auténtico sabor del
                choripán argentino al corazón de Tlaxcala. Inspirados en la tradición de las
                parrillas porteñas, cada chorizo es seleccionado con cuidado y preparado al
                momento sobre la plancha.
              </p>
              <p>
                Más que un restaurante, somos un punto de encuentro. Un lugar donde el olor a
                chorizo asado llena el ambiente y cada bocado cuenta una historia de sabor,
                calidad y pasión. Desde nuestras empanadas hasta nuestras hamburguesas y pizzas,
                todo está hecho con ingredientes frescos y mucho amor.
              </p>
              <p>
                Ubicados en el centro histórico de Tlaxcala, te esperamos de lunes a sábado con
                el mejor choripán de la región. Porque el que hambre tiene, en choripán piensa.
              </p>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center gap-4 my-8" aria-hidden="true">
              <div className="flex-1 h-px bg-white/10" />
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 0L12.5 7.5H20L13.75 12L16.25 19.5L10 15L3.75 19.5L6.25 12L0 7.5H7.5L10 0Z"
                  fill="#F5A623"
                />
              </svg>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8">
              {stats.map(stat => (
                <StatItem key={stat.label} {...stat} />
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 60 }}
            animate={isRightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.15 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl group">
              <img
                src="/foto-restaurante-interior.jpg"
                alt="Interior del restaurante La Choripanería en Tlaxcala"
                className="w-full object-cover aspect-[4/3] lg:aspect-[3/4] transition-transform duration-500 group-hover:scale-[1.04]"
                loading="lazy"
              />
              {/* Amber corner accents */}
              <span
                className="absolute top-4 right-4 pointer-events-none"
                style={{
                  borderTop: '3px solid #F5A623',
                  borderRight: '3px solid #F5A623',
                  width: 32,
                  height: 32,
                  borderRadius: '0 4px 0 0',
                  display: 'block',
                }}
                aria-hidden="true"
              />
              <span
                className="absolute bottom-4 left-4 pointer-events-none"
                style={{
                  borderBottom: '3px solid #F5A623',
                  borderLeft: '3px solid #F5A623',
                  width: 32,
                  height: 32,
                  borderRadius: '0 0 0 4px',
                  display: 'block',
                }}
                aria-hidden="true"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
