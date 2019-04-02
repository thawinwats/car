import React from 'react'
import NumberFormat from 'react-number-format'

import styled from 'styled-components'

const CarPriceStyle = styled.div`
  width: 100%;

  ul {
    padding: 0;
    margin-bottom: 0;
    padding-bottom: 1.2rem;
    border-bottom: 1px solid;
    li {
      display: flex;
      justify-content: space-between;
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const CarPrice = (props) => {
  const { modalPrice, optionalPrice, destinationCharge } = props
  const totalPrice = modalPrice + optionalPrice + destinationCharge
  return (
    <CarPriceStyle>
      <ul>
        <li>
          <span>MSRP</span>
          <NumberFormat value={modalPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        </li>
        <li>
          <span>Optional equipment</span>
          <NumberFormat value={optionalPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        </li>
        <li>
          <span>Destination Charge</span>
          <NumberFormat value={destinationCharge} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        </li>
      </ul>
      <div className="total">
        <span>Price as built</span>
        <NumberFormat value={totalPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} />
      </div>
    </CarPriceStyle>
  )
}

export default CarPrice
