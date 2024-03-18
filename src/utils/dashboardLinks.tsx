import React from "react";
import { MdDashboard } from "react-icons/md";
import { IoSettings, IoAnalyticsSharp, IoAddCircle } from "react-icons/io5";
import { FiActivity } from "react-icons/fi";
import { IconType } from "react-icons";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

export type DashboardLinks = {
  linkData: {
    path: string;
    name: string;
    icon: React.ReactNode;
    id: "user" | "admin";
  }[];
};

export const _userDashboardLinks = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: MdDashboard,
    id: "user" as const,
  },
  {
    path: "/dashboard/activities",
    name: "My Activities",
    icon: FiActivity,
    id: "user" as const,
  },
  {
    path: "/dashboard/analytics",
    name: "Analytics",
    icon: IoAnalyticsSharp,
    id: "user" as const,
  },
  {
    path: "/dashboard/settings",
    name: "Settings",
    icon: IoSettings,
    id: "user" as const,
  },
];

export const _adminDashboardLinks = [
  {
    path: "/dashboard/admin",
    name: "Dashboard",
    icon: MdDashboard,
    id: "admin" as const,
  },
  {
    path: "/dashboard/admin/activities",
    name: "My Activities",
    icon: FiActivity,
    id: "admin" as const,
  },
  {
    path: "/dashboard/admin/analytics",
    name: "Analytics",
    icon: IoAnalyticsSharp,
    id: "admin" as const,
  },
  {
    path: "/dashboard/admin/my_product",
    name: "My Product",
    icon: MdOutlineProductionQuantityLimits,
    id: "admin" as const,
  },
  {
    path: "/dashboard/admin/add_product",
    name: "Add Product",
    icon: IoAddCircle,
    id: "admin" as const,
  },
  {
    path: "/dashboard/admin/settings",
    name: "Settings",
    icon: IoSettings,
    id: "admin" as const,
  },
];

const addIconClassName = (
  links: { path: string; name: string; icon: IconType; id: "user" | "admin" }[]
) => {
  return links.map((link) => {
    const IconComponent = link.icon;
    const iconElement = <IconComponent className="text-xl" />;
    return { ...link, icon: iconElement };
  });
};

export const userDashboardLinks = addIconClassName(_userDashboardLinks);
export const adminDashboardLinks = addIconClassName(_adminDashboardLinks);
