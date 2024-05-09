import { MicsState } from "@/src/store/micsSlice";
import { ModalBody, ModalFooter, ModalHeader, Button } from "@nextui-org/react";
import { FaEdit, FaEye } from "react-icons/fa";
import ConditionalRenderAB from "../Conditional/ConditionalRenderAB";

type Kind = "edit" | "view" | "delete";

type PROPS<T> = {
  onClose: () => void;
  kind: Kind | MicsState["modalFor"];
  item?: T;
};

export default function ViewCampaign<T>(props: PROPS<T>) {
  const { kind, onClose, item } = props;
  return (
    <>
      <ModalHeader>
        <div className="flex items-center gap-3">
          <ConditionalRenderAB
            condition={kind === "view"}
            ComponentA={<FaEye className="text-2xl" />}
            ComponentB={<FaEdit className="text-2xl" />}
          />
          <p className="text-lg font-bold">
            What&apos;s the Main Goal of Your Campaign?
          </p>
        </div>
      </ModalHeader>
      <ModalBody></ModalBody>
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
