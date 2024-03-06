"use client";
import Image from "next/image";
import cart1 from "../../assests/Mobile login-pana.svg";
import { useGetCartQuery } from "@/redux/service/serviceApiSlice";
import { getFromLocalStorage } from "@/utilites/local-storage";
import { authKey } from "@/utilites/authkey";
import Loading from "../loading";
import Link from "next/link";
import { Skeleton } from "antd";

const AddBooking = () => {
  const token = getFromLocalStorage(authKey);
  const { data, isLoading, isError, isSuccess } = useGetCartQuery(token);

  const totalPrice = data?.data?.totalPrice;
  const carts = data?.data.cart;

  console.log({ carts });

  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex justify-between items-center my-6">
        <h2>Cart Details</h2>
        <p>total: {totalPrice}</p>
      </div>
      {isLoading ? (
        <Skeleton />
      ) : (
        <div className="">
          <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
            <thead>
              <tr className="bg-[#0095FF] text-white">
                <th className="py-4 px-6 text-lg text-left border-b">Image</th>
                <th className="py-4 px-6 text-lg text-left border-b">Name</th>
                <th className="py-4 px-6 text-lg border-b text-end">Price</th>
                <th className="py-4 px-6 text-lg border-b text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {carts?.items?.map((cart: any) => (
                <tr
                  key={cart?._id}
                  className="hover:bg-gray-50 border-b transition duration-300"
                >
                  <td className="py-4 px-4 flex justify-start">
                    <Image
                      width={100}
                      height={100}
                      src={cart?.service?.image}
                      alt="service"
                      className="h-16 w-16 object-cover bg-gray-300"
                    />
                  </td>
                  <td className="py-4 px-6 border-b text-xl font-medium">
                    {cart?.service?.name}
                  </td>
                  <td className="py-4 px-6 border-b text-lg font-medium">
                    {cart?.service?.price}
                  </td>
                  <td className="py-4 px-6 border-b text-end ">
                    <Link href={`/services/${cart?.service?._id}`}>
                      <button className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md cursor-pointer">
                        Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* {carts?.items?.map((cart: any) => {
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
                      <Image width={100} height={100} alt="image" />
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
          })} */}
        </div>
      )}
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
