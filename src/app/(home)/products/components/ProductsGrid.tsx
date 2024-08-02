import Link from "next/link";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import StyledImage from "@/src/components/_shared/Styled/StyledImage";
import { siteConfig } from "@/src/config/site";
import imageByIndex from "@/src/utils/imageByIndex";
import { PRODUCTS_GRID } from "@/src/types";

type PROPS = {
  products?: PRODUCTS_GRID;
  reverse?: boolean;
};

export default function ProductsGrid(props: PROPS) {
  const { reverse, products } = props;

  if (!products) return null;

  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-4">
      <div className="grid xs:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-4 w-full">
        {products.products.map((list, index) => (
          <div
            key={index}
            className={`${
              reverse && index === 0 ? "order-last" : "order-first"
            } ${
              list.length === 4 ? "col-span-2" : "col-span-3"
            } xs:col-span-2  h-full`}
          >
            <Card shadow="sm" className="h-full">
              <CardHeader className="pb-0">
                <div className="flex items-center justify-between w-full">
                  <p className="text-lg font-semibold max-w-[70%] truncate">
                    {list[0].title}
                  </p>
                  <div className="flex items-center gap-3">
                    <Link
                      href={{
                        pathname: `${siteConfig.pages.products}/${products.title}`,
                        query: { image: products.image },
                      }}
                      className="text-secondary"
                      // variant="light"
                      aria-label="Edit campaign"
                    >
                      {products.cta}
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div
                  className={`grid xs:grid-cols-2 ${
                    list.length === 4
                      ? "md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
                      : "md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"
                  } gap-4 w-full`}
                >
                  {list?.map((product, index) => (
                    <Link
                      key={index}
                      className="truncate"
                      href={`${siteConfig.pages.product}/${product.id}`}
                    >
                      <StyledImage
                        shadow="none"
                        radius="lg"
                        width={300}
                        height={300}
                        alt={product.description}
                        className="!object-contain product_image !h-36 w-full"
                        src={
                          product?.thumbnail ||
                          product?.images?.[0] ||
                          imageByIndex(index)
                        }
                        isZoomed
                      />
                      <b className="text-small text-default-500">
                        {product.title}
                      </b>
                    </Link>
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
