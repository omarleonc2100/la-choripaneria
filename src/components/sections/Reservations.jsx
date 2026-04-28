import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'

const WEEKDAY_TIMES = ['14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30']
const WEEKEND_TIMES = [...WEEKDAY_TIMES, '20:00', '20:30', '21:00', '21:30', '22:00']

function getTimes(dateStr) {
  if (!dateStr) return WEEKDAY_TIMES
  const day = new Date(dateStr + 'T12:00:00').getDay()
  return day === 5 || day === 6 ? WEEKEND_TIMES : WEEKDAY_TIMES
}

function isDateDisabled(dateStr) {
  const date = new Date(dateStr + 'T12:00:00')
  return date.getDay() === 0
}

const inputBase =
  'w-full bg-white/5 text-white font-inter text-sm placeholder:text-white/35 px-4 py-3.5 rounded-t-xl border-b-2 border-[#F5A623]/40 focus:border-[#F5A623] focus:shadow-[0_2px_12px_rgba(245,166,35,0.25)] outline-none transition-all duration-250'

export default function Reservations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', guests: 2, notes: '' })

  const set = (key, val) => setForm(prev => ({ ...prev, [key]: val }))

  const handleSubmit = e => {
    e.preventDefault()
    const fechaFormateada = form.date
      ? new Date(form.date + 'T12:00:00').toLocaleDateString('es-MX', {
          weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        })
      : form.date
    const mensaje =
      `*NUEVA RESERVACIÓN — La Choripanería*\n\n` +
      `Nombre: ${form.name}\n` +
      `Teléfono: ${form.phone}\n` +
      `Fecha: ${fechaFormateada}\n` +
      `Hora: ${form.time}\n` +
      `Personas: ${form.guests}\n` +
      `Solicitudes especiales: ${form.notes.trim() || 'Ninguna'}`
    const url = `https://wa.me/522463301303?text=${encodeURIComponent(mensaje)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const times = getTimes(form.date)

  const today = new Date().toISOString().split('T')[0]

  return (
    <section
      id="reservas"
      className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 xl:px-24 bg-[#0C0C0C] relative overflow-hidden"
    >
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(245,166,35,0.07) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-2xl mx-auto" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="font-mono text-[#F5A623] uppercase tracking-[0.35em] text-[11px] mb-3">
            RESERVACIONES
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl text-white font-bold leading-tight mb-3">
            Reserva Tu Experiencia
          </h2>
          <p className="font-inter text-[#C8BFB0] text-base">
            Garantiza tu lugar. Te esperamos.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          onSubmit={handleSubmit}
          noValidate
        >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {/* Name */}
                <div>
                  <label htmlFor="res-name" className="sr-only">Nombre completo</label>
                  <input
                    id="res-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={e => set('name', e.target.value)}
                    placeholder="Tu nombre completo"
                    className={inputBase}
                    autoComplete="name"
                  />
                </div>
                {/* Phone */}
                <div>
                  <label htmlFor="res-phone" className="sr-only">Teléfono</label>
                  <input
                    id="res-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={e => set('phone', e.target.value)}
                    placeholder="Tu número de contacto"
                    className={inputBase}
                    autoComplete="tel"
                  />
                </div>
                {/* Date */}
                <div>
                  <label htmlFor="res-date" className="sr-only">Fecha</label>
                  <input
                    id="res-date"
                    type="date"
                    required
                    min={today}
                    value={form.date}
                    onChange={e => {
                      if (!isDateDisabled(e.target.value)) {
                        set('date', e.target.value)
                        set('time', '')
                      }
                    }}
                    className={`${inputBase} [color-scheme:dark]`}
                    style={{ colorScheme: 'dark' }}
                  />
                  {form.date && isDateDisabled(form.date) && (
                    <p className="text-red-400 text-xs mt-1 pl-1">Los domingos estamos cerrados.</p>
                  )}
                </div>
                {/* Time */}
                <div>
                  <label htmlFor="res-time" className="sr-only">Hora</label>
                  <select
                    id="res-time"
                    required
                    value={form.time}
                    onChange={e => set('time', e.target.value)}
                    disabled={!form.date}
                    className={`${inputBase} cursor-pointer disabled:opacity-40`}
                    style={{ colorScheme: 'dark' }}
                  >
                    <option value="" disabled className="bg-[#0C0C0C]">Selecciona un horario</option>
                    {times.map(t => (
                      <option key={t} value={t} className="bg-[#111] text-white">{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guests counter */}
              <div
                className="flex items-center justify-between px-4 py-3.5 mb-4 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(245,166,35,0.2)',
                }}
              >
                <span className="font-inter text-sm text-[#C8BFB0]">Número de personas</span>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => set('guests', Math.max(1, form.guests - 1))}
                    className="w-8 h-8 rounded-full border border-[#F5A623]/50 flex items-center justify-center text-[#F5A623] hover:bg-[#F5A623]/10 transition-colors"
                    aria-label="Reducir número de personas"
                  >
                    <Minus size={14} aria-hidden="true" />
                  </button>
                  <span className="font-mono text-xl text-[#F5A623] w-6 text-center">{form.guests}</span>
                  <button
                    type="button"
                    onClick={() => set('guests', Math.min(20, form.guests + 1))}
                    className="w-8 h-8 rounded-full border border-[#F5A623]/50 flex items-center justify-center text-[#F5A623] hover:bg-[#F5A623]/10 transition-colors"
                    aria-label="Aumentar número de personas"
                  >
                    <Plus size={14} aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Notes */}
              <div className="mb-6">
                <label htmlFor="res-notes" className="sr-only">Solicitudes especiales</label>
                <textarea
                  id="res-notes"
                  rows={3}
                  value={form.notes}
                  onChange={e => set('notes', e.target.value)}
                  placeholder="Alergias, celebraciones, preferencia de mesa..."
                  className={`${inputBase} resize-none`}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={!form.name || !form.phone || !form.date || !form.time}
                className="w-full flex items-center justify-center gap-2 py-4 bg-[#F5A623] text-black font-inter font-semibold rounded-full text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02, boxShadow: '0 0 28px rgba(245,166,35,0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                Confirmar por WhatsApp <span aria-hidden="true">→</span>
              </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
