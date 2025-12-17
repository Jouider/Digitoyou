/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SUPABASE_URL: string;
  readonly SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  interface Window {
    bootstrap?: { Modal: any };
    Swiper?: any;
    applyI18n?: () => void;
    i18nTypingWords?: string[];
  }
}

export {};
