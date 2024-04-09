import productList from "./productList";

export type ItemsInCart = {
  key: string;
  itemName: string;
  color: string;
  size: number;
  amount: number;
  image: string;
  productId: string;
  name: string;
  price: string | number;
};

export type PRODUCTS = {
  productId: string;
  name: string;
  image: any;
  price: string | number;
};

const _productList: PRODUCTS[] = productList;

const randomIntFromInterval = (min: number = 0, max: number = 30) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const generateRandomString = () => Math.random().toString(36).substring(7);

const generateRandomItem = (product: PRODUCTS): ItemsInCart => ({
  key: `key ${generateRandomString()}`,
  itemName: product.name,
  color: `Color ${generateRandomString()}`,
  size: Math.floor(Math.random() * 10) + 1,
  amount: Math.floor(Math.random() * 100) + 1,
  image: product.image,
  productId: product.productId,
  name: product.name,
  price: product.price,
});

const cartItems: ItemsInCart[] = _productList.map((product) =>
  generateRandomItem(product)
);

export default cartItems;
