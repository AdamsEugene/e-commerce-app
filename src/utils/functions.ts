import productList from "./productList";

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getProductName = (productId: string) => {
  return productList.find((product) => product.productId === productId)?.name;
};

export const simulateDelay = (seconds: number): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};
