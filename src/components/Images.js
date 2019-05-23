import React from 'react';
import Image from './Image';
import './Images.css'

const Images = (props) => {

  const imageList = props.dogPhotos.map((photo, index) => {
    return <Image
      photo={photo}
      key={index}
    />
  });

  return(
    <div id='image-list'>
      {imageList}
    </div>
  )
}

export default Images;
