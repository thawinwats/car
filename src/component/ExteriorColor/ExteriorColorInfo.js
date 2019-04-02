import React from 'react'
import NumberFormat from 'react-number-format'
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

  return (
    <ExteriorColorInfoStyles>
      <p>{name}</p>
      <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
    </ExteriorColorInfoStyles>
  )
}

export default ExteriorColorInfo
