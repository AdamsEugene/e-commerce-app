import { UserData } from "../types/@user";
import { apiGet } from "./apiCalles";

export const getUserById = async (id: string) => {
  const res = await apiGet<UserData>(`users/${id}`, {
    next: { tags: ["user", `${id}`] },
  });
  return res;
};
