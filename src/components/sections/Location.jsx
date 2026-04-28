import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, ExternalLink } from 'lucide-react'

const schedule = [
  { day: 'Lunes', dayNum: 1, hours: '14:00 – 20:00' },
  { day: 'Martes', dayNum: 2, hours: '14:00 – 20:00' },
  { day: 'Miércoles', dayNum: 3, hours: '14:00 – 20:00' },
  { day: 'Jueves', dayNum: 4, hours: '14:00 – 20:00' },
  { day: 'Viernes', dayNum: 5, hours: '14:00 – 22:30' },
  { day: 'Sábado', dayNum: 6, hours: '14:00 – 22:30' },
  { day: 'Domingo', dayNum: 0, hours: 'Cerrado' },
]

export default function Location() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const isLeftInView = useInView(leftRef, { once: true, margin: '-60px' })
  const isRightInView = useInView(rightRef, { once: true, margin: '-60px' })

  const todayNum = new Date().getDay()

  return (
    <section
      id="ubicacion"
      className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 xl:px-24 bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left: Info */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isLeftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="font-mono text-[#F5A623] uppercase tracking-[0.35em] text-[11px] mb-4">
              ENCUÉNTRANOS
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[44px] text-white font-bold leading-tight mb-8">
              La Choripanería<br className="hidden sm:block" /> te está esperando
            </h2>

            {/* Address */}
            <div className="flex items-start gap-3 mb-5">
              <MapPin size={20} className="text-[#F5A623] flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="font-inter text-[#C8BFB0] text-base leading-relaxed">
                Av. Benito Juárez 2, Centro,<br />
                90000 Tlaxcala de Xicohténcatl, Tlax., México
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 mb-8">
              <Phone size={20} className="text-[#F5A623] flex-shrink-0" aria-hidden="true" />
              <a
                href="tel:+522463301303"
                className="font-inter text-[#C8BFB0] text-base hover:text-[#F5A623] transition-colors"
              >
                +52 246 330 1303
              </a>
            </div>

            {/* Schedule */}
            <div className="border border-white/10 rounded-xl overflow-hidden mb-8">
              {schedule.map(({ day, dayNum, hours }) => {
                const isToday = todayNum === dayNum
                const isClosed = hours === 'Cerrado'
                return (
                  <div
                    key={day}
                    className="flex justify-between items-center px-4 py-3 border-b border-white/6 last:border-b-0 transition-colors"
                    style={{
                      borderLeft: isToday ? '3px solid #F5A623' : '3px solid transparent',
                      backgroundColor: isToday ? 'rgba(245,166,35,0.06)' : 'transparent',
                    }}
                  >
                    <span
                      className={`font-mono text-sm ${isToday ? 'text-[#F5A623] font-medium' : 'text-[#C8BFB0]'}`}
                    >
                      {day}
                    </span>
                    <span
                      className={`font-mono text-sm ${isClosed ? 'text-white/30' : isToday ? 'text-[#F5A623]' : 'text-white'}`}
                    >
                      {hours}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* CTA Button */}
            <a
              href="https://maps.app.goo.gl/CBTAdpVcb7XazCHQ9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#F5A623] text-[#F5A623] font-inter font-semibold rounded-full transition-all duration-300 hover:bg-[rgba(245,166,35,0.12)] w-full sm:w-auto justify-center sm:justify-start"
            >
              Cómo llegar
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isRightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
            className="group"
          >
            <div
              className="overflow-hidden rounded-2xl transition-all duration-300"
              style={{
                border: '2px solid rgba(245,166,35,0.25)',
                height: 420,
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(245,166,35,0.65)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(245,166,35,0.25)')}
            >
              <iframe
                title="Ubicación de La Choripanería en Tlaxcala"
                src="https://maps.google.com/maps?q=La+Choripanería+Av+Benito+Juárez+2+Centro+Tlaxcala+Mexico&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(92%) hue-rotate(180deg) saturate(0.7)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
