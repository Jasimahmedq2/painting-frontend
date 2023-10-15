"use client";
import Image from "next/image";
import category1 from "../../../public/banner1.jpg";
import { useState } from "react";

const upcomingServices = [
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
];

const UpComingServices = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  return (
    <div className="bg-gray-100">
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
          <svg
            viewBox="0 0 88 88"
            className="w-full max-w-screen-xl text-indigo-100"
          >
            <circle fill="currentColor" cx="44" cy="44" r="15.5" />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="44"
            />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="37.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="29.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="22.5"
            />
          </svg>
        </div>

        <div>
          <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
            <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
              <span className="inline-block mb-1 sm:mb-4">
                Upcoming Winter
                <br className="hidden md:block" />
                Services
              </span>

              <div className="h-1 ml-auto duration-300 origin-left transform bg-[#7044e5] scale-x-30 group-hover:scale-x-100" />
            </h2>
          </div>

          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {upcomingServices.map((service) => {
              return (
                <div
                  key={service?._id}
                  className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
                >
                  <div>
                    <Image
                      className="w-full rounded max-h-40"
                      src={service?.image}
                      alt="category"
                    />

                    <div className="p-5">
                      <p className="mb-2 font-bold">Hockey Sports</p>
                      <p className="text-sm leading-5 text-gray-900">
                        A business big enough that it could be listed on the
                        NASDAQ goes belly up.
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <button
                        className={`bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded ${
                          isDisabled ? "cursor-not-allowed opacity-50" : ""
                        }`}
                        disabled={isDisabled}
                      >
                        Not Available
                      </button>
                    </div>
                  </div>
                  <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComingServices;
