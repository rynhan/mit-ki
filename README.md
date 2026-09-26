# Mit-KI

Mit-KI is a Next.js web interface for chatting with AI models, backed by a
Python LangGraph agent hosted by the Aegra agent server. Authentication uses
better-auth with Prisma and PostgreSQL.

## Repository

- `frontend/` — Next.js, React, TypeScript, and Tailwind application with
  better-auth + Prisma authentication.
- `backend/agent-server/` — Aegra/LangGraph agent server (hosts the `mitki`
  agent) with PostgreSQL and Redis Docker services.
- `backend/mcp-server/` — MCP server.
- `observability/` — planned Langfuse, Prometheus, and Grafana configuration.
- `deploy/` — planned whole-stack Compose deployment for a VPS.
- `architecture.md` — current system structure and deployment direction.

## Frontend

```bash
cd frontend
npm install
npx prisma migrate dev      # apply better-auth schema
npm run dev
```

Open <http://localhost:3000>.

Useful checks:

```bash
npm run lint
npm run build
```

Configure the database URL and auth settings in `frontend/.env`. Do not commit
that file or any real credentials.

## Backend agent server

The backend uses `uv` and requires Python 3.12 or newer.

```bash
cd backend/agent-server
cp .env.example .env
uv sync
uv run aegra dev
```

The backend Compose file can start PostgreSQL, Redis, and the agent service:

```bash
docker compose up --build
```

Configure model credentials in `backend/agent-server/.env`. Do not commit that
file or any real credentials.

## Status

The frontend shell, better-auth authentication, and the initial agent graph
are in place. Frontend/backend chat integration, Langfuse observability,
whole-stack deployment, and metrics (Prometheus/Grafana) are still being
built.

See [`architecture.md`](./architecture.md) for the current architecture and
planned boundaries.

Last updated: 2026-09-26
