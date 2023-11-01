"use client";
import { useGetPainterUserQuery } from "@/redux/auth/authApiSlice";
import {
  useAddServiceMutation,
  useGetCategoryQuery,
} from "@/redux/service/serviceApiSlice";
import { authKey } from "@/utilites/authkey";
import { getFromLocalStorage } from "@/utilites/local-storage";
import { Button, Input, message } from "antd";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type IAddService = {
  name: string;
  category: string;
  painter: string;
  price: number;
  description: string;
  image: FileList;
};

const AddServices = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const token = getFromLocalStorage(authKey);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<IAddService>();

  const [AddService, { isLoading, isError, isSuccess, error }] =
    useAddServiceMutation();
  const { data: SData } = useGetCategoryQuery(token);
  const { data: UData } = useGetPainterUserQuery(token);

  const privateUrl = "44c26384eae4023f6064cf342eee9294";

  const onsubmit: SubmitHandler<IAddService> = (data) => {
    setLoading(true);

    const img = data?.image[0];
    const formData = new FormData();
    formData.append("image", img);

    fetch(`https://api.imgbb.com/1/upload?key=${privateUrl}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        const { image, ...otherInfo } = data;

        const product = {
          info: {
            ...otherInfo,
            image: result?.data?.url,
          },
          token: token,
        };

        console.log({ product, result });

        AddService(product);
        setLoading(false);
        reset();
      });
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("successfully added a serive");
    }
    if (isError) {
      message.error("something went wrong");
    }
  }, [isLoading, isSuccess, isError]);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-1/2"
        onSubmit={handleSubmit(onsubmit)}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          add services
        </h2>

        <div className="mb-4">
          <label htmlFor="firstName" className="text-gray-600">
            Name
          </label>
          <input
            {...register("name", { required: "name is required" })}
            aria-invalid={errors.name ? "true" : "false"}
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          {errors.name && (
            <p className="text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="selectOption" className="text-gray-600">
            service category
          </label>
          <select
            {...register("category", { required: "category is required" })}
            area-invalid={errors.category ? "true" : "false"}
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            {SData?.data?.map((category: any) => (
              <option key={category?._id} value={category?._id}>
                {category?.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-sm text-red-400">{errors.category.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="selectOption" className="text-gray-600">
            painter
          </label>
          <select
            {...register("painter", { required: "painter is required" })}
            area-invalid={errors.painter ? "true" : "false"}
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            {UData?.data?.map((user: any) => (
              <option key={user?._id} value={user?._id}>
                {user?.name}
              </option>
            ))}
          </select>
          {errors.painter && (
            <p className="text-sm text-red-400">{errors.painter.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="text-gray-600">
            description
          </label>
          <textarea
            {...register("description", {
              required: "deccription is required",
            })}
            area-invalid={errors.description ? "true" : "false"}
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          {errors.description && (
            <p className="text-sm text-red-400">{errors.description.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="text-gray-600">Price</label>
          <input
            type="number"
            {...register("price", { required: "price is required" })}
            area-invalid={errors.price ? "true" : "false"}
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          {errors.price && (
            <p className="text-sm text-red-400">{errors.price.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="text-gray-600">image</label>
          <input
            type="file"
            {...register("image", { required: "image is required" })}
            area-invalid={errors.image ? "true" : "false"}
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          {errors.image && (
            <p className="text-sm text-red-400">{errors.image.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          {loading ? "loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddServices;
