import { defineConfig } from 'tsdown';

export default defineConfig([
  {
    entry: { index: 'src/index.ts' },
    format: ['cjs', 'esm'],
    target: 'es2022',
    dts: true,
    fixedExtension: true,
  },
  {
    entry: { backlog: 'src/index.ts' },
    format: ['iife'],
    target: 'es2022',
    platform: 'browser',
    globalName: 'Backlog',
    deps: { alwaysBundle: ['qs'] },
    minify: false,
    outExtensions() {
      return { js: '.js' };
    },
  },
  {
    entry: { backlog: 'src/index.ts' },
    format: ['iife'],
    target: 'es2022',
    platform: 'browser',
    globalName: 'Backlog',
    deps: { alwaysBundle: ['qs'] },
    minify: true,
    outExtensions() {
      return { js: '.min.js' };
    },
  },
]);
