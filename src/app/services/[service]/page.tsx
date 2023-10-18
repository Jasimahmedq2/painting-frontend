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

const upcomingServices = [
  {
    _id: 1,
    description:
      " Painted between 1503 and 1517 Da Vinci s alluring portrait  been dogged by two questions since the day it was made Who s the subject and why is she smiling",
    name: "Mona Lisa",
    image: cartImage,
  },
  {
    _id: 2,
    description:
      " Painted between 1503 and 1517 Da Vinci s alluring portrait  been dogged by two questions since the day it was made Who s the subject and why is she smiling",
    name: "Mona Lisa",
    image: cartImage,
  },
  {
    _id: 3,
    description:
      " Painted between 1503 and 1517 Da Vinci s alluring portrait  been dogged by two questions since the day it was made Who s the subject and why is she smiling",
    name: "Mona Lisa",
    image: cartImage,
  },
  {
    _id: 4,
    description:
      " Painted between 1503 and 1517 Da Vinci s alluring portrait  been dogged by two questions since the day it was made Who s the subject and why is she smiling",
    name: "Mona Lisa",
    image: cartImage,
  },
];

const ServiceDetailsPage = ({ params }: { params: { service: string } }) => {
  const token = getFromLocalStorage(authKey);
  const { data } = useGetSingleServiceQuery({
    id: params.service,
    token: token,
  });
  const { data: CData } = useGetSingleCategoryQuery({
    id: data?.data?.category,
    token: token,
  });

  const [addToCart, { isLoading, isSuccess, isError }] = useAddToCartMutation();

  const handleAddService = async (id: string) => {
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
  }, [isLoading, isSuccess, isError]);

  return (
    <div className="bg-white p-2 shadow sm:px-12 sm:py-12 sm:min-h-screen">
      <div className="sm:flex justify-between items-center ">
        <div>
          <Image width={500} height={500} alt="image" src={data?.data?.image} />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">
              {data?.data?.name}
            </h2>

            <button
              onClick={() => handleAddService(data?.data?._id)}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Booking
            </button>
          </div>
          <h2 className="  text-gray-900">painter name</h2>

          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">
              ${data?.data?.price}
            </h2>
            <p className="font-md">
              4 <StarFilled />
            </p>
          </div>
          <p className="text-gray-700">{data?.data?.description}</p>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold text-black my-4">Related services</h2>
        <div className=" grid cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CData?.data?.map((service: any) => {
            return (
              <div
                key={service?._id}
                className="max-w-sm rounded overflow-hidden shadow-lg"
              >
                <Image
                  width={400}
                  height={200}
                  src={service?.image}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{service?.name}</div>
                  <p className="text-gray-700 text-base">
                    {service.description.length > 30
                      ? service.description.substring(0, 30) + "..."
                      : service.description}
                  </p>
                </div>
                <div className=" px-6 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-800">$150</h2>
                  <p className="font-md">
                    4 <StarFilled />
                  </p>
                </div>
                <div className="px-6 flex items-center justify-between pt-4 pb-2">
                  <Link href={`/services/${service?._id}`}>
                    <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                      details
                    </button>
                  </Link>

                  <button className="bg-black border text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                    booking
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
