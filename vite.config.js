import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        format: "esm",
        // manualChunks breaks for SSR builds.
        ...(
          process.env.FIX_SSR_BUILD === "1"
            ? {}
            : {
              manualChunks: {
                react: ["react", "react-dom"],
              }
            }
        ),
      },
    },
  },
});

