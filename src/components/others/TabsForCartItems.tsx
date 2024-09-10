"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { Tabs, Tab } from "@nextui-org/react";
import CartItem from "./CartItem";
import StyledImage from "../_shared/Styled/StyledImage";
import ConditionalRenderAB from "../_shared/Conditional/ConditionalRenderAB";
import { useAppStore } from "../../providers/AppStoreProvider";
import { type InCart } from "../../store/productSlice";
import FallbackItemInCart from "../_shared/fallback/FallbackItemInCart";
import ConditionalRender from "../_shared/Conditional/ConditionalRender";
import CustomSuspense from "../_shared/Conditional/CustomSuspense";

type PROPS = {
  buyNow?: boolean;
  drawer?: boolean;
};

const TabsForCartItems: React.FC<PROPS> = (props) => {
  const { buyNow: now = false, drawer } = props;

  // const [allItems, setAllItems] = useState<ItemsInCart[]>(cartItems);
  const inCart = useAppStore((state) => state.inCart);
  const buyNow = useAppStore((state) => state.buyNow);
  const selectedPlan = useAppStore((state) => state.selectedPlan);
  const cartsData = useAppStore((state) => state.cartsData);
  const isAddingToCart = useAppStore((state) => state.isAddingToCart);

  // const isDrawerOpen = useAppStore((state) => state.isDrawerOpen);

  // console.log({ inCart, buyNow });

  // const params = useParams();
  // const productId = params.product_id;
  const pathname = usePathname();
  const containsBuyNow = /buy-now/i.test(pathname);

  const productsInCart = containsBuyNow && now ? buyNow : inCart;

  const getItemsByCartType = useMemo(
    () => (cartType: InCart) => {
      return cartsData.carts
        .map((cart) => cart.products)
        .flat()
        ?.filter((item) => productsInCart[cartType].includes(String(item.id)));
    },
    [cartsData, productsInCart]
  );

  const isCartEmpty = (cartType: InCart) =>
    getItemsByCartType(cartType).length === 0;

  return (
    <div className="flex w-full flex-col gap-3">
      <Tabs
        aria-label="Options"
        color="secondary"
        variant="light"
        fullWidth
        defaultSelectedKey={selectedPlan}
      >
        {Object.entries(inCart)?.map(([cartType, _]) =>
          drawer ? (
            <Tab
              key={cartType}
              title={`${capitalize(cartType)} (${
                productsInCart[cartType as InCart].length
              })`}
            >
              <ConditionalRenderAB
                ComponentA={
                  <>
                    {getItemsByCartType(cartType as InCart)?.map((item) => (
                      <CartItem
                        key={item.id}
                        item={item}
                        from={cartType as InCart}
                      />
                    ))}
                    <ConditionalRender
                      condition={isAddingToCart}
                      Component={<FallbackItemInCart />}
                    />
                  </>
                }
                ComponentB={
                  <CustomSuspense
                    condition={!isAddingToCart}
                    fallback={<FallbackItemInCart />}
                  >
                    <EmptyCart type={cartType as InCart} />
                  </CustomSuspense>
                }
                condition={!isCartEmpty(cartType as InCart) || !isAddingToCart}
              />
            </Tab>
          ) : (
            cartType !== "later" && (
              <Tab
                key={cartType}
                title={`${capitalize(cartType)} (${
                  productsInCart[cartType as InCart].length
                })`}
              >
                <ConditionalRenderAB
                  ComponentA={
                    <>
                      {getItemsByCartType(cartType as InCart)?.map((item) => (
                        <CartItem
                          key={item.id}
                          item={item}
                          from={cartType as InCart}
                        />
                      ))}
                      <ConditionalRender
                        condition={isAddingToCart}
                        Component={<FallbackItemInCart />}
                      />
                    </>
                  }
                  ComponentB={
                    <CustomSuspense
                      condition={!isAddingToCart}
                      fallback={<FallbackItemInCart />}
                    >
                      <EmptyCart type={cartType as InCart} />
                    </CustomSuspense>
                  }
                  condition={
                    !isCartEmpty(cartType as InCart) || !isAddingToCart
                  }
                />
              </Tab>
            )
          )
        )}
      </Tabs>
    </div>
  );
};

export default TabsForCartItems;

const EmptyCart = ({ type }: { type?: InCart }) => (
  <div className="min-h-[500px] w-full flex flex-col items-center justify-center">
    <div className="flex flex-col items-center justify-center gap-6">
      <StyledImage
        src="/assets/svgs/emptyCart.svg"
        alt=" Your shopping cart is empty"
        height={350}
        width={300}
      />
      <p className="text-lg font-semibold text-gray-600">
        {getCartEmptyMessage(type)}
      </p>
    </div>
  </div>
);

// Helper function to capitalize the first letter
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const getCartEmptyMessage = (cartType?: InCart): string => {
  switch (cartType) {
    case "default":
      return "Your default cart is empty.";
    case "leasing":
      return "Your leasing cart is empty.";
    case "rent":
      return "Your rent cart is empty.";
    case "later":
      return "Your later cart is empty.";
    default:
      return "Your shopping cart is empty.";
  }
};
