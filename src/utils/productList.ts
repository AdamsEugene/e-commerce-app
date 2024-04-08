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

export default productList;
