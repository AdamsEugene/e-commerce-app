import { useMemo, useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Pagination,
} from "@nextui-org/react";
import { IoBagHandle } from "react-icons/io5";
import {
  GiClick,
  GiPayMoney,
  GiReceiveMoney,
  GiMoneyStack,
} from "react-icons/gi";
import { RxActivityLog } from "react-icons/rx";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ConditionalRender from "../Conditional/ConditionalRender";
import { type CampaignType } from "@/src/utils/campaignData";
import {
  budgetStatusRadiate,
  campaignStatusColor,
  getStatusColor,
  includesEndingSoon,
  radiateStatus,
} from "@/src/utils/functions";

type PROPS = {
  campaigns: CampaignType[];
  onOpen: (kind: "edit" | "view" | "delete", item: CampaignType) => void;
};

export default function CampaignGrid(props: PROPS) {
  const { campaigns, onOpen } = props;

  const [page, setPage] = useState(1);
  const rowsPerPage = 6;

  const pages = Math.ceil(campaigns.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return campaigns.slice(start, end);
  }, [page, campaigns]);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {items.map((campaign) => (
          <CampaignGridItem key={campaign.id} data={campaign} onOpen={onOpen} />
        ))}
      </div>
      <div className="flex w-full justify-between items-center">
        <div></div>
        <ConditionalRender
          condition={campaigns.length >= rowsPerPage}
          Component={
            <Pagination
              isCompact
              showControls
              // showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          }
        />
      </div>
    </div>
  );
}

function CampaignGridItem({
  data,
  onOpen,
}: {
  data: CampaignType;
  onOpen: (kind: "edit" | "view" | "delete", item: CampaignType) => void;
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
        <div className="flex flex-col gap-3 justify-between h-full">
          <div>
            <p className="text-lg font-semibold mb-2">Target Audience</p>
            <div className="flex flex-col gap-2">
              {data.targetAudience.map((target) => (
                <div key={target} className="flex items-center gap-3">
                  <IoBagHandle className="text-xl text-primary-500" />
                  <p className="text-sm">{target}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
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
