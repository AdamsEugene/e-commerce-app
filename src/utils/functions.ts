import { Dispatch, SetStateAction } from "react";
import { PixelCrop, centerCrop, makeAspectCrop } from "react-image-crop";
import productList from "./productList";
import { AdCreative } from "../components/_shared/types/@ads";
import { CampaignType } from "./campaignData";

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getProductName = (productId: string) => {
  return productList.find((product) => product.productId === productId)?.name;
};

export const simulateDelay = (seconds: number): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

type Column = { name: string; uid: string };

export const transformColumns = (columns: Column[]): Column[] => {
  return columns.map((c) => ({ ...c, name: c.name.toUpperCase() }));
};

export type CampaignStatus =
  | "active"
  | "ended"
  | "paused"
  | "draft"
  | "ending soon";

export const includesEndingSoon = (label: any): CampaignStatus =>
  label.toLowerCase().includes("ending soon")
    ? "ending soon"
    : label.toLowerCase();

export const campaignStatusColor = (status: keyof typeof mapObj) => {
  const mapObj = {
    active: "#00ff00",
    ended: "#ff0000",
    paused: "#FFA500",
    draft: "#777777",
    "ending soon": "#ffff00",
  };
  return mapObj[status] || "#777777";
};

export const radiateStatus = (status: keyof typeof mapObj) => {
  const mapObj = {
    active: "a",
    ended: "c",
    paused: "e",
    draft: "d",
    "ending soon": "c",
  };
  return mapObj[status] || "d";
};

export const getStatusColor = (remaining: number, total: number) => {
  if (remaining / total > 0.5) return "#00FF00";
  if (remaining / total > 0.25) return "#FFFF00";
  return "#FF0000";
};

export const budgetStatus = (remaining: number, total: number) => {
  if (remaining / total > 0.5) return "active";
  if (remaining / total > 0.25) return "ending soon";
  return "ended";
};

export const budgetStatusRadiate = (remaining: number, total: number) =>
  radiateStatus(budgetStatus(remaining, total));

export const centerAspectCrop = (
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) => {
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
};

export async function onDownloadCropClick(
  imgRef: React.RefObject<HTMLImageElement>,
  previewCanvasRef: React.RefObject<HTMLCanvasElement>,
  completedCrop: PixelCrop | undefined,
  blobUrlRef: React.MutableRefObject<string>,
  hiddenAnchorRef: React.RefObject<HTMLAnchorElement>
) {
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

export const getFilePreviewURL = (
  files: FileList,
  setImgSrc: Dispatch<SetStateAction<string[]>>
): boolean => {
  if (!files.length) return false;

  const previews: string[] = [];
  let success = true;

  Array.from(files).forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      previews.push(reader.result as string);
      setImgSrc([...previews]);
    };
    reader.onerror = () => {
      success = false;
    };
    reader.readAsDataURL(file);
  });

  return success;
};

export const isAdCreative = (data: any): data is AdCreative =>
  typeof data === "object" &&
  "type" in data &&
  (data.type === "Image" || data.type === "Video") &&
  typeof data.url === "string" &&
  (typeof data.headline === "string" || data.headline === undefined) &&
  (typeof data.description === "string" || data.description === undefined) &&
  typeof data.callToAction === "string";

export const isCampaignType = (data: any): data is CampaignType =>
  typeof data === "object" &&
  "id" in data &&
  typeof data.id === "number" &&
  "campaignName" in data &&
  typeof data.campaignName === "string" &&
  "targetAudience" in data &&
  Array.isArray(data.targetAudience) &&
  data.targetAudience.every((item: any) => typeof item === "string") &&
  "budget" in data &&
  typeof data.budget === "number" &&
  "status" in data &&
  typeof data.status === "string" &&
  "impressions" in data &&
  typeof data.impressions === "number" &&
  "clicks" in data &&
  typeof data.clicks === "number" &&
  "spend" in data &&
  typeof data.spend === "number";

/**
 * Checks if a given string or number is a valid money amount.
 * @param value - The value to check.
 * @returns A boolean indicating if the value is a valid money amount.
 */
export const isMoney = (value: string | number): boolean => {
  if (typeof value === "number") {
    value = value.toString();
  }

  const moneyRegex =
    /^(\$|€|£|¥|₹|₽|₩|₦|฿|₫|₪|₲|₴|₵|₡|₭|₸|₱|৳|₮)?\s?(\d{1,3}(,\d{3})*|\d+)?(\.\d{2})?$/;

  return moneyRegex.test(value);
};
