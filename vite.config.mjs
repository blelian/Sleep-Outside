import { resolve } from "path";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  root: "src/",
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "css/product_styles.css", // no "src/" prefix here, path is relative to root
          dest: "css", // copied to dist/css/
        },
        {
          src: "css/style.css",
          dest: "css",
        },
      ],
    }),
  ],
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        signup: resolve(__dirname, "src/signup.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
        product1: resolve(__dirname, "src/product_pages/cedar-ridge-rimrock-2.html"),
        product2: resolve(__dirname, "src/product_pages/marmot-ajax-3.html"),
        product3: resolve(__dirname, "src/product_pages/northface-alpine-3.html"),
        product4: resolve(__dirname, "src/product_pages/northface-talus-4.html"),
        product5: resolve(__dirname, "src/product_pages/sleeping_bags.html"),
        product6: resolve(__dirname, "src/product_pages/hammocks.html"),
        product7: resolve(__dirname, "src/product_pages/tents.html"),
        product8: resolve(__dirname, "src/product_pages/backpacks.html"),
      },
    },
  },
});
