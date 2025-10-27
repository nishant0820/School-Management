# School-Management

A Next.js + TailwindCSS starter app for a school management product (learnex/). This repository contains a marketing frontend and an admin dashboard built with Next.js (app router), Tailwind CSS, and a small component library. The project is in active development; the README below summarizes how to run the app, where the important pieces live, and a few recent development notes.

---

## Quick start

Prerequisites:
- Node.js 18+ (or the version supported by your Next.js setup)
- pnpm (recommended) or npm/yarn

From the repository root run:

```powershell
cd "learnex"
pnpm install
pnpm dev
```

The dev server starts (typically at http://localhost:3000). If you don't have `pnpm`, you can use `npm install` and `npm run dev` if the scripts are present in `package.json`.

---

## What you’ll find here

- `app/` — Next 13 app routes (frontend pages, dashboard pages under `(back)`, auth routes, `globals.css` and layout files).
- `components/` — Reusable UI components, split into `frontend/`, `dashboard/`, `FormInputs/`, and `ui/` primitives.
- `lib/` — helper libraries and integrations (e.g. `uploadthing` helper used for file uploads).
- `tailwind.config.ts` — Tailwind configuration. This project maps colors to CSS variables (e.g. `hsl(var(--primary))`) so themes can be changed at runtime.
- `app/globals.css` — Global styles and CSS variable theme declaration (light + `.dark` alternate).
- `package.json` & `pnpm-lock.yaml` — package manifest and lockfile.

Useful directories (inside `learnex`):
- `components/FormInputs` — inputs used across forms (TextInput, PhoneInput, ImageInput, etc.).
- `components/dashboard/sidebar` — dashboard navigation layout.
- `components/frontend` — hero, pricing, contact, and other marketing sections.

---

## Tailwind & theming notes

- Colors are driven by CSS variables defined in `app/globals.css`. Tailwind config (`tailwind.config.ts`) uses `hsl(var(--...))` style values. If color utilities appear missing, ensure `:root` variables are present and `tailwind.config.ts` is loaded by the build.
- Plugins included in the project:
	- `@tailwindcss/forms` — base form styling
	- `tailwindcss-animate` — animation utilities

If colors don't render, confirm the CSS variables are not being overridden (only one `:root` block should set the defaults) and that your components use Tailwind color utilities that map to the variables.

---

## Uploads

The project uses an `uploadthing` helper in `lib/uploadthing.ts` and components that render an upload button (`ImageInput.tsx`, etc.). If the upload button is not visible, verify:

- `endpoint` is passed correctly to the `UploadButton` component.
- Styling/appearance props are set so the button is visible (we added an explicit `Choose File` label and styling in `ImageInput.tsx`).

---

## TypeScript & linting

- Some components originally used `any` types; these were tightened (e.g., `PhoneInput`, `ImageInput`) to improve type safety. If you add new form components, follow the same pattern (use `UseFormRegister` and `FieldErrors` from `react-hook-form` where appropriate).
- Common ESLint rule: `react/no-unescaped-entities` — single quotes in text content were escaped (e.g., `we&apos;re`) where necessary.

---

## Known developer notes / troubleshooting

- If `tailwindcss-animate` or other plugin modules show `Module not found`, install them with:

```powershell
pnpm add -D tailwindcss-animate @tailwindcss/forms
```

- GitHub push blocked by email privacy: if push is rejected, update your local git email to your GitHub no-reply address or change your account email privacy settings.

- Installing `dlib` on Windows: requires C++ build tools or use pre-built wheels (not related to this project, but noted during development).

---

## Example: Add a new page or component

1. Create a new route in `app/` (for example `app/new-page/page.tsx`).
2. Add a presentational component under `components/` and import it in your page.
3. Use Tailwind classes and CSS variables for theming.

---

## Next steps & suggestions

- Add a `LICENSE` if you plan to publish or share the repo publicly.
- Add screenshots to this README for onboarding new contributors.
- Add `pnpm` scripts in `package.json` for linting, formatting, and tests if needed.

If you want, I can:
- Recreate a richer developer guide (scripts, lint, test instructions),
- Add example `.env.example` and show how to wire `uploadthing` or other integrations,
- Or add screenshots and a CODEOWNERS / CONTRIBUTING guide.

Pick one and I’ll add it next.
