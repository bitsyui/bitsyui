/** @type {import('storybook-solidjs-vite').StorybookConfig} */
const config = {
  framework: "storybook-solidjs-vite",
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  docs: {
    autodocs: false
  }
};

export default config;
