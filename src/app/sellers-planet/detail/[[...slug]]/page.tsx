import { userMetricsData } from "@/src/utils/dashboardData";
import ProductMetrics from "../../../../components/ProductMetrics";
import GridItem from "../../../../components/GridItem";
import StyledTable from "../../../../components/_shared/StyledTable";
import BackButton from "@/src/components/_shared/button/BackButton";
import ConditionalRenderAB from "@/src/components/_shared/Conditional/ConditionalRenderAB";

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
            condition={false}
            ComponentA={<StyledTable columns={[]} data={[]} />}
            ComponentB={<div>no data</div>}
          />
        </GridItem>
      </div>
    </div>
  );
}
