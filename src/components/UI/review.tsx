"use client";
import Image from "next/image";
import React from "react";
import profile1 from "../../../public/banner1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Review = () => {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
      <h2 className="max-w-lg text-center mx-auto sm:py-16 mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group  py-4 ">
        <span className="inline-block mb-1 sm:mb-4">Reviews</span>
        <div className="h-1 ml-auto duration-300 origin-left transform bg-[#7044e5] scale-x-30 group-hover:scale-x-100" />
      </h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto cursor-pointer">
            <div className="mr-6">
              <Image
                className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50"
                src={profile1}
                alt="img"
              />
            </div>

            <div>
              <div className="flex space-x-24 items-baseline">
                <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  jasim ahmed
                </h2>
                <p className="text-[#7540dc] font-bold text-xl">
                  5/ <sup>5</sup>
                </p>
              </div>

              <p className="text-base text-gray-700 md:text-lg">
                they provide outStanding service. they done my home painting
                with consistency and hard work. they can done nature art
                efficiently
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
            <div className="mr-6">
              <Image
                className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50"
                src={profile1}
                alt="img"
              />
            </div>

            <div>
              <div className="flex space-x-24 items-baseline">
                <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  jasim ahmed
                </h2>
                <p className="text-[#7540dc] font-bold text-xl">
                  5/ <sup>5</sup>
                </p>
              </div>

              <p className="text-base text-gray-700 md:text-lg">
                they provide outStanding service. they done my home painting
                with consistency and hard work. they can done nature art
                efficiently
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
            <div className="mr-6">
              <Image
                className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50"
                src={profile1}
                alt="img"
              />
            </div>

            <div>
              <div className="flex space-x-24 items-baseline">
                <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  jasim ahmed
                </h2>
                <p className="text-[#7540dc] font-bold text-xl">
                  5/ <sup>5</sup>
                </p>
              </div>

              <p className="text-base text-gray-700 md:text-lg">
                they provide outStanding service. they done my home painting
                with consistency and hard work. they can done nature art
                efficiently
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
