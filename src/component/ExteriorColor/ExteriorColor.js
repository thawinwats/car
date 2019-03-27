import React from 'react'
import ExteriorColorList from './ExteriorColorList'

const ExteriorColor = (props) => {
  return (
    <React.Fragment>
      <h2>Exterior Colors</h2>

      <ExteriorColorList {...props} />
    </React.Fragment>
  )
}

export default ExteriorColor
