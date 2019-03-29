import React from 'react'
import styled from 'styled-components'

const WheelsInfoStyles = styled.div`
  p {
    margin: 0;
    font-size: 0.95rem;
  }
  span {
    font-size: 1.2rem;
  }
`

const WheelsInfo = (props) => {
  console.log(`> : WheelsInfo -> props`, props)
  const { description, price } = props

  return (
    <WheelsInfoStyles>
      <p>{description}</p>
      <span>{+price === 0 ? 'Standard' : `$${price}`}</span>
    </WheelsInfoStyles>
  )
}

export default WheelsInfo
