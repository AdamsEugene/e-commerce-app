import { Metadata } from "next";
import { Chip } from "@nextui-org/react";
import { IoCheckmarkCircle } from "react-icons/io5";
import ProductMetrics from "@/src/components/ProductMetrics";
import { userMetricsData } from "@/src/utils/dashboardData";
import PlacedSideBySide from "@/src/components/PlacedSideBySide";
import GridItem from "@/src/components/GridItem";
import StyledLineChart from "@/src/components/charts/StyledLineChart";
import StyledTable from "@/src/components/StyledTable";
import { chartData, filterNameUVandPV } from "@/src/utils/generateDataForSelect";

export const metadata: Metadata = {
  title: "Analytics",
};

export default function Analytics() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {userMetricsData.map((metrics, index) => (
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
            <StyledLineChart data={filterNameUVandPV(chartData)} />
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
      />
      <PlacedSideBySide
        isEqualSize
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
            <StyledLineChart data={filterNameUVandPV(chartData)} />
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
            <StyledLineChart data={filterNameUVandPV(chartData)} />
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
      />
      <div className="h-16"></div>
    </div>
  );
}
