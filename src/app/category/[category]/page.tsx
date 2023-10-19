"use client";
import { useEffect } from "react";
import Image from "next/image";
import category1 from "../../../../public/banner1.jpg";
import { Descriptions, message } from "antd";
import { StarFilled } from "@ant-design/icons";
import Link from "next/link";
import { getFromLocalStorage } from "@/utilites/local-storage";
import {
  useAddToCartMutation,
  useGetSingleCategoryQuery,
} from "@/redux/service/serviceApiSlice";
import { authKey } from "@/utilites/authkey";



const Page = ({ params }: { params: { category: string } }) => {
  const token = getFromLocalStorage(authKey);
  const { data, isLoading, isSuccess } = useGetSingleCategoryQuery({
    id: params.category,
    token: token,
  });

  const [
    addToCart,
    { isLoading: BIsLoading, isSuccess: BIsSuccess, isError: BIsError },
  ] = useAddToCartMutation();

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
    if (BIsSuccess) {
      message.success("successfully add the service in cart");
    }
    if (BIsError) {
      message.error("something went wrong");
    }
    if (BIsLoading) {
      message.loading("loading");
    }
  }, [BIsLoading, BIsSuccess, BIsError]);

  return (
    <div className=" sm:min-h-screen py-8 sm:py-12">
      <div>
        <h2 className=" p-12 text-4xl font-bold sm:text-5xl">Category</h2>
      </div>
      <div className="px-12 grid  cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.data?.map((service: any) => {
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
                  {service?.description?.length > 30
                    ? service.description.substring(0, 30) + "..."
                    : service.description}
                </p>
              </div>
              <div className=" px-6 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">
                  ${service?.price}
                </h2>
              </div>
              <div className="px-6 flex items-center justify-between pt-4 pb-2">
                <Link href={`/services/${service?._id}`}>
                  <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                    details
                  </button>
                </Link>

                <button
                  onClick={() => handleAddService(service?._id)}
                  className="bg-black border text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                >
                  booking
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
