import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/postcss";
import path from "path";

const uikit = path.resolve(__dirname, "../../voltui_uikit/src");

const config: StorybookConfig = {
  stories: ["../**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/react-vite",
  docs: {
    autodocs: true,
  },
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          "@voltui/uikit/card": path.join(uikit, "card/index.tsx"),
          "@voltui/uikit/button": path.join(uikit, "button/index.tsx"),
          "@voltui/uikit/input": path.join(uikit, "input/index.tsx"),
          "@voltui/uikit/input-password": path.join(uikit, "input-password/index.tsx"),
          "@voltui/uikit/input-otp": path.join(uikit, "input-otp/index.tsx"),
          "@voltui/uikit/textarea": path.join(uikit, "textarea/index.tsx"),
          "@voltui/uikit/checkbox": path.join(uikit, "checkbox/index.tsx"),
          "@voltui/uikit/badge": path.join(uikit, "badge/index.tsx"),
          "@voltui/uikit/link": path.join(uikit, "link/index.tsx"),
          "@voltui/uikit/notification": path.join(uikit, "notification/index.tsx"),
          "@voltui/uikit/avatar": path.join(uikit, "avatar/index.tsx"),
          "@voltui/uikit/skeleton": path.join(uikit, "skeleton/index.tsx"),
          "@voltui/uikit/progress": path.join(uikit, "progress/index.tsx"),
          "@voltui/uikit/modal": path.join(uikit, "modal/index.tsx"),
          "@voltui/uikit/dropdown": path.join(uikit, "dropdown/index.tsx"),
          "@voltui/uikit/divider": path.join(uikit, "divider/index.tsx"),
          "@voltui/uikit/tooltip": path.join(uikit, "tooltip/index.tsx"),
          "@voltui/uikit/rating": path.join(uikit, "rating/index.tsx"),
          "@voltui/uikit/table": path.join(uikit, "table/index.tsx"),
          "@voltui/uikit/scroll-area": path.join(uikit, "scroll-area/index.tsx"),
          "@voltui/uikit": path.join(uikit, "index.ts"),
        },
      },
      css: {
        ...config.css,
        postcss: {
          plugins: [tailwindcss],
        },
      },
    };
  },
};

export default config;
