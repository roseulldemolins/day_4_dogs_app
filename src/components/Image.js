import React from 'react';
import './Images.css'

const Image = (props) => {

  return (
      <img className='image-card' src={props.photo} alt='dog-image' id='dog-image'/>
  )
}

export default Image;
