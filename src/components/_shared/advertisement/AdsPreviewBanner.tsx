import imageByIndex from "@/src/utils/imageByIndex";
import { Button, Card, CardBody, Image, Tooltip } from "@nextui-org/react";
import { IoPencil } from "react-icons/io5";
import StyledImage from "../Styled/StyledImage";
import { IconWrapper } from "../IconWrapper";

const editText = 'Edit background, Headline, Description and CTA color'

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
            <div className="flex items-center w-full gap-3 justify-end">
              <Tooltip showArrow={true} content={editText}>
                <IconWrapper className="bg-primary/10 text-primary cursor-pointer hover:bg-primary/30 transition duration-300 ease-in-out">
                  <IoPencil />
                </IconWrapper>
              </Tooltip>
              <Button size="sm">Shop Now</Button>
            </div>
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
              <div className="flex items-center w-full gap-3">
                <Button size="sm">Shop Now</Button>
                <Tooltip showArrow={true} content={editText}>
                  <IconWrapper className="bg-primary/10 text-primary cursor-pointer hover:bg-primary/30 transition duration-300 ease-in-out">
                    <IoPencil />
                  </IconWrapper>
                </Tooltip>
              </div>
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
              <div className="flex items-center w-full gap-3 justify-end">
                <Tooltip showArrow={true} content={editText}>
                  <IconWrapper className="bg-primary/10 text-primary cursor-pointer hover:bg-primary/30 transition duration-300 ease-in-out pointer-events-auto">
                    <IoPencil />
                  </IconWrapper>
                </Tooltip>
                <Button size="sm" className="pointer-events-auto">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
