"use server";

import { ProductCategory, TFetchedProduct, TProduct } from "../types";

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

export async function apiPost<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${process.env.BASE_URL}${url}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
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

export const fetchSimilarProducts = async (productName: string) => {
  const names = productName.split(" ");
  const filteredNames = names.filter((name) => name.length > 3);
  const requests = filteredNames.map((name) =>
    apiGet<TFetchedProduct>(`products/category/${encodeURIComponent(name)}`, {
      next: { tags: ["product", "category", name] },
    })
  );

  const responses = await Promise.all(requests);
  const combinedData = responses.reduce((acc, res) => {
    return acc.concat(res.products as any);
  }, []);

  return combinedData;
};

export const fetchProductsCategory = async (): Promise<ProductCategory[]> => {
  const categories = await apiGet<ProductCategory[]>(`products/categories`, {
    next: { tags: ["search", "categories"] },
  });

  const categoriesWithProducts = await Promise.all(
    categories.map(async (category) => {
      const products = await apiGet<TFetchedProduct>(
        `products/category/${category.slug}`,
        {
          next: { tags: [category.slug, "categories"] },
        }
      );

      return {
        ...category,
        products: products.products,
      };
    })
  );

  return categoriesWithProducts;
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

function getRandomItems(items: string[], count: number = 8) {
  const shuffled = [...items].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export const getFeaturedCollection = async () => {
  const categories = await apiGet<string[]>("products/category-list");
  const topItems = getRandomItems(categories);

  const topItemPromises = topItems.map((category) =>
    apiGet<TFetchedProduct>(`products/category/${category}?limit=1`)
  );

  const results = await Promise.all(topItemPromises);
  return results.map((res) => res.products[0]);
};

type SearchProps = {
  limit: number;
  skip: number;
  searchTerm: string;
};

export const fetchSearchResults = async (props: SearchProps) => {
  const { limit, skip, searchTerm } = props;
  const data = await apiGet<TFetchedProduct>(
    `products/search?q=${searchTerm}&skip=${skip}&limit=${limit}`
  );

  return data;
};
