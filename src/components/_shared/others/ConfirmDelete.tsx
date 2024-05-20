import { Button, ModalBody, ModalFooter, ModalHeader } from "@nextui-org/react";
import { TbTargetArrow } from "react-icons/tb";

import StyledInput from "../Styled/StyledInput";
import ConditionalRender from "../Conditional/ConditionalRender";

type PROPS = {
  onClose: () => void;
  name?: string;
};

export default function ConfirmDelete(props: PROPS) {
  const { onClose, name } = props;

  return (
    <>
      <ModalHeader>
        <div className="flex items-center gap-3">
          <TbTargetArrow className="text-2xl" />
          <p className="text-lg font-bold">
            Are you sure you want to delete this?
          </p>
        </div>
      </ModalHeader>
      <ModalBody>
        <ConditionalRender
          condition={!!name}
          Component={
            <StyledInput
              isRequired
              label={name}
              placeholder="Enter name of campaign here"
            />
          }
        />
      </ModalBody>
      <ModalFooter>
        <div className="flex items-center gap-4">
          <Button color="danger" onClick={onClose}>
            Cancel
          </Button>
          <Button color="secondary">Confirm</Button>
        </div>
      </ModalFooter>
    </>
  );
}
