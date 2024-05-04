import React from "react";
import { Modal, ModalProps } from "@nextui-org/react";

type PROPS = {
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onOpenChange?: () => void;
  isControlled?: boolean;
  getButtonProps?: (props?: any) => any;
  getDisclosureProps?: (props?: any) => any;
};

export default function StyledModal(props: PROPS & ModalProps) {
  const { children, ...others } = props;

  return <Modal {...others}>{children}</Modal>;
}
