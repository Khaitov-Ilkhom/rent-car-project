import React from "react";
import {
  CarCardFillHeart,
  CarCardGasoline,
  CarCardManuals,
  CarCardPeople,
} from "../../car-data/svgs.jsx";
import { Link } from "react-router-dom";

const RenderCard = ({car}) => {
  return (
      <div className=" rounded-[10px] bg-white p-6 shadow-lg transition hover:shadow-2xl">
        <div className="flex w-full items-start justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-xl font-bold">{car.car}</span>
            <span className="text-sm font-bold text-[#90a3bf]">{car.carType}</span>
          </div>
          <button className="">
            <CarCardFillHeart />
          </button>
        </div>

        <div className="flex h-[190px] w-full items-center justify-center">
          <img
              className="h-[72px] w-[232px] object-contain"
              src={car.carImage}
              alt="Car"
          />
        </div>

        <div className="flex items-center justify-between">
        <span className="flex items-center gap-1">
          <CarCardGasoline />
          <span className="text-sm font-medium text-[#90a3bf]">
            {car.carGasoline}L
          </span>
        </span>
          <span className="flex items-center gap-1">
          <CarCardManuals />
          <span className="text-sm font-medium text-[#90a3bf]">
            {car.carManuals}
          </span>
        </span>
          <span className="flex items-center gap-1">
          <CarCardPeople />
          <span className="text-sm font-medium text-[#90a3bf]">
            {car.carPeople} People
          </span>
        </span>
        </div>

        <div className="mt-6 flex w-full items-center justify-between">
          <div className="flex items-end">
            <span className="text-xl font-bold text-[#1a202c]">${car.carPrice}/</span>
            <span className="text-sm font-bold text-[#90a3bf]">day</span>
          </div>
          <Link
              to={"/"}
              className="mt-2 flex max-w-max rounded bg-blue-600 px-5 py-[10px] text-center text-base font-semibold leading-normal text-white"
          >
            Rent Now
          </Link>
        </div>
      </div>
  );
};

export default RenderCard;
