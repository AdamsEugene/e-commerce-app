"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

interface ClickData {
  date: string;
  impressions: number;
  clicks: number;
}

const clickData: ClickData[] = [
  { date: "2024-04-01", impressions: 1000, clicks: 200 },
  { date: "2024-04-02", impressions: 1200, clicks: 250 },
  { date: "2024-04-03", impressions: 1100, clicks: 240 },
  { date: "2024-04-04", impressions: 1050, clicks: 230 },
  { date: "2024-04-05", impressions: 1300, clicks: 260 },
  { date: "2024-04-06", impressions: 1400, clicks: 280 },
  { date: "2024-04-07", impressions: 1500, clicks: 290 },
];

const StyledBarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={clickData}>
        <XAxis dataKey="date" />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="impressions" fill="#8884d8" />
        <Bar dataKey="clicks" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StyledBarChart;
