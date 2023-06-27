import { ICarsInformation } from "@/types";

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_CAR_KEY || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers,
    }
  );

  const result: ICarsInformation[] = await response.json();
  return result;
}

export const calculateCarPrice = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age
};
