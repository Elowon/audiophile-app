import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["convex/react"],
  },
  build: {
    commonjsOptions: {
      include: [/convex/, /node_modules/],
    },
  },
});
