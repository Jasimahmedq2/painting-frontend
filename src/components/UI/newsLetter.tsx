"use client";
import { useSubsCribeNewsLetterMutation } from "@/redux/auth/authApiSlice";
import { useAppSelector } from "@/redux/hooks";
import { isLoggedIn } from "@/utilites/auth.service";
import { authKey } from "@/utilites/authkey";
import { getFromLocalStorage } from "@/utilites/local-storage";
import { message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import newsLetter from "../../assests/newsLetter.jpg";

type INewsLetter = {
  email: string;
};

const NewsLetter = () => {
  const router = useRouter();
  const token = getFromLocalStorage(authKey);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<INewsLetter>();

  const [subscribeNewsLetter, { isLoading, isSuccess, isError, error }] =
    useSubsCribeNewsLetterMutation();

  const onsubmit = async (data: INewsLetter) => {
    if (!isLoggedIn()) {
      return router.push("/login");
    }
    const info = {
      token,
      email: data?.email,
    };

    console.log(info);

    await subscribeNewsLetter(info);
  };

  useEffect(() => {
    if (isLoading) {
      message.loading("loading...");
    }
    if (isSuccess) {
      message.success("successfully subscribed");
      reset();
    }
    if (isError) {
      message.error(error?.data?.errorMessage[0].message);
    }
  }, [isLoading, isSuccess, isError, reset, error?.data?.errorMessage]);
  return (
    <div className="relative">
      <Image
        width={500}
        height={500}
        src={newsLetter}
        className="absolute inset-0 object-cover w-full h-full"
        alt="newsLetter"
      />
      
      <div className="relative bg-opacity-75 bg-[#7748ec]">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none"
              >
                Stay in the Loop with Our Newsletter{" "}
              </h2>
              <p
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="max-w-xl mb-4 text-base text-gray-200 md:text-lg"
              >
                Explore the latest art world happenings, featured artists, and
                exclusive offers by subscribing to our newsletter. Discover a
                world of creativity at your fingertips.
              </p>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Add our NewsLetter
                </h3>
                <form onSubmit={handleSubmit(onsubmit)}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium"
                    >
                      Email
                    </label>
                    <input
                      {...register("email", { required: "email is required" })}
                      area-invalid={errors.email ? "true" : "false"}
                      placeholder="email"
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#6620fe] hover:bg-[#4404d1] focus:shadow-outline focus:outline-none"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
