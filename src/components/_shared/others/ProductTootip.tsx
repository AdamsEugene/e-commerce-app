import { PropsWithChildren } from "react";
import Link from "next/link";
import { Button, ButtonGroup, ScrollShadow, Tooltip } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";

import { siteConfig } from "@/src/config/site";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import { TProduct } from "@/src/types";
import Ratings from "../../others/Ratings";
import { IoStar } from "react-icons/io5";
import { GoSponsorTiers } from "react-icons/go";
import { addProductToCart } from "@/src/api/cartApis";

type PROPS = {
  item: TProduct;
};

export default function ProductTooltip(props: PropsWithChildren<PROPS>) {
  const { item, children } = props;

  const toggleDrawer = useAppStore((state) => state.toggleDrawer);
  const addToCart = useAppStore((state) => state.addToCart);
  const addToBuyNow = useAppStore((state) => state.addToBuyNow);
  const setCartData = useAppStore((state) => state.setCartData);
  const setIsAddingToCart = useAppStore((state) => state.setIsAddingToCart);
  const user = useAppStore((state) => state.user);
  // console.log(props.item);

  const onBuyNow = async () => {
    addToBuyNow("default", String(item.id));
    if (user) {
      setIsAddingToCart(true);
      const response = await addProductToCart({
        userId: String(user.id),
        products: [{ id: String(item.id), quantity: 1 }],
      });
      setCartData({ carts: [response] });
    }
  };

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
          <Ratings rating={item.rating} size={1} />
          <p className="text-default-500 text-4xl">{`${item.price}`}</p>
          <div className="flex gap-1 flex-wrap">
            <Chip
              // endContent={<IoStar />}
              variant="flat"
              color="secondary"
              size="sm"
            >
              refurbish
            </Chip>
            <Chip
              endContent={<GoSponsorTiers />}
              variant="flat"
              color="success"
              size="sm"
            >
              sponsored
            </Chip>

            <Chip
              endContent={<IoStar className="text-warning" />}
              variant="flat"
              color="warning"
              size="sm"
            >
              refurbish
            </Chip>
          </div>
          <ScrollShadow size={10} hideScrollBar className="w-full max-h-[80px]">
            <p className="text-default-500 text-xxs">{item.description}</p>
          </ScrollShadow>
          <ButtonGroup fullWidth size="sm">
            <Button
              onClick={async () => {
                addToCart("default", String(item.id));
                toggleDrawer(true);
                if (user) {
                  setIsAddingToCart(true);
                  const response = await addProductToCart({
                    userId: String(user.id),
                    products: [{ id: String(item.id), quantity: 1 }],
                  });
                  setCartData({ carts: [response] });
                }
              }}
            >
              Add to cart
            </Button>
            <Button
              as={Link}
              href={`${siteConfig.pages.product}/${item.id}/${siteConfig.pages.buyNow}`}
              onClick={onBuyNow}
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
