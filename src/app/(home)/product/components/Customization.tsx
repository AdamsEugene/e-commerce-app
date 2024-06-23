import { ModalBody, ModalFooter, ModalHeader } from "@nextui-org/react";

export default function Customization() {
  return (
    <>
      <ModalHeader></ModalHeader>
      <ModalBody>
        <div className="flex flex-col gap-4"></div>
      </ModalBody>
      <ModalFooter></ModalFooter>
    </>
  );
}
