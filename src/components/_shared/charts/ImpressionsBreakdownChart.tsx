"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

interface ImpressionsBreakdownChartProps {
  data: { [key: string]: any }[];
  xAxisDataKey: string;
  lineDataKeys: string[];
}

const ImpressionsBreakdownChart: React.FC<ImpressionsBreakdownChartProps> = ({
  data,
  xAxisDataKey,
  lineDataKeys,
}) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey={xAxisDataKey} />
        {/* <YAxis /> */}
        <Tooltip content={<CustomTooltip />} />

        <Legend />
        {lineDataKeys.map((key, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={key}
            stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`} // Random color
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ImpressionsBreakdownChart;
