"use client";
import Image from "next/image";
import bgImage from "../../assests/Mobile login-pana.svg";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRegisterUserMutation } from "@/redux/auth/authApiSlice";
import { message } from "antd";
import { useRouter } from "next/navigation";

type IRegisterInput = {
  name: string;
  email: string;
  password: string;
  phoneNo: string;
};

const SignUp = () => {
  const router = useRouter();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<IRegisterInput>();

  const [registerUser, { isLoading, isSuccess, isError }] =
    useRegisterUserMutation();

  const onSubmit: SubmitHandler<IRegisterInput> = async (data) => {
    await registerUser(data);
  };

  useEffect(() => {
    if (isSuccess && !isLoading) {
      message.info("check email to verify your account");
      router.push("/login");
    }
    if (isError) {
      message.error("something went wrong");
    }
  }, [isLoading, isError, isSuccess, router]);

  return (
    <div className="relative">
      <Image
        width={500}
        height={500}
        src={bgImage}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Embark on a new adventure with us!
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                Create your account and join our community of enthusiasts. It
                only takes a few moments to sign up, and the possibilities are
                endless. Let{"'"}s start this exciting journey together!
              </p>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Register
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium"
                    >
                      Name
                    </label>
                    <input
                      {...register("name", { required: true })}
                      aria-invalid={errors.name ? "true" : "false"}
                      placeholder="John"
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-[#f0f0f0] focus:outline-none focus:shadow-outline"
                    />
                    {errors.name?.type === "required" && (
                      <p className="text-red-400 text-sm">name is required</p>
                    )}
                  </div>

                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium"
                    >
                      PhoneNO
                    </label>
                    <input
                      {...register("phoneNo", {
                        required: "phoneNo is required",
                      })}
                      aria-invalid={errors.phoneNo ? "true" : "false"}
                      placeholder="Phone No"
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-[#f0f0f0] focus:outline-none focus:shadow-outline"
                    />
                    {errors.phoneNo && (
                      <p className="text-sm text-red-400">
                        {errors.phoneNo.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      E-mail
                    </label>
                    <input
                      {...register("email", {
                        required: "Email Address is required",
                      })}
                      aria-invalid={errors.email ? "true" : "false"}
                      placeholder="email@gmail.com"
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-[#2a1e1e] focus:outline-none focus:shadow-outline"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium"
                    >
                      Password
                    </label>
                    <input
                      {...register("password", {
                        required: "password is required",
                      })}
                      aria-invalid={errors.password ? "true" : "false"}
                      placeholder="password"
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-[#f0f0f0] focus:outline-none focus:shadow-outline"
                    />
                    {errors.password && (
                      <p className="text-sm text-red-400">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#661fff] focus:shadow-outline focus:outline-none hover:cursor-pointer"
                    >
                      SignUp
                    </button>
                  </div>
                  <Link href="/login" className="text-md text-sky-600">
                    Already have a Account?
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
