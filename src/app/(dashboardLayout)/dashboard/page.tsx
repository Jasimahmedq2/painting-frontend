"use client";
import PBreadCrumb from "@/components/UI/PBreadCrumb";
import { isLoggedIn } from "@/utilites/auth.service";

const DashboardPage = () => {
  return (
    <div>
      <PBreadCrumb
        items={[
          {
            label: "home",
            link: "/home",
          },
        ]}
      />
      <div>
        <h2>root dashboard</h2>
      </div>
    </div>
  );
};

export default DashboardPage;
