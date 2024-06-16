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

  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-4">
      <div className="grid xs:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-4 w-full">
        {products.products.map((list, index) => (
          <div
            key={index}
            className={`${reverse ? "order-last" : "order-first"} ${
              list.length === 4 ? " col-span-2" : " col-span-3"
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
                  <p className="text-lg font-semibold">{list[0].name}</p>
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
                <div
                  className={`grid xs:grid-cols-1 ${
                    list.length === 4
                      ? "md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
                      : "md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"
                  } gap-4 w-full`}
                >
                  {list?.map((product, index) => (
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
                      <p className="text-default-500 truncate">
                        {product.name}
                      </p>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
