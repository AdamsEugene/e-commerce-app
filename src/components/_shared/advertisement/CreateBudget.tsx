import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Checkbox,
} from "@nextui-org/react";
import { GrMoney } from "react-icons/gr";
import StyledInput from "../Styled/StyledInput";
import StyledTextarea from "../Styled/StyledTextarea";

type PROPS = {
  onClose: () => void;
};

export default function CreateBudget({ onClose }: PROPS) {
  return (
    <>
      <ModalHeader>
        <div className="flex items-center gap-3">
          <GrMoney className="text-2xl" />
          <p className="text-lg font-bold">Manage Your Campaign Costs</p>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="flex flex-col gap-4">
          <StyledInput />
          <StyledTextarea />
          <Checkbox color="secondary">Daily Budget</Checkbox>
          <StyledInput />
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
    </>
  );
}
