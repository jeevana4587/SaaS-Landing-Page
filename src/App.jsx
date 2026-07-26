import { useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx';
import Features from './Components/feature-section/Features.jsx';
import NumberStats from './Components/NumberStats-section/NumberStats.jsx';
import Pricing from './Components/Pricing-section/pricing.jsx';
import FAQSection from './Components/FAQ-section/FAQSection.jsx';
import CTASection from './Components/CTASection.jsx';
import Footer from './Components/Footer.jsx';


function App() {
   return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <NumberStats />
      <Pricing />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
   );
}

export default App
