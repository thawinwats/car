import React from 'react'
import styled, { css } from 'styled-components'

const GalleryArrowStyle = styled.div`
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
    --size: 20px;
    --left-right: 16px
    content: '';
    display: block;

    width: var(--size);
    height: var(--size);

    border: solid #fff;

    transform: rotate(-45deg);
    position: absolute;
    top: 13px;

    ${(props) => {
      if (props.leftSide) {
        return css`
          border-width: 3px 0 0 3px;
          left: var(--left-right);
        `
      } else {
        return css`
          border-width: 0 3px 3px 0;
          right: var(--left-right);
        `
      }
    }};
  }
`

const GalleryArrow = (props) => <GalleryArrowStyle {...props} />

export default GalleryArrow
