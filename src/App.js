import React, { useState } from 'react'
import styled from 'styled-components'

import Gallery from './component/Gallery/Gallery'
import ExteriorColor from './component/ExteriorColor/ExteriorColor'
import Wheels from './component/Wheels/Wheels'
import CarInfo from './component/CarInfo/CarInfo'

import { cars } from './db/db'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;

  width: 100vw;
  overflow: hidden;

  @media (min-width: 1024px) {
    max-width: 1400px;
  }
`

const MainContent = styled.main`
  display: flex;
  padding: 3rem;

  @media (max-width: 1024px) {
    padding: 0.5rem;
    flex-direction: column;
  }
`

const HalfWidth = styled.div`
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`

const App = () => {
  // const [ selectedCarId, setSelectedCarId ] = useState(0)
  const [ selectedColorSetId, setSelectedColorSetId ] = useState(0)
  const [ selectedWheelsId, setSelectedWheelsId ] = useState(0)
  const [ isFullScreen, setIsFullScreen ] = useState(false)

  const selectedCarId = 0
  const modal = cars[selectedCarId]
  const { colorSet } = modal

  const car = colorSet.find(({ id }) => id === +selectedColorSetId)
  const wheels = car.wheels.find(({ id }) => id === +selectedWheelsId)

  const destinationCharge = 1250

  const images = wheels.images.map((image) => {
    return {
      original: image,
      thumbnail: image
    }
  })

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
    <Wrapper>
      <Container>
        <Gallery items={images} showFullscreenButton={false} showPlayButton={false} useBrowserFullscreen={false} />
        <MainContent>
          <HalfWidth>
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
          </HalfWidth>
          <HalfWidth>
            <CarInfo
              gallerySetting={carInfoGallerySetting}
              modalPrice={+modal.price}
              exteriorColorPrice={+car.price}
              wheelsPrice={+wheels.price}
              destinationCharge={+destinationCharge}
            />
          </HalfWidth>
        </MainContent>
      </Container>
    </Wrapper>
  )
}

export default App
