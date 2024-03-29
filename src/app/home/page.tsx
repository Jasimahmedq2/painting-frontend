"use client";
import Process from "@/components/UI/Process";
import AboutUs from "@/components/UI/aboutUs";
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
      <AboutUs />
      <Process />
      <UpComingServices />
      <OverView />
      {/* <Review /> */}
      <NewsLetter />
    </>
  );
};

export default HomePage;
