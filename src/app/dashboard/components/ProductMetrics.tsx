import { MetricsData } from "@/src/utils/dashboardData";
import {
  Card,
  CardBody,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { IoInformationCircle } from "react-icons/io5";

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
            className={`flex items-center justify-center w-14 h-14 rounded-lg group-hover:rounded-lg ${bgColor} ${iconColor}`}
          >
            <Icon className="text-3xl" />
          </div>
          <div className="flex flex-col flex-grow">
            <div className="flex items-center justify-between">
              <p className="text-3xl font-semibold">{amount}</p>
              <StyledPopover>
                <IoInformationCircle className="text-gray-500 cursor-pointer" />
              </StyledPopover>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">{label}</p>
              <Link href={link}>
                <p className="text-sm text-blue-400 hover:underline">details</p>
              </Link>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export function StyledPopover({ children }: PropsWithChildren) {
  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Popover Content</div>
          <div className="text-tiny">This is the popover content</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
