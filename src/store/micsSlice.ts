import { StateCreator } from "zustand";
import { InCart } from "./productSlice";
import { Colors, adColor } from "./initialState";
import { QueryClient } from "@tanstack/react-query";
import { Product } from "../types/@carts";
import { TProduct } from "../types";

export type MicsState = {
  isDrawerOpen: boolean;
  activeStep: number;
  selectedProduct?: Product | TProduct;
  selectedPlan: Exclude<InCart, "later">;
  activePlan: InCart;
  hasExcelChanged: boolean;
  displayMode: "grid" | "list";
  modalFor?: "create_campaign" | "create_ad" | "create_budget" | "create_group";
  adColor: typeof adColor;
  queryClient?: QueryClient;
};

export type MicsActions = {
  toggleDrawer: (state: boolean) => void;
  addToSelectedProduct: (item: Product | TProduct) => void;
  deleteFromSelectedProduct: () => void;
  changePlan: (plan: Exclude<InCart, "later">) => void; // Change this line
  setActivePlan: (plan: InCart) => void;
  updateActiveStep: (activeStep: number) => void;
  updateExcelStateChange: (newState: boolean) => void;
  toggleDisplayMode: (displayMode: MicsState["displayMode"]) => void;
  openModal: (modalFor: MicsState["modalFor"]) => void;
  setQueryClient: (queryClient: QueryClient) => void;
  updateAdColor: (
    type: string,
    filed: keyof Colors,
    color: string,
    mode: "light" | "dark"
  ) => void;
};

export type MicsSlice = MicsState & MicsActions;

export const initMicsStore = (): MicsState => {
  return {
    isDrawerOpen: false,
    activeStep: 0,
    selectedProduct: undefined,
    selectedPlan: "default",
    activePlan: "default",
    hasExcelChanged: false,
    displayMode: "grid",
    modalFor: undefined,
    adColor,
    queryClient: undefined,
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
    setActivePlan: (activePlan) => set({ activePlan }),
    updateActiveStep: (activeStep) => set({ activeStep }),
    updateExcelStateChange: (hasExcelChanged) => set({ hasExcelChanged }),
    toggleDisplayMode: (displayMode) =>
      set({ displayMode: displayMode === "grid" ? "list" : "grid" }),
    openModal: (modalFor) => set({ modalFor }),
    setQueryClient: (queryClient) => set({ queryClient }),
    updateAdColor: (type, field, color, mode) =>
      set((state) => {
        const updatedAdColor = {
          ...state.adColor,
          [type]: {
            ...(state.adColor[type] || {}), // Initialize with an empty object if undefined
            [mode]: {
              ...(state.adColor[type]?.[mode] || {}),
              [field]: color,
            },
          },
        };
        return { ...state, adColor: updatedAdColor };
      }),
  });
