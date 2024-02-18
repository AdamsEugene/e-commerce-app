import { StateCreator } from "zustand";
// import { immer } from "zustand/middleware/immer";

export type ProductState = {
  itemsInCart: number;
  inCart: {
    default: string[];
    lessing: string[];
    rent: string[];
    later: string[];
  };
};

export type ProductActions = {
  addToCart: (to: keyof ProductState["inCart"], id: string) => void;
};

export type ProductSlice = ProductState & ProductActions;

export const initProductStore = (): ProductState => {
  return {
    itemsInCart: 0,
    inCart: {
      default: [],
      later: [],
      lessing: [],
      rent: [],
    },
  };
};

export const defaultProductState: ProductState = {
  itemsInCart: 0,
  inCart: {
    default: [],
    later: [],
    lessing: [],
    rent: [],
  },
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
        // Remove the item from other carts
        Object.keys(state.inCart).forEach((cartType) => {
          if (cartType !== to) {
            state.inCart[cartType as keyof ProductState["inCart"]] =
              state.inCart[cartType as keyof ProductState["inCart"]].filter(
                (itemId) => itemId !== id
              );
          }
        });

        // Add the item to the specified cart
        const uniqueIds = new Set([...state.inCart[to], id]);
        state.inCart[to] = Array.from(uniqueIds);

        // Update total items count
        const totalItemsInCart =
          state.inCart.default.length +
          state.inCart.later.length +
          state.inCart.lessing.length +
          state.inCart.rent.length;

        return {
          ...state,
          itemsInCart: totalItemsInCart,
        };
      }),
  });

  return createProductSlice;
};
