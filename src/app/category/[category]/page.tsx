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
import ServiceCard from "@/components/UI/serviceCard";

const Page = ({ params }: { params: { category: string } }) => {
  const token = getFromLocalStorage(authKey);
  const { data, isLoading, isSuccess } = useGetSingleCategoryQuery({
    id: params.category,
    token: token,
  });

  return (
    <div className=" sm:min-h-screen py-8 sm:py-12">
      <div>
        <h2 className=" p-12 text-4xl font-bold sm:text-5xl">Category</h2>
      </div>
      <div className="px-12 grid  cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.data?.map((service: any) => {
          return <ServiceCard key={service?._id} service={service} />;
        })}
      </div>
    </div>
  );
};

export default Page;
