import StyledImage from "@/src/components/_shared/Styled/StyledImage";
import { siteConfig } from "@/src/config/site";
import imageByIndex from "@/src/utils/imageByIndex";
import { PRODUCTS_GRID } from "@/src/utils/productList";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

type PROPS = {
  products?: PRODUCTS_GRID;
  reverse?: boolean;
};

export default function ProductsGrid(props: PROPS) {
  const { reverse, products } = props;

  if (!products) return null;

  const [firstGrid, secondGrid] = products.products;

  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-4">
      <div className="grid xs:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-4 w-full">
        <div
          className={`col-span-2 ${
            reverse ? "order-last" : "order-first"
          }  h-full`}
        >
          <Card
            shadow="sm"
            as={Link}
            isPressable
            href={{
              pathname: `${siteConfig.pages.products}/${products.title}`,
              query: { image: products.image },
            }}
            className="h-full"
          >
            <CardHeader className="pb-0">
              <div className="flex items-center justify-between w-full">
                <p className="text-lg font-semibold">
                  {products.products[0][0].name}
                </p>
                <div className="flex items-center gap-3">
                  <Button
                    color="secondary"
                    variant="light"
                    aria-label="Edit campaign"
                  >
                    {products.cta}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 w-full">
                {firstGrid?.map((product, index) => (
                  <div key={index}>
                    <StyledImage
                      shadow="sm"
                      radius="lg"
                      width={300}
                      height={300}
                      alt={product.description}
                      className="object-cover product_image !h-36 w-full"
                      src={product.image || imageByIndex(index)}
                      isZoomed
                    />
                    <p className="text-default-500 truncate">{product.name}</p>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="col-span-3  h-full">
          <Card
            shadow="sm"
            as={Link}
            isPressable
            href={{
              pathname: `${
                siteConfig.pages.products
              }/${"Shop deals in Fashion"}`,
              query: { image: products.image },
            }}
            className="h-full"
          >
            <CardHeader className="pb-0">
              <div className="flex items-center justify-between w-full">
                <p className="text-lg font-semibold">
                  {products.products[1][0].name}
                </p>
                <div className="flex items-center gap-3">
                  <Button
                    color="secondary"
                    variant="light"
                    aria-label="Edit campaign"
                  >
                    See all deals
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <div className="grid xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-full">
                {secondGrid?.map((product, index) => (
                  <div key={index}>
                    <StyledImage
                      shadow="sm"
                      radius="lg"
                      width={300}
                      height={300}
                      alt={product.description}
                      className="object-cover product_image !h-36 w-full"
                      src={product.image || imageByIndex(index)}
                      isZoomed
                    />
                    <p className="text-default-500 truncate">{product.name}</p>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
