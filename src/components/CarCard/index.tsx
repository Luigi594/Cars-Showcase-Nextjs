"use client";

import { ICarsInformation } from "@/types";
import { useState } from "react";
import Image from "next/image";
import CustomButton from "../CustomButton";

interface ICarCardProps {
  data: ICarsInformation[];
}

function CarCard({ data }: ICarCardProps) {
  return (
    <>
      {data.map((car: ICarsInformation) => (
        <div className="car-card group">
          <div className="car-card__content">
            <h2 className="car-card__content-title">
              {car.make} {car.model}
            </h2>
          </div>

          <p>
            <span>Car Rent...</span>
          </p>
        </div>
      ))}
    </>
  );
}

export default CarCard;
