"use client";

import React from "react";
import useLoadExcelData from "@/src/hooks/useLoadExcelData";
import StyledModal from "../StyledModal";
import { ModalContent, useDisclosure } from "@nextui-org/react";
import ImportExportSettings from "../ImportExportSettings";

interface President {
  // Replace with your actual data structure if fetching presidents' data
  id: number;
  name: string;
}

function LoadExcel() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // const { data, isLoading, error } = useLoadExcelData(
  //   "https://docs.google.com/spreadsheets/d/1kkIDTygbYp0neqId2QCJeB5VYTzbzqS8aIiJ--NXbos/edit#gid=942347129"
  // );

  // console.log(data);

  // if (isLoading) {
  //   return (
  //     <>
  //       <p>Loading data...</p>
  //     </>
  //   );
  // }

  // if (error) {
  //   return <p>Error: {error.message}</p>; // Handle error display
  // }

  return (
    <div>
      Use the fetched data here
      <button onClick={onOpen}>open modal</button>
      <StyledModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
        backdrop="blur"
        size="5xl"
        className="search_result"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => <ImportExportSettings onClose={onClose} />}
        </ModalContent>
      </StyledModal>
    </div>
  );
}

export default LoadExcel;
