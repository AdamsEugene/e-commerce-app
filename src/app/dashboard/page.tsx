import { Metadata } from "next";
import ProductMetrics from "../../components/ProductMetrics";
import { userMetricsData } from "@/src/utils/dashboardData";
import StyledLineChart from "../../components/_shared/charts/StyledLineChart";
import GridItem from "../../components/GridItem";
import StyledTable from "../../components/_shared/Styled/StyledTable";
import PlacedSideBySide from "../../components/_shared/PlacedSideBySide";
import { Chip } from "@nextui-org/react";
import { IoCheckmarkCircle } from "react-icons/io5";
import {
  chartData,
  filterNameAndUV,
  filterNameUVandPV,
} from "@/src/utils/generateDataForSelect";
import ConditionalRenderAB from "@/src/components/_shared/Conditional/ConditionalRenderAB";

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
            className="min-h-[400px]"
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
            <ConditionalRenderAB
              condition={false}
              ComponentA={<StyledTable columns={[]} data={[]} />}
              ComponentB={<div>no data</div>}
            />
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
            <StyledLineChart data={filterNameAndUV(chartData)} />
          </GridItem>
        }
        secondComponent={
          <GridItem
            title="Simple Table"
            className="min-h-[400px]"
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
            <ConditionalRenderAB
              condition={false}
              ComponentA={<StyledTable columns={[]} data={[]} />}
              ComponentB={<div>no data</div>}
            />
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
            <StyledLineChart data={filterNameAndUV(chartData)} />
          </GridItem>
        }
        secondComponent={
          <GridItem
            title="Simple Table"
            className="min-h-[400px]"
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
            <ConditionalRenderAB
              condition={false}
              ComponentA={<StyledTable columns={[]} data={[]} />}
              ComponentB={<div>no data</div>}
            />
          </GridItem>
        }
      />
      <div className="h-16"></div>
    </div>
  );
}
