"use client";

import { useTheme } from "next-themes";
import { Button, Card, CardBody, Image, Tooltip } from "@nextui-org/react";
import { IoPencil } from "react-icons/io5";
import imageByIndex from "@/src/utils/imageByIndex";
import StyledImage from "../Styled/StyledImage";
import { IconWrapper } from "../others/IconWrapper";
import Constant from "@/src/config/constants";
import { useAppStore } from "@/src/providers/AppStoreProvider";

type PROPS = {
  handleEditClick: (colorKey: string) => void;
};

const editText = "Edit background, Headline, Description and CTA color";

export default function AdsPreviewBanner(props: PROPS) {
  const { handleEditClick } = props;

  const { theme } = useTheme();
  const adColor = useAppStore((state) => state.adColor);

  const getColor = (
    field: keyof (typeof adColor)[string]["dark"],
    key: string
  ) => {
    return theme === "light"
      ? (adColor[`${theme}_${key}`] || adColor["default"]).light[field] ||
          adColor["default"].light[field]
      : (adColor[`${theme}_${key}`] || adColor["default"]).dark[field] ||
          adColor["default"].dark[field];
  };

  // console.log(adColor);

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
          <div
            className="flex flex-col w-[50%] h-full absolute top-0 right-0 clip-path-wrapper-right-con items-end text-end p-2 justify-between z-10"
            style={{
              background: getColor("Background", Constant.colorKeys.banner.one),
            }}
          >
            <div className="flex items-center w-full gap-3 justify-end">
              <Tooltip showArrow={true} content={editText}>
                <IconWrapper
                  onClick={() => handleEditClick(Constant.colorKeys.banner.one)}
                  className="bg-primary/10 text-primary cursor-pointer hover:bg-primary/30 transition duration-300 ease-in-out"
                >
                  <IoPencil />
                </IconWrapper>
              </Tooltip>
              <Button
                size="sm"
                style={{
                  background: getColor("Button", Constant.colorKeys.banner.one),
                }}
              >
                <span
                  style={{
                    color: getColor(
                      "Button Text",
                      Constant.colorKeys.banner.one
                    ),
                  }}
                >
                  Shop Now
                </span>
              </Button>
            </div>
            <h1
              className="font-bold"
              style={{
                color: getColor("Headline", Constant.colorKeys.banner.one),
              }}
            >
              justify-end
            </h1>
            <p
              className="text-xs max-w-[90%]"
              style={{
                color: getColor("Description", Constant.colorKeys.banner.one),
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit
            </p>
          </div>
        </CardBody>
      </Card>
      <Card className="w-full h-28 relative flex">
        <CardBody className="product_image_big_wrapper overflow-visible p-0">
          <div className="w-full h-28 relative flex justify-between ads-banner">
            <div></div>
            <div className="h-28 w-[80%]">
              <Image
                alt="Woman listing to music"
                className="h-28 w-full object-left-top rounded-r-none ml-auto"
                as={StyledImage}
                height={112}
                src={imageByIndex(13)}
                width={300}
                isZoomed
              />
            </div>
            <div
              className="flex flex-col w-[50%] h-full absolute top-0 left-0 items-start text-left p-2 justify-between z-10 clip-path-wrapper"
              style={{
                background: getColor(
                  "Background",
                  Constant.colorKeys.banner.two
                ),
              }}
            >
              <p
                className="text-xs max-w-[90%]"
                style={{
                  color: getColor("Description", Constant.colorKeys.banner.two),
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
              </p>
              <h1
                className="font-bold"
                style={{
                  color: getColor("Headline", Constant.colorKeys.banner.two),
                }}
              >
                justify-end
              </h1>
              <div className="flex items-center w-full gap-3">
                <Button
                  size="sm"
                  style={{
                    background: getColor(
                      "Button",
                      Constant.colorKeys.banner.two
                    ),
                  }}
                >
                  <span
                    style={{
                      color: getColor(
                        "Button Text",
                        Constant.colorKeys.banner.two
                      ),
                    }}
                  >
                    Shop Now
                  </span>
                </Button>
                <Tooltip showArrow={true} content={editText}>
                  <IconWrapper
                    onClick={() =>
                      handleEditClick(Constant.colorKeys.banner.two)
                    }
                    className="bg-primary/10 text-primary cursor-pointer hover:bg-primary/30 transition duration-300 ease-in-out"
                  >
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
          <div
            className="flex flex-col w-full h-full absolute top-0 left-0 items-start text-left p-2 justify-between z-10 pointer-events-none"
            style={{
              background: `${getColor(
                "Background",
                Constant.colorKeys.banner.three
              )}33`,
            }}
          >
            <h1
              className="font-bold"
              style={{
                color: getColor("Headline", Constant.colorKeys.banner.three),
              }}
            >
              justify-end
            </h1>
            <p
              className="text-xs max-w-[90%]"
              style={{
                color: getColor("Description", Constant.colorKeys.banner.three),
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit
            </p>
            <div className="flex items-center justify-between w-full">
              <div></div>
              <div className="flex items-center w-full gap-3 justify-end">
                <Tooltip showArrow={true} content={editText}>
                  <IconWrapper
                    onClick={() =>
                      handleEditClick(Constant.colorKeys.banner.three)
                    }
                    className="bg-primary/10 text-primary cursor-pointer hover:bg-primary/30 transition duration-300 ease-in-out pointer-events-auto"
                  >
                    <IoPencil />
                  </IconWrapper>
                </Tooltip>
                <Button
                  size="sm"
                  className="pointer-events-auto"
                  style={{
                    background: getColor(
                      "Button",
                      Constant.colorKeys.banner.three
                    ),
                  }}
                >
                  <span
                    style={{
                      color: getColor(
                        "Button Text",
                        Constant.colorKeys.banner.three
                      ),
                    }}
                  >
                    Shop Now
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
