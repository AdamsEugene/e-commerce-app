import {
  IoCash,
  IoStatsChart,
  IoPeople,
  IoCart,
  IoTimer,
  IoBagHandle,
  IoHeart,
} from "react-icons/io5";
import {
  FaDollarSign,
  FaShoppingCart,
  FaUserFriends,
  FaChartLine,
  FaMoneyBillAlt,
  FaClock,
  FaUserCheck,
  FaUserPlus,
  FaChartBar,
} from "react-icons/fa";

import { siteConfig } from "../config/site";
import { DashboardLink } from "./dashboardLinks";
import { IconType } from "react-icons";
import { SiMicrosoftexcel } from "react-icons/si";
import { FaFileCsv } from "react-icons/fa6";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdCampaign } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { GrMoney } from "react-icons/gr";

type Metric = {
  value: string;
  label: string;
  link: string;
  icon: IconType;
  iconColor: string;
};

const { pages } = siteConfig;

export const userMetricsData = [
  {
    value: "$35.87",
    label: "Total money spent",
    link: pages.totalSpending,
    icon: IoCash,
    bgColor: "#9454d480", // Transparent purple
    iconColor: "#9454d4",
  },
  {
    value: "142",
    label: "Total purchases",
    link: pages.totalPurchases,
    icon: IoStatsChart,
    bgColor: "rgba(0, 128, 0, 0.5)", // Transparent green
    iconColor: "green",
  },
  {
    value: "24",
    label: "Items in cart",
    link: pages.itemsInCart,
    icon: IoCart,
    bgColor: "rgba(243, 18, 97, 0.5)", // Transparent yellow
    iconColor: "#f31260",
  },
  {
    value: "57",
    label: "Total orders",
    link: pages.totalOrders,
    icon: IoPeople,
    bgColor: "rgba(0, 128, 128, 0.5)", // Transparent teal
    iconColor: "teal",
  },
];

export const activityMetricsData = [
  {
    value: "$35.87",
    label: "Rentals",
    link: pages.totalRental,
    icon: IoBagHandle,
    bgColor: "rgba(255, 165, 0, 0.5)", // Transparent orange
    iconColor: "#FFA500", // Orange
  },
  {
    value: "142",
    label: "Leasing",
    link: pages.totalLeasing,
    icon: IoTimer,
    bgColor: "rgba(255, 69, 0, 0.5)", // Transparent red-orange
    iconColor: "#FF4500", // Red-orange
  },
  {
    value: "24",
    label: "Purchases",
    link: pages.ActivityTotalPurchases,
    icon: IoCart,
    bgColor: "rgba(0, 128, 0, 0.5)", // Transparent green
    iconColor: "#008000", // Green
  },
  {
    value: "57",
    label: "Saved",
    link: pages.totalSave,
    icon: IoHeart,
    bgColor: "rgba(0, 0, 255, 0.5)", // Transparent blue
    iconColor: "#0000FF", // Blue
  },
];

const _adminDashboardMetrics = [
  {
    value: "$145.75",
    label: "Total Sales",
    link: pages.adminDashboardSales,
    icon: FaDollarSign,
    iconColor: "#EF4444", // Red
  },
  {
    value: "32,457",
    label: "Total Orders",
    link: pages.adminDashboardOrders,
    icon: FaShoppingCart,
    iconColor: "#059669", // Green
  },
  {
    value: "24,682",
    label: "Total Customers",
    link: pages.adminDashboardCustomers,
    icon: FaUserFriends,
    iconColor: "#3B82F6", // Blue
  },
  {
    value: "4.8%",
    label: "Conversion Rate",
    link: pages.adminDashboardConversion,
    icon: FaChartLine,
    iconColor: "#065F46", // Teal
  },
  {
    value: "$67.25",
    label: "Average Order Value",
    link: pages.adminDashboardAOV,
    icon: FaMoneyBillAlt,
    iconColor: "#F97316", // Orange
  },
  {
    value: "28.6%",
    label: "Cart Abandonment Rate",
    link: pages.adminDashboardCartAbandonment,
    icon: FaShoppingCart,
    iconColor: "#8B5CF6", // Purple
  },
  {
    value: "1,425",
    label: "New Customers",
    link: pages.adminDashboardNewCustomers,
    icon: FaUserPlus,
    iconColor: "#6366F1", // Indigo
  },
  {
    value: "72,891",
    label: "Total Visits",
    link: pages.adminDashboardVisits,
    icon: FaChartBar,
    iconColor: "#4F46E5", // Violet
  },
  {
    value: "3.2",
    label: "Average Visit Duration",
    link: pages.adminDashboardVisitDuration,
    icon: FaClock,
    iconColor: "#F59E0B", // Amber
  },
  {
    value: "42.8%",
    label: "Returning Visitor Rate",
    link: pages.adminDashboardReturningVisitors,
    icon: FaUserCheck,
    iconColor: "#10B981", // Emerald
  },
];

const _addProductsMetrics = [
  {
    value: "Import From Excel",
    label: "Load excel data",
    link: pages.excel,
    icon: SiMicrosoftexcel,
    iconColor: "#EF4444", // Red
  },
  {
    value: "Import From CSV",
    label: "Load from a csv file",
    link: pages.csv,
    icon: FaFileCsv,
    iconColor: "#059669", // Green
  },
  // {
  //   value: "Create A Template",
  //   label: "Create and reuse a template",
  //   link: pages.createTemplate,
  //   icon: ImInsertTemplate,
  //   iconColor: "#3B82F6", // Blue
  // },
  // {
  //   value: "Use Existing Template",
  //   label: "Use already created template",
  //   link: pages.useTemplate,
  //   icon: GrTemplate,
  //   iconColor: "#065F46", // Teal
  // },
];

const _settingStuff = [
  {
    value: "Ads",
    label: "Advertisements",
    link: pages.ads,
    icon: RiAdvertisementFill,
    iconColor: "#4486ef", // Red
  },
  {
    value: "ads group",
    label: "Ads Group",
    link: pages.ads,
    icon: RiAdvertisementFill,
    iconColor: "#4486ef", // Red
  },
  {
    value: "ads",
    label: "Ads",
    link: pages.ads,
    icon: RiAdvertisementFill,
    iconColor: "#4486ef", // Red
  },
  {
    value: "budget",
    label: "Budget",
    link: pages.ads,
    icon: RiAdvertisementFill,
    iconColor: "#4486ef", // Red
  },
  {
    value: "r and a",
    label: "Reporting and Analytics",
    link: pages.ads,
    icon: SiSimpleanalytics,
    iconColor: "#4486ef", // Red
  },
];

const _campaignMetrics = [
  {
    value: "Create a New Campaign",
    label: "Create Campaign",
    link: "",
    icon: MdCampaign,
    iconColor: "#009688", // Orange
  },
  // {
  //   value: "Create a New Ad",
  //   label: "Create Ad",
  //   link: pages.ads,
  //   icon: RiAdvertisementFill,
  //   iconColor: "#FF5733", // Orange
  // },
  // {
  //   value: "Manage Ad Budget",
  //   label: "Ad Budget Management",
  //   link: pages.adsBudget,
  //   icon: GrMoney,
  //   iconColor: "#5E35B1", // Purple
  // },
];

const _adsMetrics = [
  {
    value: "Create a New Ad",
    label: "Create Ad",
    link: "",
    icon: RiAdvertisementFill,
    iconColor: "#FF5733", // Orange
  },
  // {
  //   value: "Ads Campaign",
  //   label: "Create Campaign",
  //   link: pages.adsCampaigns,
  //   icon: MdCampaign,
  //   iconColor: "#009688", // Orange
  // },
  // {
  //   value: "Manage Ad Budget",
  //   label: "Ad Budget Management",
  //   link: pages.adsBudget,
  //   icon: GrMoney,
  //   iconColor: "#5E35B1", // Purple
  // },
];

// Set bgColor to 50% transparent version of iconColor
const addBgColor = (metrics: Metric[]) =>
  metrics.map((metric: any) => ({
    ...metric,
    bgColor: `${metric.iconColor}80`,
  }));

export const adminDashboardMetrics = addBgColor(_adminDashboardMetrics);
export const addProductsMetrics = addBgColor(_addProductsMetrics);
export const settingStuff = addBgColor(_settingStuff);
export const campaignMetrics = addBgColor(_campaignMetrics);
export const adsMetrics = addBgColor(_adsMetrics);

const columns = [
  { name: "NAME", uid: "name" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
];

const generateDashboardLinks = (data: any[]): DashboardLink[] =>
  data.map((metric) => ({
    path: metric.link,
    name: metric.label,
    icon: metric.icon,
    id: "sellers-planet",
  }));

const adminDashboardDetailLinks = generateDashboardLinks(adminDashboardMetrics);
const userMetricsDashboardLinks = generateDashboardLinks(userMetricsData);
const activityDashboardLinks = generateDashboardLinks(activityMetricsData);
const addProductsLinks = generateDashboardLinks(addProductsMetrics);
const adsLinks = generateDashboardLinks(settingStuff);

export {
  columns,
  users,
  adminDashboardDetailLinks,
  userMetricsDashboardLinks,
  activityDashboardLinks,
  addProductsLinks,
  adsLinks,
};

export type MetricsData = (typeof userMetricsData)[0];
