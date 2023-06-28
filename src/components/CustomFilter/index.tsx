"use client";

import { useState, Fragment } from "react";
import { BsChevronExpand } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { ICustomFilters, OptionsProps } from "@/types";
import { updateSearchParams } from "@/utils";

function CustomFilter({ title, options }: ICustomFilters) {
  const [selected, setSelected] = useState<OptionsProps>(options[0]);
  const router = useRouter();

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());
    router.push(newPathName);
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}>
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>

            <span className="ml-4 object-contain h-5 w-5">
              <BsChevronExpand />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options className="custom-filter__options">
              {/** mapping the options for the "combobox" */}
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  className={({
                    active,
                  }) => `relative cursor-default select-none py-2 px-4 
                ${active ? "bg-primary-blue text-white" : "text-gray-900"}`}
                  value={option}>
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}>
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default CustomFilter;
