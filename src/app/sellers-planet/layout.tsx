import ShowSecondNav from "@/src/components/_shared/Conditional/ShowSecondNav";
import StyledBreadcrumbs from "@/src/components/_shared/StyledBreadcrumbs";
import { Navbar } from "@/src/components/navbar";
import Sidebar from "@/src/components/sideBar/Sidebar";

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
        <ShowSecondNav />
      </div>
    </div>
  );
}
