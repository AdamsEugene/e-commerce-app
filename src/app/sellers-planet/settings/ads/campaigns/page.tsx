import { Metadata } from "next";
import SearchWithButtons from "@/src/components/_shared/search/SearchWithButtons";
import BackButton from "@/src/components/_shared/button/BackButton";
import AllCampaigns from "@/src/components/_shared/advertisement/AllCampaigns";
import ButtonLinkOrNot from "@/src/components/_shared/Conditional/ButtonLinkOrNot";

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
          <ButtonLinkOrNot />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{getRandomTitle()}</h1>
        <SearchWithButtons />
      </div>
      <AllCampaigns  />
      <div className="h-16"></div>
    </div>
  );
}
