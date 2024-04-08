"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import StyledModal from "../StyledModal";
import { Button, ModalContent, useDisclosure } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import { IoGridSharp, IoListSharp } from "react-icons/io5";

import ImportExportSettings from "../ImportExportSettings";
import GridCard from "@/src/components/_shared/GridCard";
import StyledInput from "../StyledInput";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import useIndexedDB from "@/src/hooks/useIndexedDB";
import { siteConfig } from "@/src/config/site";
import ConditionalRenderAB from "../ConditionalRenderAB";
import StyledTable from "../StyledTable";
import SelectList from "../SelectList";

const {
  stores: { excelData, excelImport, defaultColumns },
} = siteConfig;

const _defaultColumns = [
  "name",
  "price",
  "stock",
  "status",
  "categories",
  "sku",
  "brand",
  "actions",
];

function LoadExcel() {
  const [isExistingData, setIsExistingData] = useState(false);
  const { startLoading, value } = useIndexedDB<string>(excelData, false);
  const { startLoading: loadColumns, value: _columns } =
    useIndexedDB<string>(excelImport);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const updateExcelStateChange = useAppStore(
    (state) => state.updateExcelStateChange
  );
  const hasExcelChanged = useAppStore((state) => state.hasExcelChanged);
  const displayMode = useAppStore((state) => state.displayMode);
  const toggleDisplayMode = useAppStore((state) => state.toggleDisplayMode);

  const initialImportData = useMemo<{ data: any[] }>(
    () => JSON.parse(value || "{}"),
    [value]
  );
  const initialColumns = useMemo<{ fields: any[] }>(
    () => JSON.parse(_columns || "{}"),
    [_columns]
  );

  const importedData = useRef(initialImportData.data);
  const columns = useMemo(
    () =>
      _defaultColumns?.map((field) => ({
        name: field.toUpperCase(),
        uid: field,
      })),
    []
  );

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  useEffect(() => {
    if (hasExcelChanged) {
      startLoading();
      loadColumns();
      updateExcelStateChange(false);
    }
  }, [hasExcelChanged, loadColumns, startLoading, updateExcelStateChange]);

  useEffect(() => {
    importedData.current = formatData(initialImportData.data);
  }, [initialImportData]);

  const formatData = (data: any[]) =>
    data?.map((d) => ({
      ...d,
      id: d?.id || d?.key || d.name,
      status: d?.active || "pending",
    }));

  const handleOpenModal = (existing: boolean) => {
    setIsExistingData(existing);
    onOpen();
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between w-full my-4">
        <h1 className="text-3xl font-bold">Imported Data</h1>
        <div className="flex gap-3 items-center">
          <Button
            onClick={() => handleOpenModal(false)}
            variant="flat"
            color="secondary"
          >
            Import
          </Button>
          <Button
            onClick={() => handleOpenModal(true)}
            variant="flat"
            color="primary"
          >
            Use Existing Data
          </Button>
          <Button
            onClick={() => toggleDisplayMode(displayMode)}
            variant="flat"
            // color="warning"
            isIconOnly
          >
            <ConditionalRenderAB
              condition={displayMode === "grid"}
              ComponentA={<IoListSharp className="text-xl" />}
              ComponentB={<IoGridSharp className="text-xl" />}
            />
          </Button>
          <StyledInput
            iconStart
            both
            keys="L"
            Icon={FiSearch}
            className="lg:w-[400px] md:w-[340px] sm:w-[200px]"
          />
        </div>
      </div>
      <ConditionalRenderAB
        condition={displayMode === "grid"}
        ComponentA={<GridCard baseLink="my-product" />}
        ComponentB={
          <StyledTable
            columns={columns}
            data={importedData.current || []}
            isHeaderSticky
          />
        }
      />
      <StyledModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
        backdrop="blur"
        size={isExistingData ? "sm" : "5xl"}
        className="search_result"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <ConditionalRenderAB
              condition={isExistingData}
              ComponentA={
                <SelectList onClose={onClose} title="Select what to import" />
              }
              ComponentB={<ImportExportSettings onClose={onClose} />}
            />
          )}
        </ModalContent>
      </StyledModal>
      <div className="h-16"></div>
    </div>
  );
}

export default LoadExcel;
