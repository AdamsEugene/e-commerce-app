import imageByIndex from "./imageByIndex";

export type ItemsInCart = {
  itemName: string;
  color: string;
  size: number;
  amount: number; // New property
  image: string;
  key: string;
};

const randomIntFromInterval = (min: number = 0, max: number = 30) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const generateRandomString = () => Math.random().toString(36).substring(7);

const generateRandomItem = (): ItemsInCart => ({
  key: `key ${generateRandomString()}`,
  itemName: `Item ${generateRandomString()}`,
  color: `Color ${generateRandomString()}`,
  size: Math.floor(Math.random() * 10) + 1,
  amount: Math.floor(Math.random() * 5) + 1,
  image: imageByIndex(randomIntFromInterval()),
});

const cartItems: ItemsInCart[] = Array.from({ length: 3 }, () =>
  generateRandomItem()
);

export default cartItems;
