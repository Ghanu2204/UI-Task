import React, { useState, useEffect } from "react";
import Text from "../FirstScreen/TextComponent";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip } from "@fortawesome/free-solid-svg-icons";
import { CSVLink } from "react-csv";
import Button from "../FirstScreen/ButtonComponent";

const Draggable = () => {
  const header = [
    { label: "Name", key: "name" },
    { label: "Phone Number", key: "phone" },
    { label: "Email ID", key: "email" },
    { label: "City", key: "city" },
  ];
  const data = [
    {
      name: "Meet",
      phone: "9530249502",
      email: "wmacmeeking3@artisteer.com",
      city: "Ahmedabad",
    },
    {
      name: "Ghanshyam",
      phone: "7405000554",
      email: "jrochester2@odnoklassniki.ru",
      city: "Surat",
    },
    {
      name: "Mihir",
      phone: "8935330259",
      email: "akemitt9@acquirethisname.com",
      city: "Vapi",
    },
    {
      name: "Ayush",
      phone: "9099328503",
      email: "adelcastel6@house.gov",
      city: "Rajkot",
    },
    {
      name: "Rahul",
      phone: "7530424832",
      email: "wwinn1@amazon.de",
      city: "Junagadh",
    },
    {
      name: "Jaydeep",
      phone: "9421230390",
      email: "kmcclurg5@cmu.edu",
      city: "Patan",
    },
    {
      name: "Shyam",
      phone: "8101321040",
      email: "ngillet4@canalblog.com",
      city: "Bhuj",
    },
    {
      name: "Neel",
      phone: "2359892039",
      email: "bmcateer8@bluehost.com",
      city: "Vadodara",
    },
  ];

  const [items, setItems] = useState(data);
  const [width, setWidth] = useState(window.innerWidth - 185);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth - 185);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const layout = items.map((item, index) => ({
    i: item.phone,
    x: 0,
    y: index,
    w: 1,
    h: 1,
  }));

  const onLayoutChange = (layout) => {
    const sortedItems = [...items].sort((a, b) => {
      const layoutA = layout.find((layoutItem) => layoutItem.i === a.phone);
      const layoutB = layout.find((layoutItem) => layoutItem.i === b.phone);
      if (!layoutA || !layoutB) return 0;
      return layoutA.y - layoutB.y;
    });
    setItems(sortedItems);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex pb-4 justify-between">
          <Text className={"text-2xl font-semibold ml-3"}>Draggable List</Text>
          <div>
            <CSVLink data={items} filename="data.xls" headers={header}>
              <Button className={"rounded-lg px-5 py-2 bg-blue-500 text-white"}>
                Export
              </Button>
            </CSVLink>
          </div>
        </div>
        <hr className="border-black pb-4" />
        <div className="grid grid-cols-11 ml-3 rounded-lg bg-bodySecondary font-semibold">
          <div className="border rounded-s-lg border-[#073763] font-bold py-2 bg-tablehead dark:bg-tableheaddark text-center"></div>
          <div className="border-t border-r border-b border-[#073763] font-bold py-2 bg-tablehead dark:bg-tableheaddark text-center">
            Sr.no
          </div>
          <div className="border-t border-r border-b border-[#073763] col-span-2 font-bold py-2 bg-tablehead dark:bg-tableheaddark text-center">
            Name
          </div>
          <div className="border-t border-r border-b border-[#073763] col-span-2 font-bold py-2 bg-tablehead dark:bg-tableheaddark text-center">
            Phone Number
          </div>
          <div className="border-t border-r border-b border-[#073763] col-span-3 font-bold py-2 bg-tablehead dark:bg-tableheaddark text-center">
            Email ID
          </div>
          <div className="border-t border-r border-b border-[#073763] rounded-e-lg col-span-2 font-bold py-2 bg-tablehead dark:bg-tableheaddark text-center">
            City
          </div>
        </div>
        <GridLayout
          layout={layout}
          cols={1}
          rowHeight={50}
          width={width}
          isResizable={false}
          onLayoutChange={onLayoutChange}
          draggableHandle=".drag-handle"
        >
          {items.map((item, index) => (
            <div
              key={item.phone}
              data-grid={{ x: 0, y: items.indexOf(item), w: 1, h: 1 }}
              className="grid grid-cols-11 items-center rounded-lg"
            >
              <button className="drag-handle text-center py-2 rounded-s-lg border border-[#073763] dark:bg-bodySecondary">
                <FontAwesomeIcon icon={faGrip} />
              </button>
              <h2 className="text-center py-2 border-t border-r border-b border-[#073763] dark:bg-bodySecondary">
                {index + 1}
              </h2>
              <h2 className="text-center py-2 col-span-2 border-t border-r border-b border-[#073763] dark:bg-bodySecondary">
                {item.name}
              </h2>
              <h2 className="text-center py-2 col-span-2 border-t border-r border-b border-[#073763] dark:bg-bodySecondary">
                {item.phone}
              </h2>
              <h2 className="text-center py-2 col-span-3 border-t border-r border-b border-[#073763] dark:bg-bodySecondary">
                {item.email}
              </h2>
              <h2 className="text-center py-2 col-span-2 rounded-e-lg border-t border-r border-b border-[#073763] dark:bg-bodySecondary">
                {item.city}
              </h2>
            </div>
          ))}
        </GridLayout>
      </div>
    </>
  );
};

export default Draggable;
