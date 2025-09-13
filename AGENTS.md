# Repository Guidelines

## Project Structure & Module Organization
- `app/` – Next.js App Router pages and layouts (e.g., `app/page.tsx`, `app/layout.tsx`), global styles in `app/globals.css`.
- `lib/` – shared utilities (e.g., `lib/utils.ts` with `cn()` helper).
- `public/` – static assets (SVGs, icons).
- Root config: `next.config.ts`, `tsconfig.json` (path alias `@/*`), `eslint.config.mjs`.

## Build, Test, and Development Commands
- `npm run dev` – start local dev server with Turbopack at `http://localhost:3000`.
- `npm run build` – production build (Turbopack).
- `npm start` – run the production build.
- `npm run lint` – run ESLint using Next.js rules.

## Coding Style & Naming Conventions
- Language: TypeScript (strict). ESNext modules.
- Indentation: 2 spaces; prefer explicit types when useful.
- React components: PascalCase file names (e.g., `PasswordMeter.tsx`). Utilities: camelCase (e.g., `generatePassword.ts`).
- Use the `@/*` alias for absolute imports (e.g., `import { cn } from '@/lib/utils'`).
- Styling: Tailwind CSS v4; compose classes with `cn()` from `lib/utils.ts`.
- Linting: follow `eslint.config.mjs` (`next/core-web-vitals`, TS). Fixable issues: `npx eslint . --fix`.

## Testing Guidelines
- No test runner is configured yet. If adding tests, prefer co-located tests (`*.test.ts(x)`) or `__tests__/` near source.
- Aim for coverage of core utilities in `lib/` and critical UI behaviors.
- Keep tests deterministic and framework-agnostic; propose tooling (e.g., Vitest + React Testing Library) in the PR.

## Commit & Pull Request Guidelines
- Commits: concise, imperative subject (max ~72 chars). Optionally use Conventional Commits (e.g., `feat: add strength meter`).
- PRs must include: summary, rationale, screenshots/GIFs for UI, and linked issues.
- Confirm `npm run lint` and `npm run build` pass before requesting review.

## Security & Configuration Tips
- Do not commit secrets. Use `.env.local` for local env vars; document new variables in the PR.
- Keep dependencies minimal; prefer first‑party Next/Tailwind patterns.

## Agent-Specific Instructions
- Scope changes to relevant files; follow structure and naming above.
- Preserve existing behavior; avoid unrelated refactors.
- When adding modules, update this file and the README if structure changes.
