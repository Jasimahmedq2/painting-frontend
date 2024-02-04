"use client";

import Image from "next/image";
import Link from "next/link";
import banner1 from "../../../public/banner1.jpg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

const Banner = () => {
  const textContainer = useRef();
  const router = useRouter();
  useGSAP(
    () => {
      gsap.from(textContainer.current, { y: 360, duration: 2, opacity: 0 });
    },
    { scope: textContainer }
  );
  return (
    <div className="relative flex flex-col-reverse py-12  lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <Image
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={banner1}
          alt=""
        />
      </div>
      <div
        ref={textContainer}
        className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl"
      >
        <div
          // data-aos="fade-right"
          // data-aos-offset="200"
          // data-aos-delay="50"
          // data-aos-duration="1000"
          // data-aos-easing="ease-in-out"
          className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5"
        >
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Explore Artistry
            <br className="hidden md:block" />
            in Every{" "}
            <span className="inline-block text-deep-purple-accent-400">
              Stroke
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Step into the enchanting world of painting as we showcase a diverse
            collection of exquisite artworks that capture the essence of human
            creativity and emotions. Immerse yourself in a symphony of colors
            and stories, where every brushstroke tells a unique narrative.
            Discover the beauty and power of art on our painting website.
          </p>
          <div className="flex items-center">
            <button
              onClick={() => router.push("/services")}
              className="text-xl cursor-pointer w-32 h-12 bg-[#6922ff] text-white relative overflow-hidden group z-10 rounded-lg"
            >
              <span className="absolute bg-white rotate-12 -inset-8 group-hover:duration-300 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
              <span className="absolute bg-sky-700 rotate-12 -inset-8 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
              <span className="absolute bg-sky-900 rotate-12 -inset-8 group-hover:duration-500 duration-300 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span>
              <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-700 ease-out text-center z-10 text-white">
                Services
              </span>
              Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
