"use client";

import { useRef } from "react";
import { useTheme } from "next-themes";
import {
  Button,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  SwitchProps,
  VisuallyHidden,
  useDisclosure,
  useSwitch,
} from "@nextui-org/react";
import { GrAnnounce } from "react-icons/gr";
import { FaImage, FaClipboard, FaMobile, FaDesktop } from "react-icons/fa";

import StyledInput from "../Styled/StyledInput";
import StyledFileUpload from "../Styled/StyledFileUpload";
import StyledTextarea from "../Styled/StyledTextarea";
import StyledTab from "../tabs/StyledTab";
import AdsPreviewBanner from "./AdsPreviewBanner";
import AdsPreviewCard from "./AdsPreviewCard";
import StyledModal from "../Styled/StyledModal";
import CampaignModalContent from "./CampaignModalContent";
import { Size } from "../types/@styles";

type PROPS = {
  onClose: () => void;
};

type Kind = "color_picker";

export default function CreateAds({ onClose }: PROPS) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { theme } = useTheme();

  const Component = useRef<Kind | undefined>(undefined);
  const size = useRef<Size | undefined>();
  const colorKey = useRef<string>();

  const handleEditClick = (_colorKey: string) => {
    size.current = "xs";
    Component.current = "color_picker";
    colorKey.current = `${theme}_${_colorKey}`;
    onOpen();
  };

  const adsData = [
    {
      id: "banner",
      label: "Banner",
      icon: <FaImage />,
      content: <AdsPreviewBanner handleEditClick={handleEditClick} />,
    },
    {
      id: "card",
      label: "Card",
      icon: <FaClipboard />,
      content: <AdsPreviewCard />,
    },
  ];

  return (
    <>
      <ModalHeader>
        <div className="flex items-center gap-3">
          <GrAnnounce className="text-2xl" />
          <p className="text-lg font-bold">Start Creating Ads</p>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <p>Create Ads</p>
            <StyledInput label="Headline" placeholder="Enter headline..." />
            <StyledFileUpload label="Images or Videos" />
            <StyledTextarea
              label="Description"
              placeholder="Enter description..."
            />
            <StyledInput
              label="Button Text (CTA)"
              placeholder="e.g., 'Shop Now,' 'Learn More'"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p>Preview</p>
              <ThemeSwitch />
            </div>
            <StyledTab data={adsData} color="secondary" />
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <div className="flex items-center gap-4">
          <Button color="danger" onClick={onClose}>
            Cancel
          </Button>
          <Button color="primary">Save as Draft</Button>
          <Button color="secondary">Review & Submit</Button>
        </div>
      </ModalFooter>
      <StyledModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
        backdrop="blur"
        size={size.current || "5xl"}
        className="campaign_modal"
        scrollBehavior="inside"
        // onClose={() => openModal(undefined)}
      >
        <ModalContent>
          {(onClose) => (
            <CampaignModalContent
              kind={Component.current}
              onClose={onClose}
              colorKey={colorKey.current}
            />
          )}
        </ModalContent>
      </StyledModal>
    </>
  );
}

const ThemeSwitch = (props: SwitchProps) => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200",
            ],
          })}
        >
          {!isSelected ? <FaMobile /> : <FaDesktop />}
        </div>
      </Component>
    </div>
  );
};
