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
  useChangeRoleMutation,
  useGetAllUserQuery,
} from "@/redux/auth/authApiSlice";
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

const ManageUser = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const token = getFromLocalStorage(authKey);
  const [searchResults, setSearchResults] = useState([]);
  const { data, isLoading, isSuccess } = useGetAllUserQuery(token);
  const [
    changeRole,
    { isLoading: CIsLoading, isSuccess: CIsSuccess, isError: CIsError },
  ] = useChangeRoleMutation();

  useEffect(() => {
    if (isLoading) {
      return;
    }
    const filteredResults = data?.data?.filter((response: any) =>
      `${response?._id} ${response?.email} ${response?.name}`
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
      message.success("role changed");
    }
    if (CIsError) {
      message.error("something went wrong");
    }
  }, [CIsLoading, CIsSuccess, CIsError]);

  if (isLoading) {
    return <Loading />;
  }

  const handleChangeUserRole = async (role: string, userId: string) => {
    const userInfo = {
      token,
      role,
      userId,
    };
    await changeRole(userInfo);
  };

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="items-center w-full px-4 py-4 mx-auto my-10 bg-white border border-indigo-600 rounded-lg shadow-md lg:w-11/12 sm:w-2/3">
        <div className="container mx-auto">
          <div className="flex justify-between items-center w-full px-4 py-2">
            <div className="text-lg font-bold">manage user</div>
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
                    phoneNo
                  </th>
                  <th className="px-4 py-3 border-b-2 border-green-500">
                    delete
                  </th>
                  <th className="px-4 py-3 border-b-2 border-green-500">
                    role
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm font-normal text-gray-700">
                {isLoading ? (
                  <Loading />
                ) : (
                  searchResults.length > 0 &&
                  searchResults?.map((result: any) => {
                    return (
                      <>
                        <tr
                          key={result?._id}
                          className="py-10 border-b border-gray-200 hover:bg-gray-100"
                        >
                          <td className="px-4 py-4">{result?.name}</td>
                          <td className=" px-4 py-4">{result?.email}</td>
                          <td className=" px-4 py-4">{result?.phoneNo}</td>
                          <td className="px-4 py-4">
                            <button className="bg-red-400 text-white px-4 py-2 rounded">
                              delete
                            </button>
                          </td>
                          <td>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="outline">
                                  {result?.role}
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>user role</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup>
                                  <DropdownMenuRadioItem
                                    onClick={() =>
                                      handleChangeUserRole(
                                        "customer",
                                        result?._id
                                      )
                                    }
                                    value="customer"
                                  >
                                    customer
                                  </DropdownMenuRadioItem>
                                  <DropdownMenuRadioItem
                                    onClick={() =>
                                      handleChangeUserRole(
                                        "painter",
                                        result?._id
                                      )
                                    }
                                    value="painter"
                                  >
                                    painter
                                  </DropdownMenuRadioItem>
                                  <DropdownMenuRadioItem
                                    onClick={() =>
                                      handleChangeUserRole("admin", result?._id)
                                    }
                                    value="admin"
                                  >
                                    admin
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

export default ManageUser;
