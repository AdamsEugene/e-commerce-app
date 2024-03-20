import React from "react";
import { MdDashboard } from "react-icons/md";
import {
  IoSettings,
  IoAnalyticsSharp,
  IoAddCircle,
  IoPeople,
  IoCart,
  IoStatsChart,
  IoCash,
} from "react-icons/io5";
import { FiActivity } from "react-icons/fi";
import { IconType } from "react-icons";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { siteConfig } from "../config/site";

const { pages } = siteConfig;

export type DashboardLink = {
  path: string;
  name: string;
  icon: IconType | any; // Ensure icon type is IconType
  id: "user" | "admin";
  children?: DashboardLink[];
};

export type DashboardLinks = {
  linkData: DashboardLink[];
};

export const _userDashboardLinks = [
  {
    path: pages.dashboard,
    name: "Dashboard",
    icon: MdDashboard,
    id: "user" as const,
    children: [
      {
        path: pages.totalSpending,
        name: "Total Spent",
        icon: IoCash,
        id: "user" as const,
      },
      {
        path: pages.totalPurchases,
        name: "Total purchases",
        icon: IoStatsChart,
        id: "user" as const,
      },
      {
        path: pages.itemsInCart,
        name: "Items in cart",
        icon: IoCart,
        id: "user" as const,
      },
      {
        path: pages.totalOrders,
        name: "Total orders",
        icon: IoPeople,
        id: "user" as const,
      },
    ],
  },
  {
    path: pages.dashboardActivities,
    name: "My Activities",
    icon: FiActivity,
    id: "user" as const,
  },
  {
    path: pages.dashboardAnalytics,
    name: "Analytics",
    icon: IoAnalyticsSharp,
    id: "user" as const,
  },
  {
    path: pages.dashboardSettings,
    name: "Settings",
    icon: IoSettings,
    id: "user" as const,
  },
];

export const _adminDashboardLinks = [
  {
    path: pages.adminDashboard,
    name: "Dashboard",
    icon: MdDashboard,
    id: "admin" as const,
  },
  {
    path: pages.adminDashboardActivities,
    name: "My Activities",
    icon: FiActivity,
    id: "admin" as const,
  },
  {
    path: pages.adminDashboardAnalytics,
    name: "Analytics",
    icon: IoAnalyticsSharp,
    id: "admin" as const,
  },
  {
    path: pages.adminDashboardProduct,
    name: "My Product",
    icon: MdOutlineProductionQuantityLimits,
    id: "admin" as const,
  },
  {
    path: pages.adminDashboardAdd,
    name: "Add Product",
    icon: IoAddCircle,
    id: "admin" as const,
  },
  {
    path: pages.dashboardSettings,
    name: "Settings",
    icon: IoSettings,
    id: "admin" as const,
  },
];

const addIconClassNameToLink = (link: DashboardLink): DashboardLink => {
  const IconComponent = link.icon;
  const iconElement = <IconComponent className="text-xl" />;

  // Recursively apply the function to the children if they exist
  const updatedChildren = link.children
    ? link.children.map(addIconClassNameToLink)
    : undefined;

  return { ...link, icon: iconElement, children: updatedChildren };
};

const addIconClassName = (links: DashboardLink[]): DashboardLink[] => {
  return links.map(addIconClassNameToLink);
};

export const userDashboardLinks = addIconClassName(_userDashboardLinks);
export const adminDashboardLinks = addIconClassName(_adminDashboardLinks);
