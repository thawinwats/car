import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const Gallery = (props) => {
  const setting = {
    showFullscreenButton: false,
    showPlayButton: false
  }

  return <ImageGallery {...props} {...setting} />
}

export default Gallery
