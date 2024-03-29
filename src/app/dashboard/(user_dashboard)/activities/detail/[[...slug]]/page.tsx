import GridItem from "@/src/app/dashboard/components/GridItem";
import ProductMetrics from "@/src/app/dashboard/components/ProductMetrics";
import StyledTable from "@/src/app/dashboard/components/StyledTable";
import BackButton from "@/src/components/button/BackButton";
import { activityMetricsData } from "@/src/utils/dashboardData";

export default function ItemDetails({ params }: { params: string[] }) {
  if (Object.keys(params).length === 0) {
    return (
      <div className="flex flex-col gap-4 h-full justify-center items-center w-full">
        <BackButton />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {activityMetricsData.map((metrics, index) => (
            <ProductMetrics {...metrics} key={index} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      <BackButton />
      <div className="w-full gap-4">
        <GridItem title={"name"}>
          <StyledTable />
        </GridItem>
      </div>
    </div>
  );
}
