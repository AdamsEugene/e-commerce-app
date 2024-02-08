import React, { FC } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";
import { GiSandsOfTime } from "react-icons/gi";
import { IoIosTimer } from "react-icons/io";
import { IoMdTime } from "react-icons/io";

interface PlanProps {
  backgroundColor: string;
  planDuration: string;
  icon: React.FC<{ size: number; className: string }>;
}

const planDurations = ["Monthly", "Quarterly", "Yearly"];

const PlansComponent: FC = () => {
  return (
    <div className="flex gap-4 w-full justify-center">
      {planDurations.map((duration, index) => (
        <Plan
          key={index}
          backgroundColor={getBackgroundColor(index)}
          planDuration={duration}
          icon={getIcon(index)}
        />
      ))}
    </div>
  );
};

const Plan: FC<PlanProps> = ({ backgroundColor, planDuration, icon }) => {
  const IconComponent = icon;
  return (
    <Card className="w-full" style={{ backgroundColor }} isPressable>
      <CardHeader className="flex gap-3">
        <IconComponent size={30} className="text-yellow-500" />
        <div className="flex flex-col">
          <p className="text-md">{planDuration}</p>
          {/* <p className="text-small text-default-500">nextui.org</p> */}
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="flex items-center justify-center my-1">
          <p className="text-2xl">$87.98</p>
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

const getBackgroundColor = (index: number) => {
  switch (index) {
    case 0:
      return "#1b0924"; // Quarterly
    case 1:
      return "#070624"; // Monthly
    case 2:
      return "#424d75"; // Yearly
    default:
      return ""; // Default color
  }
};

const getIcon = (index: number) => {
  switch (index) {
    case 0:
      return IoIosTimer; // Monthly icon
    case 1:
      return IoMdTime; // Yearly icon
    case 2:
      return GiSandsOfTime; // Quarterly icon
    default:
      return IoMdTime;
  }
};

export default PlansComponent;
