import { StateCreator } from "zustand";

export type ProductState = {
  itemsInCart: number;
  inCart: {
    default: string[];
    leasing: string[];
    rent: string[];
    later: string[];
  };
  buyNow: {
    default: string[];
    leasing: string[];
    rent: string[];
    later: string[];
  };
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
    },
    buyNow: {
      default: [],
      leasing: [],
      rent: [],
      later: [],
    },
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
          itemsInCart: totalItemsInCart,
        };
      }),
    addToBuyNow: (to, id) =>
      set((state) => {
        Object.keys(state.buyNow).forEach((cartType) => {
          if (cartType !== to) {
            state.buyNow[cartType as InBuyNow] = state.buyNow[
              cartType as InBuyNow
            ].filter((itemId) => itemId !== id);
          }
        });
        const uniqueIds = [id];
        state.buyNow[to] = uniqueIds;
        return state;
      }),
    moveToBuyNow: (from, to, id) =>
      set((state) => {
        const updatedFromCart = state.buyNow[from].filter(
          (itemId) => itemId !== id
        );
        const uniqueIds = [id];
        const updatedToCart = uniqueIds;
        return {
          ...state,
          buyNow: {
            ...state.buyNow,
            [from]: updatedFromCart,
            [to]: updatedToCart,
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
        };
      }),
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
