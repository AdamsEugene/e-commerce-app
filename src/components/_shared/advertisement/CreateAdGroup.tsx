import {
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { TbTargetArrow } from "react-icons/tb";

import StyledInput from "../Styled/StyledInput";
import StyledTextarea from "../Styled/StyledTextarea";
import StyledSelect from "../Styled/StyledSelect";
import { campaignGoals } from "@/src/utils/campaignData";
import { IoAdd } from "react-icons/io5";
import { useRef } from "react";
import { Size } from "../types/@styles";

type PROPS = {
  onClose: () => void;
};

type Kind = "create_campaign" | undefined;

export default function CreateAdGroup(props: PROPS) {
  const { onClose } = props;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const kind = useRef<Kind>();
  const size = useRef<Size | undefined>();

  const onAddButtonClick = (_kind: Kind) => {
    kind.current = _kind;
    onOpen();
  };

  return (
    <>
      <ModalHeader>
        <div className="flex items-center gap-3">
          <TbTargetArrow className="text-2xl" />
          <p className="text-lg font-bold">Create Ads Group</p>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="flex flex-col gap-4">
          <StyledInput
            isRequired
            label="Name"
            placeholder="Enter name for this ad group"
          />
          <div className="flex items-end gap-4">
            <StyledSelect
              isRequired
              data={campaignGoals}
              label="Campaign"
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
                onClick={() => onAddButtonClick("create_campaign")}
              >
                New Goal
              </Button>
            </div>
          </div>
          <StyledTextarea
            label="Description"
            placeholder="Provide a brief description of your campaign goal"
          />
         
        </div>
      </ModalBody>
      <ModalFooter>
        <div className="flex items-center justify-between w-full">
          <Button variant="flat" color="primary">
            See all Campaign Goals
          </Button>
          <div className="flex items-center gap-4">
            <Button color="danger" onClick={onClose}>
              Cancel
            </Button>
            <Button color="secondary">Submit & Proceed</Button>
          </div>
        </div>
      </ModalFooter>
    </>
  );
}
