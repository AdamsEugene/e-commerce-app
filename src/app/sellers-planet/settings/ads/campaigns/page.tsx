import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@nextui-org/button";

import { campaignMetrics } from "@/src/utils/dashboardData";
import Campaign from "@/src/components/_shared/advertisement/Campaign";
import SearchWithButtons from "@/src/components/_shared/search/SearchWithButtons";
import BackButton from "@/src/components/_shared/button/BackButton";
import AllCampaigns from "@/src/components/_shared/advertisement/AllCampaigns";
import ConditionalRenderAB from "@/src/components/_shared/Conditional/ConditionalRenderAB";

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
      <div className="flex items-center justify-between">
        <BackButton />
        <div className="flex gap-4 items-center">
          {campaignMetrics.map((item) => {
            const Icon = item.icon;
            return (
              <ConditionalRenderAB
                key={item.value}
                condition={!!item.link}
                ComponentA={
                  <Button
                    key={item.value}
                    as={Link}
                    href={item.link}
                    style={{ background: item.bgColor }}
                    startContent={<Icon />}
                  >
                    {item.value}
                  </Button>
                }
                ComponentB={
                  <Button
                    key={item.value}
                    // as={Link}
                    // href={item.link}
                    style={{ background: item.bgColor }}
                    startContent={<Icon />}
                  >
                    {item.value}
                  </Button>
                }
              />
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{getRandomTitle()}</h1>
        <SearchWithButtons />
      </div>
      <AllCampaigns />
      {/* <div className="grid grid-cols-3 gap-4">
        <Campaign />
        <Campaign />
        <Campaign />
      </div> */}
      <div className="h-16"></div>
    </div>
  );
}
