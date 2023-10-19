"use client"
import Link from "next/link";


const ProfilePage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-teal-400 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <div className="relative flex items-center justify-center">
          <div className="mx-auto">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-400"
            />
          </div>
        </div>
        <h1 className="text-3xl text-blue-800 font-bold text-center mt-4">
          John Doe
        </h1>
        <p className="text-gray-500 text-center">john.doe@example.com</p>
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
