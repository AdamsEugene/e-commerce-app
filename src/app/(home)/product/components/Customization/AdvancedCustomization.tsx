import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { FaTextWidth, FaUpload } from "react-icons/fa";
import ConditionalRenderAB from "@/src/components/_shared/Conditional/ConditionalRenderAB";
import StyledFileUpload from "@/src/components/_shared/Styled/StyledFileUpload";
import StyledTextarea from "@/src/components/_shared/Styled/StyledTextarea";
import ConditionalRender from "@/src/components/_shared/Conditional/ConditionalRender";
import { campaignStatusColor, radiateStatus } from "@/src/utils/functions";

const customizationOptions = [
  {
    description:
      "Allow users to personalize with text engraving, monograms, or initials.",
    value: "text_input",
    label: "Text Input Fields",
    icon: FaTextWidth,
  },
  {
    description:
      "Enable uploading images or logos for custom printing or embroidery (if applicable).",
    value: "upload_functionality",
    label: "Upload Functionality",
    icon: FaUpload,
  },
];

export default function AdvancedCustomization() {
  const [selected, setSelected] = useState("text_input");

  return (
    <>
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-lg font-bold">Advanced Customization</h2>
          <p className="text-sm text-default-500">
            Access detailed settings and advanced features to tailor your
            product to your exact needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xs:gap-y-4 md:gap-4">
          <div className="flex flex-col gap-4">
            {customizationOptions.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.value}
                  isPressable
                  onClick={() => setSelected(item.value)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        <Icon className="text-xl" />
                        <p className="text-base font-bold">{item.label}</p>
                      </div>
                      <ConditionalRender
                        condition={selected === item.value}
                        Component={
                          <div className="flex items-center gap-2">
                            <div
                              className={`h-2 w-2 rounded-full glowing-${radiateStatus(
                                "active"
                              )}`}
                              style={{
                                background: campaignStatusColor("active"),
                              }}
                            />
                          </div>
                        }
                      />
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p className="text-sm text-default-500">
                      {item.description}
                    </p>
                  </CardBody>
                </Card>
              );
            })}
          </div>
          <div className="flex flex-col col-span-2 gap-4 md:border-l-1 border-default-300 md:pl-4 xs:border-t-1 xs:pt-4">
            <ConditionalRenderAB
              condition={selected === "text_input"}
              ComponentA={<StyledTextarea />}
              ComponentB={<StyledFileUpload handleFileUpload={() => {}} />}
            />
          </div>
        </div>
      </div>
      <ModalFooter>
        <Button color="danger">Cancel</Button>
        <Button color="secondary">Apply Customization</Button>
      </ModalFooter>
    </>
  );
}
