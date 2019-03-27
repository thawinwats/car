import React, { useState } from 'react'

import Gallery from './component/Gallery/Gallery'
import Image from './component/Image/Image'

import styled from 'styled-components'

import { baseUrl } from './config'

const ExteriorColor = styled.ul`
  display: flex;
  list-style: none;

  padding: 0;

  li {
    width: 90px;
    height: auto;
    margin-right: 1rem;
    cursor: pointer;

    position: relative;
  }
`

const ExteriorColorChecked = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;
  background-color: #019901;

  position: absolute;
  bottom: -2px;
  right: -10px;

  border-radius: 50%;
  border: 1px solid #fff;

  &:after {
    content: '';
    display: block;

    width: 5px;
    height: 10px;
    margin-top: -1px;

    border: solid #fff;
    border-width: 0 2px 2px 0;

    transform: rotate(45deg);
  }
`

const getCarImage = (color, name) => {
  const imagePath = `${baseUrl}/images/car/colorSet/${color}/${name}.jpeg`
  const images = {
    original: imagePath,
    thumbnail: imagePath
  }

  return images
}

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

const CarInfoStyles = styled.div`
  p {
    margin: 0;
    font-size: 0.95rem;
  }
  span {
    font-size: 1.2rem;
  }
`

const CarInfo = (props) => {
  const { name, price } = carColorHandler(props.color)

  return (
    <CarInfoStyles>
      <p>{name}</p>
      <span>${price}</span>
    </CarInfoStyles>
  )
}

const App = () => {
  const [ color, setColor ] = useState('red')

  const images = [ ...Array(4).keys() ].map((i) => getCarImage(color, i + 1))

  return (
    <div style={{ padding: '2rem' }}>
      <Gallery items={images} />
      <h2>Exterior Colors</h2>
      <ExteriorColor>
        <li onClick={() => setColor('red')}>
          <Image src={`car/colorSet/red/tiles.jpg`} width="100%" />
          {color === 'red' && <ExteriorColorChecked />}
        </li>
        <li onClick={() => setColor('gray')}>
          <Image src={`car/colorSet/gray/tiles.jpg`} width="100%" />
          {color === 'gray' && <ExteriorColorChecked />}
        </li>
      </ExteriorColor>
      <CarInfo color={color} />
    </div>
  )
}

export default App
