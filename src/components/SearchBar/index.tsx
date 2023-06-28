"use client";

import { useState } from "react";
import SearchManufacturer from "../SearchManufacturer";
import SearchButton from "./SearchButton";
import { AiFillCar } from "react-icons/ai";
import { useRouter } from "next/navigation";

function SearchBar() {
  const [manufacturer, setManufacturer] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") return null;

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    // update the params we're searching
    // ?model="corolla"&manufacturer="other-value-here"
    const searchParams = new URLSearchParams(window.location.search);

    // if there was a model before add it, if it was not delete it
    // to update the value
    model ? searchParams.set("model", model) : searchParams.delete("model");

    manufacturer
      ? searchParams.set("manufacturer", manufacturer)
      : searchParams.delete("manufacturer");

    // take the current pathName and then add the searchParams
    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />

        <SearchButton additionalClasses="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <span className="absolute h-6 w-6 ml-4 top-4">
          <AiFillCar />
        </span>

        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />

        <SearchButton additionalClasses="sm:hidden" />
      </div>

      <SearchButton additionalClasses="max-sm:hidden" />
    </form>
  );
}

export default SearchBar;
