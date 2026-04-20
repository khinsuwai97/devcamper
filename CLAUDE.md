# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Devcamper API - A backend REST API for a bootcamp directory application built with Node.js and Express.

## Development Commands

**Start development server with auto-reload:**
```bash
npm run dev
```

**Start production server:**
```bash
npm start
```

## Technology Stack

- **Runtime:** Node.js (CommonJS modules)
- **Framework:** Express 5.x
- **Environment:** dotenv for configuration
- **Dev Tools:** nodemon for development

## Architecture Notes

This is an early-stage project with minimal code structure. When adding features:

- Entry point is `server.js`
- Follow MVC pattern: create `controllers/`, `models/`, `routes/`, and `middleware/` directories as needed
- Environment variables should be loaded via dotenv and stored in `.env` file
- Use Express 5.x syntax (note: Express 5 has breaking changes from v4)