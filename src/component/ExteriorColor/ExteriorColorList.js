import React from 'react'

import styled from 'styled-components'

import ExteriorColorChecked from './ExteriorColorChecked'

import Image from '../Image/Image'

const ExteriorColorStyle = styled.ul`
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

const ExteriorColorList = (props) => {
  const { cars, color, setColor } = props

  const list = cars.map((car) => {
    return (
      <li onClick={() => setColor(car.id)} key={`color-${car.name}-${car.id}`}>
        <Image src={car.tilesImage} width="100%" />
        {color === car.name && <ExteriorColorChecked />}
      </li>
    )
  })

  return <ExteriorColorStyle>{list}</ExteriorColorStyle>
}

export default ExteriorColorList
