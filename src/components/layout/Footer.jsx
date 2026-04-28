import { InstagramIcon, FacebookIcon, WhatsAppIcon } from '../ui/SocialIcons'

const navLinks = [
  { label: 'Menú', href: '#menu' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Reservas', href: '#reservas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

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

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/5">
      {/* Top Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-10 sm:py-14">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Logo */}
          <div className="text-center sm:text-left">
            <p className="font-playfair text-xl text-white font-bold">
              La Choripanería<span className="text-[#F5A623] ml-1">·</span>
            </p>
            <p className="font-mono text-xs text-[#C8BFB0] mt-1 tracking-widest uppercase">
              EST. 2020 · Tlaxcala, México
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="font-inter text-sm text-[#C8BFB0] hover:text-[#F5A623] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[rgba(245,166,35,0.4)] text-white hover:bg-[#F5A623] hover:text-black hover:border-[#F5A623] transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/7 max-w-7xl mx-auto" />

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p className="font-inter text-xs text-[#C8BFB0]">
            La Choripanería &copy; {new Date().getFullYear()} · Todos los derechos reservados
          </p>
          <div className="flex gap-4">
            <a href="#" className="font-inter text-xs text-[#C8BFB0] hover:text-[#F5A623] transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="font-inter text-xs text-[#C8BFB0] hover:text-[#F5A623] transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
