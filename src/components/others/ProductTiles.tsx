"use client";

import React, { Fragment, useEffect } from "react";
import { Card, CardHeader, Skeleton, Spinner } from "@nextui-org/react";

import ProductsGrid from "@/src/app/(home)/products/components/ProductsGrid";
import GridCard from "../_shared/others/GridCard";
import BannerAdsDisplay from "../_shared/advertisement/BannerAdsDisplay";
// import { homeProductList } from "@/src/utils/productList";
import ConditionalRender from "../_shared/Conditional/ConditionalRender";
import { homeProductList } from "@/src/utils/formatProducts";
import { apiGet, fetchProducts } from "@/src/api/apiCalles";
import { TFetchedProduct } from "@/src/types";
import StyledPagination from "../_shared/Styled/StyledPagination";
import LoadMore from "./LoadMore";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import CustomSuspense from "../_shared/Conditional/CustomSuspense";
import FallbackProductTiles from "../_shared/fallbacks/FallbackProductTiles";

type PROP = {
  showGrid?: boolean;
  params?: { page: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

const ITEM_PER_PAGE = 40;

export default function ProductTiles({ showGrid }: PROP) {
  const { ref, inView } = useInView();

  const { data, isFetchingNextPage, fetchNextPage, isFetching, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["all", "products"],
      queryFn: async ({ pageParam }): Promise<TFetchedProduct["products"]> => {
        const response = await apiGet<TFetchedProduct>(
          `products?skip=${pageParam * ITEM_PER_PAGE}&limit=${ITEM_PER_PAGE}`
        );
        const res = response.products;
        return res;
      },
      staleTime: Infinity,
      initialPageParam: 0,
      // getPreviousPageParam: (firstPage) => firstPage,
      getNextPageParam: (currentProducts, allProductsOnPage) => {
        return currentProducts.length === ITEM_PER_PAGE
          ? allProductsOnPage.length + 1
          : undefined;
      },
    });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  const products = data?.pages?.flatMap((d) => d);
  console.log(homeProductList(products));

  return (
    <div className="container flex flex-col items-center justify-center !gap-8">
      <CustomSuspense
        condition={isFetching && !isFetchingNextPage}
        fallback={homeProductList(products)?.map((item, index) => (
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
            <GridCard data={item.products} myRef={ref} />
            <ConditionalRender
              condition={homeProductList.length !== index}
              Component={<BannerAdsDisplay ads={item.ads} />}
            />
          </Fragment>
        ))}
      >
        <FallbackProductTiles />
      </CustomSuspense>
      <ConditionalRender
        condition={isFetchingNextPage}
        Component={<FallbackProductTiles />}
      />
    </div>
  );
}
