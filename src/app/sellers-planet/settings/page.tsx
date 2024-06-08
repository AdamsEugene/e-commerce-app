import { Metadata } from "next";
import SettingsView from "./_SettingsView";
import ProductMetrics from "@/src/components/others/ProductMetrics";
import { settingStuff } from "@/src/utils/dashboardData";

export const metadata: Metadata = {
  title: "Settings",
};

export default function Settings() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {settingStuff.map((metrics, index) => (
          <ProductMetrics {...metrics} key={index} />
        ))}
      </div>
      <SettingsView />
      <div className="h-16"></div>
    </div>
  );
}
