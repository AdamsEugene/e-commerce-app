import { StateCreator } from "zustand";
import { UserData } from "../types/@user";

export type UserState = {
  user?: UserData;
};

export type UserActions = {
  setUser: (user: UserData) => void;
};

export type UserSlice = UserState & UserActions;

export const initUserStore = (): UserState => {
  return {
    user: undefined,
  };
};

export const defaultUserState: UserState = {
  ...initUserStore(),
};

export const createUserSlice =
  (
    initState: UserState = defaultUserState
  ): StateCreator<UserSlice, [], [], UserSlice> =>
  (set) => ({
    ...initState,
    setUser: (user) => set({ user }),
  });
