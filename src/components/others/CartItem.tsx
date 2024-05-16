"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/react";
import { IoCloseSharp } from "react-icons/io5";
import { FiMoreHorizontal } from "react-icons/fi";

import StyledDropdown from "../_shared/others/Dropdown";
import StyledImage from "../_shared/Styled/StyledImage";
import { useAppStore } from "../../providers/AppStoreProvider";
import { type InCart } from "../../store/productSlice";
import { ItemsInCart } from "../../utils/cartItem";

type Quantity = {
  key: string;
  label: string;
};

const options = [
  { key: "default", label: "Move to default" },
  { key: "leasing", label: "Move to lease" },
  { key: "rent", label: "Move to rent" },
  { key: "later", label: "Buy later" },
];

const generateQuantity = (count: number): Quantity[] => {
  const quantity: Quantity[] = [];
  for (let i = 1; i <= count; i++) {
    quantity.push({ key: i.toString(), label: i.toString() });
  }
  return quantity;
};

const CartItem: React.FC<{ item: ItemsInCart; from: InCart }> = ({
  item,
  from,
}) => {
  const [selectedQuantity, setSelectedQuantity] = useState("3");
  const [selectedSize, setSelectedSize] = useState(String(item.size));
  const [selectedKeys, setSelectedKeys] = useState("");

  const pathname = usePathname();
  const containsBuyNow = /buy-now/i.test(pathname);

  const isDrawerOpen = useAppStore((state) => state.isDrawerOpen);
  const moveTo = useAppStore((state) => state.moveTo);
  const moveToBuyNow = useAppStore((state) => state.moveToBuyNow);
  const removeItemFromCart = useAppStore((state) => state.removeItemFromCart);
  const removeItemFromBuyNow = useAppStore(
    (state) => state.removeItemFromBuyNow
  );

  const handleSelect = (key: any) => {
    setSelectedKeys(key);
    containsBuyNow && !isDrawerOpen
      ? moveToBuyNow(from, key.currentKey as InCart, item.productId)
      : moveTo(from, key.currentKey as InCart, item.productId);
  };

  const handleSelectQuantity = (key: any) => {
    setSelectedQuantity(key);
  };

  const handleSelectSize = (key: any) => {
    setSelectedSize(key);
  };

  // console.log(containsBuyNow && !isDrawerOpen);

  return (
    <>
      <div className="flex mb-4 gap-4">
        <StyledImage
          src={item.image}
          alt={item.itemName}
          className="w-[70px] h-[70px] object-cover mr-4"
          width={70}
          height={70}
        />
        <div className="flex flex-grow flex-col gap-2">
          <p className="text-base font-semibold text-gray-500">
            {item.itemName}
          </p>
          <div className="flex gap-2 items-center">
            <p className="text-sm text-gray-500 w-12">Color: </p>
            <p className="text-sm text-gray-500">Color: {item.color}</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-sm text-gray-500 w-12">Size: </p>
            <StyledDropdown
              Trigger={
                <Button variant="bordered" size="sm" className="capitalize">
                  {selectedSize}
                </Button>
              }
              dropdownItems={generateQuantity(9)}
              handleSelect={handleSelectSize}
              selectedKeys={selectedSize}
            />
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-sm text-gray-500 w-12">Qty: </p>
            <StyledDropdown
              Trigger={
                <Button variant="bordered" size="sm" className="capitalize">
                  {selectedQuantity}
                </Button>
              }
              dropdownItems={generateQuantity(9)}
              handleSelect={handleSelectQuantity}
              selectedKeys={selectedQuantity}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <Button
            isIconOnly
            color="warning"
            aria-label="Like"
            radius="full"
            variant="light"
            size="sm"
            onClick={() =>
              containsBuyNow && !isDrawerOpen
                ? removeItemFromBuyNow(from, item.productId)
                : removeItemFromCart(from, item.productId)
            }
          >
            <IoCloseSharp className="text-1xl text-gray-500" />
          </Button>
          <StyledDropdown
            Trigger={
              <Button
                isIconOnly
                color="default"
                aria-label="Like"
                radius="full"
                variant="light"
                size="sm"
              >
                <FiMoreHorizontal />
              </Button>
            }
            dropdownItems={options}
            handleSelect={handleSelect}
            selectedKeys={selectedKeys}
          />

          <p className="text-base font-semibold ml-auto text-gray-500">
            ${item.amount}
          </p>
        </div>
      </div>
      <Divider className="my-4" />
    </>
  );
};

export default CartItem;
