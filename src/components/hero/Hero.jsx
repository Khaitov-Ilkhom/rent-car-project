import {Carousel} from 'antd';
import bmwx6 from "../../images/2.png"
import bmw2 from "../../images/aa.png"
import bmw3 from "../../images/bmw-3.png"
import bmw4 from "../../images/white.png"

const cars = [
  {
    id: 1,
    name: "BMW",
    image: bmw3,
    model: "BMW",
    color1: "#C24B18",
    color2: "#F4B79B"
  },
  {
    id: 2,
    name: "BMW",
    image: bmw4,
    model: "BMW",
    color1: "#1A3A7F",
    color2: "#87A0CD"
  },
  {
    id: 3,
    name: "BMW",
    image: bmw2,
    model: "BMW",
    color1: "#000000",
    color2: "#9EA3A6"
  },
  {
    id: 4,
    name: "BMW",
    image: bmwx6,
    model: "BMW",
    color1: "#041A44",
    color2: "#2995D6"
  },
]


const Hero = () => {
  return (
      <Carousel autoplay className='bg-slate-200 pt-[100px]' arrows infinite={true}>
        {
          cars.map(car => (
              <div className='w-full h-full !flex items-center justify-center relative' key={car.id}>
                <div className='absolute z-[-1] top-[20px] left-[100px]'>
                  <h3 style={{
                    background: `linear-gradient(to bottom, ${car.color1} 0%, ${car.color2} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }} className='text-[300px] font-bold leading-none'>{car.model}</h3>
                  <p className='text-[60px] ml-2 font-medium text-slate-700'>{car.name}</p>
                </div>
                <div className='min-h-screen flex items-center justify-center'>
                  <img className='w-[70%]' src={car.image} alt=""/>
                </div>
              </div>
          ))
        }
      </Carousel>
  )
}

export default Hero