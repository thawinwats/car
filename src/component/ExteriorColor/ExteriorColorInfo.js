import React from 'react'
import styled from 'styled-components'

const ExteriorColorInfoStyles = styled.div`
  p {
    margin: 0;
    font-size: 0.95rem;
  }
  span {
    font-size: 1.2rem;
  }
`

const ExteriorColorInfo = (props) => {
  const { name, price } = props
  console.log(`> : ExteriorColorInfo -> price`, price)

  return (
    <ExteriorColorInfoStyles>
      <p>{name}</p>
      <span>${price}</span>
    </ExteriorColorInfoStyles>
  )
}

export default ExteriorColorInfo
