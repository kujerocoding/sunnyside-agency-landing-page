import React from 'react'
import { useState } from 'react'
import Attribution from './components/Attribution'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import './App.css'
import TestimonialsData from './TestimonialsData'

const App = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu () {
    setIsMenuOpen(prevState => !prevState)
  }

  console.log(TestimonialsData)

  const testimonialElements = TestimonialsData.map(el => 
        <Testimonials name={el.name} 
        imgURL={el.imgURL} 
        jobPosition={el.jobPosition} 
        testimony={el.testimony}/>)

  console.log(testimonialElements)

  return (
    <div className='app--container'>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
      <Main />
      <div className='testimonials--container'>
        <h2>Client Testimonials</h2>
        <div className='client--testimonies--container'>
          {testimonialElements}
        </div>
      </div>
      <Footer />
      <Attribution />
    </div>
  )
}

export default App
