import ProductsGrid from "@/src/app/(home)/products/components/ProductsGrid";
import React, { Fragment } from "react";
import GridCard from "../_shared/others/GridCard";
import BannerAdsDisplay from "../_shared/advertisement/BannerAdsDisplay";
import { homeProductList } from "@/src/utils/productList";
import ConditionalRender from "../_shared/Conditional/ConditionalRender";

export default function ProductTiles() {
  return (
    <div className="container main flex flex-col items-center justify-center !gap-8">
      {homeProductList.map((item, index) => {
        console.log(index % 2);

        return (
          <Fragment key={index}>
            <ProductsGrid
              products={item.productsGrid}
              reverse={index % 2 === 0}
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
