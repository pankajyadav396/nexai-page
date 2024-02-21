import { useEffect } from 'react'
import './App.css'
import Backtotop from './components/Backtotop'
import Blockchain from './components/Blockchain'
import Footer from './components/Footer'
import Getstarted from './components/Getstarted'
import Handai from './components/Handai'
import Header from './components/Header'
import Homeassistant from './components/Homeassistant'
import Nexaigif from './components/Nexaigif'
import Preloader from './components/Preloader'
import Threesliders from './components/Threesliders'
import UniqeFeatures from './components/Uniqefeatures'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1600,
      }
    );
  }, [])

  return (
    <>
      <Preloader />
      <Backtotop />
      <div className='overflow-hidden'>
        {/* <Navbar /> */}
        <Header />
        <Homeassistant />
        <UniqeFeatures />
        <Blockchain />
        <Threesliders />
        <Nexaigif />
        <Handai />
        <Getstarted />
        <Footer />
      </div>
    </>
  )
}

export default App
