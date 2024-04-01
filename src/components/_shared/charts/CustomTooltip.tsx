import React from "react";

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-success-50 border border-success rounded p-2 shadow flex flex-col gap-2 items-start">
        {payload.map((entry: any, index: number) => (
          <div
            key={index}
            className={`flex gap-3 items-center ${
              index > 0 ? " border-t border-success pt-2" : ""
            }`}
          >
            <div
              className={`h-3 w-3 rounded-full`}
              style={{ backgroundColor: entry.color }}
            ></div>
            <p className="text-sm font-semibold">{`${label} : ${entry.value}`}</p>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
