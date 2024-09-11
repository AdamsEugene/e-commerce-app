import { StateCreator } from "zustand";
import { Cart, CartResponse } from "../types/@carts";

export type ProductState = {
  itemsInCart: number;
  inCart: {
    default: string[];
    leasing: string[];
    rent: string[];
    later: string[];
    Hire_purchase: string[];
  };
  buyNow: {
    default: string[];
    leasing: string[];
    rent: string[];
    later: string[];
    Hire_purchase: string[];
  };
  cartsData: CartResponse;
  isAddingToCart: boolean;
};

export type InCart = keyof ProductState["inCart"];
export type InBuyNow = keyof ProductState["buyNow"];

export type ProductActions = {
  addToCart: (to: InCart, id: string) => void;
  moveTo: (from: InCart, to: InCart, id: string) => void;
  removeItemFromCart: (cartType: InCart, id: string) => void;
  addToBuyNow: (to: InBuyNow, id: string) => void;
  moveToBuyNow: (from: InBuyNow, to: InBuyNow, id: string) => void;
  removeItemFromBuyNow: (cartType: InBuyNow, id: string) => void;
  setCartData: (cartsData: CartResponse) => void;
  setIsAddingToCart: (isAddingToCart: boolean) => void;
};

export type ProductSlice = ProductState & ProductActions;

export const initProductStore = (): ProductState => {
  return {
    itemsInCart: 0,
    inCart: {
      default: [],
      leasing: [],
      rent: [],
      later: [],
      Hire_purchase: [],
    },
    buyNow: {
      default: [],
      leasing: [],
      rent: [],
      later: [],
      Hire_purchase: [],
    },
    cartsData: { carts: [], total: 0 },
    isAddingToCart: false,
  };
};

export const defaultProductState: ProductState = {
  ...initProductStore(),
};

export const createProductSlice = (
  initState: ProductState = defaultProductState
) => {
  const createProductSlice: StateCreator<ProductSlice, [], [], ProductSlice> = (
    set
  ) => ({
    ...initState,
    addToCart: (to, id) =>
      set((state) => {
        Object.keys(state.inCart).forEach((cartType) => {
          if (cartType !== to) {
            state.inCart[cartType as InCart] = state.inCart[
              cartType as InCart
            ].filter((itemId) => itemId !== id);
          }
        });
        const uniqueIds = new Set([...state.inCart[to], id]);
        state.inCart[to] = Array.from(uniqueIds);
        const totalItemsInCart = calculateTotalItemsInCart(state.inCart);
        return {
          ...state,
          itemsInCart: totalItemsInCart,
          cartsData: {
            ...state.cartsData,
            carts: state.cartsData.carts,
            total: calculateTotalPrice(state.cartsData.carts),
          },
        };
      }),
    moveTo: (from, to, id) =>
      set((state) => {
        const updatedFromCart = state.inCart[from].filter(
          (itemId) => itemId !== id
        );
        const uniqueIds = new Set([...state.inCart[to], id]);
        const updatedToCart = Array.from(uniqueIds);
        const totalItemsInCart = calculateTotalItemsInCart({
          ...state.inCart,
          [from]: updatedFromCart,
          [to]: updatedToCart,
        });

        return {
          ...state,
          inCart: {
            ...state.inCart,
            [from]: updatedFromCart,
            [to]: updatedToCart,
          },
          cartsData: {
            ...state.cartsData,
            carts: state.cartsData.carts,
            total: calculateTotalPrice(state.cartsData.carts),
          },
          itemsInCart: totalItemsInCart,
        };
      }),
    removeItemFromCart: (cartType, id) =>
      set((state) => {
        const updatedCart = state.inCart[cartType].filter(
          (itemId) => itemId !== id
        );
        const totalItemsInCart = calculateTotalItemsInCart({
          ...state.inCart,
          [cartType]: updatedCart,
        });

        return {
          ...state,
          inCart: {
            ...state.inCart,
            [cartType]: updatedCart,
          },
          cartsData: {
            ...state.cartsData,
            carts: state.cartsData.carts,
            total: calculateTotalPrice(state.cartsData.carts),
          },
          itemsInCart: totalItemsInCart,
        };
      }),
    addToBuyNow: (to, id) =>
      set((state) => {
        Object.keys(state.buyNow).forEach((cartType) => {
          state.buyNow[cartType as InBuyNow] = [];
        });
        state.buyNow[to] = [id];
        return state;
      }),
    moveToBuyNow: (from, to, id) =>
      set((state) => {
        const updatedFromCart = state.buyNow[from].filter(
          (itemId) => itemId !== id
        );
        const updatedToCart = [id];
        return {
          ...state,
          buyNow: {
            ...state.buyNow,
            [from]: updatedFromCart,
            [to]: updatedToCart,
          },
          cartsData: {
            ...state.cartsData,
            carts: state.cartsData.carts,
            total: calculateTotalPrice(state.cartsData.carts),
          },
        };
      }),
    removeItemFromBuyNow: (cartType, id) =>
      set((state) => {
        return {
          ...state,
          buyNow: {
            ...state.buyNow,
            [cartType]: [],
          },
          cartsData: {
            ...state.cartsData,
            carts: state.cartsData.carts,
            total: calculateTotalPrice(state.cartsData.carts),
          },
        };
      }),
    setCartData: (cartsData) =>
      set((state) => {
        const index = state.cartsData.carts
          ?.map((p) => p.products)
          ?.flat()
          ?.findIndex(
            (item) => item?.id === cartsData?.carts?.[0]?.products?.[0].id
          );
        console.log({
          index,
          cartsData: cartsData?.carts,
          state: state.cartsData.carts,
          other: state.cartsData.carts.map((p) => p.products).flat(),
        });

        let updatedCarts;
        if (index >= 0) {
          updatedCarts = state.cartsData.carts.map((item, i) =>
            i === index ? cartsData.carts[0] : item
          );
        } else {
          if (cartsData.carts[0])
            updatedCarts = [...state.cartsData.carts, cartsData.carts[0]];
          else updatedCarts = [...state.cartsData.carts];
        }

        return {
          ...state,
          isAddingToCart: false,
          cartsData: {
            ...state.cartsData,
            carts: updatedCarts,
            total: calculateTotalPrice(updatedCarts),
          },
        };
      }),
    setIsAddingToCart: (isAddingToCart) => set({ isAddingToCart }),
  });

  return createProductSlice;
};

const calculateTotalItemsInCart = (inCart: ProductState["inCart"]): number => {
  return (
    inCart.default.length +
    inCart.later.length +
    inCart.leasing.length +
    inCart.rent.length
  );
};

const calculateTotalPrice = (updatedCarts: Cart[]) =>
  +updatedCarts.reduce((pre, cur) => pre + cur.total, 0).toFixed(2);
