import React from 'react'

const Navbar = (props) => {
  return (
    <nav>
      <div className='nav--icons--container'>
        <img src="./src/assets/images/logo.svg" alt="logo" />
        <img src="./src/assets/images/icon-hamburger.svg" 
        alt="hamburger menu" onClick={props.toggleMenu}/>
      </div>
      
      {props.isMenuOpen && 
        <ul>
          <li>Abount</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
      </ul>}
    </nav>
  )
}

export default Navbar
