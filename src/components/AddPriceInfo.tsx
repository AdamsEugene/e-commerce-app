"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { IconType } from "react-icons";

type PROPS = {
  type: "lease" | "rent" | "default";
  data: BenefitProps[];
  amount: string;
  currency?: string;
  duration: string;
};

const AddPriceInfo: React.FC<PROPS> = ({
  type,
  data,
  amount,
  duration,
  currency,
}) => {
  const [editing, setEditing] = useState(false);

  const toggleEditing = () => {
    setEditing((prevEditing) => !prevEditing);
  };

  return (
    <div className="w-full h-full">
      <div className="relative w-full h-full" onClick={toggleEditing}>
        <AnimatePresence>
          {!editing ? (
            <motion.div
              className="w-full h-full top-0 left-0 rounded-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FrontComponent
                data={data}
                amount={amount}
                duration={duration}
                currency={currency}
              />
            </motion.div>
          ) : (
            <motion.div
              className="w-full h-full top-0 left-0 rounded-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <BackComponent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

type BenefitProps = {
  icon: IconType;
  benefit: string;
};

type Props = {
  data: BenefitProps[];
  amount: string;
  currency?: string;
  duration: string;
};

const FrontComponent = ({ data, amount, duration, currency }: Props) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-baseline justify-center gap-1">
        <span className="text-3xl font-bold">{currency}</span>
        <p className="text-5xl font-bold">{amount}</p>
        <span className="text-xl font-bold text-gray-500">/{duration}</span>
      </div>
      <ul className="list-disc text-base flex flex-col gap-3">
        {data.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {item.icon && (
              <div className="h-5 w-5 rounded-lg border border-green-400 flex justify-center items-center">
                <item.icon className="text-green-500" />
              </div>
            )}
            <span>{item.benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
const BackComponent = () => {
  return <div>back</div>;
};

export default AddPriceInfo;
