import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Flame, Leaf, Heart } from 'lucide-react'

const marqueeText =
  'Chorizo Argentino Selecto · A la Plancha al Momento · Pan Artesanal · El Favorito de Tlaxcala · Chimichurri Casero · '

const features = [
  {
    Icon: Flame,
    title: 'Sabor 100% Argentino',
    text: 'Receta tradicional porteña. Chorizo importado, chimichurri casero y pan artesanal tostado en plancha.',
  },
  {
    Icon: Leaf,
    title: 'Ingredientes del Día',
    text: 'Trabajamos con ingredientes frescos cada jornada. Lo que sirves hoy, llegó hoy.',
  },
  {
    Icon: Heart,
    title: 'Hecho con Pasión',
    text: 'Desde 2020 preparamos cada choripán con el mismo amor del primer día. Se nota en cada bocado.',
  },
]

function FeatureCard({ Icon, title, text, delay }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
      className="group relative flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-default"
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
      whileHover={{
        borderColor: 'rgba(245,166,35,0.5)',
        boxShadow: '0 12px 40px rgba(245,166,35,0.10)',
      }}
    >
      <div className="w-16 h-16 flex items-center justify-center mb-6">
        <Icon size={52} className="text-[#F5A623]" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <h3 className="font-playfair text-xl sm:text-2xl text-white font-bold mb-3">{title}</h3>
      <p className="font-inter text-sm sm:text-[15px] text-[#C8BFB0] leading-relaxed">{text}</p>
      {/* Bottom accent line */}
      <div className="mt-6 h-0.5 bg-[#F5A623] w-10 mx-auto transition-all duration-300 group-hover:w-10" />
    </motion.div>
  )
}

export default function WhyUs() {
  return (
    <section className="py-20 sm:py-28 bg-[#0D0D0D] overflow-hidden relative">
      {/* Radial amber glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(245,166,35,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Marquee */}
      <div className="w-full border-y border-white/8 py-3 overflow-hidden mb-16 sm:mb-20 relative">
        <div
          className="flex whitespace-nowrap animate-marquee cursor-default"
          style={{ willChange: 'transform' }}
          onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {[...Array(2)].map((_, i) => (
            <span
              key={i}
              className="font-mono text-[#F5A623] tracking-[0.2em] text-sm pr-8"
              aria-hidden={i > 0}
            >
              {marqueeText.repeat(4)}
            </span>
          ))}
        </div>
      </div>

      {/* Heading */}
      <div className="text-center mb-12 sm:mb-16 px-4">
        <p className="font-mono text-[#F5A623] uppercase tracking-[0.35em] text-[11px] mb-3">
          POR QUÉ ELEGIRNOS
        </p>
        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-white font-bold">
          La diferencia está en el sabor
        </h2>
      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <FeatureCard key={feat.title} {...feat} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}
