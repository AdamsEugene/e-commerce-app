import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { campaignMetrics } from "@/src/utils/dashboardData";

export const metadata: Metadata = {
  title: "Campaigns",
};

const titles = ["Boost Your Sales with Ads.", "Manage Your Ad Campaigns"];

export default function Campaigns() {
  const getRandomTitle = (): string => {
    const randomIndex = Math.floor(Math.random() * titles.length);
    return titles[randomIndex];
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">{getRandomTitle()}</h1>
      <div className="flex items-center justify-between">
        <div></div>
        <div className="flex gap-4 items-center">
          {campaignMetrics.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.value}
                as={Link}
                href={item.link}
                style={{ background: item.bgColor }}
                startContent={<Icon />}
              >
                {item.value}
              </Button>
            );
          })}
        </div>
      </div>
      <div className="h-16"></div>
    </div>
  );
}