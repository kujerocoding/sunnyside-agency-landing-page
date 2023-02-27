import React from 'react'
import { useState } from 'react'
import Attribution from './components/Attribution'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import './App.css'

const App = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu () {
    setIsMenuOpen(prevState => !prevState)
  }

  return (
    <div className='app--container'>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
      <Main />
      <Testimonials />
      <Footer />
      <Attribution />
    </div>
  )
}

export default App
