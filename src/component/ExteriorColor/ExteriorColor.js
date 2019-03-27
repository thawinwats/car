import React from 'react'
import ExteriorColorInfo from './ExteriorColorInfo'
import ExteriorColorList from './ExteriorColorList'

const ExteriorColor = (props) => {
  console.log(`> : ExteriorColor -> props`, props)
  const { name, price, ...otherProps } = props
  return (
    <React.Fragment>
      <h2>Exterior Colors</h2>

      <ExteriorColorList {...otherProps} />
      <ExteriorColorInfo name={name} price={price} />
    </React.Fragment>
  )
}

export default ExteriorColor
