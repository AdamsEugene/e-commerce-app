"use client";

import {
  type TargetAudienceIcon,
  audienceData,
} from "@/src/utils/targetAudienceData";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import ConditionalRender from "../Conditional/ConditionalRender";
import { Fragment, useMemo, useState } from "react";
import StyledInput from "../Styled/StyledInput";
import StyledAutocomplete from "../Styled/StyledAutocomplete";
import MapComponent from "../map/MapComponent";

type PROPS<T> = {
  onClose: () => void;
};

export default function CreateAudience<T>(props: PROPS<T>) {
  const { onClose } = props;
  const [selectedAudience, setSelectedAudience] = useState(audienceData[0]);
  const [selection, setSelection] = useState<TargetAudienceIcon[]>([
    audienceData[0],
  ]);

  const handleAddToSelection = (label: TargetAudienceIcon) => {
    if (!selection) {
      setSelection([label]);
    } else {
      if (selection.includes(label)) {
        const updatedSelection = selection.filter((item) => item !== label);
        setSelection(updatedSelection);
      } else {
        if (selection.length < 3) {
          setSelection([...selection, label]);
        }
      }
    }
  };

  const handleSelect = (audience: TargetAudienceIcon) => {
    handleAddToSelection(audience);
    setSelectedAudience(audience);
  };

  return (
    <>
      <ModalHeader>
        <div className="flex items-center gap-3">
          <FaPeopleGroup className="text-2xl" />
          <p className="text-lg font-bold">Reach Your Ideal Customers</p>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div
            className="overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 278px)" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 p-4">
              {audienceData.map((audience) => (
                <Card
                  key={audience.label}
                  isPressable
                  onPress={() => handleSelect(audience)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        {audience.icon}
                        <p>{audience.label}</p>
                      </div>
                      <ConditionalRender
                        condition={!!selection?.includes(audience)}
                        Component={<FaCheck className="text-success-500" />}
                      />
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p>{audience.description}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
          <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-2 xl:grid-rows-2 gap-4">
            <div className="flex flex-col gap-2">
              <p>Advance settings</p>
              <div className="bg-secondary-50 rounded-sm w-full flex items-center gap-4 flex-wrap p-4 h-30">
                {selection?.map((select, index) => (
                  <Fragment key={select.value}>
                    <Card
                      isPressable
                      onPress={() => setSelectedAudience(select)}
                    >
                      <div className="w-[100px] h-20 flex items-center justify-center text-center p-1">
                        <p>{select.label}</p>
                      </div>
                    </Card>
                    {selection.length > 0 && index < selection.length - 1 && (
                      <Aggregator />
                    )}
                  </Fragment>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {selectedAudience.icon}
                <p>{selectedAudience.label}</p>
              </div>
              <div className="max-h-72">
                <StyledAutocomplete items={animals} />
                <MapComponent />
              </div>
            </div>
            <div className="h-full">
              <div className="flex flex-col gap-2 h-full justify-between">
                <div className="flex flex-col gap-3">
                  <p>output</p>
                  <div className="">e</div>
                </div>
                <div className="flex flex-col gap-3">
                  <StyledInput placeholder="Performance booster" />
                  <StyledInput placeholder="Add a description" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <div className="flex items-center gap-4">
          <Button color="danger" onClick={onClose}>
            Cancel
          </Button>
          <Button color="secondary">Submit & Proceed</Button>
        </div>
      </ModalFooter>
    </>
  );
}

function Aggregator() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["or"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          color="danger"
          variant="solid"
          className="uppercase"
          radius="full"
          isIconOnly
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys as any}
      >
        <DropdownItem key="or">OR</DropdownItem>
        <DropdownItem key="and">AND</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

const animals = [
  {
    label: "Cat",
    value: "cat",
    description: "The second most popular pet in the world",
  },
  {
    label: "Dog",
    value: "dog",
    description: "The most popular pet in the world",
  },
  {
    label: "Elephant",
    value: "elephant",
    description: "The largest land animal",
  },
  { label: "Lion", value: "lion", description: "The king of the jungle" },
  { label: "Tiger", value: "tiger", description: "The largest cat species" },
  {
    label: "Giraffe",
    value: "giraffe",
    description: "The tallest land animal",
  },
  {
    label: "Dolphin",
    value: "dolphin",
    description: "A widely distributed and diverse group of aquatic mammals",
  },
];
