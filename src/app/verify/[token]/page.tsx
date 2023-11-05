"use client";
import { useVerifyEmailMutation } from "@/redux/auth/authApiSlice";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { isErrored } from "stream";

const VerifyEmail = ({ params }: { params: { token: string } }) => {
  const { token } = params;
  const navigate = useRouter();

  const [verifyEmail, { isSuccess, isLoading, error, isError }] =
    useVerifyEmailMutation();
  const handleVerifyEmail = () => {
    verifyEmail(token);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate.push("/login");
      message.success("user verified");
    }
    if (isError) {
      message.error("something went wrong");
    }
  }, [isError, isLoading, isSuccess, navigate, token]);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="sm:w-1/2 h-48 rounded overflow-hidden flex justify-center items-center shadow-lg">
        <button
          onClick={handleVerifyEmail}
          className="text-white bg-blue-700 rounded p-2 w-1/2 mx-auto"
        >
          Verify Email
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
