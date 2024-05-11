import { Button, ModalBody, ModalFooter, ModalHeader } from "@nextui-org/react";
import { TbTargetArrow } from "react-icons/tb";

import StyledInput from "../Styled/StyledInput";
import StyledTextarea from "../Styled/StyledTextarea";


type PROPS = {
  onClose: () => void;
};

export default function CreateGoal(props: PROPS) {
  const { onClose } = props;

  return (
    <>
      <ModalHeader>
        <div className="flex items-center gap-3">
          <TbTargetArrow className="text-2xl" />
          <p className="text-lg font-bold">
            What&apos;s the Main Goal of Your Campaign?
          </p>
        </div>
      </ModalHeader>
      <ModalBody>
        <StyledInput
          isRequired
          label="Campaign Goal"
          placeholder="Enter your campaign goal here"
        />
        <StyledTextarea
          label="Description"
          placeholder="Provide a brief description of your campaign goal"
        />
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
