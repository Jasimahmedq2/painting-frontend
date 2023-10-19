"use client";
import {
  useGetAllServiceQuery,
  useRemoveServiceMutation,
} from "@/redux/service/serviceApiSlice";
import { authKey } from "@/utilites/authkey";
import { getFromLocalStorage } from "@/utilites/local-storage";
import { StarFilled } from "@ant-design/icons";
import { message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const ManageService = () => {
  const token = getFromLocalStorage(authKey);
  const { data, isLoading: SisLoading } = useGetAllServiceQuery(token);
  const [removeService, { isLoading, isSuccess, isError }] =
    useRemoveServiceMutation();

  const handleRemove = async (id: string) => {
    const removeInfo = {
      token,
      id,
    };
    await removeService(removeInfo);
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("successfully deleted a service");
    }
    if (isLoading) {
      message.loading("loading");
    }
    if (isError) {
      message.error("something went wrong");
    }
  }, [isLoading, isError, isSuccess]);

  return (
    <div className=" sm:min-h-screen py-8 sm:py-12">
      <div>
        <h2 className=" p-12 text-4xl font-bold sm:text-5xl">Services</h2>
      </div>
      <div className="p-12 grid cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  {service.description.length > 30
                    ? service.description.substring(0, 30) + "..."
                    : service.description}
                </p>
              </div>
              <div className=" px-6 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">
                  ${service?.price}
                </h2>
                <p className="font-md">
                  4 <StarFilled />
                </p>
              </div>
              <div className="px-6 flex items-center justify-between pt-4 pb-2">
                <Link href={`/dashboard/admin/manage_service/${service?._id}`}>
                  <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                    edit
                  </button>
                </Link>

                <button
                  onClick={() => handleRemove(service?._id)}
                  className="bg-black border text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManageService;
