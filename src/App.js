import React, { useState } from 'react'

import Gallery from './component/Gallery/Gallery'
import CarInfo from './component/CarInfo/CarInfo'
import ExteriorColor from './component/ExteriorColor/ExteriorColor'

import { baseUrl } from './config'

const getCarImage = (color, name) => {
  const imagePath = `${baseUrl}/images/car/colorSet/${color}/${name}.jpeg`
  const images = {
    original: imagePath,
    thumbnail: imagePath
  }

  return images
}

const App = () => {
  const [ color, setColor ] = useState('red')

  const images = [ ...Array(4).keys() ].map((i) => getCarImage(color, i + 1))

  const allColor = [ 'red', 'gray' ]

  return (
    <div style={{ padding: '2rem' }}>
      <Gallery items={images} />
      <ExteriorColor color={color} setColor={setColor} allColor={allColor} />
      <CarInfo color={color} />
    </div>
  )
}

export default App
