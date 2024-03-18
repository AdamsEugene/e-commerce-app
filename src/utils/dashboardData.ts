import { IoCash, IoStatsChart, IoCart, IoPeople } from "react-icons/io5";

export const userMetricsData = [
  {
    amount: "$35.87",
    label: "Total money spent",
    link: "/total_spent",
    icon: IoCash,
    bgColor: "bg-secondary-100",
    iconColor: "text-secondary",
  },
  {
    amount: "142",
    label: "Total purchases",
    link: "/total_purchases",
    icon: IoStatsChart,
    bgColor: "bg-green-200",
    iconColor: "text-green-500",
  },
  {
    amount: "24",
    label: "Items in cart",
    link: "/items_in_cart",
    icon: IoCart,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-500",
  },
  {
    amount: "57",
    label: "Total orders",
    link: "/total_orders",
    icon: IoPeople,
    bgColor: "bg-primary-100",
    iconColor: "text-primary-500",
  },
];

export type MetricsData = (typeof userMetricsData)[0];
