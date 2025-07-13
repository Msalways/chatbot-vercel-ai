# Chat MVP

This is a modern chat application built with the T3 Stack, featuring user authentication and AI-powered chat functionality.

## Features

- User registration and login with email and password (NextAuth.js with Prisma)
- AI-powered chat interface using @ai-sdk/react
- Real-time chat with message streaming and retry on errors
- Syntax-highlighted code blocks in chat messages
- Responsive UI built with Tailwind CSS and Radix UI components
- PostgreSQL database managed with Prisma ORM

## Tech Stack

- [Next.js](https://nextjs.org) - React framework for server-side rendering and routing
- [NextAuth.js](https://next-auth.js.org) - Authentication library for Next.js
- [Prisma](https://prisma.io) - ORM for database management
- [PostgreSQL](https://www.postgresql.org) - Relational database
- [tRPC](https://trpc.io) - Typesafe API routes
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [@ai-sdk/react](https://www.npmjs.com/package/@ai-sdk/react) - AI chat SDK
- [Radix UI](https://www.radix-ui.com) - Accessible UI primitives

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd chat-mvp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory with the following variables:

   ```env
   DATABASE_URL=your_postgresql_connection_string
   AUTH_SECRET=your_auth_secret_key
   OPENROUTER_API_KEY=your_openrouter_api_key
   NODE_ENV=development
   ```

4. Set up the database:

   Run Prisma migrations to create the database schema:

   ```bash
   npm run db:migrate
   ```

   Optionally, you can open Prisma Studio to view and manage your database:

   ```bash
   npm run db:studio
   ```

## Running the Project

- Start the development server:

  ```bash
  npm run dev
  ```

  The app will be available at [http://localhost:3000](http://localhost:3000).

- Build the project for production:

  ```bash
  npm run build
  ```

- Start the production server:

  ```bash
  npm run start
  ```

## Useful Commands

- `npm run check` - Run biome code checks
- `npm run typecheck` - Run TypeScript type checking
- `npm run db:generate` - Generate Prisma client and run migrations
- `npm run db:migrate` - Apply Prisma migrations
- `npm run db:push` - Push Prisma schema changes to the database
- `npm run db:studio` - Open Prisma Studio UI

## Project Structure Highlights

- `src/app` - Next.js app routes and pages
- `src/components` - Reusable UI components including chat UI
- `src/server` - Backend API routes and authentication logic
- `prisma` - Database schema and migrations

## Resources

- [T3 Stack Documentation](https://create.t3.gg/)
- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [tRPC Documentation](https://trpc.io/docs)

## Deployment

Refer to the T3 Stack deployment guides for deploying on platforms like Vercel, Netlify, or Docker:

- [Vercel Deployment](https://create.t3.gg/en/deployment/vercel)
- [Netlify Deployment](https://create.t3.gg/en/deployment/netlify)
- [Docker Deployment](https://create.t3.gg/en/deployment/docker)

---

This README provides a comprehensive overview of the project, its features, setup, and usage instructions to help you get started quickly and efficiently.
