import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 상대 경로: GitHub Pages(https://<계정>.github.io/church/)에서도 그대로 동작
  base: './',
  server: { port: 5173, open: true },
});
