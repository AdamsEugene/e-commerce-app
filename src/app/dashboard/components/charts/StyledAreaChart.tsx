"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import LinearGradient from "./LinearGradient";
import CustomTooltip from "./CustomTooltip";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const StyledAreaChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <LinearGradient />
        </defs>
        <CartesianGrid strokeDasharray="3 5" vertical={false} strokeWidth={1} />
        <XAxis dataKey="name" />
        {/* <YAxis /> */}
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#9454D4"
          fill="url(#colorUv)"
          strokeWidth={4}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default StyledAreaChart;
