# Technology Stack

## Frontend

- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with postcss
- **UI Components**: shadcn/ui (configured in `components.json`)
- **Fonts**: Geist Sans and Geist Mono

## Backend

- **Framework**: Next.js API Routes
- **Database**: MongoDB
- **ORM**: Prisma 6.16.2
- **Authentication**: `better-auth` with GitHub provider

## Development

- **Package Manager**: npm
- **Linting**: ESLint with `next/core-web-vitals`
- **TypeScript Configuration**: Strict mode enabled. Aliases `@/*` configured for root directory.
- **Scripts**:
  - `npm run dev`: Starts the development server.
  - `npm run build`: Builds the app for production.
  - `npm run start`: Starts the production server.
  - `npm run lint`: Lints the codebase.
