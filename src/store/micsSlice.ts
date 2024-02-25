import { StateCreator } from "zustand";
import { PRODUCTS } from "../utils/cartItem";
import { InCart } from "./productSlice";

export type MicsState = {
  isDrawerOpen: boolean;
  selectedProduct?: PRODUCTS;
  selectedPlan: Exclude<InCart, "later">;
};

export type MicsActions = {
  toggleDrawer: (state: boolean) => void;
  addToSelectedProduct: (item: PRODUCTS) => void;
  deleteFromSelectedProduct: () => void;
  changePlan: (plan: Exclude<InCart, "later">) => void; // Change this line
};

export type MicsSlice = MicsState & MicsActions;

export const initMicsStore = (): MicsState => {
  return {
    isDrawerOpen: false,
    selectedProduct: undefined,
    selectedPlan: "default",
  };
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
    changePlan: (plan) => set({ selectedPlan: plan }),
  });
