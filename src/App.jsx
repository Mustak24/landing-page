import './App.css'
import StarsBackground from './components/background-views/StarsBackground'
import Navbar from './components/layouts/Navbar'
import FeturesSection from './components/sections/FeaturesSection'
import HeroSection from './components/sections/Hero'
import PriceSection from './components/sections/PriceSection'
import SubscribeSection from './components/sections/SubscribeSection'

function App() {

  return (
    <div className='w-full h-full relative'>
      {/* <StarsBackground className="fixed top-0 left-0 w-screen h-screen bg-white -z-1" /> */}
      <Navbar/>
      <HeroSection/>
      <FeturesSection/>
      <PriceSection/>
      <SubscribeSection/>
    </div>
  )
}

export default App
