import React from 'react'
import Attribution from './components/Attribution'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import './App.css'

const App = () => {
  return (
    <div className='app--container'>
      <Navbar />
      <Main />
      <Testimonials />
      <Footer />
      <Attribution />
    </div>
  )
}

export default App
