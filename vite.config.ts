import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [tanstackStart(), react(), tsconfigPaths({ root: "." })],
  server: {
    headers: {
      "Cache-Control": "public, max-age=0",
    },
  },
  preview: {
    headers: {
      "Cache-Control": "public, max-age=600",
    },
  },
});
