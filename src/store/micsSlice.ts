import { StateCreator } from "zustand";

export type MicsState = {
  isDrawerOpen: boolean;
};

export type MicsActions = {
  toggleDrawer: (state: boolean) => void;
};

export type MicsSlice = MicsState & MicsActions;

export const initMicsStore = (): MicsState => {
  return { isDrawerOpen: false };
};

export const defaultMicsState: MicsState = {
  ...initMicsStore(),
};

// export const createMicsSlice: StateCreator<MicsSlice, [], [], MicsSlice> = (
//   set
// ) => ({
//   ...defaultMicsState,
//   toggleDrawer: (newState) => set((state) => ({ isDrawerOpen: newState })),
// });

export const createMicsSlice = (initState: MicsState = defaultMicsState) => {
  const createMicsSlice: StateCreator<MicsSlice, [], [], MicsSlice> = (
    set
  ) => ({
    ...initState,
    toggleDrawer: (newState) => set((state) => ({ isDrawerOpen: newState })),
  });

  return createMicsSlice;
};
