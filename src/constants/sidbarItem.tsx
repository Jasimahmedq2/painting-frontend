import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  AppstoreOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
  CreditCardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";
export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href="/dashboard/user/profile">Account Profile</Link>,
          key: `/dashboard/user/profile`,
        },
      ],
    },
  ];

  const customerSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "Manage Order",
      key: "manage-order",
      children: [
        {
          label: <Link href="/dashboard/user/order">All Order</Link>,
          key: "order",
        },
      ],
    },
  ];
  const painterSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "services",
      key: "manage-order",
      children: [
        {
          label: <Link href="/dashboard/user/order">all services</Link>,
          key: "services",
        },
      ],
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/manage-user`}>Manage User</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-user`,
    },
    {
      label: "manage-service",
      icon: <TableOutlined />,
      key: `/${role}/manage-service`,
      children: [
        {
          label: <Link href={"/dashboard/admin/add_service"}>add service</Link>,
          key: "add_service",
        },
        {
          label: (
            <Link href={"/dashboard/admin/add_category"}>add category</Link>
          ),
          key: "add_category",
        },
        {
          label: (
            <Link href={"/dashboard/admin/manage-order"}>manage order</Link>
          ),
          key: "manage-order",
        },
        {
          label: (
            <Link href={"/dashboard/admin/manage-content"}>manage content</Link>
          ),
          key: "manage-content",
        },
        {
          label: (
            <Link href={"/dashboard/admin/manage-booking"}>manage booking</Link>
          ),
          key: "manage-booking",
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: "Manage-Admin",
      key: "manage-admin",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: (
            <Link href={`/dashboard/super_admin/manage-admin`}>
              manage admin
            </Link>
          ),
          key: `manage-admin`,
        },
      ],
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return commonAdminSidebarItems;
  else if (role === USER_ROLE.CUSTOMER) return customerSidebarItems;
  else if (role === USER_ROLE.PAINTER) return painterSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
