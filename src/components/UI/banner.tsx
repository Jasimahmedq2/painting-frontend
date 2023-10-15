"use client";

import Image from "next/image";
import Link from "next/link";
import banner1 from "../../../public/banner1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Banner = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
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
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
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
            <Link
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#681eff] focus:shadow-outline focus:outline-none"
            >
              Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
