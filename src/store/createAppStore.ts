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
import {
  AuthSlice,
  AuthState,
  createAuthSlice,
  defaultAuthState,
  initAuthStore,
} from "./authSlice";

export type AppStoreState = MicsState & ProductState & AuthState;
export type AppStoreSlice = MicsSlice & ProductSlice & AuthSlice;

export const initAppStore = (): AppStoreState => {
  return { ...initMicsStore(), ...initProductStore(), ...initAuthStore() };
};

export const defaultAppState: AppStoreState = {
  ...defaultMicsState,
  ...defaultProductState,
  ...defaultAuthState,
};

export const createAppStore = (initState: AppStoreState = defaultAppState) => {
  return createStore<AppStoreSlice>()((...a) => ({
    ...createMicsSlice(initState)(...a),
    ...createProductSlice(initState)(...a),
    ...createAuthSlice(initState)(...a),
  }));
};
