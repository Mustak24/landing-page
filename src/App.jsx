import './App.css';
import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'
import BenefitsSection from './components/sections/BenefitsSection'
import FeaturesSection from './components/sections/FeaturesSection'
import HeroSection from './components/sections/Hero'
import PriceSection from './components/sections/PriceSection'
import SubscribeSection from './components/sections/SubscribeSection'

function App() {

  return (
    <div className='w-full h-full relative'>
      <Navbar/>
      <HeroSection/>
      <FeaturesSection/>
      <BenefitsSection/>
      <PriceSection/>
      <SubscribeSection/>
      <Footer/>
    </div>
  )
}

export default App
