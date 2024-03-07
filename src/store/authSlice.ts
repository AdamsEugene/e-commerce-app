import { StateCreator } from "zustand";

export type AuthState = {
  accountType?: "default" | "employee" | "organization" | "association";
};

export type AuthActions = {
  updateAccountType: (type: AuthState["accountType"]) => void;
};

export type AuthSlice = AuthState & AuthActions;

export const initAuthStore = (): AuthState => {
  return {
    accountType: undefined,
  };
};

export const defaultAuthState: AuthState = {
  ...initAuthStore(),
};

export const createAuthSlice =
  (
    initState: AuthState = defaultAuthState
  ): StateCreator<AuthSlice, [], [], AuthSlice> =>
  (set) => ({
    ...initState,
    updateAccountType: (accountType) => set({ accountType }),
  });
