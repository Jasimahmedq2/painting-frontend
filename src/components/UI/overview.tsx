"use client";
// import AOS from "aos";
// import "aos/dist/aos.css";

// AOS.init();

const OverView = () => {
  return (
    <div className="px-4 sm:mt-12 py-16 mx-auto  md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-1 gap-x-2 row-gap-8 md:grid-cols-3">
        <div className="hover:shadow-lg rounded p-4">
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
        <div className="shadow-lg rounded p-4">
          <h6 className="text-3xl font-bold text-[#5d1dea]">4.8</h6>
          <p className="font-bold">AVG Ratings</p>
          <p className="text-gray-700 pt-3">
            Customer Satisfaction Guaranteed! Our 5-star ratings speak volumes
            about the quality of our work and the satisfaction of our clients.
            Experience the excellence of our painting services and join our
            growing list of delighted customers
          </p>
        </div>
        <div className="hover:shadow-lg rounded p-4">
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
