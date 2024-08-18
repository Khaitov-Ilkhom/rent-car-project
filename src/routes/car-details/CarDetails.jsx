import {useState} from "react";

import {Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import redCar1 from "../../images/red/2.png";
import redCar2 from "../../images/red/3.png";
import redCar3 from "../../images/red/4.png";
import redCar4 from "../../images/red/5.png";
import redCar5 from "../../images/red/6.png";
import redCar6 from "../../images/red/7.png";
import redCar7 from "../../images/red/8.png";
import redCar8 from "../../images/red/1.png";
import blackCar1 from "../../images/black/2.png";
import blackCar2 from "../../images/black/3.png";
import blackCar3 from "../../images/black/4.png";
import blackCar4 from "../../images/black/5.png";
import blackCar5 from "../../images/black/6.png";
import blackCar6 from "../../images/black/7.png";
import blackCar7 from "../../images/black/8.png";
import blackCar8 from "../../images/black/1.png";
import grayCar1 from "../../images/gray/2.png";
import grayCar2 from "../../images/gray/3.png";
import grayCar3 from "../../images/gray/4.png";
import grayCar4 from "../../images/gray/5.png";
import grayCar5 from "../../images/gray/6.png";
import grayCar6 from "../../images/gray/7.png";
import grayCar7 from "../../images/gray/8.png";
import grayCar8 from "../../images/gray/1.png";
import whiteCar1 from "../../images/white/2.png";
import whiteCar2 from "../../images/white/3.png";
import whiteCar3 from "../../images/white/4.png";
import whiteCar4 from "../../images/white/5.png";
import whiteCar5 from "../../images/white/6.png";
import whiteCar6 from "../../images/white/7.png";
import whiteCar7 from "../../images/white/8.png";
import whiteCar8 from "../../images/white/1.png";


import {
  CarCardFillHeart,
  CarDetailsStarEmpty,
  CarDetailsStarFill,
} from "../../images/svgs.jsx";
import {Link} from "react-router-dom";

const redCars = [
  redCar1,
  redCar2,
  redCar3,
  redCar4,
  redCar5,
  redCar6,
  redCar7,
  redCar8,
];

const blackCars = [
  blackCar1,
  blackCar2,
  blackCar3,
  blackCar4,
  blackCar5,
  blackCar6,
  blackCar7,
  blackCar8,
];

const grayCars = [
  grayCar1,
  grayCar2,
  grayCar3,
  grayCar4,
  grayCar5,
  grayCar6,
  grayCar7,
  grayCar8,
];

const whiteCars = [
  whiteCar1,
  whiteCar2,
  whiteCar3,
  whiteCar4,
  whiteCar5,
  whiteCar6,
  whiteCar7,
  whiteCar8,
];

const CarDetails = () => {
  const [cars, setCars] = useState(redCars);

  return (
      <div className="flex w-full max-w-[1020px] flex-col gap-5">
        <div className="flex justify-between gap-5">
          <div className="flex shrink-0 flex-col gap-5">
            <div className="flex w-[492px] items-center justify-center overflow-hidden rounded-[10px] bg-white">
              <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={10}
                  slidesPerView={1}
                  navigation={true}
                  pagination={{clickable: true}}
                  scrollbar={{draggable: true}}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
              >
                {cars.map((car, index) => (
                    <SwiperSlide key={index}>
                      <img
                          className="mx-auto h-[360px] overflow-hidden rounded-[10px] bg-white object-contain shadow-lg"
                          src={car}
                          alt="Main"
                      />
                    </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="flex w-[492px] items-center justify-center gap-5">
              <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={10}
                  slidesPerView={3}
                  navigation
                  pagination={{clickable: true}}
                  scrollbar={{draggable: true}}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
              >
                {cars.map((car, index) => (
                    <SwiperSlide key={index}>
                      <img
                          className="h-[124px] w-[148px] rounded-[10px] bg-white object-contain shadow-lg"
                          src={car}
                          alt="Main"
                      />
                    </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="flex w-full flex-col justify-between gap-8 rounded-[10px] bg-white p-5 shadow-lg">
            <div className="flex flex-col gap-8">
              <div className="flex w-full items-start justify-between">
                <div className="flex flex-col gap-2">
                <span className="text-[32px] font-bold text-[#1a202c]">
                  Nissan GT - R
                </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      <CarDetailsStarFill/>
                      <CarDetailsStarFill/>
                      <CarDetailsStarFill/>
                      <CarDetailsStarFill/>
                      <CarDetailsStarEmpty/>
                    </div>
                    <span className="text-sm font-medium text-[#596780]">
                    440+ Reviewer
                  </span>
                  </div>
                </div>
                <button className="">
                  <CarCardFillHeart/>
                </button>
              </div>

              <p className="text-xl font-normal text-[#596780]">
                NISMO has become the embodiment of Nissan's outstanding
                performance, inspired by the most unforgiving proving ground, the
                "race track".
              </p>

              <div className="flex items-center gap-4">
                <button
                    className="h-10 w-10 rounded border border-slate-300 bg-red-700 shadow-md"
                    onClick={() => setCars(redCars)}
                ></button>
                <button
                    className="h-10 w-10 rounded border border-slate-300 bg-slate-700 shadow-md"
                    onClick={() => setCars(blackCars)}
                ></button>
                <button
                    className="h-10 w-10 rounded border border-slate-300 bg-slate-400 shadow-md"
                    onClick={() => setCars(grayCars)}
                ></button>
                <button
                    className="h-10 w-10 rounded border border-slate-300 bg-slate-100 shadow-md"
                    onClick={() => setCars(whiteCars)}
                ></button>
              </div>

              <div className="flex gap-11">
                <div className="flex flex-col gap-3">
                  <div className="flex w-[200px] items-center justify-between gap-4">
                  <span className="text-xl font-normal text-[#90a3bf]">
                    Type Car
                  </span>
                    <span className="text-xl font-semibold text-[#596780]">
                    Sport
                  </span>
                  </div>
                  <div className="flex w-[200px] items-center justify-between gap-4">
                  <span className="text-xl font-normal text-[#90a3bf]">
                    Steering
                  </span>
                    <span className="text-xl font-semibold text-[#596780]">
                    Manual
                  </span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex w-[200px] items-center justify-between gap-4">
                  <span className="text-xl font-normal text-[#90a3bf]">
                    Capacity
                  </span>
                    <span className="text-xl font-semibold text-[#596780]">
                    2 Person
                  </span>
                  </div>
                  <div className="flex w-[200px] items-center justify-between gap-4">
                  <span className="text-xl font-normal text-[#90a3bf]">
                    Gasoline
                  </span>
                    <span className="text-xl font-semibold text-[#596780]">
                    70L
                  </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <div className="flex items-center">
                <span className="text-[32px] font-bold text-[#1a202c]">
                  $80.00/
                </span>
                  <span className="text-base font-bold text-[#90a3bf]">days</span>
                </div>
                <span className="text-base font-bold text-[#90a3bf]">
                $100.00
              </span>
              </div>

              <button
                  className="flex items-center justify-center rounded-[10px] bg-blue-600 px-8 py-4 text-base font-bold text-white">
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CarDetails;
