"use client";
import React, { useEffect, useState } from "react";
import { Layout, Menu, Button, theme, Spin } from "antd";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import DashboardContent from "@/components/layout/DashboardContent";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/utilites/auth.service";
const { Header, Sider, Content } = Layout;

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    if (!isLoggedIn()) {
      return router.push("/login");
    }
    setIsLoading(false);
  }, [router, isLoading]);
  if (isLoading) {
    return (
      <Layout
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spin />
      </Layout>
    );
  }
  return (
    <Layout hasSider>
      <DashboardSidebar />
   
      <DashboardContent>{children}</DashboardContent>
    </Layout>
  );
};

export default DashBoardLayout;
