import ShowSecondNav from "@/src/components/_shared/Conditional/ShowSecondNav";
import StyledBreadcrumbs from "@/src/components/_shared/Styled/StyledBreadcrumbs";
import { Navbar } from "@/src/components/others/navbar";
import Sidebar from "@/src/components/_shared/sideBar/Sidebar";
import { fetchProducts } from "@/src/api/apiCalles";
import { getUserById } from "@/src/api/userApis";
import { getCartByUser } from "@/src/api/cartApis";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, carts] = await Promise.all([
    getUserById("10"),
    getCartByUser("10"),
  ]);

  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar user={user} carts={carts} />
      <div className="flex gap-8 flex-grow">
        <div className="w-56 xs:absolute xs:z-50 xs:bg-default-50 xs:hidden">
          <Sidebar />
        </div>
        <div className="home flex-grow pt-8">
          <div className="main flex flex-col gap-4 !p-0 xs:!px-4">
            <StyledBreadcrumbs />
            {children}
          </div>
        </div>
        <div className="xs:hidden">
          <ShowSecondNav />
        </div>
      </div>
    </div>
  );
}
