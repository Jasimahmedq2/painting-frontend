"use client";
import Loading from "@/app/loading";
import PBreadCrumb from "@/components/UI/PBreadCrumb";
import { useUserProfileQuery } from "@/redux/auth/authApiSlice";
import {
  useGetCanceledOrderQuery,
  useGetCompletedOrderQuery,
  useGetPendingOrderQuery,
} from "@/redux/service/orderApi";
import { authKey } from "@/utilites/authkey";
import { getFromLocalStorage } from "@/utilites/local-storage";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  const token = getFromLocalStorage(authKey);
  const { data, isLoading } = useUserProfileQuery(token);
  const { data: PendingData, isLoading: PIsLoading } =
    useGetPendingOrderQuery(token);
  const { data: completedData, isLoading: CIsLoading } =
    useGetCompletedOrderQuery(token);
  const { data: canceledData, isLoading: CLIsLoading } =
    useGetCanceledOrderQuery(token);
  console.log({
    PendingData,
    completedData,
    canceledData,
  });
  if (isLoading || PIsLoading || CIsLoading || CLIsLoading) {
    return <Loading />;
  }
  return (
    <>
      <PBreadCrumb
        items={[
          {
            label: "home",
            link: "/home",
          },
        ]}
      />

      {/* <div className=" bg-gray-200 min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
          <div className="relative flex items-center justify-center">
            <div className="mx-auto">
              <Image
                width={500}
                height={500}
                src={data?.data?.image}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-blue-400"
              />
            </div>
          </div>
          <h1 className="text-3xl text-blue-800 font-bold text-center mt-4">
            {data?.data?.name}
          </h1>
          <p className="text-gray-500 text-center">{data?.data?.email}</p>
          <div className="flex justify-center mt-6">
            <Link href="/dashboard/user/profile/edit">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </div> */}

      <div className=" flex justify-center items-center  flex-col md:flex-row  sm:my-20 sm:mx-20 p-6 sm:p-16 bg-white shadow">
        <div className="relative max-w-[350px] group">
          <Image
            width={320}
            height={320}
            className="rounded-lg transform scale-105"
            src="https://source.unsplash.com/350x350/?men"
            alt="img"
          />
          <span className=" group-hover:shadow-[0px_0px_30px_2px_#0d87f8] group-hover:rotate-180 duration-500 z-30 flex justify-center items-center bg-gradient-to-tr from-[#0d87f8] to-[#70c4ff]  absolute -bottom-6 left-1/2 transform -translate-x-1/2  rounded-full w-[40px] h-[40px] bg-white">
            <svg
              width={25}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g id="style=linear">
                  <g id="add">
                    <path
                      id="vector"
                      d="M11.998 5.84424L11.998 18.1604"
                      stroke="#9EE6FD"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                    <path
                      id="vector_2"
                      d="M18.1561 12.002L5.83998 12.0019"
                      stroke="#9EE6FD"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </span>
          <span className="bg-gradient-to-tr from-[#0d87f8]/80 to-[#70c4ff]/80 duration-300  absolute -bottom-6 left-1/2 transform -translate-x-1/2 rounded-full  z-20 w-0 h-0  group-hover:w-[50px] group-hover:h-[50px]"></span>
          <span className="bg-gradient-to-tr from-[#0d87f8]/50 to-[#70c4ff]/50 duration-500  absolute -bottom-6 left-1/2 transform -translate-x-1/2 rounded-full  z-20 w-0 h-0  group-hover:w-[60px] group-hover:h-[60px] hover:duration-300 "></span>
        </div>
        <div className="space-y-12 max-w-[350px] rounded-tr-lg rounded-br-lg md:w-[350px] text-center p-10 shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)]">
          <div className="space-y-1">
            <h2 className="text-3xl font-medium text-gray-700 text-center font-sans">
              {data?.data?.name}
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-gray-500 text-sm font-sans">Pending</p>
              <p className="text-3xl tracking-wider text-gray-700">
                {PendingData?.data?.total}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-500 text-sm font-sans">completed</p>
              <p className="text-3xl tracking-wider text-gray-700">
                {completedData?.data?.total}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-500 text-sm font-sans">canceled</p>
              <p className="text-3xl tracking-wider text-gray-700">
                {canceledData?.data?.total}
              </p>
            </div>
          </div>
          <div>
            <button className="text-sm font-bold text-[#0d87f8] overflow-hidden shadow-lg border border-[#0d87f8] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0d87f8] before:hover:translate-x-0 before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0d87f8] relative inline-block hover:text-white py-3 px-6 rounded-full cursor-pointer">
              update profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
