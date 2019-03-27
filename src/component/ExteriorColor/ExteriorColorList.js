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
  const { allColor, color, setColor } = props

  const list = allColor.map((ownColor) => {
    return (
      <li onClick={() => setColor(ownColor)}>
        <Image src={`car/colorSet/${ownColor}/tiles.jpg`} width="100%" />
        {color === ownColor && <ExteriorColorChecked />}
      </li>
    )
  })

  return <ExteriorColorStyle>{list}</ExteriorColorStyle>
}

export default ExteriorColorList
