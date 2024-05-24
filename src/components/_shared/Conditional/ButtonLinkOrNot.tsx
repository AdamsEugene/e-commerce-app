"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@nextui-org/button";
import ConditionalRenderAB from "./ConditionalRenderAB";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import {
  campaignMetrics,
  adsMetrics,
  budgetMetrics,
  adsGroupMetrics,
} from "@/src/utils/dashboardData";

export default function ButtonLinkOrNot() {
  const openModal = useAppStore((state) => state.openModal);
  const pathname = usePathname();

  const metrics = useRef<any[]>(campaignMetrics);
  const isAds = pathname.endsWith("/ads");
  const isBudget = pathname.endsWith("/budget");
  const isGroup = pathname.endsWith("/group");

  if (isAds) metrics.current = adsMetrics;
  if (isBudget) metrics.current = budgetMetrics;
  if (isGroup) metrics.current = adsGroupMetrics;

  return (
    <>
      {metrics.current.map((item) => {
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
                style={{ background: item.bgColor }}
                startContent={<Icon />}
                onClick={() =>
                  openModal(
                    isAds
                      ? "create_ad"
                      : isGroup
                      ? "create_group"
                      : isBudget
                      ? "create_budget"
                      : "create_campaign"
                  )
                }
              >
                {item.value}
              </Button>
            }
          />
        );
      })}
    </>
  );
}
