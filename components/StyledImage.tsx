"ues client";

import React from "react";
import { Image, ImageProps } from "@nextui-org/react";
import NextImage from "next/image";

export default function StyledImage(props: ImageProps) {
  const { src, alt, ...others } = props;
  return (
    <Image as={NextImage} src={src} alt={alt || "no alt for now"} {...others} />
  );
}
