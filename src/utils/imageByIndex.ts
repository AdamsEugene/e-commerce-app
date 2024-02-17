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
  "/assets/images/image1.jpg",
  "/assets/images/image2.jpg",
  "/assets/images/image3.jpg",
  "/assets/images/image4.jpg",
  "/assets/images/image5.jpg",
  "/assets/images/image6.jpg",
  "/assets/images/image7.jpg",
  "/assets/images/image8.jpg",
  "/assets/images/image9.jpg",
  "/assets/images/image10.jpg",
  "/assets/images/image11.jpg",
  "/assets/images/image12.jpg",
  "/assets/images/image13.jpg",
  "/assets/images/image14.jpg",
  "/assets/images/image15.jpg",
  "/assets/images/image16.jpg",
  "/assets/images/image17.jpg",
  "/assets/images/image18.jpg",
  "/assets/images/image19.jpg",
  "/assets/images/image20.jpg",
  "/assets/images/image21.jpg",
  "/assets/images/image22.jpg",
  "/assets/images/image23.jpg",
];

const imageByIndex = (index: number) => images[index % images.length] as any;

export default imageByIndex;
