/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  readonly VITE_BANK_NAME?: string;
  readonly VITE_BANK_ACCOUNT?: string;
  readonly VITE_BANK_HOLDER?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
