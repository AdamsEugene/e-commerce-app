import { AddCart, Cart, CartResponse } from "../types/@carts";
import { apiGet, apiPost } from "./apiCalles";

export const getCartByUser = async (userId: string) => {
  const res = await apiGet<CartResponse>(`carts/user/${userId}`);
  return res;
};

export const addProductToCart = async (payload: AddCart) => {
  const body = JSON.stringify(payload);
  const res = await apiPost<Cart>("carts/add", { body });
  return res;
};
