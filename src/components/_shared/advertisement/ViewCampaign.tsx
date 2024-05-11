"use client";

import { MicsState } from "@/src/store/micsSlice";
import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Tooltip,
} from "@nextui-org/react";
import { FaEdit, FaEye } from "react-icons/fa";
import ConditionalRenderAB from "../Conditional/ConditionalRenderAB";
import ContentEditable from "../Styled/ContentEditable";
import { CampaignType } from "@/src/utils/campaignData";
import Campaign from "./Campaign";
import PlacedSideBySide from "@/src/components/_shared/PlacedSideBySide";
import {
  campaignStatusColor,
  includesEndingSoon,
  radiateStatus,
} from "@/src/utils/functions";
import GridItem from "../../GridItem";
import { IoBagHandle } from "react-icons/io5";
import StyledPieChart from "../charts/StyledPieChart";
import { useState } from "react";

type Kind = "edit" | "view" | "delete";

type PROPS = {
  onClose: () => void;
  kind: Kind | MicsState["modalFor"];
  item?: CampaignType;
};

export default function ViewCampaign(props: PROPS) {
  const { kind, onClose, item } = props;
  const [chartTitle, setChartTitle] = useState(item?.targetAudience[0]);

  // console.log(item);

  return (
    <>
      <ModalHeader>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <ConditionalRenderAB
              condition={kind === "view"}
              ComponentA={<FaEye className="text-2xl" />}
              ComponentB={<FaEdit className="text-2xl" />}
            />
            <ContentEditable
              disabled={kind === "view"}
              html={`<p className="text-lg font-bold">
            ${item?.campaignName}
          </p>`}
            />
          </div>
          <Tooltip showArrow={true} content={item?.status}>
            <div
              className={`h-4 w-4 mr-6 rounded-full glowing-${radiateStatus(
                includesEndingSoon(item?.status)
              )}`}
              style={{
                background: campaignStatusColor(
                  includesEndingSoon(item?.status)
                ),
              }}
            />
          </Tooltip>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="flex flex-col gap-4">
          <PlacedSideBySide
            isEqualSize
            firstComponent={
              <GridItem title="Target Audience">
                <div className="flex flex-col gap-2">
                  {item?.targetAudience.map((target) => (
                    <div
                      key={target}
                      className="flex items-center gap-3 cursor-pointer"
                      onClick={() => setChartTitle(target)}
                    >
                      <IoBagHandle className="text-xl text-primary-500" />
                      <p className="text-sm">{target}</p>
                    </div>
                  ))}
                </div>
              </GridItem>
            }
            secondComponent={
              <GridItem title={chartTitle}>
                <div className="h-[300px]">
                  <StyledPieChart />
                </div>
              </GridItem>
            }
          />
        </div>
        <Campaign />
      </ModalBody>
      <ModalFooter>
        <div className="flex items-center gap-4">
          <Button color="danger" onClick={onClose}>
            Cancel
          </Button>
          <Button color="primary">Save as Draft</Button>
          <Button color="secondary">Review & Submit</Button>
        </div>
      </ModalFooter>
    </>
  );
}
