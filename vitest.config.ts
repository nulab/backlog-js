import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
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
