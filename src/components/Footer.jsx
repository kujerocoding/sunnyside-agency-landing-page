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
          <li>Servies</li>
          <li>Projects</li>
        </ul>
        <div className='footer--icons--container'>
          <img src="src/assets/images/icon-facebook.svg" alt="facebook" />
          <img src="src/assets/images/icon-instagram.svg" alt="instagram" />
          <img src="src/assets/images/icon-twitter.svg" alt="twitter" />
          <img src="src/assets/images/icon-pinterest.svg" alt="pinterest" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
