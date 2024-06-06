"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ModalContent, useDisclosure } from "@nextui-org/react";

import StyledTable from "../Styled/StyledTable";
import { campaigns, campaignsColumns } from "@/src/utils/campaignData";
import { transformColumns } from "@/src/utils/functions";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import ConditionalRenderAB from "../Conditional/ConditionalRenderAB";
import CampaignGrid from "./CampaignGrid";
import StyledModal from "../Styled/StyledModal";
import CampaignModalContent from "./CampaignModalContent";
import { MicsState } from "@/src/store/micsSlice";
import { Size } from "../types/@styles";
import AdsGrid from "./AdsGrid";
import { adCreativeData, adsColumns } from "@/src/utils/adsData";
import { budgetColumns, budgetsData } from "@/src/utils/budgetData";

type Kind = "edit" | "view" | "delete";

const modalTypes = [
  "create_campaign",
  "create_ad",
  "create_budget",
  "create_group",
];

export default function AllCampaigns() {
  const displayMode = useAppStore((state) => state.displayMode);
  const openModal = useAppStore((state) => state.openModal);
  const modalFor = useAppStore((state) => state.modalFor);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const component = useRef<Kind | MicsState["modalFor"]>(undefined);
  const item = useRef<any | undefined>(undefined);
  const size = useRef<Size | undefined>();
  const data = useRef<any[]>(campaigns);
  const columns = useRef<any[]>(campaignsColumns);

  const pathname = usePathname();

  const Component = useRef(
    <CampaignGrid campaigns={campaigns} onOpen={handleCampaignClick} />
  );

  const isAds = pathname.endsWith("/ads");
  const isBudget = pathname.endsWith("/budget");

  if (isAds) {
    Component.current = (
      <AdsGrid data={adCreativeData} onOpen={handleCampaignClick} />
    );
    data.current = adCreativeData;
    columns.current = adsColumns;
  }

  if (isBudget) {
    data.current = budgetsData;
    columns.current = budgetColumns;
  }

  useEffect(() => {
    size.current = undefined;
    if (modalFor === "create_campaign") component.current = "create_campaign";
    if (modalFor === "create_ad") component.current = "create_ad";
    if (modalFor === "create_budget") component.current = "create_budget";
    if (modalFor === "create_group") component.current = "create_group";
    if (modalTypes.includes(modalFor || "")) onOpen();
  }, [modalFor, onOpen]);

  function handleCampaignClick<T>(kind: Kind, _item: T) {
    item.current = _item;
    component.current = kind;
    if (kind === "delete") size.current = "lg";
    else size.current = undefined;
    onOpen();
  }

  const mode = isBudget || displayMode === "list";

  return (
    <div>
      <ConditionalRenderAB
        condition={mode}
        ComponentA={
          <StyledTable
            isHeaderSticky
            color="default"
            selectionMode="multiple"
            aria-label="Campaigns collection table"
            columns={[
              ...transformColumns(columns.current).slice(1, 3),
              transformColumns(columns.current)[columns.current.length - 1],
            ]}
            data={data.current}
            onRowAction={(key) => {}}
            actionClick={handleCampaignClick}
          />
        }
        ComponentB={Component.current}
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
              kind={component.current}
              onClose={onClose}
              item={item.current}
            />
          )}
        </ModalContent>
      </StyledModal>
    </div>
  );
}
