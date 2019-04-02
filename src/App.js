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
  const [ selectedColorSetId, setSelectedColorSetId ] = useState(0)
  const [ selectedWheelsId, setSelectedWheelsId ] = useState(0)
  const [ isFullScreen, setIsFullScreen ] = useState(false)

  const modal = cars[selectedCarId]
  const { colorSet } = modal

  const car = colorSet.find(({ id }) => id === +selectedColorSetId)
  const wheels = car.wheels.find(({ id }) => id === +selectedWheelsId)

  const destinationCharge = 1250

  const images = wheels.images.map((image) => getCarImage(image))

  const gallerySetting = {
    items: images,
    showNav: isFullScreen,
    showFullscreenButton: true,
    useBrowserFullscreen: false,
    showPlayButton: false,
    showThumbnails: isFullScreen,
    disableArrowKeys: !isFullScreen,
    onScreenChange: (fullScreen) => setIsFullScreen(fullScreen)
  }

  const wheelsGallerySetting = {
    ...gallerySetting,
    startIndex: 6
  }

  const carInfoGallerySetting = {
    ...gallerySetting,
    startIndex: 1
  }

  return (
    <div style={{ maxWidth: '1400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Gallery items={images} showFullscreenButton={false} showPlayButton={false} useBrowserFullscreen={false} />
      <div style={{ display: 'flex', padding: '3rem' }}>
        <div style={{ width: '50%' }}>
          <ExteriorColor
            color={car.name}
            setColor={setSelectedColorSetId}
            carColorSet={colorSet}
            name={car.name}
            price={car.price}
          />
          <Gallery {...wheelsGallerySetting} />
          <Wheels
            type={car.wheels}
            price={wheels.price}
            description={wheels.description}
            selectedType={selectedWheelsId}
            setSelectedType={setSelectedWheelsId}
          />
        </div>
        <div style={{ width: '50%', justifyContent: 'flex-end', display: 'flex' }}>
          <CarInfo
            gallerySetting={carInfoGallerySetting}
            modalPrice={+modal.price}
            exteriorColorPrice={+car.price}
            wheelsPrice={+wheels.price}
            destinationCharge={+destinationCharge}
          />
        </div>
      </div>
    </div>
  )
}

export default App
