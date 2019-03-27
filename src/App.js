import React, { useState } from 'react'

import Gallery from './component/Gallery/Gallery'
import CarInfo from './component/ExteriorColor/ExteriorColorInfo'
import ExteriorColor from './component/ExteriorColor/ExteriorColor'

import { cars } from './db/db'

const getCarImage = (imagePath) => {
  const images = {
    original: imagePath,
    thumbnail: imagePath
  }

  return images
}

const App = () => {
  const [ selectedCarId, setSelectedCarId ] = useState(0)
  const [ selectedWheelsId, setSelectedWheelsId ] = useState(0)

  const car = cars.find(({ id }) => id === +selectedCarId)
  const wheels = car.wheels.find(({ id }) => id === +selectedWheelsId)

  const images = wheels.images.map((image) => getCarImage(image))

  return (
    <div style={{ padding: '2rem' }}>
      <Gallery items={images} />
      <ExteriorColor color={car.name} setColor={setSelectedCarId} cars={cars} name={car.name} price={car.price} />
    </div>
  )
}

export default App
