import { FiBarChart2, FiCheckCircle, FiFileText, FiMail, FiPrinter, FiShield, FiTrendingUp } from 'react-icons/fi'
import './App.css'
import ParticleBackground from './components/background-views/ParticleBackground'
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
      <ParticleBackground
        className='fixed top-0 left-0 w-screen h-screen -z-1 blur-[1px]'
        maxSize={110}
        childs={[FiFileText, FiTrendingUp, FiBarChart2, FiCheckCircle, FiPrinter, FiMail, FiShield].map(Icon => (
              <Icon className='size-14 text-white' />
          ))}

      />
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
