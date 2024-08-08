 import {Carousel} from "antd";
 import cars from "../../car-data/carData.js";

const Home = () => {

  return (
      <div className="">
        <Carousel arrows indicators={true}>
          {
            cars.map(car =>
                <div className="w-full h-full !flex items-center justify-center relative" key={car.id}>
                  <div className="absolute z-[-1] top-[-50px] left-[50px]">
                    <h3 style={{color: car.color}} className="text-[200px] font-bold ">{car.model}</h3>
                    <p className="text-[60px] ml-[10px] font-semibold text-slate-700">{car.name}</p>
                  </div>
                  <div className="min-h-screen flex items-center justify-center">
                    <img className='w-[80%]' src={car.image} alt="Car"/>
                  </div>
                </div>
            )
          }
        </Carousel>
      </div>
  )
}
export default Home
