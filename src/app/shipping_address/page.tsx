"use client";
import { useGetPainterUserQuery } from "@/redux/auth/authApiSlice";
import {
  useAddCategoryMutation,
  useAddServiceMutation,
  useAddShippingMutation,
  useGetCategoryQuery,
  useGetShippingQuery,
} from "@/redux/service/serviceApiSlice";
import { authKey } from "@/utilites/authkey";
import { getFromLocalStorage } from "@/utilites/local-storage";
import { Button, Input, message } from "antd";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Loading from "../loading";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addAddress } from "@/redux/service/serviceSlice";

export type IShippingAddress = {
  street: string;
  city: string;
  phoneNo: string;
  country: string;
  postalCode: string;
};

const ShippingAddress = () => {
  const dispatch = useAppDispatch();
  const { shippingAddress } = useAppSelector((state) => state.service);
  const token = getFromLocalStorage(authKey);
  const {
    data: shippingData,
    isLoading: SIsLoading,
    isSuccess: SIsSuccess,
  } = useGetShippingQuery(token);
  const address = shippingData?.data;
  console.log("shippingAddress", shippingAddress?.street);

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<IShippingAddress>({
    defaultValues: {
      street: shippingAddress?.street,
      city: shippingAddress?.city,
      phoneNo: shippingAddress?.phoneNo,
      country: shippingAddress?.country,
      postalCode: shippingAddress?.postalCode,
    },
  });

  const [addShipping, { isLoading, isSuccess, isError }] =
    useAddShippingMutation();

  const onsubmit: SubmitHandler<IShippingAddress> = async (data) => {
    const shippingInfo = {
      token: token,
      info: data,
    };
    console.log(shippingInfo);
    await addShipping(shippingInfo);
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("shipping address added");
    }
    if (SIsSuccess) {
      dispatch(addAddress(address));
    }
    if (isError) {
      message.error("something went wrong");
    }
  }, [isLoading, isSuccess, isError, SIsSuccess, dispatch, address]);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-1/2"
        onSubmit={handleSubmit(onsubmit)}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          add Shipping Address
        </h2>

        <div className="mb-4">
          <label htmlFor="firstName" className="text-gray-600">
            Street
          </label>
          <input
            {...register("street", { required: "street is required" })}
            aria-invalid={errors.street ? "true" : "false"}
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          {errors.street && (
            <p className="text-sm text-red-400">{errors.street.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="text-gray-600">
            City
          </label>
          <input
            {...register("city", {
              required: "city is required",
            })}
            area-invalid={errors.city ? "true" : "false"}
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          {errors.city && (
            <p className="text-sm text-red-400">{errors.city.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="text-gray-600">country</label>
          <input
            type="text"
            {...register("country", { required: "country is required" })}
            area-invalid={errors.country ? "true" : "false"}
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          {errors.country && (
            <p className="text-sm text-red-400">{errors.country.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="text-gray-600">phoneNO</label>
          <input
            type="phoneNo"
            {...register("phoneNo", { required: "phone number is required" })}
            area-invalid={errors.phoneNo ? "true" : "false"}
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          {errors.phoneNo && (
            <p className="text-sm text-red-400">{errors.phoneNo.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="text-gray-600">postalCode</label>
          <input
            type="phoneNo"
            {...register("postalCode", {
              required: "postal code number is required",
            })}
            area-invalid={errors.phoneNo ? "true" : "false"}
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          {errors.postalCode && (
            <p className="text-sm text-red-400">{errors.postalCode.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          {isLoading ? "loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ShippingAddress;
