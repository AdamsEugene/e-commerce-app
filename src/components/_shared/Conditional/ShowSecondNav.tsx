"use client";

import { usePathname } from "next/navigation";
import ConditionalRenderAB from "./ConditionalRenderAB";
import SideBar from "../advertisement/SideBar";

export default function ShowSecondNav() {
  const pathname = usePathname();
  const forAdsPage = pathname.split("/").includes("ads");

  return (
    <ConditionalRenderAB
      condition={forAdsPage}
      ComponentA={<SideBar />}
      ComponentB={<div className="hidden lg:block w-56" />}
    />
  );
}
