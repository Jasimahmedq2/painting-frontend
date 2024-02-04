"use client";
import Image from "next/image";
import ImageRiver from "../../assests/River Bridge with Mountain Landscape Painting Phone Wallpaper.jpg";
import gear from "../../assests/gear.png";
import idea from "../../assests/idea.png";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { text } from "stream/consumers";
const AboutUs = () => {
  const textContainer = useRef();
  const textContainer2 = useRef();
  const objectRef = useRef(null);

  const [count, setCount] = useState(0);
  const sectionRef = useRef(null);
  useGSAP(
    () => {
      gsap.to([textContainer.current, textContainer2.current], {
        y: 60, // Move from top to bottom
        duration: 4,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(objectRef.current, {
        rotation: 360, // Rotate 360 degrees
        duration: 2, // Animation duration in seconds
        ease: "linear", // Linear easing for a continuous rotation
        repeat: -1, // Infinite repeat
      });
    },
    { scope: textContainer }
  );

  useEffect(() => {
    const handleIntersect = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && count === 0) {
        // Simulate counting from 0 to a specific number (e.g., 10)
        const targetNumber = 56;
        const interval = setInterval(() => {
          setCount((prevCount) =>
            prevCount < targetNumber ? prevCount + 1 : targetNumber
          );
        }, 80);

        // Cleanup interval when the count reaches the target
        if (count === targetNumber) {
          clearInterval(interval);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [count]);

  return (
    <div ref={sectionRef} className="bg-[#fff] shadow relative pt-6 sm:pt-12 sm:mt-16 sm:mb-12">
      <div
        ref={textContainer2}
        className="bg-gray-400/20 absolute rounded-lg rounded-b-full rounded-r-full w-72 h-48 "
      />

      <div className="sm:pl-12 sm:pr-4 p-4 sm:p-0 pb-6 sm:pb-12  pt-12 w-full sm:flex justify-between items-center sm:space-x-12">
        <div className="sm:w-1/2">
          <p className="text-[#a47c68] font-semibold">about company</p>
          <h3 className="text-[#3c3531] text-xl sm:text-2xl font-black mt-4">
            <span>We’re Providing Quality </span>
            <br />
            <span> Wall Designs</span>
          </h3>
          <p className="text-[#a47c68] text-xl font-bold sm:mt-6 mt-4">
            We have 4+ years of experiences for give you better quality results.
          </p>
          <div className="flex items-center justify-between mt-6 sm:mt-8">
            <div className="flex items-center">
              <button className=" cursor-pointer w-32 sm:w-48 h-12 sm:h-20 bg-[#fff] border-[#a47c68] text-black hover:text-white relative overflow-hidden group z-10 rounded-r-full p-4 text-sm font-semibold">
                <span className="absolute bg-white rotate-12 -inset-12 group-hover:duration-300 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
                <span className="absolute bg-[#a47c68] rotate-12 -inset-12 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
                <span className="absolute bg-[#795848] rotate-12 -inset-112 group-hover:duration-500 duration-300 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span>
                <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-700 ease-out text-center z-10 text-white text-sm font-semibold ">
                  Smart & Unique Wall Work
                </span>
                Smart & Unique Wall Work
              </button>
            </div>
            <div ref={objectRef} className="max-w-48">
              <Image width={50} height={50} src={gear} alt="gear" />
            </div>
            <div className="flex items-center">
              <button className="text-sm cursor-pointer w-32 sm:w-48 h-12 sm:h-20 bg-[#fff] border-[#a47c68] text-black hover:text-white relative overflow-hidden group z-10 rounded-l-full p-4 font-semibold">
                <span className="absolute bg-white hover:bg-[#a47c68] rotate-12 -inset-12 group-hover:duration-300 duration-700 scale-x-0 group-hover:scale-x-100 origin-right transform transition-transform"></span>
                <span className="absolute bg-[#a47c68] rotate-12 -inset-12 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-100 origin-right transform transition-transform"></span>
                <span className="absolute bg-[#795848] rotate-12 -inset-12 group-hover:duration-500 duration-300 scale-x-0 group-hover:scale-x-50 origin-right transform transition-transform"></span>
                <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-700 ease-out text-center z-10 text-white text-sm font-semibold">
                  The Best Quality Standards
                </span>
                The Best Quality Standards
              </button>
            </div>
          </div>
          <p className="text-[#aba4a1] font-semibold pt-4 sm:mt-6 text-md">
            Welcome to PaintHut, where art and expertise converge to transform
            your spaces. Our skilled painters bring creativity to life,
            delivering top-notch residential and commercial painting services.
            With a passion for precision, we turn your vision into vibrant
            reality. Elevate your surroundings with our unparalleled painting
            solutions.
          </p>
        </div>
        <div className="sm:w-1/2 flex  justify-center relative mt-20 sm:mt-0">
          <div className=" z-4">
            <div className="bg-[#a47c68] w-48 h-48 rounded text-center p-4 absolute z-5 left-16 -top-16 ">
              <Image width={50} height={50} src={idea} alt="idea" />
              <h2 className="text-white font-black py-4">{count}</h2>
              <h2 className="text-white font-black text-sm ">
                completed projects
              </h2>
            </div>
            <Image
              className="max-w-[300px] mx-auto rounded-2xl"
              width={500}
              height={500}
              src={ImageRiver}
              alt="river"
            />
            <div
              ref={textContainer}
              className="bg-gray-400/20 absolute left-0 -bottom-20 -z-10   rounded-lg rounded-b-full rounded-l-full w-72 h-48 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
