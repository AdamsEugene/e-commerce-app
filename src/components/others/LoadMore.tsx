"use client";

import React from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Card, CardBody, CardFooter, Spinner } from "@nextui-org/react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

import { apiGet } from "@/src/api/apiCalles";
import { TFetchedProduct, TProduct } from "@/src/types";
import ConditionalRender from "../_shared/Conditional/ConditionalRender";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import ProductTooltip from "../_shared/others/ProductTootip";
import StyledImage from "../_shared/Styled/StyledImage";
import { IconWrapper } from "../_shared/others/IconWrapper";
import { siteConfig } from "@/src/config/site";
import ConditionalRenderAB from "../_shared/Conditional/ConditionalRenderAB";

export default function LoadMore() {
  return <Example />;
}

function Example() {
  const { ref, inView } = useInView();

  const { data, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["all", "products"],
    queryFn: async ({
      pageParam = 1,
    }): Promise<TFetchedProduct["products"]> => {
      const response = await apiGet<TFetchedProduct>(
        `products?skip=${pageParam * 20}&limit=${20}`
      );
      const res = response.products;
      return res;
    },
    initialPageParam: 1,
    // getPreviousPageParam: (firstPage) => firstPage,
    getNextPageParam: (_, allPages) => allPages.length + 1,
  });

  React.useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  const products = data?.pages?.flatMap((d) => d);

  return (
    <>
      <div className="container mx-auto flex flex-col justify-center items-center gap-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products?.map((project, index) => (
            <ConditionalRenderAB
              condition={index + 10 === products.length}
              ComponentA={
                <div ref={ref}>
                  <ProductCard project={project} />
                </div>
              }
              ComponentB={<ProductCard project={project} />}
            />
          ))}
        </div>
        <ConditionalRender
          condition={isFetchingNextPage}
          Component={
            <div className="w-full flex items-center justify-center">
              <Spinner label="Loading..." color="secondary" />
            </div>
          }
        />
      </div>
      <ReactQueryDevtools initialIsOpen />
    </>
  );
}

const ProductCard = ({ project }: { project: TProduct }) => {
  const addToSelectedProduct = useAppStore(
    (state) => state.addToSelectedProduct
  );
  const changePlan = useAppStore((state) => state.changePlan);
  const toggleDrawer = useAppStore((state) => state.toggleDrawer);
  const addToCart = useAppStore((state) => state.addToCart);

  return (
    <ProductTooltip item={project} key={project.id}>
      <Card
        shadow="sm"
        as={Link}
        href={`${siteConfig.pages.product}/${project.id}`}
        isPressable
        onClick={() => {
          changePlan("default");
          addToSelectedProduct(project);
        }}
        // className="h-full"
      >
        <CardBody className="overflow-visible p-0 relative xs:!h-[200px] !h-[280px]">
          <StyledImage
            shadow="none"
            radius="lg"
            width={300}
            height={300}
            alt={project.title}
            className="object-cover product_image xs:w-full w-[100%] xs:!h-[200px] !h-[280px]"
            src={project?.thumbnail}
            isZoomed
          />
          <IconWrapper
            onClick={() => {
              addToCart("default", String(project.id));
              toggleDrawer(true);
            }}
            className="bg-primary/10 text-primary cursor-pointer hover:bg-primary/30 transition duration-300 ease-in-out absolute z-10 bottom-3 right-3 !w-10 !h-10"
          >
            <MdOutlineAddShoppingCart className="text-2xl" />
          </IconWrapper>
        </CardBody>
        <CardFooter className="text-small justify-between items-baseline">
          <b className="truncate">{project.title}</b>
          <p className="text-default-500">{project.price}</p>
        </CardFooter>
      </Card>
    </ProductTooltip>
  );
};
