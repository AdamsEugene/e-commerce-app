"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
  convertToPixelCrop,
} from "react-image-crop";
import { Divider, Slider, Switch } from "@nextui-org/react";

import "react-image-crop/dist/ReactCrop.css";
import { canvasPreview } from "./canvasPreview";
import { useDebounceEffect } from "@/src/hooks/useDebounceEffect";
import ConditionalRenderAB from "../Conditional/ConditionalRenderAB";
import { imgPreview } from "./imagePreviw";

type PROPS = {
  imgSrc?: string;
};

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

export default function ObjectCrop(props: PROPS) {
  const { imgSrc } = props;
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const hiddenAnchorRef = useRef<HTMLAnchorElement>(null);
  const blobUrlRef = useRef("");
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState<number | undefined>(16 / 9);
  const [circularCrop, setCircularCrop] = useState(false);
  const previewImage = useRef("");

  // function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setCrop(undefined); // Makes crop preview update between images.
  //     const reader = new FileReader();
  //     reader.addEventListener("load", () =>
  //       setImgSrc(reader.result?.toString() || "")
  //     );
  //     reader.readAsDataURL(e.target.files[0]);
  //   }
  // }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  async function onDownloadCropClick() {
    const image = imgRef.current;
    const previewCanvas = previewCanvasRef.current;
    if (!image || !previewCanvas || !completedCrop) {
      throw new Error("Crop canvas does not exist");
    }

    // This will size relative to the uploaded image
    // size. If you want to size according to what they
    // are looking at on screen, remove scaleX + scaleY
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const offscreen = new OffscreenCanvas(
      completedCrop.width * scaleX,
      completedCrop.height * scaleY
    );
    const ctx = offscreen.getContext("2d");
    if (!ctx) {
      throw new Error("No 2d context");
    }

    ctx.drawImage(
      previewCanvas,
      0,
      0,
      previewCanvas.width,
      previewCanvas.height,
      0,
      0,
      offscreen.width,
      offscreen.height
    );
    // You might want { type: "image/jpeg", quality: <0 to 1> } to
    // reduce image size
    const blob = await offscreen.convertToBlob({
      type: "image/png",
    });

    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
    }
    blobUrlRef.current = URL.createObjectURL(blob);

    if (hiddenAnchorRef.current) {
      hiddenAnchorRef.current.href = blobUrlRef.current;
      hiddenAnchorRef.current.click();
    }
  }

  useDebounceEffect(
    async () => {
      if (completedCrop?.width && completedCrop?.height && imgRef.current) {
        // We use canvasPreview as it's much faster than imgPreview.
        previewImage.current = await imgPreview(
          imgRef.current,
          // previewCanvasRef.current,
          completedCrop,
          scale,
          rotate
        );
      }
    },
    100,
    [completedCrop, scale, rotate]
  );

  function handleToggleAspectClick(isSelected: boolean) {
    if (isSelected) {
      setAspect(undefined);
    } else {
      setAspect(16 / 9);

      if (imgRef.current) {
        const { width, height } = imgRef.current;
        const newCrop = centerAspectCrop(width, height, 16 / 9);
        setCrop(newCrop);
        // Updates the preview
        setCompletedCrop(convertToPixelCrop(newCrop, width, height));
      }
    }
  }

  // console.log(previewImage.current);

  return (
    <div className="flex flex-col gap-4">
      <ConditionalRenderAB
        condition={!!imgSrc}
        ComponentA={
          <ReactCrop
            crop={crop}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            aspect={aspect}
            // minWidth={400}
            minHeight={100}
            className="w-full"
            circularCrop={circularCrop}
          >
            <Image
              height={300}
              width={300}
              ref={imgRef}
              alt="Crop me"
              src={imgSrc!}
              style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
              onLoad={onImageLoad}
              className="w-full"
            />
          </ReactCrop>
        }
        ComponentB={
          <div className="min-h-[300px] w-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-6">
              <Image
                src="/assets/svgs/empty.svg"
                alt=" No image selected"
                height={300}
                width={300}
              />
              <p className="text-lg font-semibold text-gray-600">
                No image selected
              </p>
            </div>
          </div>
        }
      />
      <Divider />
      <div className="flex flex-col gap-4">
        <Slider
          label="Scale"
          size="sm"
          color="secondary"
          step={0.01}
          value={scale}
          maxValue={5}
          minValue={-5}
          fillOffset={0}
          defaultValue={1}
          className="w-full"
          formatOptions={{ signDisplay: "always" }}
          onChange={(e) => setScale(Number(e))}
          isDisabled={!imgSrc}
        />
        <Slider
          label="Rotate"
          size="sm"
          color="secondary"
          step={0.01}
          value={rotate}
          maxValue={180}
          minValue={-180}
          fillOffset={0}
          defaultValue={0}
          className="w-full"
          formatOptions={{ signDisplay: "always" }}
          onChange={(e) => setRotate(Math.min(180, Math.max(-180, Number(e))))}
          isDisabled={!imgSrc}
        />
        <div className="flex items-center justify-between w-full">
          <Switch
            color="secondary"
            size="sm"
            onValueChange={handleToggleAspectClick}
            isDisabled={!imgSrc}
          >
            Toggle Aspect
          </Switch>
          <Switch
            color="secondary"
            size="sm"
            onValueChange={setCircularCrop}
            isDisabled={!imgSrc}
          >
            Circular Crop
          </Switch>
        </div>
      </div>
      {!!completedCrop && (
        <>
          {/* <div>
            <canvas
              ref={previewCanvasRef}
              style={{
                border: "1px solid black",
                objectFit: "contain",
                width: completedCrop.width,
                height: completedCrop.height,
              }}
            />
          </div> */}
          {/* <div>
            <button onClick={onDownloadCropClick}>Download Crop</button>
            <div style={{ fontSize: 12, color: "#666" }}>
              If you get a security error when downloading try opening the
              Preview in a new tab (icon near top right).
            </div>
            <a
              href="#hidden"
              ref={hiddenAnchorRef}
              download
              style={{
                position: "absolute",
                top: "-200vh",
                visibility: "hidden",
              }}
            >
              Hidden download
            </a>
          </div> */}
        </>
      )}
    </div>
  );
}
