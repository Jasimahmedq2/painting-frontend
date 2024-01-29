"use client";
import Link from "next/link";
import bgImage from "../../assests/Mobile login-pana.svg";
import { message } from "antd";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginUserMutation } from "@/redux/auth/authApiSlice";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/utilites/auth.service";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/UI/tooltip";
import { Button } from "@/components/UI/button";

type ILoginInput = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  const [creadential, setCreadential] = useState<ILoginInput>({
    email: "jasim.dev48@gmail.com",
    password: "12345",
  });

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginInput>();

  const [loginUser, { data: LData, isLoading, isSuccess, isError, error }] =
    useLoginUserMutation();

  const onSubmit: SubmitHandler<ILoginInput> = async (data) => {
    await loginUser(data);
  };

  useEffect(() => {
    if (creadential) {
      reset({
        email: creadential?.email,
        password: creadential?.password,
      });
    }
    if (isSuccess && !isLoading) {
      message.info("successfully logged in");
      storeUserInfo({ accessToken: LData?.data?.token });
      router.push("/");
    }
    if (isError) {
      message.error("something went wrong");
    }
  }, [
    isLoading,
    isError,
    isSuccess,
    router,
    LData?.data?.token,
    reset,
    creadential,
  ]);
  const handleAdminCreadential = () => {
    const newCreadential = {
      email: "admin@admin.com",
      password: "123456",
    };
    console.log({ newCreadential, creadential });

    setCreadential(newCreadential);
  };
  const hanldeCustomerCreadential = () => {
    const newCreadential = {
      email: "jasim.dev48@gmail.com",
      password: "123456",
    };
    console.log({ newCreadential, creadential });
    setCreadential(newCreadential);
  };
  return (
    <div className="overflow-hidden bg-gray-900 sm:h-screen">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Ready to dive back into the world of our website?{" "}
              <span className="text-[#1eebae]">Login to continue...</span>
            </h2>
            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
              Simply enter your credentials below and unlock a world of
              personalized experiences. Your journey continues here!
            </p>
          </div>
          <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div className="relative">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block"
              >
                <defs>
                  <pattern
                    id="766323e1-e594-4ffd-a688-e7275079d540"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                  width="52"
                  height="24"
                />
              </svg>
              <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Login
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="name"
                      className="inline-block mb-1 font-medium"
                    >
                      email
                    </label>
                    <input
                      {...register("email", { required: "email is required" })}
                      aria-invalid={errors.email ? "true" : "false"}
                      placeholder="email"
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-[#f0f0f0] focus:outline-none focus:shadow-outline"
                      // value={creadential?.email}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      Password
                    </label>
                    <input
                      placeholder="password"
                      {...register("password", {
                        required: "password is required",
                      })}
                      aria-invalid={errors.password ? "true" : "false"}
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      // value={creadential?.password}
                    />
                    {errors.password && (
                      <p className="text-red-400 text-sm">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#661fff] hover:cursor-pointer "
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div className="flex justify-between items-center ">
                  <div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            onClick={handleAdminCreadential}
                            className="cursor-pointer"
                            variant="outline"
                          >
                            Login as a Admin
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-white">
                          <p>email: Admin@admin.com</p>
                          <br />
                          <p>passowrd: 123456</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            onClick={hanldeCustomerCreadential}
                            className="cursor-pointer"
                            variant="outline"
                          >
                            Login as a customer
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-white">
                          <p>email: jasim.dev48@gmail.com</p>
                          <br />
                          <p>passowrd: 123456</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                <Link
                  href="signup"
                  className="text-md text-sky-600 sm:text-sm underline pt-4"
                >
                  create new account?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
