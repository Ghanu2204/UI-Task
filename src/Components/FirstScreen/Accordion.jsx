import React, { useEffect, useRef, useState } from "react";

const Accordion = ({
  width,
  border,
  rounded,
  title,
  titlebgcolor,
  titlecolor,
  titlesize,
  content,
  contentbg,
  contentsize,
  contentcolor,
}) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    setHeight(open ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [open]);

  return (
    <div
      className={`${width} ${border} ${rounded} drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out`}
    >
      <div
        onClick={() => setOpen(!open)}
        className={`border rounded-xl flex justify-between p-2 cursor-pointer items-center ${titlecolor} ${titlebgcolor} ${titlesize}`}
      >
        <p>{title}</p>
        <p>{open ? "-" : "+"}</p>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className={`duration-300 ease-in-out ${contentcolor} ${contentbg} ${contentsize}`}
      >
        {open && <div className="p-4">{content}</div>}
      </div>
    </div>
  );
};

export default Accordion;
