import { userMetricsData } from "@/src/utils/dashboardData";
import ProductMetrics from "../../components/ProductMetrics";
import StyledTable from "../../components/StyledTable";
import GridItem from "../../components/GridItem";

export default function ItemDetails({ params }: { params: string[] }) {
  if (Object.keys(params).length === 0) {
    return (
      <div className="flex flex-col gap-4 h-full justify-center items-center w-full">
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
      <div className="w-full gap-4">
        <GridItem title={'name'}>
          <StyledTable />
        </GridItem>
      </div>
    </div>
  );
}
