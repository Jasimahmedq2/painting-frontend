import Banner from "@/components/UI/banner";
import OverView from "@/components/UI/overview";
import ServiceCategory from "@/components/UI/serviceCategory";
import UpComingServices from "@/components/UI/upcommingServices";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ServiceCategory />
      <UpComingServices />
      <OverView />
    </div>
  );
};

export default HomePage;
