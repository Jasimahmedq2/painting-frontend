"use client";
import Process from "@/components/UI/Process";
import Banner from "@/components/UI/banner";
import NewsLetter from "@/components/UI/newsLetter";
import OverView from "@/components/UI/overview";
import ServiceCategory from "@/components/UI/serviceCategory";
import UpComingServices from "@/components/UI/upcommingServices";

const HomePage = () => {
  return (
    <>
      <Banner />
      <ServiceCategory />
      <Process />
      <UpComingServices />
      <OverView />
      {/* <Review /> */}
      <NewsLetter />
    </>
  );
};

export default HomePage;
