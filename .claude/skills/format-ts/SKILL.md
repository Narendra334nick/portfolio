---
name: format-ts
description: Format and beautify TypeScript code. Use when asked to format, beautify, lint-fix, or prettify TypeScript/TSX files. Works on a single file, a directory, or the whole project.
---

Format TypeScript code using Prettier and ESLint (if available), falling back to Prettier alone.

## Steps

1. **Identify the target** — use the argument(s) passed to the skill (file path, directory, or glob). If none given, default to the entire project (`.`).

2. **Check available tools** — run these checks in parallel:
   ```
   npx prettier --version
   npx eslint --version
   ```
   Note which tools are present. If neither is installed, tell the user and stop.

3. **Run Prettier** (if available):
   ```
   npx prettier --write <target>
   ```
   For TypeScript-specific files use the `--parser typescript` flag only when the target is a raw `.ts`/`.tsx` file without an extension inference. Otherwise Prettier auto-detects.

4. **Run ESLint auto-fix** (if available and a config exists — check for `.eslintrc*`, `eslint.config.*`, or `"eslintConfig"` in `package.json`):
   ```
   npx eslint --fix <target>
   ```

5. **Report results**:
   - List files that were changed (from Prettier's output or `git diff --name-only`).
   - If no files changed, say so.
   - If any errors were reported by ESLint that could not be auto-fixed, list them briefly.

## Flags / args the user may pass

| Arg | Meaning |
|-----|---------|
| A file path (`src/foo.ts`) | Format only that file |
| A directory (`src/`) | Format all TS/TSX files in that directory |
| `--check` | Report formatting issues without writing files (use `--check` flag for Prettier, `--fix` omitted for ESLint) |
| `--eslint-only` | Skip Prettier, only run ESLint fix |
| `--prettier-only` | Skip ESLint, only run Prettier |

## Notes

- Never modify files outside the target path.
- If `prettier.config.*` or `.prettierrc*` exists in the repo, Prettier will use it automatically — do not override project config.
- If no Prettier or ESLint config exists, use sensible TypeScript defaults: 2-space indent, single quotes, trailing commas (`"all"`), semicolons.
- After formatting, run `git diff --stat` to show a summary of what changed.
