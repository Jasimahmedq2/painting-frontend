"use client";
import Loading from "@/app/loading";
import { useChangeStatusMutation } from "@/redux/service/serviceApiSlice";
import { authKey } from "@/utilites/authkey";
import { getFromLocalStorage } from "@/utilites/local-storage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Dropdown, message } from "antd";
import { useGetUserOrderQuery } from "@/redux/auth/authApiSlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import PBreadCrumb from "@/components/UI/PBreadCrumb";

const ManageOrder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useRouter();
  const token = getFromLocalStorage(authKey);
  const [searchResults, setSearchResults] = useState([]);
  const { data, isLoading, isSuccess } = useGetUserOrderQuery(token);
  const [
    changeStatus,
    { isLoading: CIsLoading, isSuccess: CIsSuccess, isError: CIsError },
  ] = useChangeStatusMutation();

  useEffect(() => {
    if (isLoading) {
      return;
    }
    const filteredResults = data?.data?.filter((response: any) =>
      `${response?._id} ${response?.user?.email} ${response?.name}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [isSuccess, data, searchTerm, isLoading]);

  useEffect(() => {
    if (CIsLoading) {
      message.loading("loading...");
    }
    if (CIsSuccess) {
      message.success("status changed");
    }
    if (CIsError) {
      message.error("something went wrong");
    }
  }, [CIsLoading, CIsSuccess, CIsError]);

  if (isLoading) {
    return <Loading />;
  }

  const HandleChangeStatus = async (status: string, userId: string) => {
    const statusInfo = {
      token,
      status,
      userId,
    };
    await changeStatus(statusInfo);
  };

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <PBreadCrumb
        items={[
          {
            label: "dashboard",
            link: "/dashboard/user/profile",
          },
        ]}
      />
      <div className="items-center w-full px-4 py-4 mx-auto my-10 bg-white border border-indigo-600 rounded-lg shadow-md lg:w-11/12 sm:w-2/3 sm:min-h-screen">
        <div className="container mx-auto">
          <div className="flex justify-between items-center w-full px-4 py-2">
            <div className="text-lg font-bold">My Order</div>
            <div className="w-1/2 py-4 px-2">
              <input
                type="text"
                placeholder="searching.."
                className="py-2 px-4 border-2 border-gray-200 outline-none focus:border-indigo-500 rounded-full w-full lg:w-10/12 "
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full border border-collapse table-auto">
              <thead className="">
                <tr className="text-base font-bold text-left bg-gray-50">
                  <th className="px-4 py-3 border-b-2 border-blue-500">name</th>
                  <th className="px-4 py-3 border-b-2 border-green-500">
                    Email
                  </th>
                  <th className="px-4 py-3 border-b-2 border-green-500">
                    service id
                  </th>
                  <th className="px-4 py-3 border-b-2 border-green-500">
                    price
                  </th>
                  <th className="px-4 py-3 border-b-2 border-green-500">
                    status
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm font-normal text-gray-700">
                {isLoading ? (
                  <Loading />
                ) : (
                  searchResults?.length > 0 &&
                  searchResults?.map((result: any) => {
                    console.log({ result });
                    return (
                      <>
                        <tr
                          key={result?._id}
                          className="py-10 border-b border-gray-200 hover:bg-gray-100"
                        >
                          <td className="px-4 py-4">{result?.user?.name}</td>
                          <td className=" px-4 py-4">{result?.user?.email}</td>
                          <td className=" px-4 py-4">{result?._id}</td>
                          <td className="px-4 py-4">{result?.total}</td>
                          <td>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  className={`cursor-pointer ${
                                    result?.status === "completed"
                                      ? "bg-green-400"
                                      : "" || result?.status === "accepted"
                                      ? "bg-[#FDEE00]"
                                      : "" || result?.status === "canceled"
                                      ? "bg-red-400"
                                      : ""
                                  }  uppercase `}
                                  variant="outline"
                                >
                                  {result?.status}
                                </Button>
                              </DropdownMenuTrigger>
                              {result?.status === "pending" && (
                                <DropdownMenuContent className="w-56 shadow-lg bg-white">
                                  <DropdownMenuLabel>status</DropdownMenuLabel>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuRadioGroup>
                                    <DropdownMenuRadioItem
                                      className="hover:bg-gray-300"
                                      onClick={() =>
                                        HandleChangeStatus(
                                          "canceled",
                                          result?._id
                                        )
                                      }
                                      value="canceled"
                                    >
                                      canceled
                                    </DropdownMenuRadioItem>
                                  </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                              )}
                            </DropdownMenu>
                          </td>
                        </tr>
                      </>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
