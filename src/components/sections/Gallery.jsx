import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plus } from 'lucide-react'
import { InstagramIcon } from '../ui/SocialIcons'

const images = [
  { src: '/galeria-01.jpg', alt: 'Choripán argentino tradicional de La Choripanería', span: 'lg:col-span-2 lg:row-span-2' },
  { src: '/galeria-02.jpg', alt: 'Vista del local La Choripanería en Tlaxcala', span: '' },
  { src: '/galeria-03.jpg', alt: 'Detalle de los ingredientes frescos del choripán', span: '' },
  { src: '/galeria-04.jpg', alt: 'Hamburguesa artesanal de La Choripanería', span: '' },
  { src: '/galeria-05.jpg', alt: 'Pizza Argentina con chorizo selecto', span: '' },
  { src: '/galeria-06.jpg', alt: 'Empanadas argentinas recién preparadas', span: 'lg:col-span-2' },
  { src: '/galeria-07.jpg', alt: 'Mesa preparada con el menú completo', span: '' },
  { src: '/galeria-08.jpg', alt: 'Ambiente nocturno de La Choripanería', span: '' },
]

function GalleryImage({ src, alt, span, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: 'easeOut' }}
      className={`relative overflow-hidden rounded-2xl group cursor-pointer ${span}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover aspect-square lg:aspect-auto min-h-[200px] sm:min-h-[240px] transition-transform duration-500 group-hover:scale-[1.04]"
        loading="lazy"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileHover={{ scale: 1.0, opacity: 1 }}
          className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center"
        >
          <Plus size={22} className="text-white" aria-hidden="true" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const headingRef = useRef(null)
  const isHeadingInView = useInView(headingRef, { once: true })

  return (
    <section id="galeria" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 xl:px-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="font-mono text-[#F5A623] uppercase tracking-[0.35em] text-[11px] mb-3">
            NUESTRA GALERÍA
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-[52px] text-white font-bold leading-tight">
            Cada choripán, una obra de arte
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:auto-rows-[220px]">
          {images.map((img, i) => (
            <GalleryImage key={img.src} {...img} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10 sm:mt-14">
          <motion.a
            href="https://www.instagram.com/lachoripaneriatlx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 sm:px-8 py-3.5 border-2 border-[#F5A623] text-[#F5A623] font-inter font-semibold rounded-full transition-all duration-300 w-full sm:w-auto justify-center"
            whileHover={{
              backgroundColor: '#F5A623',
              color: '#000000',
              scale: 1.04,
            }}
            transition={{ duration: 0.2 }}
          >
            <InstagramIcon size={20} />
            Síguenos en Instagram @lachoripaneriatlx
          </motion.a>
        </div>

      </div>
    </section>
  )
}
