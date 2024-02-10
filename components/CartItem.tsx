import { Button } from "@nextui-org/button";
import StyledDropdown from "./Dropdown";
import { IoCloseSharp } from "react-icons/io5";
import { Divider } from "@nextui-org/react";
import StyledImage from "./StyledImage";
import { useState } from "react";

type Quantity = {
  key: string;
  label: string;
};

type ItemsInCart = {
  itemName: string;
  color: string;
  size: number;
  amount: number; // New property
  image: string;
  key: string;
};

const generateQuantity = (count: number): Quantity[] => {
  const quantity: Quantity[] = [];

  for (let i = 1; i <= count; i++) {
    quantity.push({ key: i.toString(), label: i.toString() });
  }

  return quantity;
};

const CartItem: React.FC<{
  item: ItemsInCart;
  removeItem: (id: string) => void;
}> = ({ item, removeItem }) => {
  const [selectedQuantity, setSelectedQuantity] = useState("3");
  const [selectedSize, setSelectedSize] = useState(String(item.size));

  const handleSelectQuantity = (key: any) => {
    setSelectedQuantity(key);
  };

  const handleSelectSize = (key: any) => {
    setSelectedSize(key);
  };

  return (
    <>
      <div className="flex mb-4 gap-2">
        <StyledImage
          src={item.image}
          alt={item.itemName}
          className="w-[70px] h-[70px] object-cover mr-4"
          width={70}
          height={70}
        />
        <div className="flex flex-grow flex-col gap-2">
          <p className="text-base font-semibold">{item.itemName}</p>
          <div className="flex gap-2 items-center">
            <p className="text-sm text-gray-500 w-12">Color: </p>
            <p className="text-sm text-gray-300">Color: {item.color}</p>
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
        <div className="flex flex-col justify-between">
          <IoCloseSharp
            className="text-1xl text-gray-500"
            onClick={() => removeItem(item.key)}
          />
          <p className="text-base font-semibold ml-auto">${item.amount}</p>
        </div>
      </div>
      <Divider className="my-4" />
    </>
  );
};

export default CartItem;
