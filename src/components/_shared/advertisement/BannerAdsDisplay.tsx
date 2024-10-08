"use client";

import Link from "next/link";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
import StyledImage from "../Styled/StyledImage";

import AutoPlaySwapper from "../swiper/AutoPlaySwapper";
import { AdPreview } from "../types/@ads";
import ConditionalRenderAB from "../Conditional/ConditionalRenderAB";
import { siteConfig } from "@/src/config/site";

type PROPS = {
  ads?: AdPreview[];
};

export default function BannerAdsDisplay(props: PROPS) {
  const { ads } = props;

  const Ads = ads?.map((ad, index) => <AdsWrapper {...ad} key={index} />);

  if (!Ads) return null;

  return (
    <div className="w-full max-w-full">
      <AutoPlaySwapper children={Ads} />
    </div>
  );
}

const AdsWrapper = (props: AdPreview) => {
  const { imagePosition } = props;
  return (
    <ConditionalRenderAB
      condition={imagePosition === "left"}
      ComponentA={<ImageOnLeft {...props} />}
      ComponentB={
        <ConditionalRenderAB
          condition={imagePosition === "right"}
          ComponentA={<ImageOnRight {...props} />}
          ComponentB={<FullImage {...props} />}
        />
      }
    />
  );
};

const ImageOnLeft = (props: AdPreview) => {
  const { callToAction, description, url, headline } = props;
  return (
    <Card
      shadow="md"
      isPressable
      className="w-full h-36 xs:h-28 relative bg-default flex"
      as={Link}
      href={{
        pathname: `${siteConfig.pages.products}/${headline}`,
        query: { image: url, ads: true },
      }}
    >
      <CardBody className="product_image_big_wrapper overflow-visible p-0">
        <div className="w-full h-36 xs:h-28 relative flex justify-between ads-banner">
          <div></div>
          <div className="h-36 xs:h-28 w-[66%]">
            <Image
              alt={"data.headline"}
              className="!h-36 xs:h-28 w-full object-cover rounded-r-none ml-auto"
              as={StyledImage}
              height={112}
              src={url}
              width={300}
              isZoomed
            />
          </div>
          <div
            className="flex flex-col w-[50%] h-full absolute top-0 left-0 items-start text-left p-2 justify-between z-10 clip-path-wrapper bg-default-50"
            style={{ background: "" }}
          >
            <p className="text-xs max-w-[90%]" style={{ color: "" }}>
              {description}
            </p>
            <h1 className="font-bold" style={{ color: "" }}>
              {headline}
            </h1>
            <Button
              as={Link}
              href={`${siteConfig.pages.products}/${headline}`}
              onClick={() => {}}
              size="sm"
              style={{ background: "" }}
            >
              <span style={{ color: "" }}>{callToAction}</span>
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const ImageOnRight = (props: AdPreview) => {
  const { callToAction, description, url, headline } = props;
  return (
    <Card
      shadow="md"
      isPressable
      className="w-full h-36 xs:h-28 relative bg-default flex"
      as={Link}
      href={{
        pathname: `${siteConfig.pages.products}/${headline}`,
        query: { image: url, ads: true },
      }}
    >
      <CardBody className="product_image_big_wrapper overflow-visible p-0">
        <div className="h-36 xs:h-28 w-[66%]">
          <Image
            alt={"data.headline"}
            className="!h-36 xs:!h-28 w-full object-cover rounded-r-none"
            as={StyledImage}
            height={112}
            src={url}
            width={300}
            isZoomed
          />
        </div>
        <div
          className="flex flex-col w-[50%] h-full absolute top-0 right-0 clip-path-wrapper-right-con items-end text-end p-2 justify-between z-10 bg-default-50"
          style={{ background: "" }}
        >
          <div className="flex items-center w-full gap-3 justify-end">
            <Button
              as={Link}
              href={`${siteConfig.pages.products}/${headline}`}
              onClick={() => {}}
              size="sm"
              style={{ background: "" }}
            >
              <span style={{ color: "" }}>{callToAction}</span>
            </Button>
          </div>
          <h1 className="font-bold" style={{ color: "" }}>
            {headline}
          </h1>
          <p className="text-xs max-w-[90%]" style={{ color: "" }}>
            {description}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

const FullImage = (props: AdPreview) => {
  const { callToAction, description, url, headline } = props;
  return (
    <Card
      shadow="md"
      isPressable
      className="w-full h-36 xs:h-28 relative bg-default flex overflow-hidden"
      as={Link}
      href={{
        pathname: `${siteConfig.pages.products}/${headline}`,
        query: { image: url, ads: true },
      }}
    >
      <CardBody className="product_image_big_wrapper overflow-visible p-0 h-36 xs:h-28">
        <div className="!h-36 xs:!h-28 w-full">
          <Image
            alt={"data.headline"}
            className="!h-36 xs:!h-28 w-full object-cover rounded-r-none"
            as={StyledImage}
            height={112}
            src={url}
            width={500}
            isZoomed
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-20 backdrop-blur-md backdrop-filter rounded-lg z-20 pointer-events-none"></div>
        <div
          className="flex flex-col w-full h-36 xs:h-28 absolute top-0 left-0 items-start text-left p-2 justify-between z-10 pointer-events-none"
          style={{ background: "" }}
        >
          <h1 className="font-bold" style={{ color: "" }}>
            {headline}
          </h1>
          <p className="text-xs max-w-[90%]" style={{ color: "" }}>
            {description}
          </p>
          <div className="flex items-center justify-between w-full">
            <div></div>
            <div className="flex items-center w-full gap-3 justify-end">
              <Button
                as={Link}
                href={`${siteConfig.pages.products}/${headline}`}
                onClick={() => {}}
                size="sm"
                className="pointer-events-auto"
                style={{ background: "" }}
              >
                <span
                  style={{
                    color: "",
                  }}
                >
                  {callToAction}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
