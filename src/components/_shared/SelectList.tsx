import { useMemo } from "react";
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
import { VoidState } from "./icons";
import StyledImage from "./StyledImage";

const {
  stores: { excelData },
} = siteConfig;

type PROPS = {
  onClose: () => void;
  title: string;
  instantLoad?: boolean;
  dbPath?: string;
  data?: {
    name: string;
    description: string;
    logoSrc: string;
    ready: boolean;
  }[];
};

const SelectList = (props: PROPS) => {
  const { onClose, title, instantLoad, data, dbPath } = props;

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

  return (
    <>
      <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
      <Divider />
      <ModalBody>
        <div className="py-4">
          <ConditionalRenderAB
            condition={((fieldData || data)?.length || 0) > 0}
            ComponentA={(fieldData || data)?.map((method, index) =>
              method.ready ? (
                <CardItem key={index} {...method} />
              ) : (
                <CardItemSkeleton key={index} />
              )
            )}
            ComponentB={
              <div className="flex flex-col items-center justify-center gap-6">
                <StyledImage
                  src="/assets/svgs/voidState.svg"
                  alt="Nothing here"
                  height={400}
                  width={350}
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
        <Button color="secondary" onPress={onClose}>
          Select
        </Button>
      </ModalFooter>
    </>
  );
};

const CardItem = ({
  name,
  description,
  logoSrc,
}: {
  name: string;
  description: string;
  logoSrc: string;
}) => {
  return (
    <Card className="!w-full" isPressable>
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
