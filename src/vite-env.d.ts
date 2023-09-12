/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_URL: undefined | string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
