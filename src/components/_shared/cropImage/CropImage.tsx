"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import ReactCrop, {
  Crop,
  PixelCrop,
  convertToPixelCrop,
} from "react-image-crop";
import { Divider, Slider, Switch } from "@nextui-org/react";
import { Button, ModalBody, ModalFooter, ModalHeader } from "@nextui-org/react";
import { IoCrop } from "react-icons/io5";

import "react-image-crop/dist/ReactCrop.css";
import { imgPreview } from "./imagePreviw";
import { useDebounceEffect } from "@/src/hooks/useDebounceEffect";
import ConditionalRenderAB from "../Conditional/ConditionalRenderAB";
import { centerAspectCrop } from "@/src/utils/functions";

type PROPS = {
  onClose: () => void;
  imgSrc?: string;
  onSave?: ((n?: any) => void) | undefined;
};

export default function CropImage(props: PROPS) {
  const { onClose, imgSrc, onSave } = props;
  const imgRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState<number | undefined>();
  const [circularCrop, setCircularCrop] = useState(false);
  const previewImage = useRef("");

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
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
    if (!isSelected) {
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

  return (
    <>
      <ModalHeader>
        <div className="flex items-center gap-3">
          <IoCrop className="text-2xl" />
          <p className="text-lg font-bold">Drag to crop</p>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="flex flex-col gap-4">
          <ConditionalRenderAB
            condition={!!imgSrc}
            ComponentA={
              <ReactCrop
                crop={crop}
                onChange={(_, percentCrop) => setCrop(percentCrop)}
                onComplete={(c) => setCompletedCrop(c)}
                aspect={aspect}
                minHeight={100}
                className="w-full max-h-[500px]"
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
                  className="w-full object-contain"
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
              onChange={(e) =>
                setRotate(Math.min(180, Math.max(-180, Number(e))))
              }
              isDisabled={!imgSrc}
            />
            <div className="flex items-center justify-between w-full">
              <Switch
                color="secondary"
                size="sm"
                defaultSelected
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
        </div>
      </ModalBody>
      <ModalFooter>
        <div className="flex items-center gap-4">
          <Button color="danger" onClick={onClose}>
            Cancel
          </Button>
          <Button
            color="secondary"
            onClick={() => {
              onSave && onSave(previewImage.current);
              onClose();
            }}
          >
            Save
          </Button>
        </div>
      </ModalFooter>
    </>
  );
}
