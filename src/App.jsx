import { useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx';
import Features from './Components/feature-section/Features.jsx';
import NumberStats from './Components/NumberStats-section/NumberStats.jsx';
import Pricing from './Components/Pricing-section/pricing.jsx';
import FAQSection from './Components/FAQ-section/FAQSection.jsx';
import CTASection from './Components/CTASection.jsx';
import Footer from './Components/Footer.jsx';
import image85 from "./assets/image 85.png";
import image87 from "./assets/image 87.png";



function App() {
   return (
    <div>
      {/* new wrapper around just Navbar + Hero */}
      <div className="relative isolate bg-black overflow-hidden">
        <img
          src={image87}
          alt=""
          className="pointer-events-none absolute -z-10"
          style={{ width: '667px', height: '985px', left: '0px', top: '-100px', transform: 'rotate(0deg)' }}
        />
        <img
          src={image85}
          alt=""
          className="pointer-events-none absolute -z-10"
          style={{ width: '774px', height: '985px', right: '-100px', top: '-100px', transform: 'rotate(0deg)' }}
        />
        <Navbar />
        <Hero />
      </div>
      <Features />
      <NumberStats />
      <Pricing />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
   );
}

export default App
