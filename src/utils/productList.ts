import { AdPreview } from "../components/_shared/types/@ads";
import { adsPreview } from "./adsData";
import imageByIndex from "./imageByIndex";

export type PRODUCTS = {
  productId: string;
  name: string;
  image: any;
  price: string | number;
  description: string;
};

export type PRODUCTS_GRID = {
  gridId: string;
  title: string;
  cta: string;
  image: any;
  products: [PRODUCTS[], PRODUCTS[]];
};

export type PRODUCTS_FOR_HOME = {
  products: PRODUCTS[];
  productsGrid?: PRODUCTS_GRID;
  ads?: AdPreview[];
};

const productList: PRODUCTS[] = [
  {
    productId: "1",
    name: "Orange",
    image: imageByIndex(6),
    price: "$5.50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "2",
    name: "Tangerine",
    image: imageByIndex(7),
    price: "$3.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "3",
    name: "Raspberry",
    image: imageByIndex(8),
    price: "$10.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "4",
    name: "Lemon",
    image: imageByIndex(9),
    price: "$5.30",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "5",
    name: "Avocado",
    image: imageByIndex(10),
    price: "$15.70",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "6",
    name: "Lemon 2",
    image: imageByIndex(11),
    price: "$8.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "7",
    name: "Banana",
    image: imageByIndex(12),
    price: "$7.50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "8",
    name: "Watermelon",
    image: imageByIndex(13),
    price: "$12.20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "9",
    name: "Grapes",
    image: imageByIndex(14),
    price: "$9.99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "10",
    name: "Strawberry",
    image: imageByIndex(15),
    price: "$6.50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "11",
    name: "Pineapple",
    image: imageByIndex(16),
    price: "$8.50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "12",
    name: "Blueberry",
    image: imageByIndex(17),
    price: "$11.50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "13",
    name: "Mango",
    image: imageByIndex(18),
    price: "$13.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "14",
    name: "Peach",
    image: imageByIndex(19),
    price: "$4.50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "15",
    name: "Cherry",
    image: imageByIndex(20),
    price: "$7.75",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "16",
    name: "Plum",
    image: imageByIndex(21),
    price: "$6.20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "17",
    name: "Kiwi",
    image: imageByIndex(22),
    price: "$9.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "18",
    name: "Cantaloupe",
    image: imageByIndex(23),
    price: "$10.50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "19",
    name: "Pear",
    image: imageByIndex(24),
    price: "$5.80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "20",
    name: "Blackberry",
    image: imageByIndex(25),
    price: "$8.75",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "21",
    name: "Pomegranate",
    image: imageByIndex(26),
    price: "$12.80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "22",
    name: "Grapefruit",
    image: imageByIndex(27),
    price: "$4.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "23",
    name: "Dragon Fruit",
    image: imageByIndex(28),
    price: "$14.50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "24",
    name: "Passion Fruit",
    image: imageByIndex(29),
    price: "$11.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "25",
    name: "Cucumber",
    image: imageByIndex(30),
    price: "$2.50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "26",
    name: "Sony WH-CH710N Wireless Headphones",
    image: imageByIndex(31),
    price: 149.99,
    description:
      "Wireless over-ear headphones with noise cancellation and up to 35 hours of battery life.",
  },
  {
    productId: "27",
    name: "Samsung Galaxy Tab S7+",
    image: imageByIndex(32),
    price: 849.99,
    description:
      "An advanced Android tablet with a stunning AMOLED display and S Pen support.",
  },
  {
    productId: "28",
    name: "Sony A7 III Mirrorless Camera",
    image: imageByIndex(33),
    price: 1999,
    description:
      "A full-frame mirrorless camera with 24.2MP resolution and 4K video recording.",
  },
  {
    productId: "29",
    name: "Bose QuietComfort Earbuds",
    image: imageByIndex(34),
    price: 279,
    description:
      "True wireless earbuds with world-class noise cancellation and clear audio.",
  },
  {
    productId: "30",
    name: "LG OLED C1 Series 4K TV",
    image: imageByIndex(35),
    price: 1899,
    description:
      "An OLED TV with AI ThinQ, Dolby Vision IQ, and Dolby Atmos for immersive viewing.",
  },
  {
    productId: "31",
    name: "Garmin Fenix 7X Sapphire Solar",
    image: imageByIndex(36),
    price: 999.99,
    description:
      "A premium multisport GPS smartwatch with solar charging and advanced health metrics.",
  },
  {
    productId: "32",
    name: "KitchenAid Artisan Stand Mixer",
    image: imageByIndex(37),
    price: 379.99,
    description: "A versatile stand mixer for baking and cooking enthusiasts.",
  },
  {
    productId: "33",
    name: "Microsoft Surface Laptop 4",
    image: imageByIndex(38),
    price: 1299,
    description:
      "A sleek and powerful laptop with touchscreen and Intel or AMD processor options.",
  },
  {
    productId: "34",
    name: "Canon EOS RP Mirrorless Camera",
    image: imageByIndex(39),
    price: 999,
    description:
      "A lightweight and compact full-frame mirrorless camera for photography enthusiasts.",
  },
  {
    productId: "35",
    name: "Apple iPad Air (5th Generation)",
    image: imageByIndex(40),
    price: 599,
    description:
      "The latest iPad Air with a stunning Liquid Retina display and A15 Bionic chip.",
  },
  {
    productId: "36",
    name: "Dyson Airwrap Styler",
    image: imageByIndex(41),
    price: 549.99,
    description:
      "A hair styling tool that uses air to curl, wave, smooth, and dry hair.",
  },
  {
    productId: "37",
    name: "Sony PlayStation VR2",
    image: imageByIndex(42),
    price: 299.99,
    description:
      "Immersive virtual reality headset for PlayStation 5 with stunning graphics and intuitive controls.",
  },
  {
    productId: "38",
    name: "Samsung Galaxy Watch 4 Classic",
    image: imageByIndex(43),
    price: 349.99,
    description:
      "A premium smartwatch with rotating bezel, health tracking, and ECG monitoring.",
  },
  {
    productId: "39",
    name: "LG UltraGear 27GN950-B Gaming Monitor",
    image: imageByIndex(44),
    price: 899.99,
    description:
      "A high-performance gaming monitor with 4K resolution and fast refresh rate.",
  },
  {
    productId: "40",
    name: "Sonos Beam Smart Soundbar",
    image: imageByIndex(45),
    price: 399,
    description:
      "A compact smart soundbar for TV, music, and more with built-in voice control.",
  },
  {
    productId: "41",
    name: "Nikon Z7 II Mirrorless Camera",
    image: imageByIndex(46),
    price: 2999,
    description:
      "A professional mirrorless camera with 45.7MP resolution and 4K UHD video recording.",
  },
  {
    productId: "42",
    name: "Samsung Odyssey G9 Curved Gaming Monitor",
    image: imageByIndex(47),
    price: 1699.99,
    description:
      "An ultra-wide gaming monitor with 240Hz refresh rate and QLED technology.",
  },
  {
    productId: "43",
    name: "Apple AirPods Pro",
    image: imageByIndex(48),
    price: 249,
    description:
      "Active noise-cancelling wireless earbuds with transparency mode and customizable fit.",
  },
  {
    productId: "44",
    name: "Logitech MX Master 3 Wireless Mouse",
    image: imageByIndex(49),
    price: 99.99,
    description:
      "A high-precision ergonomic mouse with customizable buttons and fast scrolling.",
  },
  {
    productId: "45",
    name: "Google Pixel 6 Pro",
    image: imageByIndex(50),
    price: 899,
    description:
      "Google's flagship smartphone with advanced camera features and 5G capability.",
  },
  {
    productId: "46",
    name: "Razer BlackWidow V3 Mechanical Gaming Keyboard",
    image: imageByIndex(51),
    price: 139.99,
    description:
      "A durable mechanical gaming keyboard with customizable RGB lighting and programmable keys.",
  },
];

export const productSpecifications = [
  { id: 1, name: "Brand", value: "ExampleBrand" },
  { id: 2, name: "Model", value: "ExampleModel" },
  { id: 3, name: "Dimensions", value: "10 x 5 x 3 inches" },
  { id: 4, name: "Weight", value: "1.5 lbs" },
  { id: 5, name: "Color", value: "Black" },
  { id: 6, name: "Material", value: "Plastic" },
  { id: 7, name: "Screen Size", value: "6.5 inches" },
  { id: 8, name: "Resolution", value: "1080 x 2400 pixels" },
  { id: 9, name: "Battery Life", value: "10 hours" },
  { id: 10, name: "Charging Time", value: "2 hours" },
  { id: 11, name: "Processor", value: "Octa-core 2.0 GHz" },
  { id: 12, name: "RAM", value: "4 GB" },
  { id: 13, name: "Storage Capacity", value: "128 GB" },
  { id: 14, name: "Expandable Storage", value: "Up to 256 GB" },
  { id: 15, name: "Operating System", value: "Android 11" },
  { id: 16, name: "Camera", value: "12 MP" },
  { id: 17, name: "Front Camera", value: "8 MP" },
  { id: 18, name: "Bluetooth", value: "5.0" },
  { id: 19, name: "WiFi", value: "802.11 a/b/g/n/ac" },
  { id: 20, name: "NFC", value: "Yes" },
  { id: 21, name: "USB Type", value: "USB-C" },
  { id: 22, name: "Audio Jack", value: "3.5mm" },
  { id: 23, name: "Water Resistance", value: "IP68" },
  { id: 24, name: "Warranty", value: "1 year" },
  { id: 25, name: "Country of Origin", value: "USA" },
  { id: 26, name: "Release Date", value: "January 2023" },
  { id: 27, name: "Price", value: "$499" },
  { id: 28, name: "Ratings", value: "4.5/5" },
  { id: 29, name: "Reviews", value: "1500 reviews" },
  { id: 30, name: "In Stock", value: "Yes" },
];

export const productVariants = [
  {
    id: 1,
    colors: [
      "Black",
      "Dark Gray",
      "Charcoal",
      "Slate",
      "Onyx",
      "Midnight",
      "Ebony",
      "Graphite",
      "Jet Black",
      "Coal",
    ],
    material: "Silicone",
    pattern: "Solid",
    design: "Plain",
    compatibility: "iPhone 11",
  },
  {
    id: 2,
    colors: [
      "White",
      "Snow",
      "Ivory",
      "Pearl",
      "Alabaster",
      "Cream",
      "Bone",
      "Linen",
      "Cotton",
      "Vanilla",
    ],
    material: "Silicone",
    pattern: "Solid",
    design: "Plain",
    compatibility: "iPhone 11 Pro",
  },
  {
    id: 3,
    colors: [
      "Red",
      "Crimson",
      "Scarlet",
      "Ruby",
      "Burgundy",
      "Carmine",
      "Cherry",
      "Brick",
      "Sangria",
      "Garnet",
    ],
    material: "Silicone",
    pattern: "Solid",
    design: "Plain",
    compatibility: "iPhone 11 Pro Max",
  },
  {
    id: 4,
    colors: [
      "Blue",
      "Navy",
      "Azure",
      "Cobalt",
      "Sapphire",
      "Sky",
      "Cerulean",
      "Teal",
      "Indigo",
      "Royal",
    ],
    material: "Silicone",
    pattern: "Solid",
    design: "Plain",
    compatibility: "iPhone 12",
  },
  {
    id: 5,
    colors: [
      "Pink",
      "Rose",
      "Blush",
      "Fuchsia",
      "Magenta",
      "Salmon",
      "Coral",
      "Bubblegum",
      "Peony",
      "Flamingo",
    ],
    material: "Silicone",
    pattern: "Solid",
    design: "Plain",
    compatibility: "iPhone 12 Pro",
  },
  {
    id: 6,
    colors: [
      "Green",
      "Forest",
      "Olive",
      "Moss",
      "Emerald",
      "Lime",
      "Jade",
      "Sage",
      "Hunter",
      "Mint",
    ],
    material: "Silicone",
    pattern: "Solid",
    design: "Plain",
    compatibility: "iPhone 12 Pro Max",
  },
  {
    id: 7,
    colors: [
      "Yellow",
      "Gold",
      "Mustard",
      "Amber",
      "Sunshine",
      "Butter",
      "Lemon",
      "Honey",
      "Canary",
      "Maize",
    ],
    material: "Silicone",
    pattern: "Solid",
    design: "Plain",
    compatibility: "iPhone 13",
  },
  {
    id: 8,
    colors: [
      "Purple",
      "Lavender",
      "Violet",
      "Lilac",
      "Plum",
      "Orchid",
      "Grape",
      "Mauve",
      "Eggplant",
      "Periwinkle",
    ],
    material: "Silicone",
    pattern: "Solid",
    design: "Plain",
    compatibility: "iPhone 13 Pro",
  },
  {
    id: 9,
    colors: [
      "Transparent",
      "Clear",
      "Crystal",
      "Glass",
      "Translucent",
      "Frosted",
      "See-through",
      "Lucid",
      "Diaphanous",
      "Limpid",
    ],
    material: "Silicone",
    pattern: "Clear",
    design: "Plain",
    compatibility: "iPhone 13 Pro Max",
  },
  {
    id: 10,
    colors: [
      "Black",
      "Dark Brown",
      "Espresso",
      "Chocolate",
      "Coffee",
      "Mahogany",
      "Walnut",
      "Chestnut",
      "Bronze",
      "Sepia",
    ],
    material: "Leather",
    pattern: "Solid",
    design: "Plain",
    compatibility: "iPhone 14",
  },
  {
    id: 11,
    colors: [
      "Black",
      "Gray",
      "White",
      "Silver",
      "Gold",
      "Rose Gold",
      "Bronze",
      "Copper",
      "Platinum",
      "Titanium",
    ],
    material: "Plastic",
    pattern: "Solid",
    design: "Logo",
    compatibility: "iPhone 14 Pro",
  },
  {
    id: 12,
    colors: [
      "White",
      "Black",
      "Red",
      "Blue",
      "Green",
      "Yellow",
      "Orange",
      "Purple",
      "Pink",
      "Rainbow",
    ],
    material: "Plastic",
    pattern: "Solid",
    design: "Logo",
    compatibility: "iPhone 14 Pro Max",
  },
  {
    id: 13,
    colors: [
      "Red",
      "Blue",
      "Green",
      "Yellow",
      "Purple",
      "Pink",
      "Orange",
      "White",
      "Black",
      "Gray",
    ],
    material: "Plastic",
    pattern: "Solid",
    design: "Logo",
    compatibility: "iPhone 15",
  },
  {
    id: 14,
    colors: [
      "Blue",
      "Red",
      "Yellow",
      "Green",
      "Black",
      "White",
      "Purple",
      "Orange",
      "Pink",
      "Gray",
    ],
    material: "Plastic",
    pattern: "Solid",
    design: "Logo",
    compatibility: "iPhone 15 Pro",
  },
  {
    id: 15,
    colors: [
      "Pink",
      "Blue",
      "Purple",
      "Red",
      "Green",
      "Yellow",
      "Orange",
      "Black",
      "White",
      "Gray",
    ],
    material: "Plastic",
    pattern: "Solid",
    design: "Logo",
    compatibility: "iPhone 15 Pro Max",
  },

  {
    id: 16,
    colors: [
      "Green",
      "Blue",
      "Red",
      "Yellow",
      "Purple",
      "Orange",
      "Pink",
      "Black",
      "White",
      "Gray",
    ],
    material: "Plastic",
    pattern: "Solid",
    design: "Logo",
    compatibility: "iPhone 15 Plus",
  },
];

export const productGrids: PRODUCTS_GRID[] = [];

const productsPerGrid = [4, 6];
let currentIndex = 0;
let gridIndex = 1;

while (currentIndex < productList.length) {
  const gridProducts: PRODUCTS[] = [];
  let addMoreProducts = true;

  for (const count of productsPerGrid) {
    if (currentIndex + count <= productList.length) {
      const productGroup = productList.slice(
        currentIndex,
        currentIndex + count
      );
      gridProducts.push(...productGroup);
      currentIndex += count;
    } else {
      addMoreProducts = false;
      break;
    }
  }

  if (addMoreProducts) {
    const grid: PRODUCTS_GRID = {
      gridId: `grid${gridIndex}`,
      title: `Product Grid ${gridIndex}`,
      cta: currentIndex % 2 === 0 ? "Shop Now" : "See all deals",
      image: gridProducts[0].image, // Assuming the grid image is the image of the first product in the slice
      products: [
        gridProducts.slice(0, 4), // First 4 products
        gridProducts.slice(4, 10), // Next 6 products
      ],
    };

    productGrids.push(grid);
    gridIndex++;
  } else {
    break;
  }
}

export const homeProductList: PRODUCTS_FOR_HOME[] = [];

const adsPerSet = 1;
const productsPerSet = 10;

for (let i = 0; i < Math.ceil(productList.length / productsPerSet); i++) {
  const adsSlice = adsPreview.slice(i * adsPerSet, (i + 5) * adsPerSet);
  const productsSlice = productList.slice(
    i * productsPerSet,
    (i + 1) * productsPerSet
  );
  const productsGridSlice = productGrids[i];
  const goodSlice =
    productsSlice.length === productsPerSet ||
    productsSlice.length === productsPerSet / 2;
  const moreThenHalf =
    productsSlice.length >= productsPerSet / 2 ? productsSlice.slice(0, 5) : [];

  const homeProduct: PRODUCTS_FOR_HOME = {
    products: goodSlice ? productsSlice : moreThenHalf,
    ads: adsSlice.length > 0 ? adsSlice : undefined,
    productsGrid: productsGridSlice ? productsGridSlice : undefined,
  };

  homeProductList.push(homeProduct);
}

export const getProductVariant = (
  field: keyof (typeof productVariants)[number]
) => Array.from(new Set(productVariants.map((product) => product[field])));

export const getProductColors = (id: number) =>
  productVariants.find((product) => product.id === id)?.colors;

export default productList;
