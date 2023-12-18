import { USER_ROLE } from "@/constants/role";
import { useAddToCartMutation } from "@/redux/service/serviceApiSlice";
import { getUserInfo, isLoggedIn } from "@/utilites/auth.service";
import { authKey } from "@/utilites/authkey";
import { getFromLocalStorage } from "@/utilites/local-storage";
import { UserInfoData } from "@/utilites/userInfo.type";
import { StarFilled } from "@ant-design/icons";
import { message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ServiceCard = ({ service }: { service: any }) => {
  const router = useRouter();
  const token = getFromLocalStorage(authKey);
  const userInfo: UserInfoData | unknown = getUserInfo();
  console.log(userInfo);
  const [addToCart, { isLoading, isSuccess, isError }] = useAddToCartMutation();

  const handleAddService = async (id: string) => {
    if (!isLoggedIn()) {
      return router.push("/login");
    }

    if (userInfo?.role !== USER_ROLE.CUSTOMER) {
      message.error(
        `only customer can purchase any order you are an ${userInfo?.role}`
      );
      return;
    }

    const serviceInfo = {
      token: token,
      info: {
        service: id,
        quantity: 1,
      },
    };
    await addToCart(serviceInfo);
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("successfully add the service in cart");
    }
    if (isError) {
      message.error("something went wrong");
    }
    if (isLoading) {
      message.loading("loading...");
    }
  }, [isLoading, isSuccess, isError]);
  return (
    <div
      key={service?._id}
      className="max-w-sm rounded overflow-hidden shadow-lg"
    >
      <Image
        width={400}
        height={200}
        src={service?.image}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{service?.name}</div>
        <p className="text-gray-700 text-base">
          {service.description.length > 30
            ? service.description.substring(0, 30) + "..."
            : service.description}
        </p>
      </div>
      <div className=" px-6 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">${service?.price}</h2>
        {/* <p className="font-md">
          4 <StarFilled />
        </p> */}
      </div>
      <div className="px-6 flex items-center justify-between pt-4 pb-2">
        <Link href={`/services/${service?._id}`}>
          <button className="bg-black border text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer">
            details
          </button>
        </Link>

        <button
          onClick={() => handleAddService(service?._id)}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer"
        >
          booking
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
