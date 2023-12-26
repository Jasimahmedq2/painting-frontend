"use client";
import Image from "next/image";
import cart1 from "../../assests/Mobile login-pana.svg";
import { useGetCartQuery } from "@/redux/service/serviceApiSlice";
import { getFromLocalStorage } from "@/utilites/local-storage";
import { authKey } from "@/utilites/authkey";
import Loading from "../loading";
import Link from "next/link";

const AddBooking = () => {
  const token = getFromLocalStorage(authKey);
  const { data, isLoading, isError, isSuccess } = useGetCartQuery(token);
  if (isLoading) {
    return <Loading />;
  }
  const totalPrice = data?.data?.totalPrice;
  const carts = data?.data.cart;

  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex justify-between items-center my-6">
        <h2>Add Booking</h2>
        <p>total: {totalPrice}</p>
      </div>
      <div className="">
        {carts?.items?.map((cart: any) => {
          return (
            <div
              key={cart?._id}
              className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
            >
              <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
              <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
              <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
              <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
              <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
                <div className="mb-6 mr-6 lg:mb-0">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
                    <Image width={100} height={100} alt="image" src={cart1} />
                  </div>
                </div>
                <div className="flex flex-col justify-between flex-grow ">
                  <div className="flex justify-between items-center">
                    <h6 className="mb-2 font-semibold leading-5">
                      {cart?.service?.name}
                    </h6>
                    <h6 className="mb-2 font-semibold leading-5">
                      qt:{cart?.quantity}
                    </h6>
                  </div>

                  <h4>price: {cart?.service?.price}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Link className="no-underline" href="/shipping_address">
        <div className="flex justify-center mt-6 sm:mt-12">
          <button className="bg-transparent hover:bg-blue-500 w-1/2 sm:w-1/4 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent hover:cursor-pointer rounded">
            Check Out
          </button>
        </div>
      </Link>
    </div>
  );
};

export default AddBooking;
