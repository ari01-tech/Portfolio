import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base keeps the built site portable: it works at a domain root
  // (Vercel) and inside a sub-folder (GitHub Pages) without extra config.
  base: "./",
  server: {
    host: true,
    port: 3000,
  },
  preview: {
    host: true,
    port: 3000,
  },
});
