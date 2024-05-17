"use client";

import React, { useEffect, useRef } from "react";
import StyledTable from "../Styled/StyledTable";
import {
  type CampaignType,
  campaigns,
  campaignsColumns,
} from "@/src/utils/campaignData";
import { transformColumns } from "@/src/utils/functions";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import ConditionalRenderAB from "../Conditional/ConditionalRenderAB";
import CampaignGrid from "./CampaignGrid";
import { Button, ModalContent, useDisclosure } from "@nextui-org/react";
import StyledModal from "../Styled/StyledModal";
import CampaignModalContent from "./CampaignModalContent";
import { MicsState } from "@/src/store/micsSlice";
import { Size } from "../types/@styles";

type Kind = "edit" | "view" | "delete";

export default function AllCampaigns() {
  const displayMode = useAppStore((state) => state.displayMode);
  const openModal = useAppStore((state) => state.openModal);
  const modalFor = useAppStore((state) => state.modalFor);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const Component = useRef<Kind | MicsState["modalFor"]>(undefined);
  const item = useRef<CampaignType | undefined>(undefined);
  const size = useRef<Size | undefined>();

  useEffect(() => {
    if (modalFor === "create_campaign") Component.current = "create_campaign";
    if (modalFor === "create_ad") Component.current = "create_ad";
    if (modalFor === "crop_image") {
      Component.current = "crop_image";
      size.current = "lg";
    }
    if (
      modalFor === "create_campaign" ||
      modalFor === "create_ad" ||
      modalFor === "crop_image"
    )
      onOpen();
  }, [modalFor, onOpen]);

  function handleCampaignClick(kind: Kind, _item: CampaignType) {
    item.current = _item;
    Component.current = kind;
    if (kind === "delete") size.current = "lg";
    else size.current = undefined;
    onOpen();
  }

  return (
    <div>
      <Button onClick={() => openModal("crop_image")}>Crop</Button>
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
        size={size.current || "5xl"}
        className="campaign_modal"
        scrollBehavior="inside"
        onClose={() => openModal(undefined)}
      >
        <ModalContent>
          {(onClose) => (
            <CampaignModalContent
              kind={Component.current}
              onClose={onClose}
              item={item.current}
            />
          )}
        </ModalContent>
      </StyledModal>
    </div>
  );
}
