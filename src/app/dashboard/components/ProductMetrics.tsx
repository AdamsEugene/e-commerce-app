import { MetricsData } from "@/src/utils/dashboardData";
import { Card, CardBody } from "@nextui-org/react";
import { IoCash, IoInformationCircle } from "react-icons/io5";

export default function ProductMetrics(props: MetricsData) {
  const { amount, icon, label, link, bgColor, iconColor } = props;
  const Icon = icon;

  return (
    <Card
      radius="sm"
      shadow="sm"
      className="group rounded-sm transition-all duration-500 hover:rounded-lg"
    >
      <CardBody className="p-4">
        <div className="flex items-center gap-4">
          <div
            className={`flex items-center justify-center w-14 h-14 rounded-lg group-hover:rounded-lg ${bgColor}`}
          >
            <Icon className={`text-3xl ${iconColor}`} />
          </div>
          <div className="flex flex-col flex-grow">
            <div className="flex items-center justify-between">
              <p className="text-3xl font-semibold">{amount}</p>
              <IoInformationCircle className="text-gray-500" />
            </div>
            <p className="text-sm text-gray-500">{label}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
