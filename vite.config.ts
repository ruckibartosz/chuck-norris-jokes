/* eslint-disable */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@Components': path.resolve(__dirname, './src/Components'),
      '@Hooks': path.resolve(__dirname, './src/Hooks'),
      '@Utils': path.resolve(__dirname, './src/Utils'),
      '@Config': path.resolve(__dirname, './src/Config'),
    },
  },
});
