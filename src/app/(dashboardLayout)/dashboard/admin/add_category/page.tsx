"use client";
import {
  useAddCategoryMutation,
  useAddServiceMutation,
} from "@/redux/service/serviceApiSlice";
import { authKey } from "@/utilites/authkey";
import { getFromLocalStorage } from "@/utilites/local-storage";
import { Button, Input, Spin, message } from "antd";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type IAddCategory = {
  name: string;
  image: string;
};

const AddCategory = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const token = getFromLocalStorage(authKey);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<IAddCategory>();

  const [addCategory, { isLoading, isError, isSuccess, error }] =
    useAddCategoryMutation();

  const privateUrl = "44c26384eae4023f6064cf342eee9294";

  const onsubmit: SubmitHandler<IAddCategory> = (data) => {
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
        console.log("image url", result.data.url);
        const { image, ...otherInfo } = data;

        const product = {
          info: {
            ...otherInfo,
            image: result.data.url,
          },
          token: token,
        };
        console.log(product);
        addCategory(product);
        reset();
        setLoading(false);
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
          add Category
        </h2>

        <div className="mb-4">
          <label htmlFor="firstName" className="text-gray-600">
            Name
          </label>
          <input
            {...register("name", { required: "name is required" })}
            aria-invalid={errors.name ? "true" : "false"}
            placeholder="create a category"
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          {errors.name && (
            <p className="text-sm text-red-400">{errors.name.message}</p>
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

export default AddCategory;
