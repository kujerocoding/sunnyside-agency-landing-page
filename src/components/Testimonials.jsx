import React from 'react'

const Testimonials = (props) => {
  
  return (
   
      <div className='testimony--container'>
          <img  className='testimony--img' src={`src/assets/images/${props.imgURL}`} alt={`${props.name} profile picture`} />
          <p className='testimony--text'>{props.testimony}</p>
          <h3 className='testimony--name'>{props.name}</h3>
          <p className='testimony--jobPosition'>{props.jobPosition}</p>
      </div>
    
  )
}

export default Testimonials
