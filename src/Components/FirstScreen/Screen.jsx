import React, { useState } from "react";
import Text from "./TextComponent";
import Button from "./ButtonComponent";
import Textfield from "./TextfieldComponent";
import DialogBox from "./DialogBox";
import Dropdown from "./Dropdown";
import Accordion from "./Accordion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const FirstScreen = () => {
  const [open, setOpen] = useState(false);

  const dropdownOptions = [
    {
      value: "option 1",
    },
    {
      value: "option 2",
    },
    {
      value: "option 3",
    },
    {
      value: "option 4",
    },
  ];

  const notify = () => {
    toast.info("Dialog box closed");
    setOpen(false);
  };

  return (
    <>
      <ToastContainer autoClose={3000} draggable />
      <div className="py-5 px-10 flex flex-col gap-8">
        <div className="flex justify-between gap-[5%]">
          <div className="w-1/4">
            <Text
              className={"text-blue-500 dark:text-blue-700 text-xl font-mono font-bold"}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus.
            </Text>
          </div>
          <div className="w-1/4">
            <Text
              className={"text-red-500 dark:text-red-700 text-lg font-sans font-thin"}
            >
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
              consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
              vulputate eget, arcu. In enim justo, rhoncus ut
            </Text>
          </div>
          <div className="w-1/4 ">
            <Text
              className={
                "text-green-500 dark:text-green-700 text-md font-serif font-normal"
              }
            >
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
              pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus. Aenean leo ligula
            </Text>
          </div>
        </div>
        <div className="flex justify-between gap-[5%]">
          <div className="justify-center flex w-1/4">
            <Button
              type="submit"
              className={
                "px-5 py-3 w-32 bg-green-600 text-yellow-200 text-xl hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
              }
            >
              Submit
            </Button>
          </div>
          <div className="justify-center flex w-1/4">
            <Button
              className={
                "px-6 py-1 h-10 text-white text-sm bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600"
              }
            >
              Delete
            </Button>
          </div>
          <div className="justify-center flex w-1/4">
            <Button
              className={
                "px-20 bg-blue-600 text-white text-3xl hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
              }
            >
              Done
            </Button>
          </div>
        </div>
        <div className="flex justify-between gap-[5%]">
          <div className="justify-center flex w-1/4">
            <Textfield
              type="number"
              placeholder="Enter any number"
              className={
                "p-2 border-2 border-black dark:border-gray-500 dark:bg-gray-300 dark:placeholder:text-gray-700"
              }
            />
          </div>
          <div className="justify-center flex w-1/4">
            <Textfield
              type="email"
              placeholder="Enter your email"
              className={
                "p-2 border-b-2 border-yellow-600 dark:bg-gray-300 dark:placeholder:text-gray-700"
              }
            />
          </div>
          <div className="justify-center flex w-1/4">
            <Textfield
              type="text"
              placeholder="Enter your name"
              className={
                "p-2 border-2 border-pink-700 rounded-lg dark:bg-gray-300 dark:placeholder:text-gray-700"
              }
            />
          </div>
        </div>
        <div className="flex justify-between gap-[5%]">
          <div className="justify-center flex w-1/4">
            <Dropdown
              options={dropdownOptions}
              placeholder={"Choose option"}
              optionLabel={"value"}
              optionValue={"value"}
              className={
                "bg-orange-400 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-400 rounded-lg text-white w-40"
              }
            />
          </div>
          <div className="justify-center flex w-1/4">
            <Dropdown
              options={dropdownOptions}
              placeholder={"Choose option"}
              optionLabel={"value"}
              optionValue={"value"}
              className={
                "p-2 bg-cyan-400 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-400 rounded-md w-28 hover:text-white dark:text-white dark:hover:text-black"
              }
            />
          </div>
          <div className="justify-center flex w-1/4">
            <Dropdown
              options={dropdownOptions}
              placeholder={"Choose option"}
              optionLabel={"value"}
              optionValue={"value"}
              className={
                "bg-indigo-400 hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 rounded-xl text-white w-36"
              }
            />
          </div>
        </div>
        <div className="flex gap-[1%]">
          <div className=" flex w-1/2">
            <Accordion
              width={"w-full"}
              rounded={"rounded-xl"}
              content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean 
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et 
              magnis dis parturient montes, nascetur ridiculus mus."
              contentbg={"bg-red-400 dark:bg-red-500"}
              contentcolor={"text-white"}
              title={"Open this"}
              titlesize={"text-xl"}
              titlebgcolor={
                "bg-blue-500 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-500"
              }
              titlecolor={"text-white"}
            />
          </div>
          <div className="justify-start flex w-1/2">
            <Accordion
              width={"w-full"}
              rounded={"rounded-xl"}
              content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean 
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et 
              magnis dis parturient montes, nascetur ridiculus mus."
              contentbg={"bg-emerald-400 dark:bg-emerald-500"}
              contentcolor={"text-white"}
              title={"Demo"}
              titlesize={"text-xl"}
              titlebgcolor={
                "bg-cyan-500 hover:bg-cyan-800 dark:bg-cyan-800 dark:hover:bg-cyan-500"
              }
              titlecolor={"text-white"}
            />
          </div>
        </div>
        <div className="flex justify-end gap-[5%]">
          <div className="justify-end flex w-1/4">
            <Button
              onClick={() => setOpen(true)}
              className={
                "text-white bg-purple-500 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-500 p-3 rounded-lg"
              }
            >
              Open Dialog
            </Button>
            <DialogBox
              open={open}
              className={
                "px-3 drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] w-1/2 dark:bg-gray-300"
              }
            >
              <div className="p-2 flex justify-between items-center">
                <Text className={"text-3xl font-bold"}>Dialog Box</Text>
                <FontAwesomeIcon
                  icon={faXmark}
                  fontSize={20}
                  onClick={notify}
                  className="cursor-pointer"
                />
              </div>
              <hr className="border-black" />
              <div className="p-2">
                <Text>
                  Lorem ipsum dolor sit amet, conscetetuer adipiscing elit. Aenean commodo
                  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                  di parturient montes, nascetur ridiculus mus. Donec quam felis,
                  ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                  quis enim. Donecpede justo, fringilla vel, aliquet nec, vulputate eget,
                  arcu. In enim justo,rhoncus ut, imperdiet a, venenatis vitae, justo.
                  Nullam dictum felis eu pedemollis pretium. Integer tincidunt. Cras
                  dapibus. Vivamus elementum
                </Text>
              </div>
              <hr className="border-black" />
              <div className="p-2 flex justify-end">
                <Button
                  className={
                    'bg-blue-500 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-500" text-white px-5 py-2'
                  }
                  onClick={notify}
                >
                  Close
                </Button>
              </div>
            </DialogBox>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstScreen;
