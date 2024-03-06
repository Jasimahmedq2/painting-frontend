"use client";
import { useGetCategoryQuery } from "@/redux/service/serviceApiSlice";
import { authKey } from "@/utilites/authkey";
import { getFromLocalStorage } from "@/utilites/local-storage";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const getYear = date.getFullYear();
  const token = getFromLocalStorage(authKey);
  const { data, isLoading, isSuccess } = useGetCategoryQuery(token);
  return (
    <div className="relative max-w-[1280px] mx-auto mt-16 bg-[#661fff]">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-[#661fff]"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto  md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <div className="inline-flex items-center">
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                PaintingHut
              </span>
            </div>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-[#c497ff]">
                Explore a world of artistic beauty on our painting website,
                where captivating masterpieces come to life on your screen.
              </p>
              <p className="mt-4 text-sm text-[#c497ff]">
                Immerse yourself in a diverse collection of paintings, from
                classic to contemporary, and discover the perfect piece to adorn
                your space. Unleash your inner art connoisseur and start your
                journey into the world of visual inspiration today
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-[#33c0c6]">
                Category
              </p>
              <ul className="mt-2 space-y-4 list-none">
                {data?.data?.slice(0, 6).map((result: any) => {
                  return (
                    <li key={result?._id}>
                      <Link
                        href={`/category/${result?._id}`}
                        className="transition-colors duration-300 text-[#c497ff] hover:text-[#33c0c6] no-underline "
                      >
                        {result?.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-[#33c0c6]">
                contact
              </p>
              <ul className="mt-2 space-y-4 list-none">
                <li>
                  <p className="transition-colors duration-300 text-[#c497ff] hover:text-[#33c0c6]">
                    phone: +8801794274148
                  </p>
                </li>
                <li>
                  <p className="transition-colors duration-300 text-[#c497ff] hover:text-[#33c0c6]">
                    email: jasim.dev48@gmail.com
                  </p>
                </li>
                <li>
                  <a
                    href="https://github.com/Jasimahmedq2"
                    target="_blank"
                    className="transition-colors duration-300 text-[#c497ff] hover:text-[#33c0c6] no-underline "
                  >
                    github: https://github.com/Jasimahmedq2
                  </a>
                </li>
                <li>
                  <a
                    href="https://devjasim.netlify.app/"
                    target="_blank"
                    className="transition-colors duration-300 text-[#c497ff] hover:text-[#33c0c6] no-underline "
                  >
                    Portfolio: https://devjasim.netlify.app/
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright {getYear} PaintingHut. All rights reserved.
          </p>
          <div className="flex text-start items-center mt-1 space-x-3">
            <a
              href="https://www.linkedin.com/in/jasim4148/"
              className="text-gray-500 transition-colors duration-300 hover:text-white"
              target="_blank"
            >
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
                className="h-5 w-5"
              >
                <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z" />
              </svg>
            </a>
            <a
              href="https://github.com/Jasimahmedq2"
              className="text-gray-500 transition-colors duration-300 hover:text-white"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 30 30"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/jasim4148"
              target="_blank"
              className="text-gray-500 transition-colors duration-300 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
