import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
      build: {
    outDir: 'dist', // Output directory for the production build
  },
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:9000', // Your backend URL
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
 
