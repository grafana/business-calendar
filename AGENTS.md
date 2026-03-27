<!-- markdownlint-disable MD013 -->

# AGENTS.md — Business Calendar (Grafana Plugin)

## Project Overview

Grafana frontend panel plugin (`marcusolsson-calendar-panel`)
built with TypeScript, React, and react-big-calendar.
No backend component.
Uses webpack (via `.config/`) for bundling and SWC for transpilation.

**Node version:** >=24 (see `.nvmrc`). **Package manager:** npm.

## Build / Dev Commands

```bash
npm run build          # Production build (webpack)
npm run dev            # Watch mode (webpack, development)
npm run typecheck      # tsc --noEmit
npm run lint           # ESLint (flat config)
npm run lint:fix       # ESLint with auto-fix
npm start              # Docker Compose: pull + start Grafana
npm stop               # Docker Compose: stop
```

## Test Commands

```bash
npm test                       # Jest watch mode
npm run test:ci                # Jest all tests, coverage
npx jest path/to/file.test.ts  # Run single test file
npx jest --testPathPattern="migration"  # Pattern match
npm run test:e2e               # Playwright E2E tests
npm run test:e2e:dev           # Playwright interactive UI
```

Jest sets `TZ=UTC` globally.

## Project Structure

```text
src/
  module.ts              # Plugin entry point
  migration.ts           # Panel option migration handler
  plugin.json            # Grafana plugin manifest
  components/            # React components (PascalCase dirs)
    CalendarPanel/       # Main panel wrapper
    BigCalendar/         # react-big-calendar integration
    BigToolbar/          # Toolbar (nav, view switcher)
    EventDetails/        # Event detail drawer
    YearView/            # Yearly calendar view
  hooks/                 # Custom React hooks (useXxx.ts)
  types/                 # TypeScript types and enums
  constants/             # Default values, option defs, test IDs
  utils/                 # Pure utility functions
  i18n/                  # Internationalization (6 languages)
  @types/                # Module augmentations (i18next.d.ts)
.config/                 # Grafana scaffolded build config
```

Every directory has a barrel `index.ts`.

## Critical Rules

- **Never modify anything inside `.config/`** —
  managed by Grafana plugin tooling.
- **Never change `id` or `type`** in `src/plugin.json`.
- Changes to `plugin.json` require a
  **Grafana server restart**.
- Use webpack from `.config/` for builds;
  do not add a custom bundler.
- Use `@grafana/plugin-e2e` for E2E tests.
- Grafana API docs:
  <https://grafana.com/developers/plugin-tools/llms.txt>
- **Always run `npx markdownlint-cli`** on any `.md`
  file you create or modify (including `AGENTS.md`,
  `README.md`, `CHANGELOG.md`) and fix all reported
  issues before committing.
- **Prefer subagents** for research, code exploration,
  and multi-step work. Use the Task tool with
  `explore` or `general` agents rather than running
  many search/read commands directly. Launch multiple
  agents in parallel when tasks are independent.

## Code Style

### Formatting (Prettier)

- Print width: 120, tab width: 2, no tabs
- Single quotes, trailing commas (`es5`), semicolons
- JSX uses double quotes
- End of line: auto

### Imports

Three groups separated by blank lines,
alphabetical within each:

```ts
// 1. External packages
import { Field, FieldType } from '@grafana/data';
import { useCallback, useMemo } from 'react';

// 2. Internal bare aliases or relative parent paths
import { CalendarOptions } from 'types';
import { getVariableValue } from 'utils';

// 3. Relative sibling/child imports
import { useLocalizer } from './useLocalizer';
```

Destructured members sorted alphabetically within braces.

### Exports

- **Named exports only** — no default exports anywhere.
- Barrel files (`index.ts`) re-export via
  `export * from './Module'`.

### Naming Conventions

| Element         | Convention                | Example                 |
| --------------- | ------------------------- | ----------------------- |
| Components      | PascalCase                | `CalendarPanel`         |
| Component files | `PascalCase.tsx`          | `CalendarPanel.tsx`     |
| Hooks           | `useCamelCase`            | `useCalendarEvents`     |
| Hook files      | `useCamelCase.ts`         | `useCalendarEvents.ts`  |
| Utilities       | camelCase                 | `getVariableValue`      |
| Util files      | `camelCase.ts`            | `calendarEvents.ts`     |
| Constants       | UPPER_SNAKE_CASE          | `DEFAULT_OPTIONS`       |
| Enums           | PascalCase + UPPER_SNAKE  | `View.WORK_WEEK`        |
| Interfaces      | PascalCase                | `CalendarEvent`         |
| Style files     | `Component.styles.ts`     | `BigCalendar.styles.ts` |
| Test files      | `*.test.ts(x)` co-located | `migration.test.ts`     |

### Types

- Interfaces for data models — every property has
  a JSDoc `/** */` comment with `@type` tag.
- Component props use `type Props = ...`
  or `interface Props extends Pick<...>`.
- `const enum` for internal-only enums; regular `enum`
  when values are iterated at runtime.
- Avoid `as any` in production code;
  acceptable in test mocks and partial objects.
- Use `as never` for Grafana API type escapes
  (e.g., `disableStandardOptions`).

### Components

- Functional components:
  `const Name: React.FC<Props> = ({ ... }) => { ... }`.
- Props destructured in the function signature,
  not inside the body.
- Every logical block (hooks, computed values, effects)
  gets a `/** Label */` JSDoc comment.
- Styles via `useStyles2(getComponentStyles)`
  with `GrafanaTheme2` parameter.

### i18n

- All user-facing strings use
  `t('dotted.key.path')` from i18next.
- Option arrays are functions accepting `TFunction`:
  `const OPTIONS = (t: TFunction) => [...]`.
- Translations live in `src/i18n/translations/`
  per language.

### Error Handling

- Defensive guard patterns with early returns —
  no try/catch blocks.
- Optional chaining and nullish coalescing
  for safe property access.
- Filter falsy values:
  `.filter((x) => x)` or `.filter(Boolean)`.

## ESLint

Flat config (ESLint 9) extending `@grafana/eslint-config/flat.js`, `@volkovlabs/eslint-config`, and `eslint-config-prettier`. Custom rule: `@typescript-eslint/no-empty-object-type: off`. Test files, mocks, config files, and server dirs are excluded from linting.

### Additional Rules

- `no-console` and `no-debugger` are errors
- `@typescript-eslint/no-deprecated` is a warning — avoid
  using deprecated APIs
- Unused variables are errors (except rest siblings)

## Changelog Policy

**Always update `CHANGELOG.md` when making changes.** Every commit that
modifies code, documentation, dependencies, or configuration must have a
corresponding entry in the changelog under the current unreleased version
section. Add entries as part of the same commit or as a follow-up commit
before pushing.

## Branching Policy

- **Never commit directly to `main`**. Always create a new branch for changes.
- Use descriptive branch names (e.g., `feat/add-feature`, `fix/bug-description`).
- When pushing new commits to a PR, always update the PR summary to reflect all
  changes.
- **Do not commit automatically**. Only commit when explicitly asked.
- **Do not push automatically**. Only push when explicitly asked.

## Testing Conventions

### Structure

- Use `describe`/`it` (not `test`).
  Nest `describe` blocks for related functionality.
- `it('Should ...')` with capital S
  is the dominant naming pattern.

### Mocking

- Use `jest.mock('module', () => ({
...jest.requireActual('module'), ... }))`
  to preserve original exports.
- Every mock block gets a
  `/** Mock @grafana/data */` comment header.
- Component props captured via mock pattern:

  ```ts
  let calendarProps = {} as any;
  jest.mocked(Calendar).mockImplementation((props: any): any => {
    calendarProps = props;
    return null;
  });
  ```

### Component Tests

- `render` + `screen` from `@testing-library/react`.
- `getJestSelectors(TEST_IDS.component)`
  from `@volkovlabs/jest-selectors`.
- Selector with `true` arg for `queryBy` (no-throw):
  `selectors.element(true)`.
- Factory function pattern:
  `const getComponent = (props: Partial<Props>) => ...`.
- Async interactions wrap in
  `await act(async () => ...)`.

### Hook Tests

- Use `renderHook` from `@testing-library/react`.
- Pass partial mocks with `as any` for unused fields.

### Test Data

- Deterministic dates:
  `const getSafeDate = () => new Date('2023-02-02')`.
- Test IDs in `src/constants/tests.ts`
  as nested `TEST_IDS` object.
- Parameterized IDs use functions:
  `description: (index: number) => ...`.

## Migration Pattern

When removing or renaming panel options,
update `src/migration.ts`:

- Add deprecated fields to `OutdatedPanelOptions`
  with JSDoc noting removal version.
- Use `hasOwnProperty` checks + `delete`
  for removed options.
- Use `Array.isArray` / type checks
  for format changes.
- Add corresponding tests in `migration.test.ts`.
