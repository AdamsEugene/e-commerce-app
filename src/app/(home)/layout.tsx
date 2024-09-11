// Home

import { Navbar } from "@/src/components/others/navbar";

import MainFooter from "@/src/components/others/MainFooter";
import StyledPagination from "@/src/components/_shared/Styled/StyledPagination";
import { siteConfig } from "@/src/config/site";
import { fetchProducts } from "@/src/api/apiCalles";
import GalleryComponent from "./_GalleryComponent";
import { getUserById } from "@/src/api/userApis";
import { getCartByUser } from "@/src/api/cartApis";

interface LayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: LayoutProps) {
  const ITEM_PER_PAGE = siteConfig.meta.ITEM_PER_PAGE;

  const [productData, user, carts] = await Promise.all([
    fetchProducts(),
    getUserById("10"),
    getCartByUser("10"),
  ]);

  const { total, products } = productData;

  return (
    <>
      <Navbar user={user} carts={carts} />
      <GalleryComponent products={products} total={total} />
      <main className="w-full mx-auto">{children}</main>
      <StyledPagination total={Math.ceil(total / ITEM_PER_PAGE)} page={1} />
      <MainFooter />
    </>
  );
}
