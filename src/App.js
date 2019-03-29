import React, { useState } from 'react'

import Gallery from './component/Gallery/Gallery'
import ExteriorColor from './component/ExteriorColor/ExteriorColor'
import Wheels from './component/Wheels/Wheels'
import CarInfo from './component/CarInfo/CarInfo'

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
    <div>
      <Gallery items={images} showFullscreenButton={false} showPlayButton={false} />
      <div style={{ display: 'flex', padding: '3rem' }}>
        <div style={{ width: '50%' }}>
          <ExteriorColor color={car.name} setColor={setSelectedCarId} cars={cars} name={car.name} price={car.price} />
          <Gallery
            items={images}
            startIndex={6}
            showNav={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={false}
            disableArrowKeys={true}
          />
          <Wheels
            type={car.wheels}
            price={wheels.price}
            description={wheels.description}
            selectedType={selectedWheelsId}
            setSelectedType={setSelectedWheelsId}
          />
        </div>
        <div style={{ width: '50%', 'justify-content': 'flex-end', display: 'flex' }}>
          <CarInfo images={images} />
        </div>
      </div>
    </div>
  )
}

export default App
