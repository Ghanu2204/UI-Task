import React from "react";

const DialogBox = ({ open, children,className }) => {
  return (
    <>
      <dialog open={open} className={`${className} inset-0 `}>
        {children}
      </dialog>
    </>
  );
};

export default DialogBox;
