/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string; // Define your environment variable here
  // add other environment variables as needed
  readonly VITE_API_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
