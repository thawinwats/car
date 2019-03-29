import React from 'react'
import WheelsList from './WheelsList'
import WheelsInfo from './WheelsInfo'

const Wheels = (props) => {
  const { description, price, ...otherProps } = props
  return (
    <React.Fragment>
      <h2>Wheels</h2>
      <WheelsList {...otherProps} />
      <WheelsInfo description={description} price={price} />
    </React.Fragment>
  )
}

export default Wheels
