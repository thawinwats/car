import React from 'react'
import styled, { css } from 'styled-components'

const GalleryArrowStyle = styled.div`
  --arrow-size: 50px;

  @media (max-width: 1024px) {
    --arrow-size: 25px;
  }

  background: #000000;
  width: var(--arrow-size);
  height: var(--arrow-size);
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
    --left-right: 16px;

    @media (max-width: 1024px) {
      --size: 5px;
      --left-right: 8px;

      top: 9px;

      ${(props) => {
        const leftSide = css`border-width: 2px 0 0 2px;`
        const rightSide = css`border-width: 0 2px 2px 0;`

        return props.leftSide ? leftSide : rightSide
      }};
    }

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
