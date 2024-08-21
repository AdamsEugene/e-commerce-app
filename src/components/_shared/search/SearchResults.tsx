"use client";

import React, { Fragment, useEffect } from "react";
import Link from "next/link";
import {
  ModalBody,
  ModalHeader,
  Divider,
  Card,
  Skeleton,
  Spinner,
} from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";

import StyledInput from "../Styled/StyledInput";
import StyledCheckboxGroup from "../Styled/StyledCheckboxGroup";
import ProductGallery from "../swiper/ProductGallery";
import StyledCardGrid from "../swiper/StyledCardGrid";
import { useState } from "react";
import { useDeferredValue } from "react";
import ConditionalRenderAB from "../Conditional/ConditionalRenderAB";
import SearchList from "./SearchList";
import { siteConfig } from "@/src/config/site";
import useScreenSize from "@/src/hooks/useScreenSize";
import {
  fetchProducts,
  fetchProductsCategory,
  fetchSearchResults,
  getFeaturedCollection,
} from "@/src/api/apiCalles";
import { groupProductByCategory } from "@/src/utils/functions";
import CustomSuspense from "../Conditional/CustomSuspense";
import FallbackCheckbox from "./FallbackCheckbox";
import { ProductCategory, TFetchedProduct, TProduct } from "@/src/types";
import FallbackBestSelling from "./FallbackBestSelling";
import FallbackFeaturedCollection from "./FallbackFeaturedCollection";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery, useQueries } from "@tanstack/react-query";
import ConditionalRender from "../Conditional/ConditionalRender";
import LoadingSearchResults from "./LoadingSearchResults";
import { useUrlChangeListener } from "@/src/hooks/useUrlChangeListener";
import { useAppStore } from "@/src/providers/AppStoreProvider";

type PROPS = {
  onOpenChange: () => void;
  initialSearchTerm: string;
  onClose: () => void;
};

type CheckListData = {
  label: string;
  data: {
    name: string;
    slug: string;
    url: string;
  }[];
};

const RESULTS_PER_FETCH = 20;

export default function SearchResults(props: PROPS) {
  const { onOpenChange, initialSearchTerm, onClose } = props;
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [checkboxData, setCheckboxData] = useState<CheckListData[]>();
  const [bestSelling, setBestSelling] = useState<TProduct[]>();
  const [featuresCollections, setFeaturesCollections] = useState<TProduct[]>();

  const deferredValue = useDeferredValue(searchTerm.trim());
  const queryClient = useAppStore((state) => state.queryClient);

  const screenSize = useScreenSize();
  const { ref, inView } = useInView();

  useUrlChangeListener(onClose);

  const queries = useQueries({
    queries: [
      {
        queryKey: ["categories"],
        queryFn: () => {
          return fetchProductsCategory();
        },
        staleTime: Infinity,
        initialData: () => {
          return queryClient?.getQueryData<ProductCategory[]>(["categories"]);
        },
        initialDataUpdatedAt: () =>
          queryClient?.getQueryState(["categories"])?.dataUpdatedAt,
      },
      {
        queryKey: ["bestSelling"],
        queryFn: () => {
          return fetchProducts({ limit: 20, skip: 60 });
        },
      },
      {
        queryKey: ["features"],
        queryFn: () => {
          return getFeaturedCollection();
        },
      },
    ],
  });

  const [categoriesQuery, bestSellingQuery, featuresQuery] = queries;

  useEffect(() => {
    if (categoriesQuery.data) {
      setCheckboxData(groupProductByCategory(categoriesQuery.data));
    }
    if (bestSellingQuery.data) {
      setBestSelling(bestSellingQuery.data.products);
    }
    if (featuresQuery.data) {
      setFeaturesCollections(featuresQuery.data);
    }
  }, [categoriesQuery.data, bestSellingQuery.data, featuresQuery.data]);

  const { data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["search", "result", deferredValue],
      queryFn: async ({ pageParam }): Promise<TFetchedProduct["products"]> => {
        const response = await fetchSearchResults({
          limit: RESULTS_PER_FETCH,
          skip: pageParam * RESULTS_PER_FETCH,
          searchTerm: deferredValue,
        });
        return response.products;
      },
      initialPageParam: 0,
      getNextPageParam: (currentProducts, allProductsOnPage) => {
        return currentProducts.length === RESULTS_PER_FETCH
          ? allProductsOnPage.length + 1
          : undefined;
      },
      enabled: !!deferredValue,
    });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <Fragment>
      <ModalHeader className="flex flex-col gap-1">
        <StyledInput
          iconStart
          both
          Icon={FiSearch}
          autoFocus
          variant="flat"
          className="px-6"
          value={searchTerm}
          placeholder="Looking for something specific? Start typing..."
          onChange={({ target }) => setSearchTerm(target.value)}
        />
      </ModalHeader>
      <Divider className="my-4" />
      <ModalBody>
        <div className="flex xs:flex-col w-full h-full pb-4 xs:h-screen">
          <div className="xs:w-full w-[208px] flex justify-between gap-4 xs:mb-4 overflow-y-auto overflow-hidden lg:max-h-[626px]">
            <CustomSuspense
              condition={!!checkboxData}
              fallback={<FallbackCheckbox />}
            >
              <StyledCheckboxGroup
                checkboxData={checkboxData}
                size={screenSize === "xs" ? "sm" : "md"}
              />
            </CustomSuspense>
            <Divider
              className="xs:hidden sticky top-0 bottom-0"
              orientation="vertical"
            />
          </div>
          <Divider className="md:hidden lg:hidden" />
          <div className="xs:w-full w-[calc(100%-208px)] flex flex-col xs:p-0 px-4 gap-4 overflow-y-auto overflow-hidden lg:max-h-[626px]">
            <ConditionalRenderAB
              condition={!!deferredValue}
              ComponentA={
                <ConditionalRenderAB
                  condition={isFetching && !isFetchingNextPage}
                  ComponentA={<LoadingSearchResults />}
                  ComponentB={
                    <Fragment>
                      <SearchList
                        myRef={ref}
                        searchResults={data?.pages?.flatMap((d) => d)}
                        deferredValue={deferredValue}
                      />
                      <ConditionalRender
                        condition={isFetchingNextPage}
                        Component={
                          <div className="w-full flex items-center justify-center">
                            <LoadingSearchResults
                              count={3}
                              className="w-[96%]"
                            />
                          </div>
                        }
                      />
                    </Fragment>
                  }
                />
              }
              ComponentB={
                <Fragment>
                  <div className="w-full h-[150px]">
                    <p className="text-lg font-semibold mb-2">
                      Best Selling Products
                    </p>
                    <CustomSuspense
                      condition={!!bestSelling}
                      fallback={<FallbackBestSelling />}
                    >
                      <ProductGallery
                        onOpenChange={onOpenChange}
                        bestSelling={bestSelling}
                        onClose={onClose}
                      />
                    </CustomSuspense>
                  </div>
                  <Divider className="my-1" />
                  <div className="">
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold mb-2">
                        Featured Collections
                      </p>
                      <Link
                        className="text-secondary cursor-pointer"
                        href={siteConfig.pages.products}
                        onClick={onOpenChange}
                      >
                        View more
                      </Link>
                    </div>
                    <CustomSuspense
                      condition={!!featuresCollections}
                      fallback={
                        <FallbackFeaturedCollection
                          onOpenChange={onOpenChange}
                        />
                      }
                    >
                      <StyledCardGrid
                        onOpenChange={onOpenChange}
                        featuresCollections={featuresCollections}
                      />
                    </CustomSuspense>
                  </div>
                </Fragment>
              }
            />
          </div>
        </div>
      </ModalBody>
    </Fragment>
  );
}
