import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Lenis from 'lenis'
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
import Magnito from './Components/Magnito'
import BorderAnim from './Components/BorderAnim'
import Loader from './Components/Loader'




const App = () => {


  function lenisFn() {
    const lenis = new Lenis({
      wheelMultiplier: 2,
      duration: 1.5,
      easing: (x) => 1 - Math.pow(1 - x, 5),
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
  lenisFn();

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