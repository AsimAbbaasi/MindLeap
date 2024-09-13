import { useState } from 'react'
import './App.css'
import Services from './components/Services'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Working from './components/Working'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div  className=' font-primary  overflow-x-hidden xl:bg-black'> </div>
    <Navbar/>
    <Hero/>
    <Services/>
    <About/>
    <Working/>
    <Pricing/>
    <Testimonials/>
    <Contact/>
    <Footer></Footer>
    
    </>
  )
}

export default App
