import { Metadata } from "next";
import { Chip } from "@nextui-org/react";
import { IoCheckmarkCircle } from "react-icons/io5";
import ProductMetrics from "../dashboard/components/ProductMetrics";
import { adminDashboardMetrics } from "@/src/utils/dashboardData";
import PlacedSideBySide from "../dashboard/components/PlacedSideBySide";
import GridItem from "../dashboard/components/GridItem";
import StyledLineChart from "../dashboard/components/charts/StyledLineChart";
import StyledTable from "../dashboard/components/StyledTable";
import StyledAreaChart from "../dashboard/components/charts/StyledAreaChart";

export const metadata: Metadata = {
  title: "Sellers Planet",
};

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {adminDashboardMetrics.slice(0, 4).map((metrics, index) => (
          <ProductMetrics {...metrics} key={index} />
        ))}
      </div>
      <PlacedSideBySide
        firstComponent={
          <GridItem
            title="Simple Line Chart"
            leftSideComponent={[
              <Chip
                key={"check"}
                startContent={<IoCheckmarkCircle />}
                variant="faded"
                color="warning"
              >
                Chip
              </Chip>,
              <Chip
                key={"check"}
                startContent={<IoCheckmarkCircle />}
                variant="faded"
                color="success"
              >
                Chip
              </Chip>,
            ]}
          >
            <StyledLineChart />
          </GridItem>
        }
        secondComponent={
          <GridItem
            title="Simple Table"
            leftSideComponent={[
              <Chip
                key={"check"}
                startContent={<IoCheckmarkCircle />}
                variant="faded"
                color="warning"
              >
                Chip
              </Chip>,
            ]}
          >
            <div className="grid grid-cols-1 gap-4">
              {adminDashboardMetrics.slice(4, 8).map((metrics, index) => (
                <ProductMetrics {...metrics} key={index} />
              ))}
            </div>
          </GridItem>
        }
      />
      <PlacedSideBySide
        reverse
        firstComponent={
          <GridItem
            title="Simple Line Chart"
            leftSideComponent={[
              <Chip
                key={"check"}
                startContent={<IoCheckmarkCircle />}
                variant="faded"
                color="warning"
              >
                Chip
              </Chip>,
              <Chip
                key={"check"}
                startContent={<IoCheckmarkCircle />}
                variant="faded"
                color="success"
              >
                Chip
              </Chip>,
            ]}
          >
            <StyledTable />
          </GridItem>
        }
        secondComponent={
          <GridItem
            title="Simple Table"
            leftSideComponent={[
              <Chip
                key={"check"}
                startContent={<IoCheckmarkCircle />}
                variant="faded"
                color="warning"
              >
                Chip
              </Chip>,
            ]}
          >
            <div className="grid grid-cols-2 gap-4">
              {adminDashboardMetrics.slice(2).map((metrics, index) => (
                <ProductMetrics {...metrics} key={index} />
              ))}
            </div>
          </GridItem>
        }
      />
      <PlacedSideBySide
        reverse
        isEqualSize
        firstComponent={
          <GridItem
            title="Simple Line Chart"
            leftSideComponent={[
              <Chip
                key={"check"}
                startContent={<IoCheckmarkCircle />}
                variant="faded"
                color="warning"
              >
                Chip
              </Chip>,
              <Chip
                key={"check"}
                startContent={<IoCheckmarkCircle />}
                variant="faded"
                color="success"
              >
                Chip
              </Chip>,
            ]}
          >
            <StyledTable />
          </GridItem>
        }
        secondComponent={
          <GridItem
            title="Simple Table"
            leftSideComponent={[
              <Chip
                key={"check"}
                startContent={<IoCheckmarkCircle />}
                variant="faded"
                color="warning"
              >
                Chip
              </Chip>,
            ]}
          >
            <StyledAreaChart />
          </GridItem>
        }
      />
      <div className="h-16"></div>
    </div>
  );
}
