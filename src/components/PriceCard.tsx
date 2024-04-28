import React from "react";
import ConditionalRender from "./_shared/Conditional/ConditionalRender";

type PROPS = {
  value: number | string;
  currency?: string;
  label?: string;
};

export default function PriceCard(props: PROPS) {
  const { currency, label, value } = props;

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="h-64 w-64 rounded-full flex justify-center items-center border-gray-400 border-[16px]">
        <div className="flex flex-col justify-center items-center gap-1">
          <ConditionalRender
            condition={Boolean(currency)}
            Component={<h1 className="text-4xl font-bold">{currency}</h1>}
          />
          <h1 className="text-6xl font-bold">{value}</h1>
          <ConditionalRender
            condition={Boolean(label)}
            Component={<span className="text-4xl text-gray-500">{label}</span>}
          />
        </div>
      </div>
    </div>
  );
}
