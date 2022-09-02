import React from 'react'
import car from '../../assets/car-image.png'
import './style.css'
const Card = ({cars}) => {
  return (
    <div className='card-container'>
      <div className='card'>
        <div className='card-image'>
          <img src={car} alt='car' />
        </div>
        <div className='card-body'>
          <div className='info'>
            <p>{cars.brand}</p>
            <span className='model'>{cars.model}</span>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Card
