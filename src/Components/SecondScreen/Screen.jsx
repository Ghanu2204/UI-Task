import React from "react";
import Textfield from "../FirstScreen/TextfieldComponent";
import Dropdown from "../FirstScreen/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Switch from "../FirstScreen/Switch";
import Pagination from "./Pagination";
import useFetch from "../hook/useFetch";

const SecondScreen = () => {
  const {
    data,
    isError,
    isLoading,
    handleSwitchChange,
    handleactiveData,
    activeData,
    currentPage,
    setPage,
    page,
    totalPage,
    itemsperPage,
    handlePageChange,
    setSearch,
    setLocation,
    search,
    location,
  } = useFetch("https://dev.carzup.in/api/pricelist/test-mock");

  return (
    <>
      <div className="px-6 py-4 flex flex-col gap-2 justify-between min-h-[757px]">
        <div className="flex flex-col gap-2">
          <div className="flex gap-4">
            <div className="relative">
              <Textfield
                placeholder={"Search...."}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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
                isChecked={activeData}
                onChange={handleactiveData}
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
              Error fetching data
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
              {currentPage.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="text-center py-2 border border-[#073763] dark:bg-bodySecondary"
                  >
                    {index + 1 + (page - 1) * itemsperPage}
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
                    <Switch
                      isChecked={item.active}
                      bgChecked={"bg-blue-500"}
                      bgUnChecked={"bg-gray-400"}
                      bgUnCheckedColor={"bg-white"}
                      onChange={() => handleSwitchChange(item)}
                    />
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
        <div>
          <Pagination
            totalPage={totalPage}
            handlePageChange={handlePageChange}
            setPage={setPage}
            page={page}
          />
        </div>
      </div>
    </>
  );
};

export default SecondScreen;
