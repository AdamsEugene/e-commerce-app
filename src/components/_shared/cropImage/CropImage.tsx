"use client";

import { Button, ModalBody, ModalFooter, ModalHeader } from "@nextui-org/react";
import { IoCrop } from "react-icons/io5";
import ObjectCrop from "./ObjectCrop";
import { useState } from "react";

type PROPS = {
  onClose: () => void;
};

export default function CropImage(props: PROPS) {
  const { onClose } = props;
  const [imgSrc, setImgSrc] = useState("");

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result?.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  return (
    <>
      <ModalHeader>
        <div className="flex items-center gap-3">
          <IoCrop className="text-2xl" />
          <p className="text-lg font-bold">Drag to crop</p>
        </div>
      </ModalHeader>
      <ModalBody>
        <input type="file" accept="image/*" onChange={onSelectFile} />

        <ObjectCrop imgSrc={imgSrc} />
      </ModalBody>
      <ModalFooter>
        <div className="flex items-center gap-4">
          <Button color="danger" onClick={onClose}>
            Cancel
          </Button>
          <Button color="primary" onClick={onClose}>
            Download
          </Button>
          <Button color="secondary">Save</Button>
        </div>
      </ModalFooter>
    </>
  );
}
