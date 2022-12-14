import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import { resolve } from "path";
import { VitePWA } from "vite-plugin-pwa";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    base: process.env.VITE_BASE_PUBLIC_PATH,
    plugins: [
      vue(),
      svgLoader(),
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["favicon.ico"],
        devOptions: {
          enabled: true,
        },
        manifest: {
          name: "Bsk Test",
          short_name: "Bsk Test",
          theme_color: "#1976d2",
          background_color: "#fafafa",
          display: "standalone",
          icons: [
            {
              src: "assets/icons/icon-48x48.png",
              sizes: "48x48",
              type: "image/png",
              purpose: "any maskable",
            },
            {
              src: "assets/icons/icon-72x72.png",
              sizes: "72x72",
              type: "image/png",
              purpose: "any maskable",
            },
            {
              src: "assets/icons/icon-96x96.png",
              sizes: "96x96",
              type: "image/png",
              purpose: "any maskable",
            },
            {
              src: "assets/icons/icon-128x128.png",
              sizes: "128x128",
              type: "image/png",
              purpose: "any maskable",
            },
            {
              src: "assets/icons/icon-144x144.png",
              sizes: "144x144",
              type: "image/png",
              purpose: "any maskable",
            },
            {
              src: "assets/icons/icon-152x152.png",
              sizes: "152x152",
              type: "image/png",
              purpose: "any maskable",
            },
            {
              src: "assets/icons/icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "any maskable",
            },
            {
              src: "assets/icons/icon-384x384.png",
              sizes: "384x384",
              type: "image/png",
              purpose: "any maskable",
            },
            {
              src: "assets/icons/icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable",
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        "~": resolve(__dirname, "src"),
      },
    },
  });
};
