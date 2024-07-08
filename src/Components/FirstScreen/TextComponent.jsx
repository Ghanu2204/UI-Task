import React from "react";

const Text = ({ text, color,size, fontFamily, fontWeight }) => {
  return (
    <p className={`${color} ${size} ${fontFamily} ${fontWeight}`}>
      {text}
    </p>
  );
};

export default Text;
