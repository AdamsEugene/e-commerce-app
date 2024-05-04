"use client";

import React, { useRef } from "react";
import StyledTable from "../StyledTable";
import {
  type Campaign,
  campaigns,
  campaignsColumns,
} from "@/src/utils/campaignData";
import { transformColumns } from "@/src/utils/functions";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import ConditionalRenderAB from "../Conditional/ConditionalRenderAB";
import CampaignGrid from "./CampaignGrid";
import { ModalContent, useDisclosure } from "@nextui-org/react";
import StyledModal from "../StyledModal";

export default function AllCampaigns() {
  const displayMode = useAppStore((state) => state.displayMode);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const Component = useRef("");

  function handleCampaignClick(
    kind: "edit" | "view" | "delete",
    item: Campaign
  ) {
    console.log(kind, item);

    switch (kind) {
      case "view":
        Component.current = "view";
        onOpen();
        break;
      case "edit":
        Component.current = "edit";
        onOpen();
        break;
      default:
        break;
    }
  }

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
            onRowAction={(key) => {}}
            actionClick={handleCampaignClick}
          />
        }
        ComponentB={
          <CampaignGrid campaigns={campaigns} onOpen={handleCampaignClick} />
        }
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
        <ModalContent>
          {(onClose) => <div>{Component.current}</div>}
        </ModalContent>
      </StyledModal>
    </div>
  );
}
