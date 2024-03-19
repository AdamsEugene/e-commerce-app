import { Metadata } from "next";
import ProductMetrics from "./components/ProductMetrics";
import { userMetricsData } from "@/src/utils/dashboardData";
import StyledLineChart from "./components/charts/StyledLineChart";
import GridItem from "./components/GridItem";
import StyledTable from "./components/StyledTable";
import PlacedSideBySide from "./components/PlacedSideBySide";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {userMetricsData.map((metrics, index) => (
          <ProductMetrics {...metrics} key={index} />
        ))}
      </div>
      <PlacedSideBySide
        firstComponent={
          <GridItem title="Simple Line Chart">
            <StyledLineChart />
          </GridItem>
        }
        secondComponent={
          <GridItem title="Simple Table">
            <StyledTable />
          </GridItem>
        }
      />
      <PlacedSideBySide
        isEqualSize
        reverse
        firstComponent={
          <GridItem title="Simple Line Chart">
            <StyledLineChart />
          </GridItem>
        }
        secondComponent={
          <GridItem title="Simple Table">
            <StyledTable />
          </GridItem>
        }
      />
      <PlacedSideBySide
        reverse
        firstComponent={
          <GridItem title="Simple Line Chart">
            <StyledLineChart />
          </GridItem>
        }
        secondComponent={
          <GridItem title="Simple Table">
            <StyledTable />
          </GridItem>
        }
      />
      <div className="h-16"></div>
    </div>
  );
}
