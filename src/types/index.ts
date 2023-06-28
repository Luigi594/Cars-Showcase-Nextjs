import { MouseEventHandler, ReactElement } from "react";

export interface ICustomButton {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: ReactElement;
  isDisabled?: boolean;
}

export interface ISearchManufacturer {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface ICarsInformation {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface IFilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface OptionsProps {
  title: string;
  value: string;
}

export interface ICustomFilters {
  title: string;
  options: OptionsProps[];
}

export interface IShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
