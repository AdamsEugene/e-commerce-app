import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

const generateData = (
  number: number
): { key: string; value: string; label: string }[] => {
  const data = [];

  for (let i = 1; i <= number; i++) {
    const key = `key${i}`;
    const value = `value${i}`;
    const label = `Label ${i}`;

    data.push({ key, value, label });
  }

  return data;
};

export default generateData;

export const chartData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 8000,
    pv: 1398,
    amt: 3210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 8000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 4500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

type ChartData = (typeof chartData)[0];

export function filterNameUVandPV(
  data: ChartData[]
): { name: string; uv: number; pv: number }[] {
  return data.map(({ name, uv, pv }) => ({ name, uv, pv }));
}

// Function to return an array of objects with only 'name' and 'uv' properties
export function filterNameAndUV(
  data: ChartData[]
): { name: string; uv: number }[] {
  return data.map(({ name, uv }) => ({ name, uv }));
}

export const benefitsDataPayAsYouGo = [
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "No long-term commitment required",
  },
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "Pay only for what you use",
  },
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "Flexibility to adjust usage as needed",
  },
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "No upfront fees or setup costs",
  },
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "24/7 customer support",
  },
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "Access to usage reports and analytics",
  },
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "Regular updates and feature enhancements",
  },
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "Secure and reliable payment processing",
  },
];

export const benefitsDataLease = [
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "Low initial investment",
  },
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "Spread costs over time",
  },
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "Option to purchase equipment at end of lease",
  },
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "Tax benefits and deductions",
  },
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "Flexibility to upgrade equipment",
  },
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "No depreciation worries",
  },
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "Maintenance and support included",
  },
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "Access to latest technology",
  },
];

export const benefitsDataRent = [
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "No long-term commitment required",
  },
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "Flexibility to scale up or down as needed",
  },
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "Maintenance and support included",
  },
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "Access to latest technology",
  },
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "Fixed monthly costs",
  },
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "No depreciation worries",
  },
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "No upfront capital investment",
  },
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "No equipment ownership",
  },
];

export const freeOption = [
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "3 - 6 month",
  },
  {
    icon: MdCancel,
    benefit: "No tracking",
  },
];

export const regularOption = [
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "1 - 6 weeks",
  },
  {
    icon: MdCancel,
    benefit: "No tracking",
  },
];

export const expressOption = [
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "4 - 6 business days",
  },
  {
    icon: IoCheckmarkDoneCircleSharp,
    benefit: "Tracking",
  },
];
