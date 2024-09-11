"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import StyledModal from "@/src/components/_shared/Styled/StyledModal";
import BackButton from "@/src/components/_shared/button/BackButton";
import ImageGallery from "@/src/components/_shared/swiper/ImageGallery";

export default function ModalComponent({ images }: { images?: string[] }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <StyledModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="top"
      backdrop="blur"
      size={"5xl"}
      className="search_result"
      scrollBehavior="inside"
      onClose={() => router.back()}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>
              <BackButton />
            </ModalHeader>
            <ModalBody>
              <div className="w-full">
                <ImageGallery images={images} preview="sm" />
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </StyledModal>
  );
}
