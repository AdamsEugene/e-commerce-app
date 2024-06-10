import imageByIndex from "./imageByIndex";

export type PRODUCTS = {
  productId: string;
  name: string;
  image: any;
  price: string | number;
  description: string;
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
  // { productId: "26", name: "Papaya", image: imageByIndex(31), price: "$6.80" },
  // Add 4 more items...
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

export default productList;
