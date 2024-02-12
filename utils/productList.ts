import imageByIndex from "./imageByIndex";

export type PRODUCTS = {
  productId: string;
  title: string;
  img: any;
  price: string;
};

const productList: PRODUCTS[] = [
  { productId: "1", title: "Orange", img: imageByIndex(6), price: "$5.50" },
  { productId: "2", title: "Tangerine", img: imageByIndex(7), price: "$3.00" },
  { productId: "3", title: "Raspberry", img: imageByIndex(8), price: "$10.00" },
  { productId: "4", title: "Lemon", img: imageByIndex(9), price: "$5.30" },
  { productId: "5", title: "Avocado", img: imageByIndex(10), price: "$15.70" },
  { productId: "6", title: "Lemon 2", img: imageByIndex(11), price: "$8.00" },
  { productId: "7", title: "Banana", img: imageByIndex(12), price: "$7.50" },
  {
    productId: "8",
    title: "Watermelon",
    img: imageByIndex(13),
    price: "$12.20",
  },
  { productId: "9", title: "Grapes", img: imageByIndex(14), price: "$9.99" },
  {
    productId: "10",
    title: "Strawberry",
    img: imageByIndex(15),
    price: "$6.50",
  },
  {
    productId: "11",
    title: "Pineapple",
    img: imageByIndex(16),
    price: "$8.50",
  },
  {
    productId: "12",
    title: "Blueberry",
    img: imageByIndex(17),
    price: "$11.50",
  },
  { productId: "13", title: "Mango", img: imageByIndex(18), price: "$13.00" },
  { productId: "14", title: "Peach", img: imageByIndex(19), price: "$4.50" },
  { productId: "15", title: "Cherry", img: imageByIndex(20), price: "$7.75" },
  { productId: "16", title: "Plum", img: imageByIndex(21), price: "$6.20" },
  { productId: "17", title: "Kiwi", img: imageByIndex(22), price: "$9.00" },
  {
    productId: "18",
    title: "Cantaloupe",
    img: imageByIndex(23),
    price: "$10.50",
  },
  { productId: "19", title: "Pear", img: imageByIndex(24), price: "$5.80" },
  {
    productId: "20",
    title: "Blackberry",
    img: imageByIndex(25),
    price: "$8.75",
  },
  {
    productId: "21",
    title: "Pomegranate",
    img: imageByIndex(26),
    price: "$12.80",
  },
  {
    productId: "22",
    title: "Grapefruit",
    img: imageByIndex(27),
    price: "$4.00",
  },
  {
    productId: "23",
    title: "Dragon Fruit",
    img: imageByIndex(28),
    price: "$14.50",
  },
  {
    productId: "24",
    title: "Passion Fruit",
    img: imageByIndex(29),
    price: "$11.00",
  },
  { productId: "25", title: "Cucumber", img: imageByIndex(30), price: "$2.50" },
  // { productId: "26", title: "Papaya", img: imageByIndex(31), price: "$6.80" },
  // Add 4 more items...
];

export default productList;
