import React from "react";

type PROPS = {
  value: number;
  currency: string;
  label: string;
};

export default function PriceCard(props: PROPS) {
  const { currency, label, value } = props;

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="h-64 w-64 rounded-full flex justify-center items-center border-gray-400 border-[16px]">
        <div className="flex flex-col justify-center items-center gap-1">
          <h1 className="text-4xl font-bold">{currency}</h1>
          <h1 className="text-6xl font-bold">{value}</h1>
          <span className="text-4xl text-gray-500">{label}</span>
        </div>
      </div>
    </div>
  );
}
