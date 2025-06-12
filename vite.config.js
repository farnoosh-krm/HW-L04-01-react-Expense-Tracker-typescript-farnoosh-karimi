import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    host: '0.0.0.0', // برای دسترسی از خارج
    port: 10000,
    allowedHosts: [
      'hw-l04-02-react-typescript-project-pgw5.onrender.com',
    ],
  },
});
