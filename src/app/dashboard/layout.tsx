import { Navbar } from "@/src/components/navbar";
import Sidebar from "./components/Sidebar";
import { userDashboardLinks } from "@/src/utils/dashboardLinks";
import StyledBreadcrumbs from "./components/StyledBreadcrumbs";

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
        <div className="home flex-grow pt-8">
          <div className="main flex flex-col gap-4 !p-0">
            <StyledBreadcrumbs />
            {children}
          </div>
        </div>
        <div className="hidden md:hidden lg:block w-56"></div>
      </div>
    </div>
  );
}
