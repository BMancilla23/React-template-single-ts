import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      public: `${path.resolve(__dirname, './public/')}`,
      pages: path.resolve(__dirname, './src/pages'),
      types: `${path.resolve(__dirname, './src/@types')}`,
      hooks: `${path.resolve(__dirname, './src/hooks')}`,
      api: `${path.resolve(__dirname, './src/api')}`,
      utils: `${path.resolve(__dirname, './src/utils')}`,
      ui: `${path.resolve(__dirname, './src/ui')}`,
    },
  },
});
