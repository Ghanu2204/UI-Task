import React from "react";

const Textfield = ({
  type,
  placeholder,
  className,
  onChange,
  checked,
  value,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      checked={checked}
      className={className}
    />
  );
};

export default Textfield;
