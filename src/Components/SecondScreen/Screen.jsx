import React, { useCallback, useEffect, useState } from "react";
import Textfield from "../FirstScreen/TextfieldComponent";
import Dropdown from "../FirstScreen/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Switch from "../FirstScreen/Switch";
import useFetch from "../hook/useFetch";
import { useDebounceText } from "../hook/useDebounceText";

const SecondScreen = () => {
  const [filter, setFilter] = useState({
    search: "",
    location: "",
    isActive: "",
  });

  const [searchText, setSearchText] = useState("");

  const debounceText = useDebounceText(searchText);

  useEffect(() => {
    setFilter((prev) => ({
      ...prev,
      search: debounceText,
    }));
  }, [debounceText]);

  const onChangeInput = useCallback((e) => {
    setSearchText(e.target.value);
  }, []);
  const onChangeSelect = useCallback((e) => {
    setFilter((prev) => ({
      ...prev,
      location: e.target.value,
    }));
  }, []);

  const onToggleActive = useCallback(() => {
    setFilter((prev) => ({ ...prev, isActive: !prev.isActive }));
  }, []);

  const { data, isError, isLoading, errorMessage } = useFetch(filter);

  return (
    <>
      <div className="px-6 py-4 flex flex-col gap-2 justify-between min-h-[757px]">
        <div className="flex flex-col gap-2">
          <div className="flex gap-4">
            <div className="relative">
              <Textfield
                placeholder={"Search...."}
                value={searchText}
                onChange={onChangeInput}
                className={
                  "px-8 py-2 border border-black rounded-lg w-72 dark:bg-bodySecondary dark:placeholder:text-black"
                }
                type={"text"}
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute left-3 top-3 text-gray-400 dark:text-black"
              />
            </div>
            <Dropdown
              value={filter.location}
              onChange={onChangeSelect}
              options={data}
              optionLabel={"location"}
              optionValue={"location"}
              className={
                "dark:bg-bodySecondary border border-black p-2 rounded-lg text-lg w-56"
              }
              placeholder={"Select Location"}
            />
            <div className="flex items-center gap-4">
              <label className="text-lg">Active Data</label>
              <Switch
                isChecked={filter.isActive}
                onChange={onToggleActive}
                bgChecked={"bg-blue-500"}
                bgUnChecked={"bg-gray-400"}
                bgUnCheckedColor={"bg-white"}
              />
            </div>
          </div>
          <hr className="border-black" />
          {isLoading && (
            <div className="flex items-center justify-center h-[542px]">Loading...</div>
          )}
          {isError && (
            <div className="flex items-center justify-center h-[542px]">
              {errorMessage}
            </div>
          )}
          {!isError && !isLoading && (
            <div className="grid grid-cols-11 rounded-lg border border-[#073763]">
              <div className="border rounded-ss-lg border-[#073763] font-bold py-2 bg-tablehead dark:bg-tableheaddark text-center">
                Sr No.
              </div>
              <div className="border border-[#073763] col-span-2 font-bold py-2 bg-tablehead dark:bg-tableheaddark text-center">
                Name
              </div>
              <div className="border border-[#073763] col-span-2 font-bold py-2 bg-tablehead dark:bg-tableheaddark text-center">
                Phone Number
              </div>
              <div className="border border-[#073763] col-span-3 font-bold py-2 bg-tablehead dark:bg-tableheaddark text-center">
                Email ID
              </div>
              <div className="border border-[#073763] col-span-2 font-bold py-2 bg-tablehead dark:bg-tableheaddark text-center">
                Location
              </div>
              <div className="border rounded-tr-lg border-[#073763] font-bold py-2 bg-tablehead dark:bg-tableheaddark text-center">
                Status
              </div>
              {data.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="text-center py-2 border border-[#073763] dark:bg-bodySecondary"
                  >
                    {index + 1}
                  </div>
                  <div className="text-center py-2 col-span-2 border border-[#073763] dark:bg-bodySecondary">
                    {item.name}
                  </div>
                  <div className="text-center py-2 col-span-2 border border-[#073763] dark:bg-bodySecondary">
                    {item.phone}
                  </div>
                  <div className="text-center py-2 col-span-3 border border-[#073763] dark:bg-bodySecondary">
                    {item.email}
                  </div>
                  <div className="text-center py-2 col-span-2 border border-[#073763] dark:bg-bodySecondary">
                    {item.location}
                  </div>
                  <div className="justify-center py-2 border border-[#073763] dark:bg-bodySecondary">
                    {item.active ? "Active" : "Not Active"}
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default SecondScreen;
