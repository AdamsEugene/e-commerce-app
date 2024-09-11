"use client";

import React, { Fragment, useEffect, useState } from "react";
import { ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import { GiMagicBroom } from "react-icons/gi";
import { motion } from "framer-motion";

import ProductsGrid from "@/src/app/(home)/products/components/ProductsGrid";
import GridCard from "../_shared/others/GridCard";
import BannerAdsDisplay from "../_shared/advertisement/BannerAdsDisplay";
import ConditionalRender from "../_shared/Conditional/ConditionalRender";
import { homeProductList } from "@/src/utils/formatProducts";
import { apiGet } from "@/src/api/apiCalles";
import { TFetchedProduct } from "@/src/types";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import CustomSuspense from "../_shared/Conditional/CustomSuspense";
import FallbackProductTiles from "../_shared/fallbacks/FallbackProductTiles";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import StyledModal from "../_shared/Styled/StyledModal";
import Promotions from "@/src/app/(home)/products/components/Promotions";

type PROP = {
  showGrid?: boolean;
  params?: { page: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

interface Position {
  x: string;
  y: string;
}

const ITEM_PER_PAGE = 40;
const colors = [
  "#FFFAE0", // Equivalent to text-warning-50
  "#FFE999", // Equivalent to text-warning-100
  "#FFD966", // Equivalent to text-warning-200
  "#FFC533", // Equivalent to text-warning-300
  "#FFB200", // Equivalent to text-warning-400
  "#FF9900", // Equivalent to text-warning-500
];

export default function ProductTiles({ showGrid }: PROP) {
  const { ref, inView } = useInView();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [positions, setPositions] = useState<Position[]>([]);
  const [colors, setColors] = useState<string[]>(Array(32).fill("#FFFAE0")); // Initial colors for each icon
  const [rotations, setRotations] = useState<number[]>(Array(32).fill(0)); // Initial rotation angles for each icon

  const generateRandomPosition = (): Position => ({
    x: `${Math.random() * 100 - 50}vw`, // Random position between -50vw and 50vw
    y: `${Math.random() * 100 - 50}vh`, // Random position between -50vh and 50vh
  });

  useEffect(() => {
    if (!isOpen) return;

    const initialPositions = Array.from({ length: 32 }, () =>
      generateRandomPosition()
    );
    setPositions(initialPositions);

    const updateAnimation = () => {
      // Randomly pick some indexes to change color and rotation
      const indexesToUpdate = Array.from(
        { length: Math.floor(Math.random() * 32) },
        () => Math.floor(Math.random() * 32)
      );

      setPositions(Array.from({ length: 32 }, () => generateRandomPosition()));

      setColors((prevColors) =>
        prevColors.map((color, index) =>
          indexesToUpdate.includes(index)
            ? colors[Math.floor(Math.random() * colors.length)]
            : color
        )
      );

      setRotations((prevRotations) =>
        prevRotations.map((rotation, index) =>
          indexesToUpdate.includes(index)
            ? rotation + Math.random() * 360 // Randomly rotate between 0 and 360 degrees
            : rotation
        )
      );
    };

    let interval: NodeJS.Timeout;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(interval);
      } else {
        interval = setInterval(updateAnimation, 2000);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Start the interval initially
    interval = setInterval(updateAnimation, 2000);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isOpen]);

  const queryClient = useAppStore((state) => state.queryClient);

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
      initialData: () => queryClient?.getQueryData<any>(["all", "products"]),
      initialDataUpdatedAt: () =>
        queryClient?.getQueryState(["all", "products"])?.dataUpdatedAt,
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

  const products = data?.pages?.flat();

  return (
    <div className="container flex flex-col items-center justify-center !gap-8">
      <button onClick={onOpen}>click me</button>
      <CustomSuspense
        condition={isFetching && !isFetchingNextPage}
        fallback={homeProductList(products)?.map((item, index) => (
          <Fragment key={index}>
            <Promotions index={index} />
            <ConditionalRender
              condition={!!showGrid}
              Component={
                <ProductsGrid
                  products={item.productsGrid}
                  reverse={index % 2 === 0}
                  myRef={ref}
                />
              }
            />
            <GridCard data={item.products} />
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
      <StyledModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
        backdrop="blur"
        size="3xl"
        className="search_result"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <ModalBody>
              <div className="max-h-screen h-[600px]">
                <div className="flex items-center justify-center w-full h-full">
                  {positions.map((pos, index) => (
                    <motion.div
                      key={index}
                      className="absolute"
                      animate={{
                        x: pos.x,
                        y: pos.y,
                        rotate: rotations[index],
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                      }}
                    >
                      <GiMagicBroom
                        className="text-5xl"
                        style={{
                          color: colors[index],
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </ModalBody>
          )}
        </ModalContent>
      </StyledModal>
    </div>
  );
}
