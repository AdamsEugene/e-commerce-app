import { AllUsersData, UserData } from "../types/@user";
import { apiGet } from "./apiCalles";

type FetchProducts = {
  limit: number;
  skip: number;
};

export const getUserById = async (id: string) => {
  const res = await apiGet<UserData>(`users/${id}`, {
    next: { tags: ["user", `${id}`] },
  });
  return res;
};

export const getAllUsers = async (props?: FetchProducts) => {
  let res;
  if (props) {
    const { limit, skip } = props;
    res = await apiGet<AllUsersData>(`users?skip=${skip}&limit=${limit}`, {
      next: { tags: ["user", "all"] },
    });
  } else res = await apiGet<AllUsersData>(`users`);

  return res;
};
