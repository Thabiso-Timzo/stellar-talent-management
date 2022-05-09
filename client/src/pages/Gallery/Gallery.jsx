import React, { useState } from 'react'

import './Gallery.css'
import imageGalleryData from '../../components/Image-gallery-data/ImageGalleryData'

const Gallery = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div className="galleryWrap">
        {
          imageGalleryData && imageGalleryData.map((slide, index) => {
            return (
              <div className="single" key={index}>
                <img src={slide.imgSrc} alt="" />
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Gallery