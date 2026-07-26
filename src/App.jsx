import { useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx';
import Features from './Components/feature-section/Features.jsx';
import NumberStats from './Components/NumberStats-section/NumberStats.jsx';
import Pricing from './Components/Pricing-section/pricing.jsx';


function App() {
   return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <NumberStats />
      <Pricing />
    </>
   );
}

export default App
