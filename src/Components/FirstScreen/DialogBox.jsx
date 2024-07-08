import React from "react";
import Text from "./TextComponent";
import Button from "./ButtonComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

const DialogBox = ({
  open,
  width,
  shadow,
  p,
  title,
  titlecolor,
  titlesize,
  titleweight,
  content,
  contentsize,
  btnbgcolor,
  btntextcolor,
  btnpx,
  btnpy,
  onClick,
  label,
  dialogbg,
}) => {
  return (
    <>
      <dialog open={open} className={`${width} ${shadow} ${p} ${dialogbg} inset-0 `}>
        <div className="p-2 flex justify-between items-center">
          <Text
            text={title}
            size={titlesize}
            fontWeight={titleweight}
            color={titlecolor}
          />
          <FontAwesomeIcon
            icon={faXmark}
            fontSize={20}
            onClick={onClick}
            className="cursor-pointer"
          />
        </div>
        <hr className="border-black" />
        <div className="p-2">
          <Text text={content} size={contentsize} />
        </div>
        <hr className="border-black" />
        <div className="p-2 flex justify-end">
          <Button
            bgcolor={btnbgcolor}
            textcolor={btntextcolor}
            px={btnpx}
            py={btnpy}
            onClick={onClick}
            label={label}
          />
        </div>
      </dialog>
    </>
  );
};

export default DialogBox;
