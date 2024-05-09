import {
  Button,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { MdCampaign } from "react-icons/md";
import { IoAdd } from "react-icons/io5";

import StyledInput from "../Styled/StyledInput";
import StyledSelect from "../Styled/StyledSelect";
import { campaignGoals } from "@/src/utils/campaignData";
import { targetAudienceData } from "@/src/utils/targetAudienceData";
import StyledModal from "../Styled/StyledModal";
import { useRef } from "react";
import CampaignModalContent from "./CampaignModalContent";

type PROPS = {
  onClose: () => void;
};

type Size =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "full"
  | "xs"
  | "3xl"
  | "4xl"
  | "5xl";

type Kind = "new goal" | "new audience" | "new ad" | "new budget" | undefined;

export default function CreateCampaign(props: PROPS) {
  const { onClose } = props;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const kind = useRef<Kind>();
  const size = useRef<Size | undefined>();

  const onAddButtonClick = (_kind: Kind) => {
    kind.current = _kind;
    if (_kind === "new audience") size.current = "5xl";
    onOpen();
  };

  return (
    <>
      <ModalHeader>
        <div className="flex items-center gap-3">
          <MdCampaign className="text-2xl" />
          <p className="text-lg font-bold">Create a New Ad Campaign</p>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="flex flex-col gap-4">
          <StyledInput
            isRequired
            label="Campaign Name"
            placeholder="Enter campaign name (e.g., Summer Sale)"
          />
          <div className="flex items-end gap-4">
            <StyledSelect
              data={campaignGoals}
              label="Campaign Goal"
              placeholder="Select campaign goal (e.g., Increase website traffic)"
              selectionMode="single"
            >
              <></>
            </StyledSelect>
            <div>
              <Button
                color="primary"
                variant="flat"
                startContent={<IoAdd className="text-xl" />}
                onClick={() => onAddButtonClick("new goal")}
              >
                New Goal
              </Button>
            </div>
          </div>
          <div className="flex items-end gap-4">
            <StyledSelect
              data={targetAudienceData}
              label="Targeting & Audience"
              placeholder="Select targeting & audience (e.g., Women aged 25-40)"
            >
              <></>
            </StyledSelect>
            <div>
              <Button
                color="primary"
                variant="flat"
                startContent={<IoAdd className="text-xl" />}
                onClick={() => onAddButtonClick("new audience")}
              >
                Advance
              </Button>
            </div>
          </div>
          <div className="flex items-end gap-4">
            <StyledSelect
              isRequired
              data={campaignGoals}
              label="Ad Creatives"
              placeholder="Select an ad or ads"
            >
              <></>
            </StyledSelect>
            <div>
              <Button
                color="primary"
                variant="flat"
                startContent={<IoAdd className="text-xl" />}
                onClick={() => onAddButtonClick("new ad")}
              >
                New Ad
              </Button>
            </div>
          </div>
          <div className="flex items-end gap-4">
            <StyledSelect
              isRequired
              data={campaignGoals}
              label="Budget & Bidding"
              placeholder="Select budget & bidding strategy"
              selectionMode="single"
            >
              <></>
            </StyledSelect>
            <div>
              <Button
                color="primary"
                variant="flat"
                startContent={<IoAdd className="text-xl" />}
                onClick={() => onAddButtonClick("new budget")}
              >
                New Budget
              </Button>
            </div>
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
      >
        <ModalContent>
          {(onClose) => (
            <CampaignModalContent kind={kind.current} onClose={onClose} />
          )}
        </ModalContent>
      </StyledModal>
    </>
  );
}
