/// <reference types="astro/client" />

declare global {
  interface Window {
    bootstrap?: { Modal: any };
    Swiper?: any;
    applyI18n?: () => void;
    i18nTypingWords?: string[];
  }
}

export {};
