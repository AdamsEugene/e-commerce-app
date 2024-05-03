"use client";

import React from "react";
import StyledTable from "../StyledTable";
import { campaigns, campaignsColumns } from "@/src/utils/campaignData";
import { transformColumns } from "@/src/utils/functions";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import ConditionalRenderAB from "../Conditional/ConditionalRenderAB";
import CampaignGrid from "./CampaignGrid";
import { ModalContent, useDisclosure } from "@nextui-org/react";
import StyledModal from "../StyledModal";

export default function AllCampaigns() {
  const displayMode = useAppStore((state) => state.displayMode);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <ConditionalRenderAB
        condition={displayMode === "list"}
        ComponentA={
          <StyledTable
            isHeaderSticky
            color="default"
            selectionMode="multiple"
            aria-label="Campaigns collection table"
            columns={transformColumns(campaignsColumns)}
            data={campaigns}
            onRowAction={(key) => console.log(key)}
          />
        }
        ComponentB={<CampaignGrid campaigns={campaigns} onOpen={onOpen} />}
      />
      <StyledModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
        backdrop="blur"
        size="5xl"
        className="campaign_modal"
        scrollBehavior="inside"
      >
        <ModalContent>{(onClose) => <div>okay</div>}</ModalContent>
      </StyledModal>
    </div>
  );
}
