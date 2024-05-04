"use client";

import Link from "next/link";
import { Button } from "@nextui-org/button";
import ConditionalRenderAB from "./ConditionalRenderAB";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import { campaignMetrics } from "@/src/utils/dashboardData";

export default function ButtonLinkOrNot() {
  const openModal = useAppStore((state) => state.openModal);

  return (
    <>
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
                style={{ background: item.bgColor }}
                startContent={<Icon />}
                onClick={() => openModal("create_campaign")}
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
