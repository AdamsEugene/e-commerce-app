import { StateCreator } from "zustand";
// import { immer } from "zustand/middleware/immer";

export type ProductState = {
  itemsInCart: number;
  inCart: {
    default: string[];
    leasing: string[];
    rent: string[];
    later: string[];
  };
};

export type InCart = keyof ProductState["inCart"];

export type ProductActions = {
  addToCart: (to: InCart, id: string) => void;
  moveTo: (from: InCart, to: InCart, id: string) => void;
  removeItemFromCart: (cartType: InCart, id: string) => void;
};

export type ProductSlice = ProductState & ProductActions;

export const initProductStore = (): ProductState => {
  return {
    itemsInCart: 0,
    inCart: {
      default: [],
      later: [],
      leasing: [],
      rent: [],
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
        // Remove the item from other carts
        Object.keys(state.inCart).forEach((cartType) => {
          if (cartType !== to) {
            state.inCart[cartType as InCart] = state.inCart[
              cartType as InCart
            ].filter((itemId) => itemId !== id);
          }
        });
        // Add the item to the specified cart
        const uniqueIds = new Set([...state.inCart[to], id]);
        state.inCart[to] = Array.from(uniqueIds);
        // Update total items count
        const totalItemsInCart = calculateTotalItemsInCart(state.inCart);
        return {
          ...state,
          itemsInCart: totalItemsInCart,
        };
      }),
    moveTo: (from, to, id) =>
      set((state) => {
        // Remove the item from the "from" cart
        const updatedFromCart = state.inCart[from].filter(
          (itemId) => itemId !== id
        );

        // Add the item to the "to" cart
        const uniqueIds = new Set([...state.inCart[to], id]);
        const updatedToCart = Array.from(uniqueIds);

        // Update total items count
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
        // Remove the item from the specified cart
        const updatedCart = state.inCart[cartType].filter(
          (itemId) => itemId !== id
        );

        // Update total items count
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
