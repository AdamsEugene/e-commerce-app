"use client";

import Link from "next/link";
import { Button } from "@nextui-org/button";
import ConditionalRenderAB from "./ConditionalRenderAB";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import { campaignMetrics, adsMetrics } from "@/src/utils/dashboardData";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export default function ButtonLinkOrNot() {
  const openModal = useAppStore((state) => state.openModal);
  const pathname = usePathname();

  const metrics = useRef<any[]>(campaignMetrics);
  const isAds = pathname.endsWith("/ads");

  if (isAds) metrics.current = adsMetrics;

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
                  openModal(isAds ? "create_ad" : "create_campaign")
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
