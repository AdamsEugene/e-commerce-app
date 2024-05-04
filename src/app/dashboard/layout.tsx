import { Navbar } from "@/src/components/navbar";
import Sidebar from "../../components/_shared/sideBar/Sidebar";
import StyledBreadcrumbs from "../../components/_shared/Styled/StyledBreadcrumbs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <div className="flex gap-8 flex-grow">
        <div className="w-56">
          <Sidebar />
        </div>
        <div className="home flex-grow pt-8">
          <div className="main flex flex-col gap-4 !p-0">
            <StyledBreadcrumbs />
            {children}
          </div>
        </div>
        <div className="hidden lg:block w-56"></div>
      </div>
    </div>
  );
}
