"use client";
import PBreadCrumb from "@/components/UI/PBreadCrumb";
import { Button } from "@/components/UI/button";
import {
  useGetCompletedOrderQuery,
  useGetPendingOrderQuery,
} from "@/redux/service/orderApi";
import { authKey } from "@/utilites/authkey";
import { getFromLocalStorage } from "@/utilites/local-storage";
import { Skeleton } from "antd";
import Image from "next/image";
import Link from "next/link";

const CanceledOrder = () => {
  const token = getFromLocalStorage(authKey);
  const { data: canceledData, isLoading } = useGetCompletedOrderQuery(token);

  return (
    <>
    <PBreadCrumb
      items={[
        {
          label: "dashboard",
          link: "/dashboard/user/profile",
        },
      ]}
    />
    <div className="bg-white shadow-md max-w-[800px md:w-[700px] mx-auto p-8 my-20 space-y-6">
      {/* top part  */}
      <div className="flex justify-between items-center">
        <h4 className="text-xl font-medium text-slate-800 uppercase">
          Canceled Order
        </h4>
        <p className="text-sm font-medium text-gray-400 uppercase">
          {canceledData?.data?.total}
        </p>
      </div>
      <hr />
      {/*  Cart  map */}
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          {canceledData?.data?.items.map((item, idx) => (
            <div
              key={item?.id}
              className="flex justify-between items-center border-b pb-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <Image
                  width={75}
                  height={75}
                  className="w-[75px] h-[75px] rounded-lg bg-slate-500"
                  src={item?.image}
                  alt=""
                />
                <div>
                  <h5 className="text-lg font-medium">{item?.name}</h5>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 md:gap-10">
                <h6 className="text-xl font-medium text-slate-800">
                  {item?.price}
                </h6>
              </div>
              <div>
                <Link
                  href={`/services/${item?._id}`}
                  className="cursor-pointer hover:underline font-bold"
                >
                  see details
                </Link>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
    </>
  );
};

export default CanceledOrder;
