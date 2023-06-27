"use client";

import { ISearchManufacturer } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { manufacturers } from "@/constants";

function SearchManufacturer({
  manufacturer,
  setManufacturer,
}: ISearchManufacturer) {
  const [query, setQuery] = useState<string>("");

  // this is literally in the headless documentation
  const filteredManufactures =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Input
            className={"search-manufacturer__input"}
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          {/** To not add aditional element to the DOM */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}>
            <Combobox.Options>
              {filteredManufactures.map((item) => (
                <Combobox.Option
                  key={item}
                  value={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }>
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}>
                        {item}
                      </span>

                      {/** Show an active color if the option is selected */}
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 items flex items-center pl-3 ${
                            active ? "text-white" : "text-purple-500"
                          }`}
                        />
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManufacturer;
