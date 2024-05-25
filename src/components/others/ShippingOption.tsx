import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdApproval } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";

interface Offer {
  icon: React.ReactNode;
  label: string;
}

interface OffersProps {
  data: Offer[];
}

const data: Offer[] = [
  { icon: <LiaShippingFastSolid />, label: "FREE SHIPPING - OVER $46.99" },
  { icon: <GiTakeMyMoney />, label: "MONEY-BACK GUARANTEE" },
  { icon: <MdApproval />, label: "PHYSICIAN APPROVED" },
  { icon: <IoShieldCheckmark />, label: "BUY PROTECTION" },
];

const Offers: React.FC<OffersProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {data.map((item, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className="text-2xl text-primary">{item.icon}</div>
          <div>
            <p className="text-xs font-bold">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const ShippingOption: React.FC = () => {
  return (
    <Card className="max-w-[100%]" isHoverable shadow="sm">
      <CardBody>
        <Offers data={data} />
      </CardBody>
    </Card>
  );
};

export default ShippingOption;
