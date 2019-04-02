import React from 'react'
import styled, { css } from 'styled-components'

const ImageStyle = styled.img`
  ${(props) => {
    const { width, height, margin, padding } = props

    width && css`width: ${props.width};`
    height && css`height: ${props.height};`
    margin && css`margin: ${props.margin};`
    padding && css`padding: ${props.padding};`
  }};
`

const Image = (props) => <ImageStyle {...props} />

export default Image
