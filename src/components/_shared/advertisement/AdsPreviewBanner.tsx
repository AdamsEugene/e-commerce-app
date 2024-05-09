import imageByIndex from "@/src/utils/imageByIndex";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
// import Image from "next/image";
import StyledImage from "../Styled/StyledImage";

export default function AdsPreviewBanner() {
  return (
    <div className="flex flex-col gap-4">
      <Card className="w-full h-28 relative flex">
        <CardBody className="product_image_big_wrapper overflow-visible p-0">
          <div className="h-28 w-[80%]">
            <Image
              alt="Woman listing to music"
              className="h-28 w-full object-left-top rounded-r-none"
              as={StyledImage}
              height={112}
              src={imageByIndex(13)}
              width={300}
              isZoomed
            />
          </div>
          <div className="flex flex-col w-[50%] h-full absolute top-0 right-0 clip-path-wrapper-right-con items-end text-end p-2 justify-between z-10 bg-white">
            <Button size="sm">Shop Now</Button>
            <h1 className="font-bold">justify-end</h1>
            <p className="text-xs max-w-[90%]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit
            </p>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody className="product_image_big_wrapper overflow-visible p-0">
          <div className="w-full h-28 relative flex justify-between ads-banner">
            <div></div>
            <Image
              alt="Woman listing to music"
              className="h-28 w-full object-left-top rounded-r-none ml-auto"
              as={StyledImage}
              height={112}
              src={imageByIndex(13)}
              width={300}
              isZoomed
            />
            <div className="flex flex-col w-[50%] h-full absolute top-0 left-0 items-start text-left p-2 justify-between z-10 clip-path-wrapper bg-white">
              <p className="text-xs max-w-[90%]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
              </p>
              <h1 className="font-bold">justify-end</h1>
              <Button size="sm">Shop Now</Button>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className="w-full h-28 relative flex overflow-hidden">
        <CardBody className="product_image_big_wrapper overflow-visible p-0">
          <div className="h-full w-full">
            <Image
              alt="Woman listing to music"
              className="h-28 w-full object-left-top rounded-r-none"
              as={StyledImage}
              height={112}
              src={imageByIndex(13)}
              width={500}
              isZoomed
            />
          </div>
          <div className="absolute inset-0 bg-black opacity-20 backdrop-blur-md backdrop-filter rounded-lg z-20 pointer-events-none"></div>
          <div className="flex flex-col w-full h-full absolute top-0 left-0 items-start text-left p-2 justify-between z-10 pointer-events-none">
            <h1 className="font-bold">justify-end</h1>
            <p className="text-xs max-w-[90%]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit
            </p>
            <div className="flex items-center justify-between w-full">
              <div></div>
              <Button className="!pointer-events-auto" size="sm">
                Shop Now
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
