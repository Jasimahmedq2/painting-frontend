"use client";
import {
  useGetCartQuery,
  usePlaceOrderMutation,
} from "@/redux/service/serviceApiSlice";
import { authKey } from "@/utilites/authkey";
import { getFromLocalStorage } from "@/utilites/local-storage";
import React, { useEffect } from "react";
import Loading from "../loading";
import { message } from "antd";
import { useRouter } from "next/navigation";

const OrderPage = () => {
  const router = useRouter();
  const token = getFromLocalStorage(authKey);
  const { data, isLoading, isError, isSuccess } = useGetCartQuery(token);
  const [
    placeOrder,
    {
      isLoading: OIsLoading,
      isSuccess: OIsSuccess,
      isError: OIsError,
      data: RedirectData,
    },
  ] = usePlaceOrderMutation();

  console.log({ RedirectData });

  useEffect(() => {
    if (OIsSuccess) {
      window.location.replace(RedirectData?.data);
    }
    if (OIsLoading) {
      message.loading("loading...");
    }
    if (OIsError) {
      message.error("something went wrong");
    }
  }, [OIsSuccess, OIsError, OIsLoading, router, RedirectData?.data]);

  if (isLoading) {
    return <Loading />;
  }
  const totalPrice = data?.data?.totalPrice;
  const carts = data?.data.cart;
  const itemsInfo = carts?.items?.map((obj: any) => ({
    quantity: obj?.quantity,
    painting: obj?.service?._id,
  }));

  const handlePlaceOrder = async () => {
    await placeOrder(token);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-3xl font-semibold mb-4">Order Summary</h1>

        <div className="bg-gray-200 p-4 rounded-lg mb-4">
          <div className="flex justify-between border-b border-gray-300 pb-2 mb-2">
            <span className="font-semibold">Item Name</span>
            <span className="font-semibold">Price</span>
            <span className="font-semibold">Quantity</span>
          </div>
          {carts?.items.map((cart: any) => {
            return (
              <div
                key={cart?._id}
                className="flex justify-between border-b border-gray-300 pb-2 mb-2 "
              >
                <span className="font-semibold">
                  {cart?.service?.name.substring(0, 5)}...
                </span>
                <span className="font-semibold">{cart?.service?.price}</span>
                <span className="font-semibold">{cart?.quantity}</span>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between">
          <span className="font-semibold text-xl">Total:</span>
          <span className="font-semibold text-xl">${totalPrice}</span>
        </div>

        <button
          onClick={handlePlaceOrder}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 hover:cursor-pointer"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderPage;
