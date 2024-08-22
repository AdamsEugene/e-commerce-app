import { PRODUCTS_FOR_HOME, PRODUCTS_GRID, TProduct } from "../types";
import { adsPreview } from "./adsData";

export const homeProductList = (productList?: TProduct[]) => {
  const _productList: PRODUCTS_FOR_HOME[] = [];
  const adsPerSet = 1;
  const productsPerSet = 10;

  if (!productList) return;

  for (let i = 0; i < Math.ceil(productList.length / productsPerSet); i++) {
    const adsSlice = adsPreview.slice(i * adsPerSet, (i + 5) * adsPerSet);
    const productsSlice = productList.slice(
      i * productsPerSet,
      (i + 1) * productsPerSet
    );
    const productsGridSlice = productGrids(productList)[i];
    const goodSlice =
      productsSlice.length === productsPerSet ||
      productsSlice.length === productsPerSet / 2;
    const moreThenHalf =
      productsSlice.length >= productsPerSet / 2
        ? productsSlice.slice(0, 5)
        : [];

    const homeProduct: PRODUCTS_FOR_HOME = {
      products: goodSlice ? productsSlice : moreThenHalf,
      ads: adsSlice.length > 0 ? adsSlice : undefined,
      productsGrid: productsGridSlice ? productsGridSlice : undefined,
    };

    _productList.push(homeProduct);
  }
  return _productList;
};

export const productGrids = (productList: TProduct[]): PRODUCTS_GRID[] => {
  const productGrids: PRODUCTS_GRID[] = [];

  const productsPerGrid = [4, 6];
  let currentIndex = 0;
  let gridIndex = 1;

  while (currentIndex < productList.length) {
    const gridProducts: TProduct[] = [];
    let addMoreProducts = true;

    for (const count of productsPerGrid) {
      if (currentIndex + count <= productList.length) {
        const productGroup = productList.slice(
          currentIndex,
          currentIndex + count
        );
        gridProducts.push(...productGroup);
        currentIndex += count;
      } else {
        addMoreProducts = false;
        break;
      }
    }

    if (addMoreProducts) {
      const grid: PRODUCTS_GRID = {
        gridId: `grid${gridIndex}`,
        title: `Product Grid ${gridIndex}`,
        cta: gridIndex % 2 === 0 ? "Shop Now" : "See all deals",
        image: gridProducts[0].images, // Assuming the grid image is the image of the first product in the slice
        products: [
          gridProducts.slice(0, 4), // First 4 products
          gridProducts.slice(4, 10), // Next 6 products
        ],
      };

      productGrids.push(grid);
      gridIndex++;
    } else {
      break;
    }
  }
  return productGrids;
};
