import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"]
  },
  routing: {
    prefixDefaultLocale: false
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    })
  ],
  experimental: {
    i18nDomains: true
  }
});