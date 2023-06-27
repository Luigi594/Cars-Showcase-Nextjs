"use client";

import { ICarsInformation } from "@/types";
import { useState } from "react";
import { calculateCarPrice } from "@/utils";
import { GiSteeringWheel, GiCarWheel, GiGasPump } from "react-icons/gi";
import { BsArrowRightSquareFill } from "react-icons/bs";
import Image from "next/image";
import CustomButton from "../CustomButton";
import CarDetails from "./CardDetails";

interface ICarCardProps {
  data: ICarsInformation;
}

function CarCard({ data }: ICarCardProps) {
  const canrRentPrice = calculateCarPrice(data.city_mpg, data.year);

  const [isViewMore, setIsViewMore] = useState<boolean>(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {data.make} {data.model}
        </h2>
      </div>

      <p className="flex mt-6 text-3xl font-extrabold">
        <span className="self-start text-sm font-semibold">$</span>
        {canrRentPrice}
        <span className="self-end text-sm font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={"/hero.png"}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray-700">
          <div className="flex flex-col justify-center items-center gap-2">
            <span>
              <GiSteeringWheel />
            </span>
            <p className="text-sm leading-4">
              {data.transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <span>
              <GiCarWheel />
            </span>
            <p className="text-sm">{data.drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <span>
              <GiGasPump />
            </span>
            <p className="text-sm">{data.city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-4 rounded-full bg-primary-blue"
            textStyles="text-white text-sm leading-4 font-bold"
            rightIcon={<BsArrowRightSquareFill />}
            handleClick={() => setIsViewMore(!isViewMore)}
          />
        </div>
      </div>

      <CarDetails
        isViewMore={isViewMore}
        closeModal={() => setIsViewMore(!isViewMore)}
        car={data}
      />
    </div>
  );
}

export default CarCard;
