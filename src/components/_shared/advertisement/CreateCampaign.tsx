import { ModalBody, ModalFooter, ModalHeader } from "@nextui-org/react";
import { MdCampaign } from "react-icons/md";
import StyledInput from "../Styled/StyledInput";
import StyledSelect from "../Styled/StyledSelect";
import { campaignGoals } from "@/src/utils/campaignData";
import { targetAudienceData } from "@/src/utils/targetAudienceData";

type PROPS = {
  onClose: () => void;
};

export default function CreateCampaign(props: PROPS) {
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
            placeholder="Enter campaign name"
          />
          <StyledSelect
            data={campaignGoals}
            label="Campaign Goal"
            placeholder="Select campaign goal"
            selectionMode="single"
          >
            <></>
          </StyledSelect>
          <StyledSelect
            data={targetAudienceData}
            label="Targeting & Audience"
            placeholder="Select targeting & audience"
          >
            <></>
          </StyledSelect>
        </div>
      </ModalBody>
      <ModalFooter>{/* Add content for the modal footer */}</ModalFooter>
    </>
  );
}
