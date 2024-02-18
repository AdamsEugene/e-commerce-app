import { createStore } from "zustand/vanilla";

export type MicsState = {
  isDrawerOpen: boolean;
};

export type MicsActions = {
  toggleDrawer: (state: boolean) => void;
};

export type MicsStore = MicsState & MicsActions;

export const initMicsStore = (): MicsState => {
  return { isDrawerOpen: false };
};

export const defaultInitState: MicsState = {
  isDrawerOpen: false,
};

export const createMicsStore = (initState: MicsState = defaultInitState) => {
  return createStore<MicsStore>()((set) => ({
    ...initState,
    toggleDrawer: (newState) => set((state) => ({ isDrawerOpen: newState })),
  }));
};
