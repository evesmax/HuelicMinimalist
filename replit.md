# REST Express Application

## Overview
A full-stack web application built with Express (backend) and React (frontend), using TypeScript throughout.

## Tech Stack
- **Backend**: Express.js with TypeScript, running via `tsx`
- **Frontend**: React 18 with Vite, TailwindCSS, Radix UI components
- **Database**: PostgreSQL via Neon serverless + Drizzle ORM
- **Auth**: Passport.js with local strategy
- **State Management**: TanStack React Query

## Project Structure
- `server/` - Express backend (index.ts, routes.ts, storage.ts, vite.ts, static.ts)
- `client/` - React frontend (src/, public/, index.html)
- `script/` - Build scripts

## Scripts
- `npm run dev` - Start development server (uses tsx)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - TypeScript type checking
- `npm run db:push` - Push database schema changes

## Configuration
- Server runs on port 5000
- Vite handles frontend dev server and HMR
- PostCSS + TailwindCSS for styling
