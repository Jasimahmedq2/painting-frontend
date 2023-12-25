"use client";
import { useGetCartQuery } from "@/redux/service/serviceApiSlice";
import { isLoggedIn, removeUserInfo } from "@/utilites/auth.service";
import { authKey } from "@/utilites/authkey";
import { getFromLocalStorage } from "@/utilites/local-storage";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
export const NavBar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const token = getFromLocalStorage(authKey);
  const { data, isLoading, isError, isSuccess } = useGetCartQuery(token);

  const cartLength = data?.data?.cart?.items.length;

  const handleLogin = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  return (
    <div className="py-5 px-4 mx-auto md:px-8  sticky top-0 bg-white shadow z-10">
      <div className="relative flex items-center justify-between">
        <div className="inline-flex items-center">
          <span className=" text-xl font-bold tracking-wide text-gray-800 uppercase">
            PaintHUt
          </span>
        </div>
        <div className="sm:flex items-center hidden space-x-8 lg:flex">
          <div>
            <Link
              href="/home"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#f5e3e3] no-underline"
            >
              home
            </Link>
          </div>
          <div>
            <Link
              href="/services"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#f5e3e3] no-underline"
            >
              services
            </Link>
          </div>
          {isLoggedIn() && (
            <Link className="no-underline" href="/dashboard/user/profile">
              <div className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#f5e3e3]  ">
                Dashboard
              </div>
            </Link>
          )}

          {isLoggedIn() ? (
            <div>
              <Link
                href="login"
                onClick={handleLogin}
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#6922ff] focus:shadow-outline focus:outline-none cursor-pointer no-underline"
                aria-label="Sign up"
                title="Sign up"
              >
                LogOut
              </Link>
            </div>
          ) : (
            <div>
              <Link
                href="/login"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#6922ff] focus:shadow-outline focus:outline-none no-underline"
                aria-label="Sign up"
                title="Sign up"
              >
                Login
              </Link>
            </div>
          )}
          {isLoggedIn() && (
            <div>
              <Link
                href="/addBooking"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#f5e3e3]"
              >
                <Badge count={cartLength}>
                  <ShoppingCartOutlined
                    type="message"
                    style={{ fontSize: "26px", color: "#08c" }}
                  />
                </Badge>
              </Link>
            </div>
          )}
        </div>

        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <svg
                        className="w-8 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                      >
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                      </svg>
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Company
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <div className="space-y-4">
                    <div>
                      <Link
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#f5e3e3]"
                      >
                        Product
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#f5e3e3]"
                      >
                        Features
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="/"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#f5e3e3]"
                      >
                        Pricing
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="/"
                        aria-label="About us"
                        title="About us"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#f5e3e3]"
                      >
                        About us
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="/"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#6922ff]"
                      >
                        Sign up
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
