import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  build: {
    outDir: "dist",
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ["framer-motion"],
          i18n: ["i18next", "react-i18next"],
        },
      },
    },
  },
});
