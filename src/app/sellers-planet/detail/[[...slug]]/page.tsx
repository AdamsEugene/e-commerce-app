import { userMetricsData } from "@/src/utils/dashboardData";
import ProductMetrics from "../../../../components/others/ProductMetrics";
import GridItem from "@/src/components/others/GridItem";
import StyledTable from "../../../../components/_shared/Styled/StyledTable";
import BackButton from "@/src/components/_shared/button/BackButton";
import ConditionalRenderAB from "@/src/components/_shared/Conditional/ConditionalRenderAB";
import { adCreativeData } from "@/src/utils/adsData";

const adsColumns = [
  { name: "id", uid: "id" },
  { name: "type", uid: "type" },
  { name: "callToAction", uid: "callToAction" },
  { name: "actions", uid: "actions" },
];

type Column = { name: string; uid: string };

const transformColumns = (columns: Column[]): Column[] => {
  return columns.map((c) => ({ ...c, name: c.name.toUpperCase() }));
};

export default function ItemDetails({ params }: { params: string[] }) {
  if (Object.keys(params).length === 0) {
    return (
      <div className="flex flex-col gap-4 h-full justify-center items-center w-full">
        <BackButton />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {userMetricsData.map((metrics, index) => (
            <ProductMetrics {...metrics} key={index} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      <BackButton />
      <div className="w-full gap-4 min-h-[400px]">
        <GridItem title={"name"}>
          <ConditionalRenderAB
            condition={!!adCreativeData.length}
            ComponentA={
              <StyledTable
                // isHeaderSticky
                color="default"
                // selectionMode="multiple"
                aria-label="Campaigns collection table"
                columns={transformColumns(adsColumns)}
                data={adCreativeData.slice(0, 6)}
                // onRowAction={(key) => {}}
                // actionClick={handleCampaignClick}
              />
            }
            ComponentB={<div>no data</div>}
          />
        </GridItem>
      </div>
    </div>
  );
}
