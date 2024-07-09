import React from "react";

const Button = ({ children, onClick, type, className, disabled, key }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      key={key}
      type={type}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
