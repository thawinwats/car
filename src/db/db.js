import { baseUrl } from '../config'

const carColorSetUrl = `${baseUrl}/images/car/colorSet`

export const cars = [
  {
    id: 0,
    name: 'Tango Red metallic',
    price: 575,
    tilesImage: `${carColorSetUrl}/tango-red-metallic/tiles.jpg`,
    wheels: [
      {
        id: 0,
        name: '19in',
        price: 0,
        description: '19" 5-arm-V-spoke design High-gloss Black cast wheels',
        images: [
          `${carColorSetUrl}/tango-red-metallic/wheels/19in/1.jpeg`,
          `${carColorSetUrl}/tango-red-metallic/wheels/19in/2.jpeg`,
          `${carColorSetUrl}/tango-red-metallic/wheels/19in/3.jpeg`,
          `${carColorSetUrl}/tango-red-metallic/wheels/19in/4.jpeg`,
          `${carColorSetUrl}/tango-red-metallic/wheels/19in/5.jpeg`,
          `${carColorSetUrl}/tango-red-metallic/wheels/19in/6.jpeg`,
          `${carColorSetUrl}/tango-red-metallic/wheels/19in/7.jpeg`
        ]
      },
      {
        id: 1,
        name: '20in',
        price: 1500,
        description: '20" 10-Y-spoke design Anthracite finish wheels',
        subDescription: 'with 245/30 front and 305/30 rear tires',
        images: [
          `${carColorSetUrl}/tango-red-metallic/wheels/20in/1.jpeg`,
          `${carColorSetUrl}/tango-red-metallic/wheels/20in/2.jpeg`,
          `${carColorSetUrl}/tango-red-metallic/wheels/20in/3.jpeg`,
          `${carColorSetUrl}/tango-red-metallic/wheels/20in/4.jpeg`,
          `${carColorSetUrl}/tango-red-metallic/wheels/20in/5.jpeg`,
          `${carColorSetUrl}/tango-red-metallic/wheels/20in/6.jpeg`,
          `${carColorSetUrl}/tango-red-metallic/wheels/20in/7.jpeg`
        ]
      }
    ]
  },
  {
    id: 1,
    name: 'Daytona Gray pearl',
    price: 575,
    tilesImage: `${carColorSetUrl}/daytona-gray-pearl/tiles.jpg`,
    wheels: [
      {
        id: 0,
        name: '19in',
        price: 0,
        description: '19" 5-arm-V-spoke design High-gloss Black cast wheels',
        images: [
          `${carColorSetUrl}/daytona-gray-pearl/wheels/19in/1.jpeg`,
          `${carColorSetUrl}/daytona-gray-pearl/wheels/19in/2.jpeg`,
          `${carColorSetUrl}/daytona-gray-pearl/wheels/19in/3.jpeg`,
          `${carColorSetUrl}/daytona-gray-pearl/wheels/19in/4.jpeg`,
          `${carColorSetUrl}/daytona-gray-pearl/wheels/19in/5.jpeg`,
          `${carColorSetUrl}/daytona-gray-pearl/wheels/19in/6.jpeg`,
          `${carColorSetUrl}/daytona-gray-pearl/wheels/19in/7.jpeg`
        ]
      },
      {
        id: 1,
        name: '20in',
        price: 1500,
        description: '20" 10-Y-spoke design Anthracite finish wheels',
        subDescription: 'with 245/30 front and 305/30 rear tires',
        images: [
          `${carColorSetUrl}/daytona-gray-pearl/wheels/20in/1.jpeg`,
          `${carColorSetUrl}/daytona-gray-pearl/wheels/20in/2.jpeg`,
          `${carColorSetUrl}/daytona-gray-pearl/wheels/20in/3.jpeg`,
          `${carColorSetUrl}/daytona-gray-pearl/wheels/20in/4.jpeg`,
          `${carColorSetUrl}/daytona-gray-pearl/wheels/20in/5.jpeg`,
          `${carColorSetUrl}/daytona-gray-pearl/wheels/20in/6.jpeg`,
          `${carColorSetUrl}/daytona-gray-pearl/wheels/20in/7.jpeg`
        ]
      }
    ]
  }
]
