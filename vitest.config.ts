import { getViteConfig } from "astro/config";
import { defineConfig } from "vitest/config";

export default defineConfig({
  ...getViteConfig({}),
  test: {
    // Vitest configuration options
    exclude: ['packages/template/*'],
  },
});
