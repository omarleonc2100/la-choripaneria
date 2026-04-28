import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Menú', href: '#menu' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Reservas', href: '#reservas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ['menu', 'nosotros', 'galeria', 'reservas', 'ubicacion']
    const observers = sectionIds.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.4 }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        animate={{
          backgroundColor: scrolled ? 'rgba(10,10,10,0.88)' : 'transparent',
          borderBottomColor: scrolled ? 'rgba(245,166,35,0.18)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.4 }}
        style={{ borderBottomWidth: 1, borderBottomStyle: 'solid' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-playfair text-lg sm:text-xl text-white font-bold tracking-wide hover:opacity-80 transition-opacity"
            aria-label="La Choripanería — Inicio"
          >
            La Choripanería
            <span className="text-[#F5A623] ml-1">·</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative font-inter text-sm text-[#C8BFB0] hover:text-[#F5A623] transition-colors duration-200 pb-0.5 group"
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 h-px bg-[#F5A623] transition-all duration-300"
                    style={{ width: isActive ? '100%' : '0%' }}
                  />
                  <span className="absolute bottom-0 left-0 h-px bg-[#F5A623] w-0 group-hover:w-full transition-all duration-300" />
                </a>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#reservas"
              className="font-inter font-semibold text-sm text-black bg-[#F5A623] px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_22px_rgba(245,166,35,0.45)]"
            >
              Reservar Mesa
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="md:hidden p-2 text-white hover:text-[#F5A623] transition-colors"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <motion.div
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </motion.div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-screen Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ backgroundColor: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(20px)' }}
            onClick={handleLinkClick}
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="font-playfair text-3xl text-white hover:text-[#F5A623] transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#reservas"
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
                className="mt-4 font-inter font-semibold text-black bg-[#F5A623] px-8 py-3 rounded-full text-lg"
              >
                Reservar Mesa
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
