import Image from "next/image";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/UI/alert-dialog";
import { useRemoveServiceMutation } from "@/redux/service/serviceApiSlice";
import { message } from "antd";
import { useEffect } from "react";
import { getFromLocalStorage } from "@/utilites/local-storage";
import { authKey } from "@/utilites/authkey";

const ManageServiceCard = ({ service }: { service: any }) => {
  const token = getFromLocalStorage(authKey);
  const [removeService, { isLoading, isSuccess, isError }] =
    useRemoveServiceMutation();
  useEffect(() => {
    if (isSuccess) {
      message.success("successfully deleted a service");
    }
    if (isLoading) {
      message.loading("loading");
    }
    if (isError) {
      message.error("something went wrong");
    }
  }, [isLoading, isError, isSuccess]);

  const handleDeleteService = async (id: string) => {
    const removeInfo = {
      id,
      token,
    };
    await removeService(removeInfo);
  };
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
      </div>
      <div className="px-6 flex items-center justify-between pt-4 pb-2">
        <Link href={`/dashboard/admin/manage_service/${service?._id}`}>
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer">
            edit
          </button>
        </Link>

        <AlertDialog>
          <AlertDialogTrigger className="bg-red-400 border text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer uppercase">
            {" "}
            delete
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you absolutely sure? to delete the service?
              </AlertDialogTitle>
              <AlertDialogDescription>
                serviceName: {service?.name}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => handleDeleteService(service?._id)}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default ManageServiceCard;
