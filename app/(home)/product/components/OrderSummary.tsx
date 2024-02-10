import StyledButton from "@/components/StyledButton";
import formatCurrency from "@/utils/formatCurrency";
import generateOrderSummaryData from "@/utils/orderSummary";
import { Checkbox, Divider } from "@nextui-org/react";
import React from "react";

export default function OrderSummary() {
  const orderSummaryData = generateOrderSummaryData(4);

  return (
    <div className="flex flex-col gap-4">
      <ul className="flex flex-col gap-4">
        {orderSummaryData.map((data) => (
          <li key={data.name} className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              {data.amount ? `${data.amount} X ${data.name}` : `${data.name}`}
            </p>
            <p className="text-sm text-gray-500">
              {formatCurrency(data.price)}
            </p>
          </li>
        ))}
      </ul>
      <Divider />
      <ul className="flex flex-col gap-4">
        <li className="flex justify-between items-center">
          <p className="text-sm text-gray-600">Subtotal</p>
          <p className="text-sm text-gray-600">$53.23</p>
        </li>
        <li className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Shipping to Ghana</p>
            <p className="text-sm text-gray-400">
              Express (4–6 business days, tracking)
            </p>
          </div>
          <p className="text-sm text-gray-500">$15</p>
        </li>
        <li className="flex justify-between items-center">
          <p className="text-sm text-gray-600">Sales Tax </p>
          <p className="text-sm text-gray-600">FREE</p>
        </li>
      </ul>
      <Divider />
      <div className="flex justify-between items-center">
        <p className="text-2xl text-gray-600">ORDER TOTAL</p>
        <div className="flex items-baseline gap-2">
          <span className="text-sm text-gray-600">USD</span>
          <p className="text-2xl text-gray-600">$324.56</p>
        </div>
      </div>
      <Checkbox defaultSelected color="secondary">
        Email me about new products
      </Checkbox>
      <StyledButton content="COMPLETE ORDER" color="secondary" />
      <p className="text-xs text-gray-400">
        *By signing up or placing an order, you&lsquo;re consenting to our
        privacy policy.
      </p>
    </div>
  );
}

type ORDER_SUMMARY = {
  name: string;
  amount: number;
  price: number;
};
