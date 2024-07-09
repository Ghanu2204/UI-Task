import React from "react";

const Dropdown = ({
  value,
  options,
  placeholder,
  optionValue,
  optionLabel,
  onChange,
  className
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`p-2 ${className}`}
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
