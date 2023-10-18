"use client";
import { useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, Button, theme } from "antd";
import { sidebarItems } from "@/constants/sidbarItem";
import { USER_ROLE } from "@/constants/role";
const { Header, Sider, Content } = Layout;

const DashboardSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      style={{
        position: "sticky",
        top: 0,
        bottom: 0,
        left: 0,
      }}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(USER_ROLE.ADMIN)}
      />
    </Sider>
  );
};

export default DashboardSidebar;
