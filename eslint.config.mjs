import tsParser from '@typescript-eslint/parser';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier/flat';
import grafanaConfig from '@grafana/eslint-config/flat.js';

/**
 * Filter out legacy react-hooks config from @grafana/eslint-config.
 * eslint-plugin-react-hooks@7 ships recommended-latest with
 * plugins as string[] (legacy format), which ESLint 9 rejects.
 * We re-add the plugin in flat config format with classic rules only.
 */
const filteredGrafanaConfig = grafanaConfig.filter((config) => !Array.isArray(config?.plugins));

/**
 * Config
 */
export default defineConfig(
  ...filteredGrafanaConfig,
  {
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  prettierConfig,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['tsconfig.json'],
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
  globalIgnores([
    '.config/*',
    '.prettierrc.js',
    'coverage/*',
    'dist/*',
    'eslint.config.mjs',
    'jest*.js',
    'playwright.config.ts',
    'src/__mocks__/**',
    'src/**/*.test.ts*',
    'test/*',
  ])
);
