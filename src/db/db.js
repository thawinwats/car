import { baseUrl } from '../config'

const carColorSetPath = `${baseUrl}/images/car/colorSet`
const wheelsTypePath = `${baseUrl}/images/wheels`

export const cars = [
  {
    id: 0,
    model: 'R8 Coupe',
    description: '5.2 FSI RWS',
    price: 138700,
    colorSet: [
      {
        id: 0,
        name: 'Tango Red metallic',
        price: 575,
        tilesImage: `${carColorSetPath}/tango-red-metallic/tiles.jpg`,
        wheels: [
          {
            id: 0,
            name: '19in',
            price: 0,
            description: '19" 5-arm-V-spoke design High-gloss Black cast wheels',
            typeImage: `${wheelsTypePath}/19in.png`,
            images: [
              `${carColorSetPath}/tango-red-metallic/wheels/19in/1.jpeg`,
              `${carColorSetPath}/tango-red-metallic/wheels/19in/2.jpeg`,
              `${carColorSetPath}/tango-red-metallic/wheels/19in/3.jpeg`,
              `${carColorSetPath}/tango-red-metallic/wheels/19in/4.jpeg`,
              `${carColorSetPath}/tango-red-metallic/wheels/19in/5.jpeg`,
              `${carColorSetPath}/tango-red-metallic/wheels/19in/6.jpeg`,
              `${carColorSetPath}/tango-red-metallic/wheels/19in/7.jpeg`
            ]
          },
          {
            id: 1,
            name: '20in',
            price: 1500,
            typeImage: `${wheelsTypePath}/20in.jpg`,
            description: '20" 10-Y-spoke design Anthracite finish wheels',
            subDescription: 'with 245/30 front and 305/30 rear tires',
            images: [
              `${carColorSetPath}/tango-red-metallic/wheels/20in/1.jpeg`,
              `${carColorSetPath}/tango-red-metallic/wheels/20in/2.jpeg`,
              `${carColorSetPath}/tango-red-metallic/wheels/20in/3.jpeg`,
              `${carColorSetPath}/tango-red-metallic/wheels/20in/4.jpeg`,
              `${carColorSetPath}/tango-red-metallic/wheels/20in/5.jpeg`,
              `${carColorSetPath}/tango-red-metallic/wheels/20in/6.jpeg`,
              `${carColorSetPath}/tango-red-metallic/wheels/20in/7.jpeg`
            ]
          }
        ]
      },
      {
        id: 1,
        name: 'Daytona Gray pearl',
        price: 575,
        tilesImage: `${carColorSetPath}/daytona-gray-pearl/tiles.jpg`,
        wheels: [
          {
            id: 0,
            price: 0,
            typeImage: `${wheelsTypePath}/19in.png`,
            description: '19" 5-arm-V-spoke design High-gloss Black cast wheels',
            images: [
              `${carColorSetPath}/daytona-gray-pearl/wheels/19in/1.jpeg`,
              `${carColorSetPath}/daytona-gray-pearl/wheels/19in/2.jpeg`,
              `${carColorSetPath}/daytona-gray-pearl/wheels/19in/3.jpeg`,
              `${carColorSetPath}/daytona-gray-pearl/wheels/19in/4.jpeg`,
              `${carColorSetPath}/daytona-gray-pearl/wheels/19in/5.jpeg`,
              `${carColorSetPath}/daytona-gray-pearl/wheels/19in/6.jpeg`,
              `${carColorSetPath}/daytona-gray-pearl/wheels/19in/7.jpeg`
            ]
          },
          {
            id: 1,
            price: 1500,
            typeImage: `${wheelsTypePath}/20in.jpg`,
            description: '20" 10-Y-spoke design Anthracite finish wheels',
            subDescription: 'with 245/30 front and 305/30 rear tires',
            images: [
              `${carColorSetPath}/daytona-gray-pearl/wheels/20in/1.jpeg`,
              `${carColorSetPath}/daytona-gray-pearl/wheels/20in/2.jpeg`,
              `${carColorSetPath}/daytona-gray-pearl/wheels/20in/3.jpeg`,
              `${carColorSetPath}/daytona-gray-pearl/wheels/20in/4.jpeg`,
              `${carColorSetPath}/daytona-gray-pearl/wheels/20in/5.jpeg`,
              `${carColorSetPath}/daytona-gray-pearl/wheels/20in/6.jpeg`,
              `${carColorSetPath}/daytona-gray-pearl/wheels/20in/7.jpeg`
            ]
          }
        ]
      }
    ]
  }
]
