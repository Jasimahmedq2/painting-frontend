"use client";
import Image from "next/image";
import cartImage from "../../../assests/Mobile login-pana.svg";
import { StarFilled } from "@ant-design/icons";
import Link from "next/link";
import {
  useGetSingleCategoryQuery,
  useGetCategoryQuery,
  useGetSingleServiceQuery,
  useAddCategoryMutation,
  useAddToCartMutation,
} from "@/redux/service/serviceApiSlice";
import { getFromLocalStorage } from "@/utilites/local-storage";
import { authKey } from "@/utilites/authkey";
import { message } from "antd";
import { useEffect } from "react";
import Loading from "@/app/loading";
import ServiceCard from "@/components/UI/serviceCard";
import { getUserInfo, isLoggedIn } from "@/utilites/auth.service";
import { useRouter } from "next/navigation";
import { USER_ROLE } from "@/constants/role";
import { UserInfoData } from "@/utilites/userInfo.type";

const ServiceDetailsPage = ({ params }: { params: { service: string } }) => {
  const router = useRouter();
  const token = getFromLocalStorage(authKey);
  const userInfo: UserInfoData | unknown = getUserInfo();
  const { data, isLoading: SIsloading } = useGetSingleServiceQuery({
    id: params.service,
    token: token,
  });
  const { data: CData, isLoading: CIsLoading } = useGetSingleCategoryQuery({
    id: data?.data?.category,
    token: token,
  });

  const [addToCart, { isLoading, isSuccess, isError }] = useAddToCartMutation();

  const handleAddService = async (id: string) => {
    if (!isLoggedIn()) {
      return router.push("/login");
    }
    if (userInfo?.role !== USER_ROLE.CUSTOMER) {
      message.error(
        `only customer can purchase any order you are an ${userInfo?.role}`
      );
      return;
    }
    const serviceInfo = {
      token: token,
      info: {
        service: id,
        quantity: 1,
      },
    };
    await addToCart(serviceInfo);
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("successfully add the service in cart");
    }
    if (isError) {
      message.error("something went wrong");
    }
    if (isLoading) {
      message.loading("loading...");
    }
  }, [isLoading, isSuccess, isError]);

  if (SIsloading || CIsLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-white p-2 shadow sm:px-12 sm:py-12 sm:min-h-screen">
      <div className="sm:flex justify-between items-center ">
        <div className="pr-4">
          <Image
            className="rounded"
            width={500}
            height={500}
            alt="image"
            src={data?.data?.image}
          />
        </div>
        <div className="space-y-2 sm:w-1/2">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">
              {data?.data?.name}
            </h2>

            <button
              onClick={() => handleAddService(data?.data?._id)}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              Booking
            </button>
          </div>
          <h2 className="  text-gray-900">{data?.data?.painter?.name}</h2>

          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">
              ${data?.data?.price}
            </h2>
            {/* <p className="font-md">
              4 <StarFilled />
            </p> */}
          </div>
          <p className="text-gray-700">{data?.data?.description}</p>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold text-black my-4">Related services</h2>
        <div className=" grid cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CData?.data?.map((service: any) => {
            return <ServiceCard key={service?._id} service={service} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
