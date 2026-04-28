import { useState, useRef, useMemo } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { menuItems, categories, categoryColors, categoryLabels } from '../../data/menuData'

function MenuCard({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
      className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 cursor-default"
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
      whileHover={{
        y: -6,
        borderColor: 'rgba(245,166,35,0.4)',
        boxShadow: '0 12px 40px rgba(245,166,35,0.12)',
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          loading="lazy"
        />
        {/* Category badge */}
        <span
          className={`absolute top-3 left-3 font-mono text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider ${categoryColors[item.category]}`}
        >
          {categoryLabels[item.category]}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-playfair text-lg text-white font-semibold leading-snug mb-1 line-clamp-1">
          {item.name}
        </h3>
        <p className="font-inter text-[13px] text-[#C8BFB0] leading-relaxed line-clamp-2 flex-1">
          {item.description}
        </p>
        <p className="font-mono text-lg text-[#F5A623] font-bold mt-3">
          ${item.price} <span className="text-[10px] text-white/30 font-normal">MXN</span>
        </p>
      </div>
    </motion.article>
  )
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('entradas')
  const [searchQuery, setSearchQuery] = useState('')
  const headingRef = useRef(null)
  const isHeadingInView = useInView(headingRef, { once: true })

  const filtered = useMemo(() => {
    if (searchQuery.trim()) {
      const terms = searchQuery.toLowerCase().split(/\s+/).filter(Boolean)
      return menuItems.filter(item => {
        const haystack = [item.name, item.description, categoryLabels[item.category]]
          .join(' ')
          .toLowerCase()
        return terms.every(t => haystack.includes(t))
      })
    }
    return menuItems.filter(item => item.category === activeCategory)
  }, [searchQuery, activeCategory])

  const handleCategoryChange = cat => {
    setActiveCategory(cat)
    if (searchQuery) setSearchQuery('')
  }

  const tabStyle = isActive => ({
    background: isActive ? '#F5A623' : 'transparent',
    color: isActive ? '#000' : '#F5A623',
    border: isActive ? 'none' : '1px solid rgba(245,166,35,0.45)',
  })

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-24">

        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="font-mono text-[#F5A623] uppercase tracking-[0.35em] text-[11px] mb-3">
            LO QUE SERVIMOS
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-[52px] text-white font-bold leading-tight">
            El Menú que te va a enganchar
          </h2>
        </motion.div>

        {/* Search bar */}
        <div className="relative mb-8 max-w-2xl mx-auto">
          <input
            type="search"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Buscar en el menú..."
            aria-label="Buscar platillos en el menú"
            className="w-full bg-white/5 text-white font-inter text-sm placeholder:text-white/35 pl-4 pr-12 py-3.5 rounded-xl border-b-2 border-[#F5A623]/50 focus:border-[#F5A623] focus:shadow-[0_2px_14px_rgba(245,166,35,0.2)] outline-none transition-all duration-250"
          />
          {searchQuery ? (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C8BFB0] hover:text-[#F5A623] transition-colors"
              aria-label="Limpiar búsqueda"
            >
              <X size={18} aria-hidden="true" />
            </button>
          ) : (
            <Search
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#F5A623] pointer-events-none"
              aria-hidden="true"
            />
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Desktop: Sidebar tabs */}
          <aside className="hidden lg:flex lg:flex-col gap-2 w-52 flex-shrink-0 sticky top-24 self-start">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className="text-left px-4 py-2.5 rounded-xl font-inter text-sm font-medium transition-all duration-200 hover:bg-[rgba(245,166,35,0.12)]"
                style={tabStyle(activeCategory === cat.id && !searchQuery)}
                aria-current={activeCategory === cat.id && !searchQuery ? 'true' : undefined}
              >
                {cat.label}
              </button>
            ))}
          </aside>

          {/* Mobile / Tablet: Horizontal scroll tabs */}
          <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className="flex-shrink-0 px-4 py-2 rounded-full font-inter text-sm font-medium transition-all duration-200"
                style={tabStyle(activeCategory === cat.id && !searchQuery)}
                aria-current={activeCategory === cat.id && !searchQuery ? 'true' : undefined}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              {filtered.length > 0 ? (
                <motion.div
                  key={`${activeCategory}-${searchQuery}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filtered.map((item, i) => (
                    <MenuCard key={item.id} item={item} index={i} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-24 text-center"
                >
                  <Search size={40} className="text-white/20 mb-4" aria-hidden="true" />
                  <p className="font-playfair text-xl text-white/50">
                    No encontramos ese plato
                  </p>
                  <p className="font-inter text-sm text-[#C8BFB0]/60 mt-2">
                    Intenta con otro nombre o ingrediente
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
