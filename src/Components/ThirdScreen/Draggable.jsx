import React, { useState } from "react";
import Text from "../FirstScreen/TextComponent";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";

const Draggable = () => {
  const data = [
    { name: "Meet", phone: "9530249502", age: "20" },
    { name: "Ghanshyam", phone: "7405000554", age: "22" },
    { name: "Mihir", phone: "8935330259", age: "32" },
    { name: "Ayush", phone: "9099328503", age: "25" },
    { name: "Rahul", phone: "7530424832", age: "22" },
    { name: "Jaydeep", phone: "9421230390", age: "19" },
    { name: "Shyam", phone: "8101321040", age: "24" },
    { name: "Neel", phone: "2359892039", age: "29" },
  ];

  const [items, setItems] = useState(data);

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
      if (!layoutA || !layoutB) {
        return 0; // If either layoutA or layoutB is undefined, consider them equal
      }
      return layoutA.y - layoutB.y;
    });
    setItems(sortedItems);
  };

  return (
    <>
      <div>
        <Text text={"Draggable List"} size={"text-2xl"} fontWeight={"font-semibold"} />
      </div>
      <GridLayout
        layout={layout}
        cols={1}
        rowHeight={50}
        width={890}
        isResizable={false}
        onLayoutChange={onLayoutChange}
        draggableHandle=".drag-handle"
      >
        {items.map((item, index) => (
          <div
            key={item.phone}
            data-grid={{ x: 0, y: items.indexOf(item), w: 1, h: 1 }}
            className="flex items-center dark:bg-zinc-700 dark:text-gray-200 bg-[#EFEFEF] p-4 rounded-lg"
          >
            <button className="drag-handle">
              <FontAwesomeIcon icon={faListUl} />
            </button>
            <h2 className="w-16 ml-5">{index + 1}</h2>
            <h2 className="w-44">{item.name}</h2>
            <h2 className="w-40">{item.phone}</h2>
            <h2 className="w-60">{item.age}</h2>
          </div>
        ))}
      </GridLayout>
    </>
  );
};

export default Draggable;
