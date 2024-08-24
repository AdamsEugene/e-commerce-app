"use client";

import React, { Fragment, useEffect } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

import ProductsGrid from "@/src/app/(home)/products/components/ProductsGrid";
import GridCard from "../_shared/others/GridCard";
import BannerAdsDisplay from "../_shared/advertisement/BannerAdsDisplay";
import ConditionalRender from "../_shared/Conditional/ConditionalRender";
import { homeProductList } from "@/src/utils/formatProducts";
import { apiGet, fetchProducts } from "@/src/api/apiCalles";
import { TFetchedProduct, TProduct } from "@/src/types";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import CustomSuspense from "../_shared/Conditional/CustomSuspense";
import FallbackProductTiles from "../_shared/fallbacks/FallbackProductTiles";
import FallbackBestSelling from "../_shared/search/FallbackBestSelling";
import ProductGallery from "../_shared/swiper/ProductGallery";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import MyStopwatch from "../_shared/others/MyStopwatch";
import { useCountdown } from "@/src/hooks/useCountdown";

type PROP = {
  showGrid?: boolean;
  params?: { page: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

const ITEM_PER_PAGE = 40;
const fiveDaysInMillis = 5 * 24 * 60 * 60 * 1000; // 5 days in milliseconds

export default function ProductTiles({ showGrid }: PROP) {
  const { ref, inView } = useInView();
  const queryClient = useAppStore((state) => state.queryClient);
  const { CountdownComponent, isCompleted } = useCountdown({
    date: Date.now() + fiveDaysInMillis,
    onComplete: () => console.log("done"),
  });

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
      initialData: () =>
        queryClient?.getQueryData<any>(["all", "products"]),
      initialDataUpdatedAt: () =>
        queryClient?.getQueryState(["all", "products"])?.dataUpdatedAt,
      // getPreviousPageParam: (firstPage) => firstPage,
      getNextPageParam: (currentProducts, allProductsOnPage) => {
        return currentProducts.length === ITEM_PER_PAGE
          ? allProductsOnPage.length + 1
          : undefined;
      },
    });

  const { data: bestSelling } = useQuery({
    queryKey: ["bestSelling"],
    queryFn: () => {
      return fetchProducts({ limit: 20, skip: 60 });
    },
    staleTime: Infinity,
    initialData: () =>
      queryClient?.getQueryData<TFetchedProduct>(["bestSelling"]),
    initialDataUpdatedAt: () =>
      queryClient?.getQueryState(["bestSelling"])?.dataUpdatedAt,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  const products = data?.pages?.flatMap((d) => d);

  return (
    <div className="container flex flex-col items-center justify-center !gap-8">
      <CustomSuspense
        condition={isFetching && !isFetchingNextPage}
        fallback={homeProductList(products)?.map((item, index) => (
          <Fragment key={index}>
            <Card
              shadow="sm"
              className={`h-full ${index % 2 === 0 ? "bg-lime-100" : "bg-teal-100"} `}
              fullWidth
            >
              <CardHeader
                className={`${index % 2 === 0 ? "bg-lime-500" : "bg-teal-500"}  justify-between before:bg-white/10 overflow-hidden py-1 before:rounded-xl rounded-large w-[calc(100%_-_8px)] shadow-small ml-1 z-10`}
              >
                <div className="flex items-center justify-between w-full">
                  <p className="text-lg font-semibold max-w-[70%] truncate">
                    hello
                  </p>
                  <CountdownComponent />
                  {isCompleted && <p>The countdown has completed.</p>}
                  <MyStopwatch />
                </div>
              </CardHeader>
              <CardBody>
                <CustomSuspense
                  condition={!!bestSelling}
                  fallback={<FallbackBestSelling count={6} />}
                >
                  <ProductGallery
                    bestSelling={bestSelling?.products}
                    slidesPerView={6}
                    // autoplay={false}
                    forHome
                  />
                </CustomSuspense>
              </CardBody>
            </Card>
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
