# Task 5 Report: Curated Project Images and Grid

## Status
Complete.

## Commit
- `9947ca8` feat: add curated project images and portfolio grid

## Summary
- Confirmed `heroImage` points to `/projects/hero.jpg`.
- Added 12 `site.projects` entries pointing to `/projects/project-01.jpg` through `/projects/project-12.jpg` with Vietnamese titles.
- Added the `Projects` section at `id="cong-trinh"` with a responsive 1 / 2 / 3 column grid, visible figcaptions, and lazy loading after the first two images.
- Wired `Projects` into `App.tsx` between `Services` and `Process`.

## Verification
- Confirmed expected image files exist: 13 present, 0 missing.
- `npm test` passed: 1 test file, 3 tests.
- `npm run build` passed.
- IDE diagnostics reported no linter errors for changed files.
- `git diff --cached --check` passed before commit.

## Concerns
- No browser visual check was run; image paths were verified by file presence and production build.
