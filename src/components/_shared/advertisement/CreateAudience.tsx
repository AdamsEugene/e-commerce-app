"use client";

import { audienceData } from "@/src/utils/targetAudienceData";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import ConditionalRender from "../Conditional/ConditionalRender";
import { useState } from "react";

type PROPS<T> = {
  onClose: () => void;
};

export default function CreateAudience<T>(props: PROPS<T>) {
  const { onClose } = props;
  const [selectedAudience, setSelectedAudience] = useState(audienceData[0]);

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
                  onPress={() => setSelectedAudience(audience)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        {audience.icon}
                        <p>{audience.label}</p>
                      </div>
                      <ConditionalRender
                        condition
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
              <div className="bg-secondary-50 rounded-sm w-full h-full"></div>
            </div>
            <div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  {selectedAudience.icon}
                  <p>{selectedAudience.label}</p>
                </div>
                <div className=""></div>
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
