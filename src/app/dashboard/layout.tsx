import { Navbar } from "@/src/components/navbar";
import Sidebar from "./components/Sidebar";
import { userDashboardLinks } from "@/src/utils/dashboardLinks";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col">
      <Navbar />
      <div className="flex gap-8">
        <div className="w-56">
          <Sidebar />
        </div>
        <div className="flex-grow">{children}</div>
        <div className="w-56"></div>
      </div>
    </div>
  );
}
