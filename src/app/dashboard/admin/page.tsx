import { Metadata } from "next";
import ProductMetrics from "../components/ProductMetrics";
import { adminDashboardMetrics } from "@/src/utils/dashboardData";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {adminDashboardMetrics.slice(0, 4).map((metrics, index) => (
          <ProductMetrics {...metrics} key={index} />
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {adminDashboardMetrics.slice(4, 8).map((metrics, index) => (
          <ProductMetrics {...metrics} key={index} />
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {adminDashboardMetrics.slice(8).map((metrics, index) => (
          <ProductMetrics {...metrics} key={index} />
        ))}
      </div>
    </div>
  );
}
