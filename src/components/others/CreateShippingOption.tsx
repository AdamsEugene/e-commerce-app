import React from "react";
import {
  expressOption,
  freeOption,
  regularOption,
} from "../../utils/generateDataForSelect";

type Option = {
  icon?: React.ElementType;
  benefit: string;
};

type ShippingProps = {
  name: string;
  price: string;
  options: Option[];
};

const ShippingOption: React.FC<ShippingProps> = ({ name, price, options }) => (
  <div className="flex-1 flex items-center flex-col gap-4">
    <p className="text-3xl font-bold">{name}</p>
    <div className="h-40 w-40 rounded-full flex justify-center items-center border-gray-400 border-[16px]">
      <p className="text-2xl font-bold">{price}</p>
    </div>
    <ul className="list-disc text-base flex flex-col gap-3">
      {options.map((item, index) => (
        <li key={index} className="flex items-center gap-2">
          {item.icon && (
            <div
              className={`h-5 w-5 rounded-lg border ${
                item.benefit === "No tracking"
                  ? "border-red-400"
                  : "border-green-400"
              } flex justify-center items-center`}
            >
              <item.icon
                className={
                  item.benefit === "No tracking"
                    ? "text-red-500"
                    : "text-green-500"
                }
              />
            </div>
          )}
          <span>{item.benefit}</span>
        </li>
      ))}
    </ul>
  </div>
);

const CreateShippingOption: React.FC = () => {
  return (
    <div className="flex gap-3">
      <ShippingOption name="Free" price="Free" options={freeOption} />
      <ShippingOption name="Regular" price="GHS8" options={regularOption} />
      <ShippingOption name="Express" price="GHS15" options={expressOption} />
    </div>
  );
};

export default CreateShippingOption;
