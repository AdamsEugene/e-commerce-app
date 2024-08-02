"use server";

import { TFetchedProduct } from "../types";

export async function apiGet<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${process.env.BASE_URL}${url}`, {
    next: { tags: ["home", "products"] },
    ...options,
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data as T;
}

type FetchProducts = {
  limit: number;
  skip: number;
};

export const fetchProducts = async (props?: FetchProducts) => {
  let data;
  if (props) {
    const { limit, skip } = props;
    data = await apiGet<TFetchedProduct>(
      `products?skip=${skip}&limit=${limit}`
    );
  } else data = await apiGet<TFetchedProduct>(`products`);
  return data;
};

export async function removeBg(url: string) {
  const formData = new FormData();
  formData.append("size", "auto");
  formData.append("image_url", url);

  const response = await fetch("https://api.remove.bg/v1.0/removebg", {
    method: "POST",
    headers: { "X-Api-Key": process.env.REMOVE_BACKGROUND_API_KEY || "" },
    body: formData,
  });

  if (response.ok) {
    return response.body;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
}
