"use client";
import Loading from "@/app/loading";
import { useUserProfileQuery } from "@/redux/auth/authApiSlice";
import { authKey } from "@/utilites/authkey";
import { getFromLocalStorage } from "@/utilites/local-storage";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  const token = getFromLocalStorage(authKey);
  const { data, isLoading } = useUserProfileQuery(token);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="bg-gradient-to-br from-blue-500 to-teal-400 min-h-screen flex items-center justify-center">
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
        <p className="text-gray-600 mt-4 text-center">
          A creative web developer passionate about crafting unique digital
          experiences.
        </p>
        <div className="flex justify-center mt-6">
          <Link href="/dashboard/user/profile/edit">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
