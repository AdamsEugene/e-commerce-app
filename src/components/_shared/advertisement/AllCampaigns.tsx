"use client";

import React, { useEffect, useRef } from "react";
import StyledTable from "../Styled/StyledTable";
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
import StyledModal from "../Styled/StyledModal";

export default function AllCampaigns() {
  const displayMode = useAppStore((state) => state.displayMode);
  const openModal = useAppStore((state) => state.openModal);
  const modalFor = useAppStore((state) => state.modalFor);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const Component = useRef("");

  useEffect(() => {
    if (modalFor === "create_campaign") {
      Component.current = "create";
      onOpen();
    }
  }, [modalFor, onOpen]);

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
        onClose={() => openModal(undefined)}
      >
        <ModalContent>
          {(onClose) => <div>{Component.current}</div>}
        </ModalContent>
      </StyledModal>
    </div>
  );
}
