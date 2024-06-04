"use client";

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  ModalBody,
  ModalHeader,
  ModalFooter,
  CheckboxGroup,
  Checkbox,
  Button,
  ModalContent,
  useDisclosure,
  Divider,
} from "@nextui-org/react";
import { SiMicrosoftexcel } from "react-icons/si";

import StyledInput from "../Styled/StyledInput";
import { capitalizeFirstLetter } from "@/src/utils/functions";
import { siteConfig } from "@/src/config/site";
import useIndexedDB from "@/src/hooks/useIndexedDB";
import Loading from "./Loading";
import ConditionalRender from "../Conditional/ConditionalRender";
import useLoadExcelData from "@/src/hooks/useLoadExcelData";
import ConditionalRenderAB from "../Conditional/ConditionalRenderAB";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import StyledModal from "../Styled/StyledModal";
import SelectList from "./SelectList";

const {
  stores: { excelImport, defaultColumns, allExcelData, allFields },
} = siteConfig;

type ProductField = {
  name: string;
  required: boolean;
  newName: string;
};

type StoreField = { name: string; description: string };

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
  const [isExistingData, setIsExistingData] = useState(false);
  const [existingKey, setExistingKey] = useState("");

  const [path, setPath] = useState(
    "https://docs.google.com/spreadsheets/d/1C2vzA6FNrX91yfSmy_atUmHZ0VEIh0-4bycEYMLFyTk/edit#gid=458146508"
  );
  const updateExcelStateChange = useAppStore(
    (state) => state.updateExcelStateChange
  );

  const { loading, setValueInDB, value, getValueByKey } =
    useIndexedDB<string>(excelImport);
  const { isLoading, error, startLoading, data } = useLoadExcelData(path);
  const requiredFields = useMemo(
    () =>
      value
        ? (JSON.parse(value || "{}").fields as ProductField[])
        : productKeys.filter((key) => key.required),
    [value]
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [selected, setSelected] = useState(requiredFields);
  const [forExcel, setForExcel] = useState(false);

  const handleOpenModal = useCallback(
    (existing: boolean) => {
      setIsExistingData(existing);
      onOpen();
    },
    [onOpen]
  );

  useEffect(() => {
    existingKey && getValueByKey(existingKey);
    setExistingKey("");
  }, [existingKey, getValueByKey]);

  useEffect(() => {
    setSelected(requiredFields);
  }, [requiredFields]);

  useEffect(() => {
    if (data.length) {
      setForExcel(true);
      handleOpenModal(false);
    }
  }, [data, handleOpenModal]);

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

  const saveFieldsLocal = (
    name: StoreField,
    onClose: () => void,
    oldData: string | null,
    forExcelData?: boolean
  ) => {
    console.log({ forExcelData });

    if (forExcelData) {
      let allOldFields = [];
      if (oldData) {
        if (
          JSON.parse(oldData).fields.find(
            (f: StoreField) => f.name === name.name
          )
        ) {
          console.log("name taken");
        }
        allOldFields = [name, ...JSON.parse(oldData).fields];
      } else allOldFields = [name];

      setValueInDB(JSON.stringify({ data }), name.name);
      setValueInDB(JSON.stringify({ fields: allOldFields }), allExcelData);
      updateExcelStateChange(true);
    } else {
      const fieldsToSave = selected.filter((field) =>
        selected.map((f) => f.name).includes(field.name)
      );
      let allOldFields = [];
      if (oldData) allOldFields = [name, ...JSON.parse(oldData).fields];
      else allOldFields = [name];

      setValueInDB(JSON.stringify({ fields: allOldFields }), allFields);
      setValueInDB(JSON.stringify({ fields: fieldsToSave }), name.name);
      setValueInDB(
        JSON.stringify({
          fields: [
            "name",
            "price",
            "stock",
            "active",
            "categories",
            "sku",
            "brand",
          ],
        }),
        defaultColumns
      );
    }
    onClose();
    setForExcel(false);
  };

  const importExcel = async () => {
    const newProductFields = selected.map((field) =>
      field.newName !== "" ? field.newName : field.name
    );
    startLoading(newProductFields);
  };

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
        <div className="flex flex-col gap-6">
          <StyledInput
            label="Path to Excel File (or Google Sheet Link)"
            placeholder="https://docs.google.com/spreadsheets/d/1C2vzA6FNrX91yfSmy_atUmHZ0VEIh0-4bycEYMLFyTk/edit#gid=458146508"
            isRequired
            variant="faded"
            value={path}
            onValueChange={(value) => setPath(value)}
          />
          <h2 className="text-xl font-bold ">Select Import Columns</h2>
          <div className="grid xs:grid-cols-2 grid-cols-5 gap-4">
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
                <div className="grid xs:grid-cols-2 grid-cols-4 gap-4 w-full mt-2">
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
      <ModalFooter className="xs:flex xs:flex-col-reverse">
        <Button color="danger" variant="light" onPress={onClose}>
          Cancel
        </Button>
        <Button
          isLoading={loading}
          color="primary"
          onClick={() => handleOpenModal(false)}
        >
          Save for later
        </Button>
        <Button
          color="secondary"
          variant="ghost"
          onClick={() => handleOpenModal(true)}
        >
          Load data points
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
      <StyledModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
        backdrop="blur"
        size={"sm"}
        className="search_result"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <ConditionalRenderAB
              condition={isExistingData}
              ComponentA={
                <SelectList
                  title="Select what to use"
                  onClose={onClose}
                  instantLoad
                  dbPath={allFields}
                  getData={(_data) => setExistingKey(_data)}
                />
              }
              ComponentB={
                <SaveColumnsKey
                  onClose={onClose}
                  saveFieldsLocal={saveFieldsLocal}
                  forExcel={forExcel}
                  setForExcel={setForExcel}
                />
              }
            />
          )}
        </ModalContent>
      </StyledModal>
    </>
  );
}

const SaveColumnsKey = ({
  onClose,
  saveFieldsLocal,
  forExcel,
  setForExcel,
}: {
  onClose: () => void;
  forExcel: boolean;
  setForExcel: Dispatch<SetStateAction<boolean>>;
  saveFieldsLocal: (
    name: { name: string; description: string },
    onClose: () => void,
    oldData: string | null,
    forExcelData?: boolean
  ) => void;
}) => {
  const { value } = useIndexedDB<string>(forExcel ? allExcelData : allFields);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const closeModal = () => {
    onClose();
    setForExcel(false);
  };

  return (
    <>
      <ModalHeader className="flex flex-col gap-1">
        Save for later use
      </ModalHeader>
      <Divider />
      <ModalBody>
        <div className="flex flex-col w-full py-4 gap-4">
          <StyledInput
            placeholder="my first options"
            label="Enter a name"
            isRequired
            value={name}
            onValueChange={setName}
          />
          <StyledInput
            placeholder="this is what i will always use"
            label="Enter a description"
            isRequired
            value={description}
            onValueChange={setDescription}
          />
        </div>
      </ModalBody>
      <Divider />
      <ModalFooter className="w-full">
        <div className="flex items-center justify-between w-full">
          <ConditionalRenderAB
            condition={forExcel}
            ComponentA={
              <Checkbox color="secondary">Don&apos;t ask again</Checkbox>
            }
            ComponentB={<div></div>}
          />
          <div className="flex items-center gap-3">
            <Button color="danger" variant="light" onPress={closeModal}>
              Close
            </Button>
            <Button
              color="secondary"
              isDisabled={!(name && description)}
              onPress={() =>
                saveFieldsLocal({ name, description }, onClose, value, forExcel)
              }
            >
              Save
            </Button>
          </div>
        </div>
      </ModalFooter>
    </>
  );
};
