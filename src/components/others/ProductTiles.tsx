import React, { Fragment } from "react";
import { Spinner } from "@nextui-org/react";

import ProductsGrid from "@/src/app/(home)/products/components/ProductsGrid";
import GridCard from "../_shared/others/GridCard";
import BannerAdsDisplay from "../_shared/advertisement/BannerAdsDisplay";
// import { homeProductList } from "@/src/utils/productList";
import ConditionalRender from "../_shared/Conditional/ConditionalRender";
import { homeProductList } from "@/src/utils/formatProducts";
import { fetchProducts } from "@/src/api/apiCalles";
import { TFetchedProduct } from "@/src/types";
import StyledPagination from "../_shared/Styled/StyledPagination";
import LoadMore from "./LoadMore";

type PROP = {
  showGrid?: boolean;
  params?: { page: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

const Param = { page: "1" };

const ITEM_PER_PAGE = 40;

export default async function ProductTiles({ showGrid, params = Param }: PROP) {
  const { page } = params;

  const { products } = await fetchProducts({
    limit: ITEM_PER_PAGE,
    skip: ITEM_PER_PAGE * (+(page || 1) - 1),
  });

  return (
    <div className="container flex flex-col items-center justify-center !gap-8">
      {homeProductList(products).map((item, index) => {
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
              condition={homeProductList.length !== index}
              Component={<BannerAdsDisplay ads={item.ads} />}
            />
          </Fragment>
        );
      })}
      {/* <StyledPagination total={Math.ceil(total / ITEM_PER_PAGE)} page={+page} /> */}
      {/* <Spinner label="Loading..." color="secondary" /> */}
      {/* <LoadMore /> */}
    </div>
  );
}
