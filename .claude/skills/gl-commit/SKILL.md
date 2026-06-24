---
name: gl-commit
description: Stage changes (all or per-file), write self-explanatory commit messages, and push to the GitLab remote. Supports a single commit for all changes or multiple commits for logically separate changes. Use when the user asks to commit and push, ship changes, sync to GitLab, or commit files separately with different messages.
---

Intelligently group changes into one or more commits, write precise one-line messages for each, and push to the current branch's remote.

## Steps

1. **Check working tree state**
   ```
   git status --short
   git diff HEAD
   ```
   If there is nothing to commit (clean working tree), tell the user and stop.

2. **Decide: single commit or multiple commits**

   - If the user explicitly specifies files/groups and messages → use those directly (skip to step 4).
   - If the user asks for multiple commits without specifying groups → analyse the diff and group by logical concern (see grouping rules below).
   - If all changes belong to the same logical concern → use a single commit.

   **Grouping rules** (when auto-grouping):
   - Group files that address the same feature, fix, or concern together.
   - Separate unrelated concerns: e.g. a config change + a new component + a bug fix → 3 commits.
   - Keep test files with the source files they test unless they cover multiple unrelated areas.
   - Docs/config changes that stand alone get their own commit.
   - When in doubt, prefer fewer commits over many tiny ones.

3. **Understand what changed per group** — pick the prefix that best fits:

   | Prefix | When to use |
   |--------|-------------|
   | `feat:` | New feature or capability added |
   | `fix:` | Bug fix |
   | `update:` | Change to existing behaviour, logic, or content (not a bug) |
   | `refactor:` | Code restructure with no behaviour change |
   | `remove:` | Code, file, or dependency deleted |
   | `test:` | Tests added or changed only |
   | `docs:` | Documentation or comments only |
   | `chore:` | Config, build, CI, tooling, dependencies |
   | `style:` | Formatting, whitespace, lint — no logic change |

4. **Compose a commit message per group** — strictly one line, no period at the end:
   - Format: `<prefix>: <concise description of the change>`
   - Max 72 characters total (including prefix)
   - Description in imperative mood (present tense): "add login form" not "added login form"
   - Describes the *what and why*, not the *how*
   - No ticket numbers, no emojis, no PR references unless the user explicitly provides them

   Good examples:
   - `feat: add user authentication with JWT`
   - `fix: null pointer in payment service when cart is empty`
   - `update: retry logic to use exponential backoff`
   - `remove: deprecated v1 API endpoints`
   - `chore: pin Next.js to patched release for CVE-2025-55182`
   - `docs: add architecture overview to CLAUDE.md`

   Bad examples (do not use):
   - `fix: bug` — too vague
   - `WIP` — not self-explanatory, no prefix
   - `updated stuff` — no prefix, unclear
   - Multi-line messages

5. **Show the plan to the user and confirm** before committing:

   For a single commit:
   > Commit message: `<message>`
   > Files staged: N files — `file1`, `file2`, …
   > Target branch: `<branch>` → `origin/<branch>`
   >
   > Proceed? (yes / provide alternative message)

   For multiple commits, list each one:
   > **Commit 1/N:** `<message>`
   > Files: `file1`, `file2`
   >
   > **Commit 2/N:** `<message>`
   > Files: `file3`, `file4`
   >
   > Target branch: `<branch>` → `origin/<branch>`
   >
   > Proceed? (yes / adjust grouping or messages)

   Wait for the user to confirm or revise before doing anything.

6. **Stage, commit (repeat per group), then push** after confirmation:

   For each commit group (in order):
   ```
   git add <file1> <file2> ...
   git commit -m "<message>"
   ```
   After all commits:
   ```
   git push origin <current-branch>
   ```

   Never use `git add -A` when doing multiple commits — stage only the files for the current group.

7. **Report outcome**:
   - Print each commit hash and its message.
   - Confirm the push succeeded (branch and remote URL).
   - If the push is rejected (non-fast-forward), do NOT force push. Tell the user to pull first.

## Rules

- Never amend an existing commit.
- Never force push (`--force`, `--force-with-lease`) unless the user explicitly requests it.
- Never skip hooks (`--no-verify`).
- Each commit message must be exactly one line — no body, no footer.
- Stage files explicitly by path when creating multiple commits; never use `git add -A` mid-sequence.
- If the user passes messages as arguments, use them directly (skip drafting) but still show the confirm prompt.
