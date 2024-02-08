import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdApproval } from "react-icons/md";

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
];

const Offers: React.FC<OffersProps> = ({ data }) => {
  return (
    <div className="flex gap-4">
      {data.map((item, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className="text-3xl text-primary">{item.icon}</div>
          <div>
            <p className="text-sm font-bold">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const ShippingOption: React.FC = () => {
  return (
    <Card className="max-w-[100%]">
      <CardBody>
        <Offers data={data} />
      </CardBody>
    </Card>
  );
};

export default ShippingOption;
