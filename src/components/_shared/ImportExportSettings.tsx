"use client";

import {
  ModalBody,
  ModalHeader,
  ModalFooter,
  CheckboxGroup,
  Checkbox,
  Button,
} from "@nextui-org/react";
import { SiMicrosoftexcel } from "react-icons/si";

import StyledInput from "./StyledInput";
import { capitalizeFirstLetter } from "@/src/utils/functions";
import { useEffect, useMemo, useState } from "react";
import { siteConfig } from "@/src/config/site";
import useIndexedDB from "@/src/hooks/useIndexedDB";
import Loading from "./Loading";
import ConditionalRender from "./ConditionalRender";
import useLoadExcelData from "@/src/hooks/useLoadExcelData";
import ConditionalRenderAB from "./ConditionalRenderAB";

const {
  stores: { excelImport },
} = siteConfig;

type ProductField = {
  name: string;
  required: boolean;
  newName: string;
};

const productKeys = [
  { name: "name", required: true, newName: "" },
  { name: "description", required: true, newName: "" },
  { name: "price", required: true, newName: "" },
  { name: "stock", required: true, newName: "" },
  { name: "active", required: true, newName: "" },
  { name: "categories", required: true, newName: "" },
  { name: "images", required: false, newName: "" },
  { name: "brand", required: false, newName: "" },
  { name: "sku", required: false, newName: "" },
  { name: "lowStockThreshold", required: false, newName: "" },
  { name: "variants", required: false, newName: "" },
  { name: "slug", required: false, newName: "" },
  { name: "metaDescription", required: false, newName: "" },
  { name: "weight", required: false, newName: "" },
  { name: "dimensions", required: false, newName: "" },
  { name: "size", required: false, newName: "" },
  { name: "colors", required: false, newName: "" },
];

export default function ImportProductSettings({
  onClose,
}: {
  onClose: () => void;
}) {
  const { loading, setValueInDB, value } = useIndexedDB<string>(excelImport);
  const { data, isLoading, error, startLoading } = useLoadExcelData(
    "https://docs.google.com/spreadsheets/d/1C2vzA6FNrX91yfSmy_atUmHZ0VEIh0-4bycEYMLFyTk/edit#gid=458146508"
  );
  const requiredFields = useMemo(
    () =>
      value
        ? (JSON.parse(value || "{}").fields as ProductField[])
        : productKeys.filter((key) => key.required),
    [value]
  );

  const [selected, setSelected] = useState(requiredFields);

  useEffect(() => {
    setSelected(requiredFields);
  }, [requiredFields]);

  const handleCheckboxChange = (values: string[]) => {
    setSelected(productKeys.filter((field) => values.includes(field.name)));
  };

  const handleInputChange = (e: HTMLInputElement) => {
    const { name, value } = e;
    setSelected((prevFields) =>
      prevFields.map((field) => ({
        ...field,
        newName: field.name === name ? value : field.newName,
      }))
    );
  };

  const saveFieldsLocal = () => {
    const fieldsToSave = selected.filter((field) =>
      selected.map((f) => f.name).includes(field.name)
    );
    setValueInDB(JSON.stringify({ fields: fieldsToSave }));
  };

  const importExcel = () => {
    const newProductFields = selected.map((field) =>
      field.newName !== "" ? field.newName : field.name
    );
    startLoading(newProductFields);
    console.log(newProductFields);
    // onClose()
  };

  // console.log(data);

  return (
    <>
      <ModalHeader>
        <div className="flex items-center justify-between w-full">
          <p>Import Product Data</p>
          <ConditionalRender
            condition={loading || isLoading}
            Component={<Loading color="secondary" size="sm" className="mr-4" />}
          />
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold ">Select Import Columns</h2>
          <div className="grid grid-cols-5 gap-4">
            {productKeys.map((data) => (
              <CheckboxGroup
                key={data.name}
                color="secondary"
                defaultValue={data.required ? [data.name] : []}
                isDisabled={data.required}
                value={selected.map((f) => f.name)}
                onValueChange={handleCheckboxChange}
              >
                <Checkbox value={data.name}>
                  {capitalizeFirstLetter(data.name)}
                </Checkbox>
              </CheckboxGroup>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold mt-3">
              Map Excel Columns to Product Fields
            </h2>
            <p className="mb-4">
              Match the corresponding fields in your Excel sheet with the
              product data points below.
            </p>
            <ConditionalRenderAB
              condition={!loading}
              ComponentA={
                <div className="grid grid-cols-4 gap-4 w-full mt-2">
                  {selected.map((data) => (
                    <StyledInput
                      key={data.name}
                      size="sm"
                      fullWidth
                      name={data.name}
                      defaultValue={data.newName || data.name}
                      onChange={(e) => handleInputChange(e.target)}
                      // isRequired={requiredFields.includes(data)}
                    />
                  ))}
                </div>
              }
              ComponentB={
                <div className="min-h-[100px] flex justify-center items-center w-full mt-2">
                  <Loading color="secondary" size="lg" className="mr-4" />
                </div>
              }
            />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
          <SiMicrosoftexcel className="text-[400px] text-success-50 opacity-50" />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" variant="light" onPress={onClose}>
          Cancel
        </Button>
        <Button isLoading={loading} color="primary" onClick={saveFieldsLocal}>
          Save this changes for later
        </Button>
        <Button
          isLoading={isLoading}
          color="secondary"
          // onPress={onClose}
          onClick={importExcel}
        >
          Import Data
        </Button>
      </ModalFooter>
    </>
  );
}
