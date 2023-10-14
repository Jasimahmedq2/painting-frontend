"use client";
import { Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;
import Link from "next/link";

export default function NavBar() {
  const itemList = [
    {
      key: "1",
      label: "home",
    },
    {
      key: "2",
      label: "home2",
    },
    {
      key: "3",
      label: "home3",
    },
  ];

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
      }}
    >
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={itemList}
      />
    </Header>
  );
}
