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
} from "recharts";

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
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={props.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="key" />
          <PolarRadiusAxis angle={30} domain={getDomain(props.data)} />
          <Radar
            name={props.name}
            dataKey="value"
            stroke={props.fill}
            fill={props.fill}
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
