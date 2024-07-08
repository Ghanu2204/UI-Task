import React from "react";

const Dropdown = ({
  value,
  width,
  py,
  px,
  bgcolor,
  textcolor,
  rounded,
  textsize,
  options,
  placeholder,
  border,
  optionValue,
  optionLabel,
  onChange,
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`${width} ${py} ${px} ${bgcolor} ${textcolor} ${rounded} ${textsize} ${border} `}
    >
      <option value=''>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option[optionValue]}>
          {option[optionLabel]}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
