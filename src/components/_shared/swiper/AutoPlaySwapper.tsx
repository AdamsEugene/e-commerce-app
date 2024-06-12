"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
import StyledImage from "../Styled/StyledImage";
import imageByIndex from "@/src/utils/imageByIndex";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

export default function AutoPlaySwapper() {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      loop={true}
      //   autoplay={{
      //     delay: 5000,
      //     disableOnInteraction: true,
      //     pauseOnMouseEnter: true,
      //   }}
      navigation={{
        prevEl: ".custom-prev",
        nextEl: ".custom-next",
      }}
      modules={[Autoplay, Navigation]}
      className="max-w-[1180px] xs:max-w-[100%] w-full"
    >
      <SwiperSlide>
        <Card className="w-full h-36 xs:h-28 relative flex">
          <CardBody className="product_image_big_wrapper overflow-visible p-0">
            <div className="w-full h-36 xs:h-28 relative flex justify-between ads-banner">
              <div></div>
              <div className="h-36 xs:h-28 w-[66%]">
                <Image
                  alt={"data.headline"}
                  className="!h-36 xs:h-28 w-full object-cover rounded-r-none ml-auto"
                  as={StyledImage}
                  height={112}
                  src={imageByIndex(0)}
                  width={300}
                  isZoomed
                />
              </div>
              <div
                className="flex flex-col w-[50%] h-full absolute top-0 left-0 items-start text-left p-2 justify-between z-10 clip-path-wrapper bg-default-50"
                style={{ background: "" }}
              >
                <p className="text-xs max-w-[90%]" style={{ color: "" }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                  quibusdam consectetur maiores! Porro, tempore ipsa quisquam
                  ipsam error, saepe accusantium ex nesciunt illum voluptate
                  cumque magnam nihil totam quasi debitis?
                </p>
                <h1 className="font-bold" style={{ color: "" }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h1>
                <Button size="sm" style={{ background: "" }}>
                  <span style={{ color: "" }}>Buy Now</span>
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="w-full h-36 xs:h-28 relative flex">
          <CardBody className="product_image_big_wrapper overflow-visible p-0">
            <div className="w-full h-36 xs:h-28 relative flex justify-between ads-banner">
              <div></div>
              <div className="h-36 xs:h-28 w-[66%]">
                <Image
                  alt={"data.headline"}
                  className="!h-36 xs:h-28 w-full object-cover rounded-r-none ml-auto"
                  as={StyledImage}
                  height={112}
                  src={imageByIndex(24)}
                  width={300}
                  isZoomed
                />
              </div>
              <div
                className="flex flex-col w-[50%] h-full absolute top-0 left-0 items-start text-left p-2 justify-between z-10 clip-path-wrapper bg-default-50"
                style={{ background: "" }}
              >
                <p className="text-xs max-w-[90%]" style={{ color: "" }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                  quibusdam consectetur maiores! Porro, tempore ipsa quisquam
                  ipsam error, saepe accusantium ex nesciunt illum voluptate
                  cumque magnam nihil totam quasi debitis?
                </p>
                <h1 className="font-bold" style={{ color: "" }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h1>
                <Button size="sm" style={{ background: "" }}>
                  <span style={{ color: "" }}>Buy Now</span>
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="w-full h-36 xs:h-28 relative flex">
          <CardBody className="product_image_big_wrapper overflow-visible p-0">
            <div className="h-36 xs:h-28 w-[66%]">
              <Image
                alt={"data.headline"}
                className="h-36 xs:h-28 w-full object-cover rounded-r-none"
                as={StyledImage}
                height={112}
                src={imageByIndex(16)}
                width={300}
                isZoomed
              />
            </div>
            <div
              className="flex flex-col w-[50%] h-full absolute top-0 right-0 clip-path-wrapper-right-con items-end text-end p-2 justify-between z-10 bg-default-50"
              style={{ background: "" }}
            >
              <div className="flex items-center w-full gap-3 justify-end">
                <Button size="sm" style={{ background: "" }}>
                  <span style={{ color: "" }}>Buy Now</span>
                </Button>
              </div>
              <h1 className="font-bold" style={{ color: "" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing
              </h1>
              <p className="text-xs max-w-[90%]" style={{ color: "" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                animi laboriosam quam, ipsam assumenda neque autem dicta error
                maiores. Eos adipisci animi a tempore molestiae ut libero nisi
                corporis? Hic.
              </p>
            </div>
          </CardBody>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="w-full h-36 xs:h-28 relative flex overflow-hidden">
          <CardBody className="product_image_big_wrapper overflow-visible p-0">
            <div className="h-full w-full">
              <Image
                alt={"data.headline"}
                className="h-36 xs:h-28 w-full object-cover rounded-r-none"
                as={StyledImage}
                height={112}
                src={imageByIndex(9)}
                width={500}
                isZoomed
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-20 backdrop-blur-md backdrop-filter rounded-lg z-20 pointer-events-none"></div>
            <div
              className="flex flex-col w-full h-full absolute top-0 left-0 items-start text-left p-2 justify-between z-10 pointer-events-none"
              style={{ background: "" }}
            >
              <h1 className="font-bold" style={{ color: "" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p className="text-xs max-w-[90%]" style={{ color: "" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
                officia sit! A blanditiis et error soluta, quod alias ipsum?
                Molestias explicabo ducimus placeat, minus sit tenetur
                blanditiis saepe vel asperiores.
              </p>
              <div className="flex items-center justify-between w-full">
                <div></div>
                <div className="flex items-center w-full gap-3 justify-end">
                  <Button
                    size="sm"
                    className="pointer-events-auto"
                    style={{ background: "" }}
                  >
                    <span
                      style={{
                        color: "",
                      }}
                    >
                      Buy Now
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </SwiperSlide>
      <Button
        isIconOnly
        radius="full"
        variant="faded"
        color="secondary"
        className="custom-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
      >
        <MdOutlineArrowBackIos className="text-xl" />
      </Button>
      <Button
        isIconOnly
        radius="full"
        variant="faded"
        color="secondary"
        className="custom-next absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
      >
        <MdOutlineArrowForwardIos className="text-xl" />
      </Button>
    </Swiper>
  );
}
