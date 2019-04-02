import React from 'react'

import styled from 'styled-components'

import CheckedAble from '../CheckedAble/CheckedAble'

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
  const { carColorSet, color, setColor } = props

  const list = carColorSet.map((car) => {
    return (
      <li onClick={() => setColor(car.id)} key={`color-${car.name}-${car.id}`}>
        <Image src={car.tilesImage} width="100%" />
        {color === car.name && <CheckedAble />}
      </li>
    )
  })

  return <ExteriorColorStyle>{list}</ExteriorColorStyle>
}

export default ExteriorColorList
