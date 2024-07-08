import React from "react";

const Textfield = ({
  type,
  placeholder,
  p,
  bgcolor,
  width,
  rounded,
  bordercolor,
  borderwidth,
  onChange,
  checked,
  other,
  value,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      checked={checked}
      className={`${p} ${bgcolor} ${width} ${rounded} ${borderwidth} ${bordercolor} ${other}`}
    />
  );
};

export default Textfield;
