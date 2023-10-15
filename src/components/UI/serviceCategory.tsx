"use client";

import Image from "next/image";
import category1 from "../../../public/banner1.jpg";
import { useState } from "react";

const availableCategory = [
  {
    _id: 1,
    description:
      " Painted between 1503 and 1517 Da Vinci s alluring portrait  been dogged by two questions since the day it was made Who s the subject and why is she smiling",
    name: "Mona Lisa",
    image: category1,
  },
  {
    _id: 2,
    description:
      " Painted between 1503 and 1517 Da Vinci s alluring portrait  been dogged by two questions since the day it was made Who s the subject and why is she smiling",
    name: "Mona Lisa",
    image: category1,
  },
  {
    _id: 3,
    description:
      " Painted between 1503 and 1517 Da Vinci s alluring portrait  been dogged by two questions since the day it was made Who s the subject and why is she smiling",
    name: "Mona Lisa",
    image: category1,
  },
  {
    _id: 4,
    description:
      " Painted between 1503 and 1517 Da Vinci s alluring portrait  been dogged by two questions since the day it was made Who s the subject and why is she smiling",
    name: "Mona Lisa",
    image: category1,
  },
  {
    _id: 5,
    description:
      " Painted between 1503 and 1517 Da Vinci s alluring portrait  been dogged by two questions since the day it was made Who s the subject and why is she smiling",
    name: "Mona Lisa",
    image: category1,
  },
  {
    _id: 6,
    description:
      " Painted between 1503 and 1517 Da Vinci s alluring portrait  been dogged by two questions since the day it was made Who s the subject and why is she smiling",
    name: "Mona Lisa",
    image: category1,
  },
  {
    _id: 7,
    description:
      " Painted between 1503 and 1517 Da Vinci s alluring portrait  been dogged by two questions since the day it was made Who s the subject and why is she smiling",
    name: "Mona Lisa",
    image: category1,
  },
  {
    _id: 8,
    description:
      " Painted between 1503 and 1517 Da Vinci s alluring portrait  been dogged by two questions since the day it was made Who s the subject and why is she smiling",
    name: "Mona Lisa",
    image: category1,
  },
  {
    _id: 9,
    description:
      " Painted between 1503 and 1517 Da Vinci s alluring portrait  been dogged by two questions since the day it was made Who s the subject and why is she smiling",
    name: "Mona Lisa",
    image: category1,
  },
  {
    _id: 10,
    description:
      " Painted between 1503 and 1517 Da Vinci s alluring portrait  been dogged by two questions since the day it was made Who s the subject and why is she smiling",
    name: "Mona Lisa",
    image: category1,
  },
];

const ServiceCategory = () => {
  const [show, setShow] = useState<number>(8);
  console.log(show, availableCategory.length);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
            Category of available
            <br className="hidden md:block" />
            Services
          </span>

          <div className="h-1 ml-auto duration-300 origin-left transform bg-[#7044e5] scale-x-30 group-hover:scale-x-100" />
        </h2>
      </div>
      <div className="grid gap-y-2 sm:gap-y-0 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        {availableCategory.slice(0, show).map((category) => {
          return (
            <div
              key={category?._id}
              className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl"
            >
              <Image
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={category?.image}
                alt="category"
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  {category?.name}
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  {category?.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        {show >= availableCategory.length ? (
          <button
            onClick={() => setShow((pre) => pre - 3)}
            className=" text-white bg-gray-900 px-6 py-2 rounded hover:cursor-pointer"
          >
            less more
          </button>
        ) : (
          <button
            onClick={() => setShow((pre) => pre + 3)}
            className=" text-white bg-gray-900 px-6 py-2 rounded hover:cursor-pointer"
          >
            See More
          </button>
        )}
      </div>
    </div>
  );
};

export default ServiceCategory;
