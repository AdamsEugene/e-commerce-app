import { siteConfig } from "./site";

export const DBConfig = {
  name: `${siteConfig.name}-DB`,
  version: 1,
  objectStoresMeta: [
    {
      store: siteConfig.stores.excelImport,
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        {
          name: "excelImportFiled",
          keypath: "excelImportFiled",
          options: { unique: false },
        },
      ],
    },
  ],
};
