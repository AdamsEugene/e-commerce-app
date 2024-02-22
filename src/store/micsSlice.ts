import { StateCreator } from "zustand";
import { PRODUCTS } from "../utils/cartItem";

export type MicsState = {
  isDrawerOpen: boolean;
  selectedProduct?: PRODUCTS;
};

export type MicsActions = {
  toggleDrawer: (state: boolean) => void;
  addToSelectedProduct: (item: PRODUCTS) => void;
  deleteFromSelectedProduct: () => void;
};

export type MicsSlice = MicsState & MicsActions;

export const initMicsStore = (): MicsState => {
  return { isDrawerOpen: false, selectedProduct: undefined };
};

export const defaultMicsState: MicsState = {
  ...initMicsStore(),
};

export const createMicsSlice =
  (
    initState: MicsState = defaultMicsState
  ): StateCreator<MicsSlice, [], [], MicsSlice> =>
  (set) => ({
    ...initState,
    toggleDrawer: (newState) => set({ isDrawerOpen: newState }),
    addToSelectedProduct: (item) => set({ selectedProduct: item }),
    deleteFromSelectedProduct: () => set({ selectedProduct: undefined }),
  });
