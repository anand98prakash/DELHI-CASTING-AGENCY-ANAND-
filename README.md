# Delhi Casting Agency (DCA)

Official repository for the Delhi Casting Agency platform.

## Architecture

This repository contains both the frontend web application and the backend API server:

- **[frontend/](./frontend)**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4.
- **[backend/](./backend)**: Express.js, TypeScript, PostgreSQL, Prisma ORM, JWT Authentication with TOTP MFA.
- **[docs/](./docs)**: Platform documentation, developer guides, and UAT specifications.

## Deployment Guidelines

### Frontend (Vercel)
- **Framework Preset**: Next.js
- **Root Directory**: rontend
- **Build Command**: 
pm run build
- **Output Directory**: .next
- **Install Command**: 
pm install
- **Environment Variables**:
  - NEXT_PUBLIC_API_URL: URL of the deployed backend API (e.g., https://api.delhicastingagency.com)

### Backend (Production Server)
- **Node Environment**: Node.js 20+
- **Working Directory**: ackend
- **Build Command**: 
pm run build
- **Start Command**: 
pm start
- **Database**: PostgreSQL with Prisma migrations (
px prisma migrate deploy)
