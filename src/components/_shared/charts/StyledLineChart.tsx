"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

type PROPS = {
  data: {
    [key: string]: any;
  }[];
};

const StyledLineChart = (props: PROPS) => {
  const { data } = props;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={300} height={100} data={data}>
        <CartesianGrid strokeDasharray="3 5" vertical={false} strokeWidth={1} />
        <XAxis dataKey="name" tickLine={false} />
        {/* <YAxis /> */}
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="pv" stroke="#9454D4" strokeWidth={4} />
        <Line type="monotone" dataKey="uv" stroke="#FFA500" strokeWidth={4} />
        <Line type="monotone" dataKey="amt" stroke="#ff00bb" strokeWidth={4} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StyledLineChart;
