import { StateCreator } from "zustand";
import { PRODUCTS } from "../utils/cartItem";
import { InCart } from "./productSlice";

export type MicsState = {
  isDrawerOpen: boolean;
  activeStep: number;
  selectedProduct?: PRODUCTS;
  selectedPlan: Exclude<InCart, "later">;
  hasExcelChanged: boolean;
  displayMode: "grid" | "list";
};

export type MicsActions = {
  toggleDrawer: (state: boolean) => void;
  addToSelectedProduct: (item: PRODUCTS) => void;
  deleteFromSelectedProduct: () => void;
  changePlan: (plan: Exclude<InCart, "later">) => void; // Change this line
  updateActiveStep: (activeStep: number) => void;
  updateExcelStateChange: (newState: boolean) => void;
  toggleDisplayMode: (displayMode: MicsState["displayMode"]) => void;
};

export type MicsSlice = MicsState & MicsActions;

export const initMicsStore = (): MicsState => {
  return {
    isDrawerOpen: false,
    activeStep: 0,
    selectedProduct: undefined,
    selectedPlan: "default",
    hasExcelChanged: false,
    displayMode: "grid",
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
    toggleDrawer: (isDrawerOpen) => set({ isDrawerOpen }),
    addToSelectedProduct: (selectedProduct) => set({ selectedProduct }),
    deleteFromSelectedProduct: () => set({ selectedProduct: undefined }),
    changePlan: (selectedPlan) => set({ selectedPlan }),
    updateActiveStep: (activeStep) => set({ activeStep }),
    updateExcelStateChange: (hasExcelChanged) => set({ hasExcelChanged }),
    toggleDisplayMode: (displayMode) =>
      set({ displayMode: displayMode === "grid" ? "list" : "grid" }),
  });
