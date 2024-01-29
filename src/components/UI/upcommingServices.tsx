"use client";
import Image from "next/image";
import category1 from "../../../public/banner1.jpg";
import category2 from "../../assests/pexels-karl-solano-2883049.jpg";
import category3 from "../../assests/pexels-pixabay-262034.jpg";
import category4 from "../../assests/pexels-pavel-danilyuk-6925357.jpg";
import { useState } from "react";
import { serialize } from "v8";

const upcomingServices = [
  {
    _id: 1,
    description:
      "Transform your space with the exquisite touch of Brushed Elegance Painting. Our skilled artisans create masterpieces on your walls, adding a touch of sophistication to your home or office. From classic to contemporary, we offer a wide range of painting styles and techniques to bring your vision to life.",
    name: "Brushed Elegance Painting",
    image: category1,
  },
  {
    _id: 2,
    description:
      "At ColorCrafters Pro, we're passionate about color and craftsmanship. Our team of experienced painters takes pride in turning your ideas into reality, enhancing your living spaces with precision and creativity. We specialize in custom color schemes, murals, and faux finishes to make your surroundings uniquely beautiful.",
    name: "ColorCrafters Pro",
    image: category2,
  },
  {
    _id: 3,
    description:
      "Canvas & Hue Creations is your go-to destination for creating art on walls. Our talented artists are dedicated to adding personality and vibrancy to your environment. Whether you're looking for a serene oasis or an explosion of colors, we'll work with you to make your dream space a reality.",
    name: "Canvas & Hue Creations",
    image: category3,
  },
  {
    _id: 4,
    description:
      "Canvas & Hue Creations is your go-to destination for creating art on walls. Our talented artists are dedicated to adding personality and vibrancy to your environment. Whether you're looking for a serene oasis or an explosion of colors, we'll work with you to make your dream space a reality",
    name: "Vivid Strokes Paintworks",
    image: category4,
  },
];

const UpComingServices = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  return (
    <div className="bg-gray-100">
      <div className="relative px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20">
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
  <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group relative">
    <span className="inline-block mb-1 sm:mb-4">
      Upcoming Winter
      <br className="hidden md:block" />
      Services
    </span>

    <div className="h-1 ml-auto duration-300 origin-left transform bg-[#7044e5] scale-x-30 group-hover:scale-x-100 transition-transform absolute bottom-0 left-0 right-0"></div>
  </h2>
</div>
          <div className="relative grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {upcomingServices.map((service) => {
              return (
                <div
                  key={service._id}
                  className="max-[350px] md:w-[400px] bg-white  px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md overflow-hidden transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                >
                  {/* Card Image */}
                  <Image
                    className="w-[350px] mx-auto h-[190px] bg-gray-400 rounded-2xl"
                    src={service?.image}
                   
                    alt=""
                  />
                  {/* Card Heading */}
                  <div className="space-y-2">
                    <h2 className="text-slate-800 font-medium md:text-xl sm:text-lg ">
                      {service?.name}
                    </h2>
                    <p>
                      {service?.description.length > 100
                        ? service?.description.substring(0, 100) + "..."
                        : service?.description}
                    </p>
                  </div>

                  <div className="mt-5 flex justify-between items-center font-medium">
                    <h2 className="md:text-xl text-gray-800">$20.00</h2>
                  </div>
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
