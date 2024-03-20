import {
  IoCash,
  IoStatsChart,
  IoPeople,
  IoCart,
  IoTimer,
  IoBagHandle,
  IoHeart,
} from "react-icons/io5";
import { siteConfig } from "../config/site";

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
    bgColor: "#F7CCD8", // Transparent yellow
    iconColor: "#F31260",
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

export type MetricsData = (typeof userMetricsData)[0];

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

export { columns, users };
