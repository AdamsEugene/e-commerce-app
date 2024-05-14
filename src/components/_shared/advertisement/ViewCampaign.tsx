"use client";

import { useMemo, useState } from "react";
import {
  GiClick,
  GiMoneyStack,
  GiPayMoney,
  GiReceiveMoney,
} from "react-icons/gi";
import { RxActivityLog } from "react-icons/rx";
import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Tooltip,
  Progress,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { FaEdit, FaEye } from "react-icons/fa";
import { IoBagHandle, IoOpen, IoAdd } from "react-icons/io5";
import ConditionalRenderAB from "../Conditional/ConditionalRenderAB";
import { MicsState } from "@/src/store/micsSlice";
import ContentEditable from "../Styled/ContentEditable";
import { CampaignType } from "@/src/utils/campaignData";
import PlacedSideBySide from "@/src/components/_shared/PlacedSideBySide";
import {
  budgetStatusRadiate,
  campaignStatusColor,
  getStatusColor,
  includesEndingSoon,
  radiateStatus,
} from "@/src/utils/functions";
import GridItem from "../../GridItem";
import StyledPieChart from "../charts/StyledPieChart";
import StyledLineChart from "../charts/StyledLineChart";
import StyledBarChart from "../charts/StyledBarCharts";
import { IconWrapper } from "../IconWrapper";
import StyledImage from "../Styled/StyledImage";
import imageByIndex from "@/src/utils/imageByIndex";

type Kind = "edit" | "view" | "delete";

type PROPS = {
  onClose: () => void;
  kind: Kind | MicsState["modalFor"];
  item?: CampaignType;
};

const getRandomValue = () => Math.floor(Math.random() * 500) + 1;

export default function ViewCampaign(props: PROPS) {
  const { kind, onClose, item } = props;
  const [chartTitle, setChartTitle] = useState(item?.targetAudience[0]);
  const [useActivity, setUserActivity] = useState<"impression" | "click">(
    "impression"
  );

  const chartData = useMemo(
    () =>
      item?.targetAudience.map((au) => ({
        name: au,
        value: getRandomValue(),
      })),
    [item?.targetAudience]
  );

  // console.log(item);

  return (
    <>
      <ModalHeader>
        <div className="flex items-center justify-between gap-3 w-full">
          <div className="flex items-center gap-3 w-[calc(100%-50px)]">
            <ConditionalRenderAB
              condition={kind === "view"}
              ComponentA={<FaEye className="text-2xl" />}
              ComponentB={<FaEdit className="text-2xl" />}
            />
            <ContentEditable
              className="w-full focus:outline focus:outline-secondary-500 hover:outline hover:outline-1 hover:outline-secondary-500"
              disabled={kind === "view"}
              html={`<p className="text-lg font-bold w-full">${item?.campaignName}</p>`}
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
                <div className="flex flex-col gap-4">
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
                <div className="h-[220px]">
                  <StyledPieChart data={chartData || data} />
                </div>
              </GridItem>
            }
            thirdComponent={
              <GridItem title={"Associated Ads"}>
                <div className="h-[220px] flex flex-col gap-3">
                  <Listbox
                    aria-label="Ads list"
                    className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-none rounded-none"
                    itemClasses={{
                      base: "px-3 first:rounded-t-none last:rounded-b-none rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
                    }}
                  >
                    <ListboxItem
                      key="home"
                      href="/home"
                      endContent={<IoOpen />}
                      startContent={
                        <div className="!h-[40px]">
                          <StyledImage
                            className="!h-[40px]"
                            src={imageByIndex(13)}
                            height={40}
                            width={40}
                          />
                        </div>
                      }
                    >
                      Home
                    </ListboxItem>
                    <ListboxItem
                      key="about"
                      href="/about"
                      endContent={<IoOpen />}
                      startContent={
                        <div className="!h-[40px]">
                          <StyledImage
                            className="!h-[40px]"
                            src={imageByIndex(8)}
                            height={40}
                            width={40}
                          />
                        </div>
                      }
                    >
                      About
                    </ListboxItem>
                  </Listbox>
                </div>
              </GridItem>
            }
          />
          <PlacedSideBySide
            isEqualSize
            firstComponent={
              <GridItem
                title="Budget"
                leftSideComponent={[
                  <Tooltip
                    key={item?.budget}
                    showArrow={true}
                    content={item?.spend}
                  >
                    <div
                      className={`h-2 w-2 rounded-full glowing-${budgetStatusRadiate(
                        (item?.budget || 0) - (item?.spend || 0),
                        item?.budget || 0
                      )}`}
                      style={{
                        background: getStatusColor(
                          (item?.budget || 0) - (item?.spend || 0),
                          item?.budget || 0
                        ),
                      }}
                    />
                  </Tooltip>,
                ]}
              >
                <div className="flex flex-col h-full justify-between">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 cursor-pointer">
                      <GiMoneyStack className="text-xl text-green-500" />
                      <p className="text-sm">
                        Total budget: <span>${item?.budget || 0}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-3 cursor-pointer">
                      <GiReceiveMoney className="text-xl text-green-500" />
                      <p className="text-sm">
                        Remaining:{" "}
                        <span>${(item?.budget || 0) - (item?.spend || 0)}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-3 cursor-pointer">
                      <GiPayMoney className="text-xl text-danger-500" />
                      <p className="text-sm">
                        Total Spend: <span>${item?.spend || 0}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-full">
                      <Progress
                        value={item?.spend}
                        maxValue={item?.budget}
                        classNames={{
                          base: "max-w-md",
                          track: "drop-shadow-md border border-default",
                          indicator:
                            "bg-gradient-to-r from-pink-500 to-yellow-500",
                          label: "tracking-wider font-medium text-default-600",
                          value: "text-foreground/60",
                        }}
                        size="sm"
                      />
                      <div className="flex justify-between text-sm">
                        <p>Spent: ${item?.spend}</p>
                        <p>
                          Remaining: ${(item?.budget || 0) - (item?.spend || 0)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </GridItem>
            }
            secondComponent={
              <GridItem title={"Spending Chart"}>
                <div className="h-[220px]">
                  <StyledLineChart data={dailyData} color="#F14281" />
                </div>
              </GridItem>
            }
          />
          <PlacedSideBySide
            oneThird={useActivity === "click"}
            firstComponent={
              <GridItem title="Impressions">
                <div className="flex flex-col gap-4">
                  <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => setUserActivity("impression")}
                  >
                    <RxActivityLog className="text-xl text-primary-500" />
                    <p className="text-sm">
                      Total Impressions: <span>{item?.impressions}</span>
                    </p>
                  </div>
                  <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => setUserActivity("click")}
                  >
                    <GiClick className="text-xl text-secondary-500" />
                    <p className="text-sm">
                      Total Clicks: <span>{item?.clicks}</span>
                    </p>
                  </div>
                </div>
              </GridItem>
            }
            secondComponent={
              <GridItem title={"Hourly " + useActivity}>
                <div className="h-[200px]">
                  <ConditionalRenderAB
                    condition={useActivity === "click"}
                    ComponentA={<StyledBarChart />}
                    ComponentB={<StyledLineChart data={hourlyData} />}
                  />
                </div>
              </GridItem>
            }
            thirdComponent={
              <GridItem title={"Daily " + useActivity}>
                <div className="h-[200px]">
                  <StyledLineChart data={dailyData} />
                </div>
              </GridItem>
            }
          />
        </div>
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

const data = [{ name: "Group A", value: 400 }];

const dailyData = [
  { name: "Mon", uv: 100 },
  { name: "Tue", uv: 1500 },
  { name: "Wed", uv: 2000 },
  { name: "Thu", uv: 1800 },
  { name: "Fri", uv: 1200 },
  { name: "Sat", uv: 2200 },
  { name: "Sun", uv: 2500 },
];

const hourlyData = [
  { name: "00:00", pv: 10 },
  { name: "01:00", pv: 150 },
  { name: "02:00", pv: 200 },
  { name: "03:00", pv: 180 },
  { name: "04:00", pv: 300 },
  { name: "05:00", pv: 400 },
  { name: "06:00", pv: 500 },
  { name: "07:00", pv: 700 },
  { name: "08:00", pv: 600 },
  { name: "09:00", pv: 900 },
  { name: "10:00", pv: 1000 },
  { name: "11:00", pv: 1100 },
  { name: "12:00", pv: 1200 },
  { name: "13:00", pv: 1300 },
  { name: "14:00", pv: 1400 },
  { name: "15:00", pv: 1500 },
  { name: "16:00", pv: 1600 },
  { name: "17:00", pv: 1700 },
  { name: "18:00", pv: 1800 },
  { name: "19:00", pv: 1900 },
  { name: "20:00", pv: 2000 },
  { name: "21:00", pv: 2100 },
  { name: "22:00", pv: 2200 },
  { name: "23:00", pv: 2300 },
];
