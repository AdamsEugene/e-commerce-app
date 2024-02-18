import { createStore } from "zustand/vanilla";
import { immer } from "zustand/middleware/immer";

import {
  MicsSlice,
  MicsState,
  createMicsSlice,
  defaultMicsState,
  initMicsStore,
} from "./micsSlice";
import {
  ProductSlice,
  ProductState,
  createProductSlice,
  defaultProductState,
  initProductStore,
} from "./productSlice";

export type AppStoreState = MicsState & ProductState;
export type AppStoreSlice = MicsSlice & ProductSlice;

export const initAppStore = (): AppStoreState => {
  return { ...initMicsStore(), ...initProductStore() };
};

export const defaultAppState: AppStoreState = {
  ...defaultMicsState,
  ...defaultProductState,
};

export const createAppStore = (initState: AppStoreState = defaultAppState) => {
  return createStore<AppStoreSlice>()((...a) => ({
    ...createMicsSlice(initState)(...a),
    ...createProductSlice(initState)(...a),
  }));
};
