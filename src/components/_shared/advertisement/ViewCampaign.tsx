import { MicsState } from "@/src/store/micsSlice";
import { ModalBody, ModalFooter, ModalHeader } from "@nextui-org/react";

type Kind = "edit" | "view" | "delete";

type PROPS<T> = {
  onClose: () => void;
  kind: Kind | MicsState["modalFor"];
  item?: T;
};

export default function ViewCampaign<T>(props: PROPS<T>) {
  return (
    <>
      <ModalHeader></ModalHeader>
      <ModalBody></ModalBody>
      <ModalFooter></ModalFooter>
    </>
  );
}
