import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '8x4qdf',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
