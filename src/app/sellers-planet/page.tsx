import { Metadata } from "next";
import { Chip } from "@nextui-org/react";
import { IoCheckmarkCircle } from "react-icons/io5";
import ProductMetrics from "@/src/components/others/ProductMetrics";
import { adminDashboardMetrics } from "@/src/utils/dashboardData";
import PlacedSideBySide from "@/src/components/_shared/others/PlacedSideBySide";
import GridItem from "@/src/components/others/GridItem";
import StyledLineChart from "@/src/components/_shared/charts/StyledLineChart";
import StyledTable from "@/src/components/_shared/Styled/StyledTable";
import StyledAreaChart from "@/src/components/_shared/charts/StyledAreaChart";
import {
  chartData,
  filterNameUVandPV,
} from "@/src/utils/generateDataForSelect";
import ConditionalRenderAB from "@/src/components/_shared/Conditional/ConditionalRenderAB";
import { adCreativeData } from "@/src/utils/adsData";

export const metadata: Metadata = {
  title: "Sellers Planet",
};

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

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {adminDashboardMetrics.slice(0, 4).map((metrics, index) => (
          <ProductMetrics {...metrics} key={index} />
        ))}
      </div>
      <PlacedSideBySide
        firstComponent={
          <GridItem
            title="Simple Line Chart"
            className="min-h-[476px] h-full"
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
            title="Metrics"
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
            title="Table"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
        }
        secondComponent={
          <GridItem
            className="min-h-[400px]"
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
