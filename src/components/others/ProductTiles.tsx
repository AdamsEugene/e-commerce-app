import ProductsGrid from "@/src/app/(home)/products/components/ProductsGrid";
import React, { Fragment } from "react";
import GridCard from "../_shared/others/GridCard";
import BannerAdsDisplay from "../_shared/advertisement/BannerAdsDisplay";
// import { homeProductList } from "@/src/utils/productList";
import ConditionalRender from "../_shared/Conditional/ConditionalRender";
import { homeProductList } from "@/src/utils/formatProducts";
import { apiGet } from "@/src/api/apiCalles";
import { TFetchedProduct } from "@/src/types";

type PROP = {
  showGrid?: boolean;
};

export default async function ProductTiles({ showGrid }: PROP) {
  const products = await apiGet<TFetchedProduct>(
    "https://dummyjson.com/products"
  );
  return (
    <div className="container flex flex-col items-center justify-center !gap-8">
      {homeProductList(products.products).map((item, index) => {
        return (
          <Fragment key={index}>
            <ConditionalRender
              condition={!!showGrid}
              Component={
                <ProductsGrid
                  products={item.productsGrid}
                  reverse={index % 2 === 0}
                />
              }
            />
            <GridCard data={item.products} />
            <ConditionalRender
              condition={homeProductList.length !== index + 1}
              Component={<BannerAdsDisplay ads={item.ads} />}
            />
          </Fragment>
        );
      })}
    </div>
  );
}
