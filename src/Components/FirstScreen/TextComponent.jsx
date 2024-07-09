import React from "react";

const Text = ({ text, color,size, fontFamily, fontWeight,margin }) => {
  return (
    <p className={`${color} ${size} ${fontFamily} ${fontWeight} ${margin}`}>
      {text}
    </p>
  );
};

export default Text;
