import { type Campaign } from "@/src/utils/campaignData";
import {
  budgetStatusRadiate,
  campaignStatusColor,
  getStatusColor,
  includesEndingSoon,
  radiateStatus,
} from "@/src/utils/functions";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import React from "react";
import { FaMapMarkerAlt, FaPeopleArrows } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import {
  GiClick,
  GiPayMoney,
  GiReceiveMoney,
  GiMoneyStack,
} from "react-icons/gi";
import { RxActivityLog } from "react-icons/rx";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

type PROPS = {
  campaigns: Campaign[];
  onOpen: (kind: "edit" | "view" | "delete", item: Campaign) => void;
};

export default function CampaignGrid(props: PROPS) {
  const { campaigns, onOpen } = props;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {campaigns.map((campaign) => (
        <CampaignGridItem key={campaign.id} data={campaign} onOpen={onOpen} />
      ))}
    </div>
  );
}

function CampaignGridItem({
  data,
  onOpen,
}: {
  data: Campaign;
  onOpen: (kind: "edit" | "view" | "delete", item: Campaign) => void;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between w-full">
          <p>{data.campaignName}</p>
          <div className="flex items-center gap-2">
            <div
              className={`h-2 w-2 rounded-full glowing-${radiateStatus(
                includesEndingSoon(data.status)
              )}`}
              style={{
                background: campaignStatusColor(
                  includesEndingSoon(data.status)
                ),
              }}
            />
           
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-lg font-semibold mb-2">Target Audience</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <IoBagHandle className="text-xl text-primary-500" />
                <p className="text-sm">
                  Targeting users interested in [category]
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-xl text-primary-500" />
                <p className="text-sm">Targeting users in [location]</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPeopleArrows className="text-xl text-primary-500" />
                <p className="text-sm">Targeting users in [Age range]</p>
              </div>
            </div>
          </div>
          <Divider />
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <GiMoneyStack className="text-xl text-green-500" />
              <p className="text-sm">
                Total budget: <span>${data.budget}</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <GiReceiveMoney className="text-xl text-green-500" />
              <p className="text-sm">
                Remaining: <span>${data.budget - data.spend}</span>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <RxActivityLog className="text-xl text-primary-500" />
              <p className="text-sm">
                Total Impressions: <span>{data.impressions}</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <GiClick className="text-xl text-secondary-500" />
              <p className="text-sm">
                Total Clicks: <span>{data.clicks}</span>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <GiPayMoney className="text-xl text-danger-500" />
              <p className="text-sm">
                Total Spend: <span>${data.spend}</span>
              </p>
            </div>
            <div
              className={`h-2 w-2 rounded-full glowing-${budgetStatusRadiate(
                data.budget - data.spend,
                data.budget
              )}`}
              style={{
                background: getStatusColor(
                  data.budget - data.spend,
                  data.budget
                ),
              }}
            />
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <ButtonGroup fullWidth variant="flat">
          <Button
            color="secondary"
            startContent={<FaEye className="text-lg" />}
            onClick={() => onOpen("view", data)}
          >
            View
          </Button>
          <Button
            color="warning"
            startContent={<FaEdit className="text-lg" />}
            onClick={() => onOpen("edit", data)}
          >
            Edit
          </Button>
          <Button
            color="danger"
            startContent={<MdDelete className="text-lg" />}
            onClick={() => onOpen("delete", data)}
          >
            Delete
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
