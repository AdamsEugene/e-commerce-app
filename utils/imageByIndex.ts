// import image5 from .   ;
// import image6 from .   ;
// import image7 from .   ;
// import image8 from .   ;
// import image9 from .   ;
// import image10 from .   ;
// import image11 from .   ;
// import image12 from .   ;
// import image13 from .   ;
// import image14 from  .   ;
// import image15 from  .   ;
// import image16 from  .   ;
// import image17 from  .   ;
// import image18 from  .   ;
// import image19 from  .   ;
// import image20 from  .   ;
// import image21 from  .   ;
// import image22 from  .   ;
// import image23 from  .   ;
// import image24 from  .   ;
// import image25 from  .   ;
// import image26 from  .   ;
// import image27 from  .   ;

export const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image8.jpg",
  "/images/image9.jpg",
  "/images/image10.jpg",
  "/images/image11.jpg",
  "/images/image12.jpg",
  "/images/image13.jpg",
  "/images/image14.jpg",
  "/images/image15.jpg",
  "/images/image16.jpg",
  "/images/image17.jpg",
  "/images/image18.jpg",
  "/images/image19.jpg",
  "/images/image20.jpg",
  "/images/image21.jpg",
  "/images/image22.jpg",
  "/images/image23.jpg",
];

const imageByIndex = (index: number) => images[index % images.length] as any;

export default imageByIndex;
