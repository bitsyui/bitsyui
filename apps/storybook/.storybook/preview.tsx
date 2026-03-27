import type { Preview } from "storybook-solidjs-vite";
import { createJSXDecorator } from "storybook-solidjs-vite";

import "../../../packages/styles/src/index.css";
import "../src/storybook.css";

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Theme used for QA state coverage",
      toolbar: {
        icon: "mirror",
        title: "Theme",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" }
        ],
        dynamicTitle: true
      }
    }
  },
  initialGlobals: {
    theme: "light"
  },
  parameters: {
    controls: {
      expanded: true,
      sort: "requiredFirst"
    },
    options: {
      storySort: {
        order: ["QA", ["Components"]]
      }
    }
  },
  decorators: [
    createJSXDecorator((Story, context) => {
      const theme = context.globals.theme ?? "light";
      document.documentElement.dataset.bitsyTheme = theme;
      document.documentElement.style.colorScheme = theme;

      return (
        <div class="sb-shell" data-theme={theme}>
          <header class="sb-header">
            <div>
              <p class="sb-kicker">Bitsy UI QA</p>
              <h1 class="sb-title">{context.title.split("/").slice(-1)[0]}</h1>
            </div>
            <p class="sb-caption">
              Storybook is for isolated states and regression checks, not the primary docs surface.
            </p>
          </header>
          <div class="sb-canvas">
            <Story />
          </div>
        </div>
      );
    })
  ]
};

export default preview;
