import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        app: "./index.html", // default
      },
    },
    chunkSizeWarningLimit: 1600,
    outDir: "build",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "./runtimeConfig": "./runtimeConfig.browser",
    },
  },
});
