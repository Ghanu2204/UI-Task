import React, { useState } from "react";
import FirstScreen from "./Components/FirstScreen/Screen";
import Button from "./Components/FirstScreen/ButtonComponent";
import SecondScreen from "./Components/SecondScreen/Screen";
import ThirdScreen from "./Components/ThirdScreen/Screen";
import Switch from "./Components/FirstScreen/Switch";
import Darkmode from "./Components/hook/Darkmode";
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
          <Text className={"dark:text-white text-lg"}>Light</Text>
          <Switch
            isChecked={checked}
            onChange={handleDarkMode}
            bgUnChecked={"bg-[#1D2125]"}
            bgChecked={"bg-white"}
            bgUnCheckedColor={"bg-[#1D2125]"}
          />
          <Text className={"dark:text-white text-lg"}>Dark</Text>
        </div>
        <div className="border-gray-300 dark:border-gray-500 border-2 rounded-t-xl drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)]">
          <div className="bg-headerlight dark:bg-headerdark flex justify-evenly rounded-t-xl">
            <Button
              onClick={() => handleChange(1)}
              className={`px-20 py-5 w-72 border-2 border-t-0 border-gray-300 dark:border-gray-500 group ${
                value === 1
                  ? "bg-white border-b-0 dark:bg-bodydark dark:text-black"
                  : "hover:bg-white dark:hover:bg-bodydark hover:border-b-0"
              }`}
            >
              <Text
                className={`text-lg ${
                  value === 1
                    ? "dark:text-black"
                    : "dark:text-white dark:group-hover:text-black"
                }`}
              >
                First Screen
              </Text>
            </Button>
            <Button
              onClick={() => handleChange(2)}
              className={`px-20 py-5 w-72 border-2 border-t-0 border-gray-300 dark:border-gray-500 group ${
                value === 2
                  ? "bg-white border-b-0 dark:bg-bodydark dark:text-black"
                  : "hover:bg-white dark:hover:bg-bodydark hover:border-b-0"
              }`}
            >
              <Text
                className={`text-lg ${
                  value === 2
                    ? "dark:text-black"
                    : "dark:text-white dark:group-hover:text-black"
                }`}
              >
                Second Screen
              </Text>
            </Button>
            <Button
              onClick={() => handleChange(3)}
              className={`px-20 py-5 w-72 border-2 border-t-0 border-gray-300 dark:border-gray-500 group ${
                value === 3
                  ? "bg-white border-b-0 dark:bg-bodydark dark:text-black"
                  : "hover:bg-white dark:hover:bg-bodydark hover:border-b-0"
              }`}
            >
              <Text
                className={`text-lg ${
                  value === 3
                    ? "dark:text-black"
                    : "dark:text-white dark:group-hover:text-black"
                }`}
              >
                Third Screen
              </Text>
            </Button>
          </div>
          {value === 1 && (
            <div className="p-4 bg-white dark:bg-bodydark">
              <FirstScreen />
            </div>
          )}
          {value === 2 && (
            <div className="p-4 bg-white dark:bg-bodydark">
              <SecondScreen />
            </div>
          )}
          {value === 3 && (
            <div className="p-4 bg-white dark:bg-bodydark">
              <ThirdScreen />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
