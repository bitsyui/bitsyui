/** @type {import('@storybook/html-vite').StorybookConfig} */
const config = {
  framework: "@storybook/html-vite",
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-controls"],
  docs: {
    autodocs: false
  }
};

export default config;
