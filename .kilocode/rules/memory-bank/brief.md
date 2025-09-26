# Project Overview

I want to build an open-source app. The idea is developer (Especially Frontend) can write what API endpoints they need in the easiest way possible. Then, we generate cards with easy-to-read text, markdown, and YAML format. Other developers (backend dev) can refer to these to build the API endpoints, or users can just copy and paste them into AI coding apps.

## MVP Core Features

### 1. Simple Endpoint Builder

- Basic form to define: endpoint name, HTTP method (GET/POST/PUT/DELETE), URL path
- Simple request/response body examples (just JSON text areas, no complex schemas)
- Basic description field for what the endpoint does

### 2. Project Workspace

- Create/manage projects (one per app/website)
- Add multiple endpoints to a project
- Basic project sharing via public links (no auth required for viewing)

### 3. Three Output Formats

- **Cards View**: Clean, visual cards showing each endpoint
- **Markdown Export**: Copy-pasteable markdown for GitHub/docs
- **YAML Export**: Simple YAML format (not full OpenAPI, just your own structure)

### 4. Basic Auth & Persistence

- Simple sign-up/login with Better Auth
- Save projects to user accounts
- Public/private project toggle

## What NOT to Include in MVP

- Complex data type validation
- Authentication/authorization for APIs
- Error code definitions
- Team collaboration features
- Comments/feedback system
- OpenAPI compatibility
- Import from other tools

## MVP User Flow

Sign up → Create project → Add endpoints → Share link

- Frontend dev fills out simple forms
- Backend dev gets clean, readable specs
- Test if this actually improves communication

## Tech Stack Validation

Your stack is solid for MVP:

- **Next.js + TS**: Fast development
- **Prisma + PostgreSQL**: Simple data modeling
- **Better Auth**: Handles auth complexity
- Keep styling minimal (maybe just Tailwind + shadcn/ui components you're familiar with)
