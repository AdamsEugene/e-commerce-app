import { SVGProps } from "react";
import { AdPreview } from "../components/_shared/types/@ads";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface NewProduct {
  // Basic product information
  name: string;
  description: string;
  price: number;
  stock: number;

  // Additional product details (optional)
  images?: string[]; // Array of image URLs
  categories: string[]; // Array of category IDs or names
  brand?: string; // Optional brand name
  sku?: string; // Optional stock keeping unit

  // Inventory and tracking
  lowStockThreshold?: number; // Minimum stock level before notification
  active: boolean; // Whether the product is currently available for purchase

  // Product variations (optional)
  variants?: NewProductVariant[]; // Array of product variations (e.g., size, color)

  // SEO and marketing
  slug?: string; // Unique product identifier for URLs
  metaDescription?: string; // Brief product description for search engines

  // Shipping and fulfillment
  weight?: number; // Product weight in grams
  dimensions?: {
    length: number; // Product length in cm
    width: number; // Product width in cm
    height: number; // Product height in cm
  };

  // Size variations (optional)
  size?: string[]; // Array of available sizes (e.g., ["S", "M", "L"])

  // Color variations (optional)
  colors?: string[]; // Array of available color names (e.g., ["Red", "Blue", "Green"])

  // Other properties as needed for your specific app
}

interface NewProductVariant {
  // Define the structure of product variations
  id?: string; // Optional unique identifier for the variant
  name: string; // Variant name (e.g., "Small", "Red")
  sku?: string; // Optional variant-specific stock keeping unit
  price?: number; // Variant-specific price (overrides main product price if set)
  stock?: number; // Variant-specific stock quantity (overrides main product stock if set)
  // ... other variant-specific properties
}

export type Options =
  | "selectPlan"
  | "customization"
  | "subscription"
  | "protection";

export type Size =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "full"
  | "xs"
  | "3xl"
  | "4xl"
  | "5xl";

export type PRODUCTS_FOR_HOME = {
  products: TProduct[];
  productsGrid?: PRODUCTS_GRID;
  ads?: AdPreview[];
};

export type PRODUCTS_GRID = {
  gridId: string;
  title: string;
  cta: string;
  image: any;
  products: [TProduct[], TProduct[]];
};

export type TReview = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

export type TDimensions = {
  width: number;
  height: number;
  depth: number;
};

export type TMeta = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};

export type TProduct = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: TDimensions;
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  reviews?: TReview[];
  returnPolicy?: string;
  minimumOrderQuantity?: number;
  meta?: TMeta;
  images?: string[];
  thumbnail?: string;
};

export interface TFetchedProduct {
  products: TProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductCategory {
  slug: string;
  name: string;
  url: string;
}
