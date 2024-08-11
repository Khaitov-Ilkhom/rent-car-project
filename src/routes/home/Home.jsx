 import {Button, Carousel} from "antd";
 import {cars, cardCars} from "../../car-data/carData.js";
 import Header from "../../components/header/Header.jsx";
 import RenderCard from "../../components/renderCard/RenderCard.jsx";
 import {useState} from "react";

const Home = () => {
  const [cardStock, setCardStock] = useState(8);

  return (
      <div className="">
        <div className="mb-[100px]">
          <Header/>
        </div>
        <Carousel autoplay arrows indicators={true}>
          {
            cars.map(car =>
                <div className="w-full h-full !flex items-center justify-center relative" key={car.id}>
                  <div className="absolute z-[-1] top-[-50px] left-[50px]">
                    <h3 style={{color: car.color}} className="text-[200px] font-bold ">{car.model}</h3>
                    <p className="text-[60px] ml-[10px] font-semibold text-slate-700">{car.name}</p>
                  </div>
                  <div className="min-h-screen flex items-center justify-center">
                    <img className='w-[70%]' src={car.image} alt="Car"/>
                  </div>
                </div>
            )
          }
        </Carousel>
        <div className="max-w-[1400px] m-auto">
          <div className="w-full grid grid-cols-4 gap-4 my-[50px]">
            {
              cardCars.slice(0, cardStock).map(car =>
                  <RenderCard key={car.id} car={car}/>
              )
            }
          </div>
          <div className="flex justify-center items-center">
            <Button className='mb-5 rounded bg-blue-600 px-5 py-[20px] text-center text-base font-semibold leading-normal text-white' type="primary" onClick={() => setCardStock(cardStock + 4)}>Show More</Button>
          </div>
        </div>
      </div>
  )
}
 export default Home
