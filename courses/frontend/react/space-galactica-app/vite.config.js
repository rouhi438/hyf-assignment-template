import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    server: {
      port: env.PORT,
      proxy: {
        '/api': {
          target: 'https://api.nasa.gov',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        '/apod-media': {
          target: 'https://apod.nasa.gov',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/apod-media/, '')
        }
      }
    },
  };
});
