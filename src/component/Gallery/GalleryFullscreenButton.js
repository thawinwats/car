import React from 'react'
import { FaCameraRetro } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

import styled from 'styled-components'

const GalleryFullscreenButtonStyle = styled.div`
  .image-gallery-fullscreen-button {
    --size: 25px;

    @media (max-width: 1024px) {
      --size: 15px;
    }

    width: var(--size);
    height: var(--size);
    background: #000;

    color: #fff;
    padding: 5px;
    margin: 5px;

    &.active {
      --size: 40px;

      @media (max-width: 1024px) {
        --size: 15px;
      }

      top: -1px;
      margin: 0;
    }
  }
`

const GalleryFullscreenButton = (onClick, isFullscreen) => {
  return (
    <GalleryFullscreenButtonStyle onClick={onClick}>
      {!isFullscreen ? (
        <FaCameraRetro className={'image-gallery-fullscreen-button'} />
      ) : (
        <IoMdClose className={'image-gallery-fullscreen-button active'} />
      )}
    </GalleryFullscreenButtonStyle>
  )
}

export default GalleryFullscreenButton
