import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/will-you-be-my-valentine-main/",
  plugins: [react()],
  build: {
    outDir: 'build', // or whatever your output directory is
  },
});
