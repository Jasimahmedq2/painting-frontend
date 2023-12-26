"use client";
import { useRouter } from "next/navigation";

const SuccessPage = () => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/services");
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-3xl font-bold mb-4 text-green-600">
          Payment Successful!
        </h2>
        <p className="text-gray-700 mb-8">
          Thank you for your purchase. Your payment was successful.
        </p>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline-green hover:cursor-pointer"
          onClick={handleNavigate}
        >
          see more services
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
