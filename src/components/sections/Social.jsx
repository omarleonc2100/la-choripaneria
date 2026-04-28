import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from '../ui/SocialIcons'

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/lachoripaneriatlx',
    Icon: InstagramIcon,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/LaChoriTLX',
    Icon: FacebookIcon,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/522463301303',
    Icon: WhatsAppIcon,
  },
]

export default function Social() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 xl:px-24 bg-[#0C0C0C]"
      ref={ref}
    >
      <div className="max-w-2xl mx-auto text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[44px] text-white font-bold leading-tight mb-10 sm:mb-12">
            Síguenos y mantente al día
          </h2>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-4 sm:gap-5"
        >
          {socials.map(({ label, href, Icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Síguenos en ${label}`}
              className="flex items-center justify-center rounded-full text-white transition-all duration-300"
              style={{
                width: 56,
                height: 56,
                border: '2px solid rgba(245,166,35,0.5)',
              }}
              whileHover={{
                backgroundColor: '#F5A623',
                color: '#000000',
                scale: 1.12,
                borderColor: '#F5A623',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
