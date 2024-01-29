"use client";
// import AOS from "aos";
// import "aos/dist/aos.css";

// AOS.init();

const OverView = () => {
  return (
    <div className="px-4 sm:mt-12 py-12 mx-auto  md:px-24 lg:px-8 lg:py-20 ">
      <div className="flex  mb-6 justify-center lg:flex-row md:mb-8 ">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group relative">
          <span className="inline-block mb-1 sm:mb-4">Overview</span>

          <div className="h-1 ml-auto duration-300 origin-left transform bg-[#7044e5] scale-x-30 group-hover:scale-x-100 transition-transform absolute bottom-0 left-0 right-0"></div>
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-x-2 row-gap-8 md:grid-cols-3">
        <div className="rounded p-4 overflow-hidden transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
          <h6 className="text-3xl font-bold text-[#5d1dea]">56</h6>
          <p className="font-bold">Completed Services:</p>
          <p className="text-gray-700 pt-3">
            Successful Projects, Happy Customers! We take pride in our completed
            services, where we have transformed countless spaces with precision
            and care. Our commitment to excellence is reflected in each project
            we have finished. Discover the difference with our top-notch
            painting services.
          </p>
        </div>
        <div className="shadow-lg rounded p-4 overflow-hidden transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
          <h6 className="text-3xl font-bold text-[#5d1dea]">4.8</h6>
          <p className="font-bold">AVG Ratings</p>
          <p className="text-gray-700 pt-3">
            Customer Satisfaction Guaranteed! Our 5-star ratings speak volumes
            about the quality of our work and the satisfaction of our clients.
            Experience the excellence of our painting services and join our
            growing list of delighted customers
          </p>
        </div>
        <div className=" rounded p-4 overflow-hidden transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
          <h6 className="text-3xl font-bold text-[#5d1dea]">06</h6>
          <p className="font-bold">processing Services:</p>
          <p className="text-gray-700 pt-3">
            We re Ready to Transform Your Space! Your painting project is in
            good hands with us. We have a dedicated team ready to tackle your
            pending services, ensuring your vision becomes a reality. Contact us
            today to schedule your next painting project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverView;
