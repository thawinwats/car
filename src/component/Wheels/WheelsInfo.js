import React from 'react'
import NumberFormat from 'react-number-format'
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
  const { description, price } = props

  return (
    <WheelsInfoStyles>
      <p>{description}</p>
      {+price === 0 ? (
        <span>Standard</span>
      ) : (
        <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
      )}
    </WheelsInfoStyles>
  )
}

export default WheelsInfo
