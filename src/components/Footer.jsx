import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='footer--gallery'>
        <img src="src/assets/images/mobile/image-gallery-milkbottles.jpg" alt="white bottle" />
        <img src="src/assets/images/mobile/image-gallery-orange.jpg" alt="orange" />
        <img src="src/assets/images/mobile/image-gallery-cone.jpg" alt="ice cream cone" />
        <img src="src/assets/images/mobile/image-gallery-sugar-cubes.jpg" alt="sugar cubes" />
      </div>
      <div className='footer--linksAndIcons--container'>
        <img className='footer--logo' src="./src/assets/images/footer-logo.svg" alt="sunnyside logo" />
        <ul className='footer--lists'>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
        <div className='footer--icons--container'>
          <div className='icon--facebook icons'></div>
          <div className='icon--instagram icons'></div>
          <div className='icon--twitter icons'></div>
          <div className='icon--pinterest icons'></div>
        </div>
        <div className='testing'></div>
      </div>
    </footer>
  )
}

export default Footer
