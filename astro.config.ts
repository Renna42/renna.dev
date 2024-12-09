import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import remarkEmoji from "remark-emoji";
import rehypeExternalLinks from "rehype-external-links";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import compress from "astro-compress";
import mdx from "@astrojs/mdx";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    compress({
      HTML: {
        "html-minifier-terser": {
          collapseWhitespace: false,
        },
      },
    }),
    mdx(),
    preact(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "目录",
        },
      ],
      [
        remarkEmoji,
        {
          accessible: true,
        },
      ],
    ],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          rel: ["nofollow", "noopener", "noreferer"],
          target: "_blank",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
});
