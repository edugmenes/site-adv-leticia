import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Differentials from './components/Differentials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { HurcaneWidget } from 'hurcane-react'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Differentials />
        <Contact />
      </main>
      <Footer />
      <HurcaneWidget
        agentId="tire-suas-duvidas-1778523717415"
        color="#C4952E"
        theme="light"
        position="bottom-right"
      />
    </>
  )
}