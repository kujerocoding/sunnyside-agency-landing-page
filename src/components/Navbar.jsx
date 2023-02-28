import React from 'react'

const Navbar = (props) => {

  const navClassList = props.isMenuOpen ? 'nav--active' : 'nav--lists'

  return (
    <nav>
      <div className='nav--icons--container'>
        <img src="./src/assets/images/logo.svg" alt="logo" />
        <img className='icon--hamburger' src="./src/assets/images/icon-hamburger.svg" 
        alt="hamburger menu" onClick={props.toggleMenu}/>
      </div>
      
      
        <ul className={navClassList}>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
