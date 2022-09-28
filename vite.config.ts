import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-ts-eslint-prettier-husky-template/',
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020'
    }
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-macros', 'babel-plugin-styled-components']
      }
    }),
    tsconfigPaths()
  ],
  build: {
    sourcemap: true
  },
  server: {
    port: process.env.PORT === undefined ? 3000 : +process.env.PORT
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './tests/setup.ts',
    coverage: {
      reporter: ['html', 'lcov']
    }
  }
});
