/// <reference path="../../.astro/types.d.ts" />


declare global {
    interface Window {
      bootstrap?: { Modal: any };
      Swiper?: any;
      applyI18n?: () => void;
      i18nTypingWords?: string[];
    }
  }
  export {};
  
export {};