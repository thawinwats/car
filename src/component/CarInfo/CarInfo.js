import React from 'react'
import styled from 'styled-components'

const CarInfoStyles = styled.div`
  p {
    margin: 0;
    font-size: 0.95rem;
  }
  span {
    font-size: 1.2rem;
  }
`

const carColorHandler = (color) => {
  switch (color) {
    case 'red':
      return { name: 'Tango Red metallic', price: 575 }
    case 'gray':
      return { name: 'Daytona Gray pearl', price: 1075 }

    default:
      break
  }
}

const CarInfo = (props) => {
  const { name, price } = carColorHandler(props.color)

  return (
    <CarInfoStyles>
      <p>{name}</p>
      <span>${price}</span>
    </CarInfoStyles>
  )
}

export default CarInfo
