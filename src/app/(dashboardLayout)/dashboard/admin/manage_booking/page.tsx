"use client";
import Loading from "@/app/loading";
import {
  useChangeStatusMutation,
  useGetOrderQuery,
} from "@/redux/service/serviceApiSlice";
import { authKey } from "@/utilites/authkey";
import { getFromLocalStorage } from "@/utilites/local-storage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { message } from "antd";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import { Button } from "@/components/UI/button";

const ManageBooking = () => {
  const [position, setPosition] = useState("bottom");
  // const [orderId, setOrderId] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");
  const token = getFromLocalStorage(authKey);
  const [searchResults, setSearchResults] = useState([]);
  const { data, isLoading, isSuccess } = useGetOrderQuery(token);
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

  const handleChangeStatus = async (status: string, orderId: string) => {
    const statusInfo = {
      token,
      status,
      orderId,
    };
    console.log("statusInfo:", statusInfo);
    await changeStatus(statusInfo);
  };

  // const handleSetOrderId = (id: string) => {
  //   setOrderId(id);
  //   console.log({ id });
  // };

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="items-center w-full px-4 py-4 mx-auto my-10 bg-white border border-indigo-600 rounded-lg shadow-md lg:w-11/12 sm:w-2/3">
        <div className="container mx-auto">
          <div className="flex justify-between items-center w-full px-4 py-2">
            <div className="text-lg font-bold">manage booking</div>
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
                  searchResults.length > 0 &&
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
                                <Button variant="outline">
                                  {result?.status}
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>
                                  order Status
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup
                                  value={position}
                                  onValueChange={setPosition}
                                >
                                  <DropdownMenuRadioItem
                                    onClick={() =>
                                      handleChangeStatus("pending", result?._id)
                                    }
                                    value="pending"
                                  >
                                    pending
                                  </DropdownMenuRadioItem>
                                  <DropdownMenuRadioItem
                                    onClick={() =>
                                      handleChangeStatus(
                                        "accepted",
                                        result?._id
                                      )
                                    }
                                    value="accepted"
                                  >
                                    accepted
                                  </DropdownMenuRadioItem>
                                  <DropdownMenuRadioItem
                                    onClick={() =>
                                      handleChangeStatus(
                                        "completed",
                                        result?._id
                                      )
                                    }
                                    value="completed"
                                  >
                                    completed
                                  </DropdownMenuRadioItem>
                                  <DropdownMenuRadioItem
                                    onClick={() =>
                                      handleChangeStatus(
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

export default ManageBooking;
