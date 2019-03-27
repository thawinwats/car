import React from 'react'
import styled from 'styled-components'

const ExteriorColorCheckedStyle = styled.div`
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

const ExteriorColorChecked = () => <ExteriorColorCheckedStyle />

export default ExteriorColorChecked
