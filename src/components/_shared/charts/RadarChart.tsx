"use client";

import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

type PROPS = {
  name?: string;
  fill?: string;
  data: {
    key: string;
    value: number;
  }[];
};

const getDomain = (data: PROPS["data"]) => {
  const values = data.map((d) => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);

  return [min, max];
};

const RadarCharts = (props: PROPS) => {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={props.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="key" />
          <PolarRadiusAxis angle={30} domain={getDomain(props.data)} />
          <Tooltip content={<CustomTooltip />} />
          <Radar
            name={props.name}
            dataKey="value"
            stroke={color} // Random color
            fill={color}
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
      {/* 
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataLocation}>
          <PolarGrid />
          <PolarAngleAxis dataKey="key" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="Location"
            dataKey="value"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataAgeRange}>
          <PolarGrid />
          <PolarAngleAxis dataKey="key" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="Age Range"
            dataKey="value"
            stroke="#ffc658"
            fill="#ffc658"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer> */}
    </div>
  );
};

export default RadarCharts;
