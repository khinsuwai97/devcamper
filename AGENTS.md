# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start server with nodemon (auto-restart on file changes)
npm start        # Start server in production mode
```

The server requires a `config/config.env` file (not committed) with at least `PORT` and `NODE_ENV` defined.

## Architecture

This is a Node.js/Express REST API (`server.js` as entry point). The project uses CommonJS modules (`require`/`module.exports`).

**Environment config** is loaded from `config/config.env` via `dotenv` at startup — all environment variables must be set there, not in `.env`.

As the project grows, the expected structure follows an MVC pattern:

- `routes/` — Express routers, one file per resource (e.g. `bootcamps.js`, `courses.js`)
- `controllers/` — Route handler logic, imported by routers
- `models/` — Mongoose schemas/models
- `middleware/` — Custom Express middleware (error handling, auth, etc.)
- `config/` — `config.env` and DB connection setup
- `utils/` — Shared helpers (e.g. geocoder, error response class)
