import React, { useState } from "react";
import Textfield from "../FirstScreen/TextfieldComponent";
import Dropdown from "../FirstScreen/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import APIData from "./APIData";
import Switch from "../FirstScreen/Switch";
import Pagination from "./Pagination";

const SecondScreen = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

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
    startIndex,
    endIndex,
  } = APIData({ search, location });

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
                p={"px-8 py-2"}
                borderwidth={"border"}
                bordercolor={"border-black"}
                rounded={"rounded-lg"}
                type={"text"}
                width={"w-72"}
                bgcolor={"dark:bg-gray-200 dark:placeholder:text-black"}
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
              bgcolor={"dark:bg-gray-200"}
              placeholder={"Select Location"}
              border={"border border-black"}
              px={"px-2"}
              py={"py-2"}
              rounded={"rounded-lg"}
              textsize={"text-lg"}
              width={"w-56"}
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
              <div className="border rounded-ss-lg border-[#073763] font-bold py-2 bg-[#ccfffdb4] dark:bg-[#98fffab4] text-center">
                Sr No.
              </div>
              <div className="border border-[#073763] col-span-2 font-bold py-2 bg-[#ccfffdb4] dark:bg-[#98fffab4] text-center">
                Name
              </div>
              <div className="border border-[#073763] col-span-2 font-bold py-2 bg-[#ccfffdb4] dark:bg-[#98fffab4] text-center">
                Phone Number
              </div>
              <div className="border border-[#073763] col-span-3 font-bold py-2 bg-[#ccfffdb4] dark:bg-[#98fffab4] text-center">
                Email ID
              </div>
              <div className="border border-[#073763] col-span-2 font-bold py-2 bg-[#ccfffdb4] dark:bg-[#98fffab4] text-center">
                Location
              </div>
              <div className="border rounded-tr-lg border-[#073763] font-bold py-2 bg-[#ccfffdb4] dark:bg-[#98fffab4] text-center">
                Status
              </div>
              {currentPage.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="text-center py-2 border border-[#073763] dark:bg-gray-200"
                  >
                    {index + 1 + (page - 1) * itemsperPage}
                  </div>
                  <div className="text-center py-2 col-span-2 border border-[#073763] dark:bg-gray-200">
                    {item.name}
                  </div>
                  <div className="text-center py-2 col-span-2 border border-[#073763] dark:bg-gray-200">
                    {item.phone}
                  </div>
                  <div className="text-center py-2 col-span-3 border border-[#073763] dark:bg-gray-200">
                    {item.email}
                  </div>
                  <div className="text-center py-2 col-span-2 border border-[#073763] dark:bg-gray-200">
                    {item.location}
                  </div>
                  <div className="justify-center py-2 border border-[#073763] dark:bg-gray-200">
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
