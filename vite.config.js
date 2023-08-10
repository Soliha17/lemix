import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'path'; // Import the 'path' module

// Calculate the directory name using import.meta.url
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
});
