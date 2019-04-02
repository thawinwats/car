import React from 'react'

import styled from 'styled-components'

import CheckedAble from '../CheckedAble/CheckedAble'

import Image from '../Image/Image'

const WheelsListStyle = styled.ul`
  display: flex;
  list-style: none;

  padding: 0;

  li {
    width: 90px;
    height: 90px;
    margin-right: 1rem;
    cursor: pointer;
  }
`

const WheelsList = (props) => {
  const { type, selectedType, setSelectedType } = props

  const list = type.map((type) => {
    return (
      <li onClick={() => setSelectedType(type.id)} key={`type-${type.name}-${type.id}`}>
        <Image src={type.typeImage} width="100%" />
        {selectedType === type.id && <CheckedAble />}
      </li>
    )
  })

  return <WheelsListStyle>{list}</WheelsListStyle>
}

export default WheelsList
