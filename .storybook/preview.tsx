import React from "react";
import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";

import "../../voltui_uikit/src/styles/global.css";
import "../../voltui_uikit/src/styles/themes/light.css";
import "../../voltui_uikit/src/styles/themes/dark.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-6">
        <Story />
      </div>
    ),
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
