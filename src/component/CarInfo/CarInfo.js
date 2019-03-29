import React from 'react'
import Gallery from '../Gallery/Gallery'

import styled from 'styled-components'

const CarInfoStyle = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #000;

  /* position: fixed; */

  width: 60%;
  /* width: 30%; */
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
`

const CarInfo = (props) => {
  const { images } = props
  return (
    <CarInfoStyle>
      <CarInfoWrapper>
        <h2>R8 Coupe</h2>
        <p>5.2 FSI RWS</p>
      </CarInfoWrapper>
      <Gallery
        items={images}
        startIndex={1}
        showNav={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={false}
        disableArrowKeys={true}
      />
      <CarInfoWrapper style={{ flexGrow: 1 }}>
        <CarPrice>
          <ul>
            <li>
              <span>MSRP</span>
              <span>$138,700</span>
            </li>
            <li>
              <span>Optional equipment</span>
              <span>$575</span>
            </li>
            <li>
              <span>Destination Charge</span>
              <span>$1,250</span>
            </li>
          </ul>
          <div className="total">
            <span>Price as built</span>
            <h3>$140,525</h3>
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
