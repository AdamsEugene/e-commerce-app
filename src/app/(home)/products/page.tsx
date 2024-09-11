import { Metadata } from "next/types";

import "../../(home)/home.css";
import StyledCardGrid from "@/src/components/_shared/swiper/StyledCardGrid";
import BackButton from "@/src/components/_shared/button/BackButton";
import ProductsGrid from "./components/ProductsGrid";
import { productGrids } from "@/src/utils/formatProducts";
import { apiGet } from "@/src/api/apiCalles";
import { TFetchedProduct } from "@/src/types";

export const metadata: Metadata = {
  title: "Products categories",
};

export default async function Products() {
  const products = await apiGet<TFetchedProduct>("products");
  return (
    <section className="w-full home mb-8">
      <div className="main flex flex-col justify-center items-center">
        <div className="w-full">
          <BackButton />
          <h3 className="text-3xl font-bold my-2">Products categories</h3>
        </div>
        {productGrids(products.products).map((products, index) => (
          <div className="mx-auto flex flex-col justify-center items-center gap-4">
            <ProductsGrid products={products} reverse={index % 2 === 0} />
            <StyledCardGrid munPerRow={5} />
          </div>
        ))}
      </div>
    </section>
  );
}
