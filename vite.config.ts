import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/invitation/',
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
    svgr(),
    tsconfigPaths(),
  ],
  server: {
    open: true,
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  build: {
    outDir: 'build',
  },
});
