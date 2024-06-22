import { useEffect, useState } from "react";
import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  Snippet,
} from "@nextui-org/react";
import QRCodeScan from "../_shared/others/QRCodeScan";

type PROPS = {
  onCopy: () => void;
  productName?: string;
};

export default function MoreOnProduct({ onCopy, productName }: PROPS) {
  const [currentUrl, setCurrentUrl] = useState("");
  useEffect(() => {
    if (window) {
      setCurrentUrl(window.location.href);
    }
  }, []);

  return (
    <>
      <ModalHeader></ModalHeader>
      <ModalBody>
        <div className="flex flex-col gap-4">
          <Snippet
            symbol=""
            size="sm"
            onCopy={() => {
              setTimeout(() => {
                onCopy();
              }, 500);
            }}
            className="w-[98%]"
          >
            <p className="max-w-[280px] truncate">{currentUrl}</p>
          </Snippet>
          <QRCodeScan value={currentUrl} />
          <p className="text-center font-bold">{productName}</p>
        </div>
      </ModalBody>
      <ModalFooter></ModalFooter>
    </>
  );
}
