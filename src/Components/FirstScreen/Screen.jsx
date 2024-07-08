import React, { useState } from "react";
import Text from "./TextComponent";
import Button from "./ButtonComponent";
import Textfield from "./TextfieldComponent";
import DialogBox from "./DialogBox";
import Dropdown from "./Dropdown";
import Accordion from "./Accordion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean 
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et 
              magnis dis parturient montes, nascetur ridiculus mus."
              color="text-blue-500 dark:text-blue-700"
              size="text-xl"
              fontFamily="font-mono"
              fontWeight="font-bold"
            />
          </div>
          <div className="w-1/4">
            <Text
              text="Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
              Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet 
              nec, vulputate eget, arcu. In enim justo, rhoncus ut,"
              color="text-red-500 dark:text-red-700"
              size="text-lg"
              fontFamily="font-sans"
              fontWeight="font-thin"
            />
          </div>
          <div className="w-1/4 ">
            <Text
              text="imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede 
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper 
              nisi. Aenean vulputate eleifend tellus. Aenean leo ligula."
              color="text-green-500 dark:text-green-700"
              size="text-md"
              fontFamily="font-serif"
              fontWeight="font-normal"
            />
          </div>
        </div>
        <div className="flex justify-between gap-[5%]">
          <div className="justify-center flex w-1/4">
            <Button
              label="Submit"
              type="submit"
              px="px-5"
              py="py-3"
              width="w-32"
              textcolor="text-yellow-200"
              textsize="text-xl"
              bgcolor="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
            />
          </div>
          <div className="justify-center flex w-1/4">
            <Button
              label="Delete"
              px="px-6"
              py="py-1"
              height="h-10"
              textcolor="text-white"
              textsize="text-sm"
              bgcolor="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600"
            />
          </div>
          <div className="justify-center flex w-1/4">
            <Button
              label="Done"
              px="px-20"
              textcolor="text-white"
              textsize="text-3xl"
              bgcolor="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
            />
          </div>
        </div>
        <div className="flex justify-between gap-[5%]">
          <div className="justify-center flex w-1/4">
            <Textfield
              type="number"
              placeholder="Enter any number"
              borderwidth="border-2"
              bordercolor="border-black dark:border-gray-500"
              p="p-2"
              bgcolor={"dark:bg-gray-300 dark:placeholder:text-gray-700"}
            />
          </div>
          <div className="justify-center flex w-1/4">
            <Textfield
              type="email"
              placeholder="Enter your email"
              borderwidth="border-b-2"
              bordercolor="border-yellow-600"
              p="p-2"
              bgcolor={"dark:bg-gray-300 dark:placeholder:text-gray-700"}
            />
          </div>
          <div className="justify-center flex w-1/4">
            <Textfield
              type="text"
              placeholder="Enter your name"
              borderwidth="border-2"
              bordercolor="border-pink-700"
              rounded="rounded-lg"
              p="p-2"
              bgcolor={"dark:bg-gray-300 dark:placeholder:text-gray-700"}
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
              px="px-2"
              py="py-2"
              bgcolor={
                "bg-orange-400 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-400"
              }
              rounded={"rounded-lg"}
              textcolor={"text-white"}
              width={"w-40"}
            />
          </div>
          <div className="justify-center flex w-1/4">
            <Dropdown
              options={dropdownOptions}
              placeholder={"Choose option"}
              optionLabel={"value"}
              optionValue={"value"}
              px="px-2"
              py="py-2"
              bgcolor={
                "bg-cyan-400 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-400"
              }
              rounded={"rounded-md"}
              width={"w-28"}
              textcolor={"hover:text-white dark:text-white dark:hover:text-black"}
            />
          </div>
          <div className="justify-center flex w-1/4">
            <Dropdown
              options={dropdownOptions}
              placeholder={"Choose option"}
              optionLabel={"value"}
              optionValue={"value"}
              px="px-2"
              py="py-2"
              bgcolor={
                "bg-indigo-400 hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
              }
              rounded={"rounded-xl"}
              textcolor={"text-white"}
              width={"w-36"}
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
              label="Open Dialog"
              bgcolor="bg-purple-500 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-500"
              textcolor="text-white"
              px="px-3"
              py="py-3"
              rounded="rounded-lg"
            />
            <DialogBox
              title="Title"
              p="px-3"
              shadow="drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)]"
              width="w-1/2"
              open={open}
              dialogbg={"dark:bg-gray-300"}
              titlesize="text-3xl"
              titleweight="font-bold"
              content="Lorem ipsum dolor sit amet, conscetetuer adipiscing elit. Aenean 
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et 
              magnis di parturient montes, nascetur ridiculus mus. Donec quam felis, 
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa 
              quis enim. Donecpede justo, fringilla vel, aliquet nec, vulputate eget, 
              arcu. In enim justo,rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam 
              dictum felis eu pedemollis pretium. Integer tincidunt. Cras dapibus. Vivamus
               elementum"
              label="Close"
              btnbgcolor="bg-blue-500 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-500"
              btntextcolor="text-white"
              btnpx="px-5"
              btnpy="py-2"
              onClick={notify}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstScreen;
