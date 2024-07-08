import React from "react";
import Textfield from "./TextfieldComponent";

const Switch = ({ isChecked, onChange, bgChecked, bgUnChecked, bgUnCheckedColor }) => {
  return (
    <>
      <label className="flex cursor-pointer select-none items-center justify-center">
        <div className="relative">
          <Textfield
            type={"checkbox"}
            other={"sr-only"}
            checked={isChecked}
            onChange={onChange}
          />
          <div
            className={`box block h-8 w-14 rounded-full ${
              isChecked ? bgChecked : bgUnChecked
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full transition ${
              isChecked ? `translate-x-full ${bgUnCheckedColor}` : "bg-white"
            }`}
          ></div>
        </div>
      </label>
    </>
  );
};

export default Switch;
