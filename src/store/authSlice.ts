import { StateCreator } from "zustand";
import { UserData } from "../types/@user";

export type AuthState = {
  accountType?: "default" | "employee" | "organization" | "association";
  user?: UserData;
};

export type AuthActions = {
  updateAccountType: (type: AuthState["accountType"]) => void;
  setUser: (user: UserData) => void;
};

export type AuthSlice = AuthState & AuthActions;

export const initAuthStore = (): AuthState => {
  return {
    accountType: undefined,
    user: undefined,
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
    setUser: (user) => set({ user }),
  });
