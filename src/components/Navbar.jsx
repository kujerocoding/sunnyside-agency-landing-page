import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className='nav--icons--container'>
        <img src="./src/assets/images/logo.svg" alt="logo" />
        <img src="./src/assets/images/icon-hamburger.svg" alt="hamburger menu" />
      </div>
      
      <ul>
        <li>Abount</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
