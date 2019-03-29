import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery-no-icon.css'

import styled, { css } from 'styled-components'

const GalleryStyle = styled.div`
  .image-gallery-thumbnails {
    background: #f2f2f2;
    padding: .5rem 1rem;
  }

  .image-gallery-thumbnail {
    transition: none;
    width: 260px;

    &.active {
      border: 1px solid #000;
    }
  }
`

const Arrow = styled.div`
  background: #000000;
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 4;
  cursor: pointer;

  top: 50%;
  transform: translateY(-50%);

  ${(props) => {
    if (!props.leftSide) {
      return css`
        right: 0;
      `
    }
  }};

  &:after {
    --size: 25px;
    content: '';
    display: block;

    width: var(--size);
    height: var(--size);

    border: solid #fff;

    transform: rotate(-45deg);
    position: absolute;
    top: 10px;

    ${(props) => {
      if (props.leftSide) {
        return css`
          border-width: 3px 0 0 3px;
          left: 18px;
        `
      } else {
        return css`
          border-width: 0 3px 3px 0;
          right: 18px;
        `
      }
    }};
  }
`

const LeftNav = (onClick, disabled) => {
  return <Arrow disabled={disabled} onClick={onClick} leftSide />
}

const RightNav = (onClick, disabled) => {
  return <Arrow disabled={disabled} onClick={onClick} />
}

const Gallery = (props) => {
  return (
    <GalleryStyle>
      <ImageGallery {...props} renderLeftNav={LeftNav} renderRightNav={RightNav} />
    </GalleryStyle>
  )
}

export default Gallery
