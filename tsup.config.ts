import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: { index: 'src/index.ts' },
    format: ['cjs', 'esm'],
    target: 'es2022',
    dts: true,
    outExtension({ format }) {
      return {
        js: format === 'cjs' ? '.cjs' : '.mjs',
      };
    },
  },
  {
    entry: { backlog: 'src/index.ts' },
    format: ['iife'],
    target: 'es2022',
    globalName: 'Backlog',
    minify: false,
    outExtension() {
      return { js: '.js' };
    },
  },
  {
    entry: { backlog: 'src/index.ts' },
    format: ['iife'],
    target: 'es2022',
    globalName: 'Backlog',
    minify: true,
    outExtension() {
      return { js: '.min.js' };
    },
  },
]);
