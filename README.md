# Mit-KI

Mit-KI is a Next.js web interface for chatting with AI models, backed by a
Python LangGraph agent managed by Aegra.

## Repository

- `frontend/` — Next.js, React, TypeScript, and Tailwind application.
- `backend/mitki-agent/` — Aegra/LangGraph agent with PostgreSQL and Redis
  Docker services.
- `architecture.md` — current system structure and deployment direction.

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Open <http://localhost:3000>.

Useful checks:

```bash
npm run lint
npm run build
```

## Backend agent

The backend uses `uv` and requires Python 3.12 or newer.

```bash
cd backend/mitki-agent
cp .env.example .env
uv sync
uv run aegra dev
```

The backend Compose file can start PostgreSQL, Redis, and the agent service:

```bash
docker compose up --build
```

Configure model credentials in `backend/mitki-agent/.env`. Do not commit that
file or any real credentials.

## Status

The frontend shell and initial agent graph are in place. Backend-owned
authentication, application APIs, database migrations, frontend/backend chat
integration, production deployment, and observability are still being built.

See [`architecture.md`](./architecture.md) for the current architecture and
planned boundaries.
