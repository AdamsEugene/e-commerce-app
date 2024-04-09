import { Dispatch, SetStateAction, useMemo, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Divider,
  Image,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Skeleton,
} from "@nextui-org/react";
import { IoImage } from "react-icons/io5";

import { siteConfig } from "@/src/config/site";
import useIndexedDB from "@/src/hooks/useIndexedDB";
import ConditionalRenderAB from "./ConditionalRenderAB";
import StyledImage from "./StyledImage";

const {
  stores: { excelData },
} = siteConfig;

type PROPS = {
  onClose: () => void;
  title: string;
  instantLoad?: boolean;
  dbPath?: string;
  getData?: (n: any) => void;
  data?: {
    name: string;
    description: string;
    logoSrc: string;
    ready: boolean;
  }[];
};

const SelectList = (props: PROPS) => {
  const { onClose, title, instantLoad, data, dbPath, getData } = props;
  const [selectedKey, setSelectedKey] = useState("");

  const { value } = useIndexedDB<string>(dbPath || excelData, instantLoad);

  const fieldData: PROPS["data"] = useMemo(
    () =>
      JSON.parse(value || "{}")?.fields?.map(
        (f: { name: string; description: string }) => ({
          name: f.name,
          ready: true,
          description: f.description,
          logoSrc: "",
        })
      ),
    [value]
  );

  const sendDataToParent = () => {
    getData && getData(selectedKey);
    onClose();
  };

  return (
    <>
      <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
      <Divider />
      <ModalBody>
        <div className="py-0">
          <ConditionalRenderAB
            condition={((fieldData || data)?.length || 0) > 0}
            ComponentA={(fieldData || data)?.map((method, index) =>
              method.ready ? (
                <CardItem
                  key={index}
                  data={method}
                  selectedKey={selectedKey}
                  setSelectedKey={setSelectedKey}
                />
              ) : (
                <CardItemSkeleton key={index} />
              )
            )}
            ComponentB={
              <div className="flex flex-col items-center justify-center gap-6">
                <StyledImage
                  src="/assets/svgs/voidState.svg"
                  alt="Nothing here"
                  height={340}
                  width={340}
                />
                <p className="text-lg font-semibold text-gray-600">
                  Nothing here
                </p>
              </div>
            }
          />
        </div>
      </ModalBody>
      <Divider />
      <ModalFooter>
        <Button color="danger" variant="light" onPress={onClose}>
          Close
        </Button>
        <Button color="secondary" onPress={sendDataToParent}>
          Select
        </Button>
      </ModalFooter>
    </>
  );
};

type CarDType = {
  data: {
    name: string;
    description: string;
    logoSrc: string;
  };
  selectedKey: string;
  setSelectedKey: Dispatch<SetStateAction<string>>;
};

const CardItem = ({ data, setSelectedKey, selectedKey }: CarDType) => {
  const { description, logoSrc, name } = data;

  return (
    <Card
      className="!w-full my-4 relative"
      isPressable
      onPress={() => setSelectedKey(name)}
    >
      <CardBody className="flex flex-row gap-4">
        <ConditionalRenderAB
          condition={!!logoSrc}
          ComponentA={
            <Image
              alt={name}
              height={40}
              radius="sm"
              src={logoSrc}
              width={40}
            />
          }
          ComponentB={
            <div className="w-10 h-10 flex justify-center items-center">
              <IoImage className="text-4xl" />
            </div>
          }
        />
        <div className="flex flex-col">
          <p className="text-md">{name}</p>
          <p className="text-small text-default-500">{description}</p>
        </div>
        <ConditionalRenderAB
          condition={selectedKey === name}
          ComponentA={
            <div className="h-4 w-4 rounded-full bg-secondary absolute top-2 right-2"></div>
          }
          ComponentB
        />
      </CardBody>
    </Card>
  );
};

const CardItemSkeleton = () => {
  return (
    <Card className="w-full space-y-5 p-4">
      <div className="max-w-[300px] w-full flex items-center gap-3">
        <div>
          <Skeleton className="flex rounded-full w-12 h-12" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
          <Skeleton className="h-3 w-4/5 rounded-lg" />
        </div>
      </div>
    </Card>
  );
};

export default SelectList;
