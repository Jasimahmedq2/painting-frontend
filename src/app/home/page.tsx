"use client";
import Banner from "@/components/UI/banner";
import NewsLetter from "@/components/UI/newsLetter";
import OverView from "@/components/UI/overview";
import Review from "@/components/UI/review";
import ServiceCategory from "@/components/UI/serviceCategory";
import UpComingServices from "@/components/UI/upcommingServices";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ServiceCategory />
      <UpComingServices />
      <NewsLetter />
      <OverView />
      <Review />
    </div>
  );
};

export default HomePage;
