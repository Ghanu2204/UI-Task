import React from "react";

const Button = ({
  label,
  onClick,
  type,
  px,
  py,
  bgcolor,
  condition,
  bordercolor,
  bordertopwidth,
  borderwidth,
  textcolor,
  textsize,
  rounded,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${px} ${py} ${rounded} ${bgcolor} ${condition} ${borderwidth} ${bordertopwidth} ${bordercolor} ${textcolor} ${textsize}`}
    >
      {label}
    </button>
  );
};

export default Button;
