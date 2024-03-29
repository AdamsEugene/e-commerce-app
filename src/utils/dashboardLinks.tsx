import React from "react";
import { MdDashboard } from "react-icons/md";
import { IoSettings, IoAnalyticsSharp, IoAddCircle } from "react-icons/io5";
import { FiActivity } from "react-icons/fi";
import { IconType } from "react-icons";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { siteConfig } from "../config/site";
import {
  activityDashboardLinks,
  adminDashboardDetailLinks,
  userMetricsDashboardLinks,
} from "./dashboardData";

const { pages } = siteConfig;

export type DashboardLink = {
  path: string;
  name: string;
  icon: IconType | any; // Ensure icon type is IconType
  id: "user" | "sellers-planet";
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
    children: userMetricsDashboardLinks,
  },
  {
    path: pages.dashboardActivities,
    name: "My Activities",
    icon: FiActivity,
    id: "user" as const,
    children: activityDashboardLinks,
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
    name: "Sellers Planet",
    icon: MdDashboard,
    id: "sellers-planet" as const,
    children: adminDashboardDetailLinks,
  },
  {
    path: pages.adminDashboardActivities,
    name: "My Activities",
    icon: FiActivity,
    id: "sellers-planet" as const,
  },
  {
    path: pages.adminDashboardAnalytics,
    name: "Analytics",
    icon: IoAnalyticsSharp,
    id: "sellers-planet" as const,
  },
  {
    path: pages.adminDashboardProduct,
    name: "My Product",
    icon: MdOutlineProductionQuantityLimits,
    id: "sellers-planet" as const,
  },
  {
    path: pages.adminDashboardAdd,
    name: "Add Product",
    icon: IoAddCircle,
    id: "sellers-planet" as const,
  },
  {
    path: pages.adminDashboardSettings,
    name: "Settings",
    icon: IoSettings,
    id: "sellers-planet" as const,
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
