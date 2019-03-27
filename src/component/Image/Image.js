import React from 'react'
import styled, { css } from 'styled-components'

import { baseUrl } from '../../config'

const ImageStyle = styled.img`
  ${(props) => {
    const { width, height, margin, padding } = props

    width && css`width: ${props.width};`
    height && css`height: ${props.height};`
    margin && css`margin: ${props.margin};`
    padding && css`padding: ${props.padding};`
  }};
`

const Image = (props) => {
  const imagePath = `${baseUrl}/images/${props.src}`
  const { width, height, margin, padding } = props

  return <ImageStyle src={imagePath} width={width} height={height} margin={margin} padding={padding} />
}

export default Image
