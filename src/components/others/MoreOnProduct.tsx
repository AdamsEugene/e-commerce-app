import { useEffect, useState } from "react";
import { ModalBody, Snippet } from "@nextui-org/react";

type PROPS = {
  onCopy: () => void;
};

export default function MoreOnProduct({ onCopy }: PROPS) {
  const [currentUrl, setCurrentUrl] = useState("");
  useEffect(() => {
    if (window) {
      setCurrentUrl(window.location.href);
    }
  }, []);

  return (
    <ModalBody>
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
    </ModalBody>
  );
}
