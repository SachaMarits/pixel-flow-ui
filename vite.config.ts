import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/scss/app.scss";`
      }
    }
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "PixelFlowUI",
      fileName: (format) => `pixel-flow-ui.${format}.js`,
      formats: ["es", "umd"]
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
