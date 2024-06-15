import { Metadata } from "next/types";

import "../../(home)/home.css";
import StyledCardGrid from "@/src/components/_shared/swiper/StyledCardGrid";
import BackButton from "@/src/components/_shared/button/BackButton";
import ProductsGrid from "./components/ProductsGrid";
import { productGrids } from "@/src/utils/productList";

export const metadata: Metadata = {
  title: "Products categories",
};

export default function Products() {
  return (
    <section className="w-full home mb-8">
      <div className="main flex flex-col justify-center items-center">
        <div className="w-full">
          <BackButton />
          <h3 className="text-3xl font-bold my-2">Products categories</h3>
        </div>
        {productGrids.map((products, index) => (
          <ProductsGrid products={products} reverse={index % 2 === 0} />
        ))}
        <StyledCardGrid />
      </div>
    </section>
  );
}
