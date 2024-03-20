import { Metadata } from "next";
import ProductMetrics from "../../components/ProductMetrics";
import { activityMetricsData } from "@/src/utils/dashboardData";

export const metadata: Metadata = {
  title: "Activities",
};

export default function Activities() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {activityMetricsData.map((metrics, index) => (
          <ProductMetrics {...metrics} key={index} />
        ))}
      </div>
    </div>
  );
}
