import "../../../packages/styles/src/index.css";
import "../src/storybook.css";

const themeToolbar = {
  icon: "mirror",
  title: "Theme",
  items: [
    { value: "light", title: "Light" },
    { value: "dark", title: "Dark" }
  ],
  dynamicTitle: true
};

/** @type {import('@storybook/html').Preview} */
const preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Theme used for QA state coverage",
      toolbar: themeToolbar
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
    (story, context) => {
      const theme = context.globals.theme ?? "light";
      document.documentElement.dataset.bitsyTheme = theme;
      document.documentElement.style.colorScheme = theme;

      const rendered = story();
      const inner = typeof rendered === "string" ? rendered : rendered.outerHTML;

      return `
        <div class="sb-shell" data-theme="${theme}">
          <header class="sb-header">
            <div>
              <p class="sb-kicker">Bitsy UI QA</p>
              <h1 class="sb-title">${context.title.split("/").slice(-1)[0]}</h1>
            </div>
            <p class="sb-caption">Storybook is for isolated states and regression checks, not the primary docs surface.</p>
          </header>
          <div class="sb-canvas">
            ${inner}
          </div>
        </div>
      `;
    }
  ]
};

export default preview;
