import React from "react";
import {
  Divider,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import StyledButton from "@/src/components/StyledButton";
import StyledModal from "@/src/components/StyledModal";
import TabWithIcon from "@/src/components/TabWithIcon";

export default function PaymentMethod() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col w-full gap-6">
      <TabWithIcon />
      <Divider />
      <StyledButton
        content="Choose different method"
        fullWidth
        onClick={onOpen}
      />
      <StyledModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
        backdrop="blur"
        size="sm"
        className="search_result"
        scrollBehavior="inside"
      >
        <ModalContent>{(onClose) => <ModalBody>okay</ModalBody>}</ModalContent>
      </StyledModal>
    </div>
  );
}
