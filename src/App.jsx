import React, { useEffect } from 'react'
import Hero from './Components/Hero'
import Lenis from '@studio-freight/lenis'
import Marque from './Components/Marque'
import Infosection from './Components/Infosection'
import About from './Components/About'
import Marques from './Components/Marques'
import Services from './Components/Services'
import Cursour from './Components/Cursour'
import Projects from './Components/Projects'
import Testiomonials from './Components/Testiomonials'
import Contact from './Components/Contact'
import Frequentlyque from './Components/Frequentlyque'
import Footer from './Components/Footer'
import Loader from './Components/Loader'
import Magnito from './Components/Magnito'
import BorderAnim from './Components/BorderAnim'




const App = () => {


  useEffect(() => {
    const lenis = new Lenis({
      wheelMultiplier: 1,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <div className="main w-full min-h-screen bg-[#1A1A1A] text-white">
        <Loader />
        <Cursour />
        <Hero />
        <Marque />
        <Infosection />
        <About />
        <Marques />
        <Services />
        <Projects />
        <Testiomonials />
        <Contact />
        <Frequentlyque />
        <Footer />
        {/* <Magnito/> */}
        {/* <BorderAnim/> */}
      </div>
    </>
  )
}

export default App