import React, { useState } from "react";
import FirstScreen from "./Components/FirstScreen/Screen";
import Button from "./Components/FirstScreen/ButtonComponent";
import SecondScreen from "./Components/SecondScreen/Screen";
import ThirdScreen from "./Components/ThirdScreen/Screen";
import Switch from "./Components/FirstScreen/Switch";
import Darkmode from "./Components/Darkmode";
import Text from "./Components/FirstScreen/TextComponent";

const App = () => {
  const [value, setValue] = useState(1);
  const [checked, setChecked] = useState(false);

  const [colorTheme, setTheme] = Darkmode();

  const handleDarkMode = () => {
    setChecked((preValue) => !preValue);
    setTheme(colorTheme);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="px-20 py-6 bg-white dark:bg-[#323232]">
        <div className="flex justify-end p-6 items-center gap-3">
          <Text text={"Light"} color={"dark:text-white"} size={"text-lg"} />
          <Switch
            isChecked={checked}
            onChange={handleDarkMode}
            bgUnChecked={"bg-[#1D2125]"}
            bgChecked={"bg-white"}
            bgUnCheckedColor={"bg-[#1D2125]"}
          />
          <Text text={"Dark"} color={"dark:text-white"} size={"text-lg"} />
        </div>
        <div className="border-gray-300 dark:border-gray-500 border-2 rounded-t-xl drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)]">
          <div className="bg-[#f1f1f1] dark:bg-[#5b5b5b] flex justify-evenly rounded-t-xl">
            <Button
              onClick={() => handleChange(1)}
              label={"First Screen"}
              textcolor={
                value === 1 ? "dark:text-black" : "dark:text-white dark:hover:text-black"
              }textsize={'text-lg'}
              px={"px-20"}
              py={"py-5"}
              width={"w-72"}
              borderwidth={"border-2"}
              bordertopwidth={"border-t-0"}
              bordercolor={"border-gray-300 dark:border-gray-500"}
              condition={
                value === 1
                  ? "bg-white border-b-0 dark:bg-gray-300 dark:text-black"
                  : "hover:bg-white dark:hover:bg-gray-300 hover:border-b-0"
              }
            />
            <Button
              onClick={() => handleChange(2)}
              label={"Second Screen"}
              textcolor={
                value === 2 ? "dark:text-black" : "dark:text-white dark:hover:text-black"
              }
              px={"px-20"}
              py={"py-5"}
              width={"w-72"}
              borderwidth={"border-2"}
              bordertopwidth={"border-t-0"}
              bordercolor={"border-gray-300 dark:border-gray-500"}
              condition={
                value === 2
                  ? "bg-white border-b-0 dark:bg-gray-300 dark:text-black"
                  : "hover:bg-white dark:hover:bg-gray-300 hover:border-b-0"
              }
            />
            <Button
              onClick={() => handleChange(3)}
              label={"Third Screen"}
              textcolor={
                value === 3 ? "dark:text-black" : "dark:text-white dark:hover:text-black"
              }
              px={"px-20"}
              py={"py-5"}
              width={"w-72"}
              borderwidth={"border-2"}
              bordertopwidth={"border-t-0"}
              bordercolor={"border-gray-300 dark:border-gray-500"}
              condition={
                value === 3
                  ? "bg-white border-b-0 dark:bg-gray-300 dark:text-black"
                  : "hover:bg-white dark:hover:bg-gray-300 hover:border-b-0"
              }
            />
          </div>
          {value === 1 && (
            <div className="p-4 bg-white dark:bg-gray-300">
              <FirstScreen />
            </div>
          )}
          {value === 2 && (
            <div className="p-4 bg-white dark:bg-gray-300">
              <SecondScreen />
            </div>
          )}
          {value === 3 && (
            <div className="p-4 bg-white dark:bg-gray-300">
              <ThirdScreen />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
