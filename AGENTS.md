# AGENTS.md

## Cursor Cloud specific instructions

FitZone is a frontend-only React 19 + Vite 8 SPA (npm). There is no backend, database, or environment variables. Standard commands live in `package.json` (`dev`, `build`, `lint`, `preview`) and `README.md`.

Non-obvious notes:
- Vite `base` is `/FitZone/`, so the dev server serves the app at `http://localhost:5173/FitZone/` (not `/`). Root `/` returns 404.
- `npm run build` outputs to the git-tracked `docs/` folder (GitHub Pages deploy target). A build changes asset hashes in `docs/`; run `git checkout -- docs` afterward to avoid committing build artifacts unless you intend to.
- No test framework is configured; `npm run lint` currently reports 1 pre-existing error (`AuthContext.jsx` react-refresh) and 1 warning in existing code.
- Auth is mock/client-side (localStorage). Demo logins (password `password123` for all): `admin@fitzone.com`, `staff@fitzone.com`, `customer@fitzone.com`, gating the `/dashboard/{admin,staff,customer}` routes.
