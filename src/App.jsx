import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Menu from './components/sections/Menu'
import About from './components/sections/About'
import WhyUs from './components/sections/WhyUs'
import Gallery from './components/sections/Gallery'
import Reviews from './components/sections/Reviews'
import Reservations from './components/sections/Reservations'
import Location from './components/sections/Location'
import Social from './components/sections/Social'
import WhatsAppButton from './components/ui/WhatsAppButton'

export default function App() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <WhyUs />
        <Gallery />
        <Reviews />
        <Reservations />
        <Location />
        <Social />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
