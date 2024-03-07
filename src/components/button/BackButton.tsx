"use client";

import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import { IoArrowBackOutline } from "react-icons/io5";

type PROPS = {
  previousPage?: string;
  func?: () => void;
};

export default function BackButton(props: PROPS) {
  const { func, previousPage } = props;
  const router = useRouter();

  return (
    router.back && (
      <div className="flex items-start w-full">
        <Button
          color="default"
          variant="light"
          startContent={<IoArrowBackOutline />}
          onClick={() => (func ? func() : router.back())}
        >
          Back to {previousPage || "previews"}
        </Button>
      </div>
    )
  );
}
