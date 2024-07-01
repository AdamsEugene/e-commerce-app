import Link from "next/link";
import { Button, ButtonGroup, ScrollShadow, Tooltip } from "@nextui-org/react";
import { isMoney } from "@/src/utils/functions";
import { PRODUCTS } from "@/src/utils/productList";
import { PropsWithChildren } from "react";
import { siteConfig } from "@/src/config/site";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import { TProduct } from "@/src/types";

type PROPS = {
  item: TProduct;
};

export default function ProductTooltip(props: PropsWithChildren<PROPS>) {
  const { item, children } = props;

  const toggleDrawer = useAppStore((state) => state.toggleDrawer);
  const addToCart = useAppStore((state) => state.addToCart);
  const addToBuyNow = useAppStore((state) => state.addToBuyNow);

  return (
    <Tooltip
      showArrow={true}
      placement="right-end"
      delay={1000}
      shadow="lg"
      className="!w-[216.8px]"
      content={
        <div className="w-full flex flex-col gap-2 py-2">
          <b className="">{item.title}</b>
          <p className="text-default-500 text-4xl">
            {isMoney(item.price) ? `${item.price}` : `${item.price}`}
          </p>
          <ScrollShadow size={10} hideScrollBar className="w-full max-h-[80px]">
            <p className="text-default-500 text-xxs">{item.description}</p>
          </ScrollShadow>
          <ButtonGroup fullWidth size="sm">
            <Button
              onClick={() => {
                addToCart("default", String(item.id));
                toggleDrawer(true);
              }}
            >
              Add to cart
            </Button>
            <Button
              as={Link}
              href={`${siteConfig.pages.product}/${item.id}/${siteConfig.pages.buyNow}`}
              onClick={() => addToBuyNow("default", String(item.id))}
            >
              Buy now
            </Button>
          </ButtonGroup>
        </div>
      }
    >
      {children}
    </Tooltip>
  );
}
