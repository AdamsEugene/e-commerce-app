"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import StyledModal from "../Styled/StyledModal";
import { Button, ModalContent, useDisclosure } from "@nextui-org/react";

import ImportExportSettings from "../others/ImportExportSettings";
import GridCard from "@/src/components/_shared/others/GridCard";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import useIndexedDB from "@/src/hooks/useIndexedDB";
import { siteConfig } from "@/src/config/site";
import ConditionalRenderAB from "../Conditional/ConditionalRenderAB";
import StyledTable from "../Styled/StyledTable";
import SelectList from "../others/SelectList";
import SearchWithButtons from "../search/SearchWithButtons";

const {
  stores: { excelData, excelImport, defaultColumns, allExcelData },
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
  const [existingKey, setExistingKey] = useState("");
  const { startLoading, value, getValueByKey } = useIndexedDB<string>(
    excelData,
    false
  );
  const { startLoading: loadColumns, value: _columns } =
    useIndexedDB<string>(excelImport);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const updateExcelStateChange = useAppStore(
    (state) => state.updateExcelStateChange
  );
  const hasExcelChanged = useAppStore((state) => state.hasExcelChanged);
  const displayMode = useAppStore((state) => state.displayMode);

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
    if (existingKey) {
      getValueByKey(existingKey);
      updateExcelStateChange(true);
    }
    if (hasExcelChanged) {
      startLoading(existingKey);
      setExistingKey("");
      loadColumns();
      updateExcelStateChange(false);
    }
  }, [
    existingKey,
    getValueByKey,
    hasExcelChanged,
    loadColumns,
    startLoading,
    updateExcelStateChange,
  ]);

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
        <SearchWithButtons
          buttons={[
            <Button
              key={"Import"}
              onClick={() => handleOpenModal(false)}
              variant="flat"
              color="secondary"
            >
              Import
            </Button>,
            <Button
              key={"Use Existing Data"}
              onClick={() => handleOpenModal(true)}
              variant="flat"
              color="primary"
            >
              Use Existing Data
            </Button>,
          ]}
        />
      </div>
      <ConditionalRenderAB
        condition={displayMode === "grid"}
        ComponentA={
          <GridCard baseLink="my-product" data={importedData.current || []} />
        }
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
                <SelectList
                  onClose={onClose}
                  title="Select what to import"
                  dbPath={allExcelData}
                  getData={(data) => setExistingKey(data)}
                />
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
