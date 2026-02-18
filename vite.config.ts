import { defineConfig } from 'vitest/config';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Backlog',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => {
        if (format === 'es') return 'backlog.js';
        if (format === 'cjs') return 'backlog.cjs';
        return 'backlog.min.js';
      },
    },
    rollupOptions: {
      external: ['qs'],
      output: {
        globals: {
          qs: 'qs',
        },
      },
    },
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      outDir: 'dist/types',
    }),
  ],
  test: {
    globals: true,
    environment: 'node',
    include: ['test/**/test*.ts'],
    exclude: ['test/fixtures/**', 'test/mock.ts', 'test/setup.ts'],
    setupFiles: ['./test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      exclude: ['node_modules/', 'test/', 'dist/'],
    },
  },
});
