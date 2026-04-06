# AGENTS.md — Business Calendar (Grafana Plugin)

> Grafana panel plugin providing a calendar view for time-series data.
> Plugin ID: `marcusolsson-calendar-panel` | Owner: Grafana Labs

## Project Overview

Grafana frontend panel plugin (`marcusolsson-calendar-panel`)
built with TypeScript, React, and react-big-calendar.
No backend component.
Uses webpack (via `.config/`) for bundling and SWC for transpilation.

**Node version:** >=24 (see `.nvmrc` / `mise.toml`). **Package manager:** npm.

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

- **Do not use `volkovlabs.io` URLs** anywhere in the
  codebase. This project was forked from Volkov Labs
  and all references should point to Grafana equivalents
  (e.g., `grafana.com`).
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
- **Always run `npx markdownlint-cli2`** on any `.md`
  file you create or modify (including `AGENTS.md`,
  `README.md`, `CHANGELOG.md`) and fix all reported
  issues before committing. When wrapping long lines,
  fill each line as close to 120 characters as possible
  rather than wrapping early.
- **Always run `npm run typecheck`** when `src/` files
  are changed and fix any type errors before committing.
- **Always run `npm run lint`** before committing changes
  to `src/`. Fix errors with `npm run lint:fix` and verify
  no errors remain.
- **Always run cspell before committing.** Run
  `npx cspell -c cspell.config.json` on all
  changed files and fix any issues. Add new words
  to `cspell.config.json` if they are legitimate.
- **Always update `CHANGELOG.md` before committing.**
  Every commit must include the corresponding changelog
  entry. Do not commit code changes without first updating
  the changelog in the same commit.
- **NEVER commit unless the user explicitly asks.**
  Do not commit as part of completing a task.
- **NEVER push unless the user explicitly asks.**
  Do not push as part of completing a task.
  Never chain `git commit && git push` in one command.
  Always wait for the user to explicitly ask to push.
- **Do not add a `Co-Authored-By` line** to commit messages.
- **After pushing, always update the PR summary** if a
  PR exists for the current branch. Treat push and PR
  update as an atomic pair — never stop between them.
  Use `gh pr edit` to update the title and body with
  well-formatted text that reflects all changes across
  the entire branch. **Wrap PR summary lines at 120
  characters** — use the full width, do not wrap
  shorter than necessary.
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

- Interfaces for data models (see JSDoc Comments section).
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
- Styles via `useStyles2(getComponentStyles)`
  with `GrafanaTheme2` parameter.

### i18n

- All user-facing strings use
  `t('dotted.key.path')` from i18next.
- Option arrays are functions accepting `TFunction`:
  `const OPTIONS = (t: TFunction) => [...]`.
- Translations live in `src/i18n/translations/`
  per language.

### JSDoc Comments

This codebase uses **pervasive JSDoc comments**. Add `/** ... */` blocks above:

- Every interface and each of its properties (include `@type` tags on properties)
- Every function and constant declaration
- Logical sections within function bodies (state, theme, callbacks, return)

```typescript
/**
 * Properties
 */
interface Props {
  /**
   * Events
   *
   * @type {CalendarEvent[]}
   */
  events: CalendarEvent[];
}

/**
 * Calendar Panel
 */
export const CalendarPanel: React.FC<Props> = ({ events }) => {
  /**
   * Styles
   */
  const styles = useStyles2(getStyles);

  /**
   * Return
   */
  return <div className={styles.wrapper}>...</div>;
};
```

### Error Handling

- Defensive guard patterns with early returns —
  no try/catch blocks.
- Optional chaining and nullish coalescing
  for safe property access.
- Filter falsy values:
  `.filter((x) => x)` or `.filter(Boolean)`.

## ESLint

Flat config (ESLint 9) extending `@grafana/eslint-config/flat.js`, `@volkovlabs/eslint-config`, and
`eslint-config-prettier`. Custom rule: `@typescript-eslint/no-empty-object-type: off`. Test files, mocks,
config files, and server dirs are excluded.

### Additional Rules

- `no-console` and `no-debugger` are errors
- `@typescript-eslint/no-deprecated` is a warning — avoid
  using deprecated APIs
- Unused variables are errors (except rest siblings)

## Key Dependencies

| Package                                            | Purpose                              |
| -------------------------------------------------- | ------------------------------------ |
| `react-big-calendar`                               | Calendar rendering engine            |
| `dayjs`                                            | Date/time manipulation               |
| `i18next` + `react-i18next`                        | Internationalization                 |
| `@grafana/data`, `@grafana/ui`, `@grafana/runtime` | Grafana plugin SDK                   |
| `@emotion/css`                                     | CSS-in-JS styling                    |

## CI/CD

- **CI** (`.github/workflows/push.yml`): Runs on push to `main` and all PRs. Uses `grafana/plugin-ci-workflows`.
- **CD** (`.github/workflows/publish.yml`): Manual dispatch to dev/ops/prod environments.
- **Do NOT pin `grafana/plugin-ci-workflows` to a commit SHA.** Grafana's CI
  enforces tagged releases only (e.g., `@ci-cd-workflows/v7`). SHA pinning
  will fail the "Check for release channel" job. All other GitHub Actions
  should be pinned to SHAs.

## Changelog Policy

Add entries under the current `[Unreleased]` section in `CHANGELOG.md`.
Categorize under `### Added`, `### Changed`, `### Removed`, `### Fixed`,
or `### Project Updates` as appropriate.

## Branching Policy

- **Never commit directly to `main`**. Always create a new branch for changes.
- Use descriptive branch names (e.g., `feat/add-feature`, `fix/bug-description`).
- **After pushing, always update the PR summary** if a
  PR exists for the current branch. Treat push and PR
  update as an atomic pair — never stop between them.
  Use `gh pr edit` to update the title and body with
  well-formatted text that reflects all changes across
  the entire branch.
- **Always create pull requests as drafts**
  (`gh pr create --draft`).
- **Use categories in PR summaries** — group changes
  under headings like `### CI/CD`, `### Dependencies`,
  `### Bug Fixes`, `### AGENTS.md`, `### Tooling`, etc.
  so reviewers can quickly scan the scope of the PR.

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

## Important

Always create a branch before making any changes. Never commit directly to `main`.

Do not add a `Co-Authored-By` line to commit messages.

When checking out a branch or `main`, always `git fetch` and `git pull` to ensure you have the latest changes.
