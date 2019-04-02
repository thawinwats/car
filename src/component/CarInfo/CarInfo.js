import React from 'react'
import NumberFormat from 'react-number-format'
import Gallery from '../Gallery/Gallery'

import styled from 'styled-components'

const CarInfoStyle = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #000;

  width: 60%;
  min-width: 400px;

  h2 {
    margin: 0;
    font-weight: normal;
  }
  p {
    margin: 0;
    font-size: 1.3rem;
    font-weight: bold;
  }
`

const CarInfoWrapper = styled.div`
  margin: 1rem;

  display: flex;
  flex-direction: column;
`

const CarPrice = styled.div`
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

const RequestButton = styled.button`
  background: #000;
  color: #fff;
  padding: 1.3rem;
  font-size: 1rem;
  width: 100%;
  cursor: pointer;
`

const CarInfo = (props) => {
  const { gallerySetting, modalPrice = 0, exteriorColorPrice = 0, wheelsPrice = 0, destinationCharge = 0 } = props

  const optionalPrice = exteriorColorPrice + wheelsPrice
  const totalPrice = modalPrice + optionalPrice + destinationCharge

  return (
    <CarInfoStyle>
      <CarInfoWrapper>
        <h2>R8 Coupe</h2>
        <p>5.2 FSI RWS</p>
      </CarInfoWrapper>
      <Gallery {...gallerySetting} />
      <CarInfoWrapper style={{ flexGrow: 1 }}>
        <CarPrice>
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
        </CarPrice>
      </CarInfoWrapper>
      <CarInfoWrapper>
        <RequestButton>Request a quote</RequestButton>
      </CarInfoWrapper>
    </CarInfoStyle>
  )
}

export default CarInfo
