import imageByIndex from "./imageByIndex";

export type PRODUCTS = {
  productId: string;
  title: string;
  img: any;
  price: string;
  description: string;
};

const productList: PRODUCTS[] = [
  {
    productId: "1",
    title: "Orange",
    img: imageByIndex(6),
    price: "$5.50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "2",
    title: "Tangerine",
    img: imageByIndex(7),
    price: "$3.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "3",
    title: "Raspberry",
    img: imageByIndex(8),
    price: "$10.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "4",
    title: "Lemon",
    img: imageByIndex(9),
    price: "$5.30",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "5",
    title: "Avocado",
    img: imageByIndex(10),
    price: "$15.70",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "6",
    title: "Lemon 2",
    img: imageByIndex(11),
    price: "$8.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "7",
    title: "Banana",
    img: imageByIndex(12),
    price: "$7.50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "8",
    title: "Watermelon",
    img: imageByIndex(13),
    price: "$12.20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "9",
    title: "Grapes",
    img: imageByIndex(14),
    price: "$9.99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "10",
    title: "Strawberry",
    img: imageByIndex(15),
    price: "$6.50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "11",
    title: "Pineapple",
    img: imageByIndex(16),
    price: "$8.50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "12",
    title: "Blueberry",
    img: imageByIndex(17),
    price: "$11.50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "13",
    title: "Mango",
    img: imageByIndex(18),
    price: "$13.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "14",
    title: "Peach",
    img: imageByIndex(19),
    price: "$4.50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "15",
    title: "Cherry",
    img: imageByIndex(20),
    price: "$7.75",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "16",
    title: "Plum",
    img: imageByIndex(21),
    price: "$6.20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "17",
    title: "Kiwi",
    img: imageByIndex(22),
    price: "$9.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "18",
    title: "Cantaloupe",
    img: imageByIndex(23),
    price: "$10.50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "19",
    title: "Pear",
    img: imageByIndex(24),
    price: "$5.80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "20",
    title: "Blackberry",
    img: imageByIndex(25),
    price: "$8.75",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "21",
    title: "Pomegranate",
    img: imageByIndex(26),
    price: "$12.80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "22",
    title: "Grapefruit",
    img: imageByIndex(27),
    price: "$4.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "23",
    title: "Dragon Fruit",
    img: imageByIndex(28),
    price: "$14.50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "24",
    title: "Passion Fruit",
    img: imageByIndex(29),
    price: "$11.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  {
    productId: "25",
    title: "Cucumber",
    img: imageByIndex(30),
    price: "$2.50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis malesuada. Vestibulum et ante vitae eros malesuada vulputate. Sed vel ultrices risus. Nullam vel purus non nunc suscipit aliquam ut a urna. Proin ut euismod mi. Phasellus fringilla ligula at ultrices laoreet. Sed nec hendrerit nulla. Fusce vel laoreet sem. Duis in justo a dolor tristique eleifend eu id elit. Nunc vulputate massa ac ultricies dictum. Nullam interdum pellentesque suscipit. Sed malesuada ex nec posuere auctor. Nullam eget sem ac metus sagittis sagittis. In hac habitasse platea dictumst.",
  },
  // { productId: "26", title: "Papaya", img: imageByIndex(31), price: "$6.80" },
  // Add 4 more items...
];

export default productList;
