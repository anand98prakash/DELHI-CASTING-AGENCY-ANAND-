# Delhi Casting Agency (DCA) — Production Deployment Guide

This document outlines the step-by-step procedure, environment variables, security guidelines, and production build requirements to deploy the Delhi Casting Agency platform.

---

## 1. System Architecture

- **Frontend**: Next.js 16 (React 19) App Router, Turbopack, Tailwind CSS.
- **Backend**: Express + TypeScript REST API (ESM Modules).
- **Database**: PostgreSQL with Prisma ORM.
- **File Uploads & Media Storage**: Cloudinary Cloud Object Storage (Production) with local disk fallback (`/uploads`) for local development.

---

## 2. Environment Configuration

### A. Frontend Environment (`.env.local` for Dev / Deployment Platform Settings)

| Variable Name | Description | Example (Development) | Example (Production) |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_API_URL` | Public HTTPS URL of backend API | `http://localhost:5000` | `https://api.delhicastingagency.com` |

### B. Backend Environment (`backend/.env`)

| Variable Name | Description | Example (Development) | Example (Production) |
| :--- | :--- | :--- | :--- |
| `PORT` | Express server port | `5000` | `5000` (or platform injected) |
| `NODE_ENV` | Mode (`development` / `production`) | `development` | `production` |
| `FRONTEND_URL` | Allowed origin for CORS security | `http://localhost:3000` | `https://delhicastingagency.com` |
| `DATABASE_URL` | PostgreSQL Connection String | `postgresql://user:pass@localhost:5432/dca_db` | `postgresql://user:pass@db-host:5432/dca_db?sslmode=require` |
| `JWT_SECRET` | Secret key for signing user tokens | `dca-dev-jwt-key-2026` | `a_long_random_64_char_secure_string` |
| `RAZORPAY_KEY_ID` | Razorpay Key ID | `rzp_test_...` | `rzp_live_...` |
| `RAZORPAY_KEY_SECRET` | Razorpay Key Secret for HMAC verification | `dca_dev_secret` | `live_razorpay_key_secret` |
| `RAZORPAY_WEBHOOK_SECRET` | Razorpay Webhook Signature Secret | `dca_webhook_secret` | `live_webhook_secret` |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary Cloud Name | `your_cloud_name` | `dca_prod_cloud` |
| `CLOUDINARY_API_KEY` | Cloudinary API Key | `1234567890` | `1234567890` |
| `CLOUDINARY_API_SECRET` | Cloudinary API Secret | `your_api_secret` | `live_cloudinary_api_secret` |

### C. Initial Admin Bootstrap Environment Variables

To create the initial production ADMIN account via CLI:

| Variable Name | Description | Example (Production) |
| :--- | :--- | :--- |
| `INITIAL_ADMIN_EMAIL` | Production Admin Email | `admin@delhicastingagency.com` |
| `INITIAL_ADMIN_PASSWORD` | Production Admin Initial Password | `<secure-production-password>` |

**Execution Command**:
```bash
cd backend
INITIAL_ADMIN_EMAIL=admin@delhicastingagency.com INITIAL_ADMIN_PASSWORD=your_secure_password npx tsx prisma/seed-admin.ts
```

---

## 3. Cloudinary Setup & Production Media Storage Instructions

1. **Create Cloudinary Account**:
   Sign up at [Cloudinary Console](https://cloudinary.com/console) and create a production cloud instance.

2. **Obtain API Credentials**:
   From your Cloudinary Dashboard, copy:
   - **Cloud Name** (`CLOUDINARY_CLOUD_NAME`)
   - **API Key** (`CLOUDINARY_API_KEY`)
   - **API Secret** (`CLOUDINARY_API_SECRET`)

3. **Configure Environment Variables**:
   Add `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET` to your production hosting environment (e.g. Render / Vercel / Railway / AWS).

4. **Verify Health & Connectivity**:
   Call `GET /api/health` on your deployed backend. It will return:
   ```json
   {
     "success": true,
     "message": "DCA API is healthy",
     "database": "connected",
     "cloudinary": "configured"
   }
   ```

5. **Verify Upload & Delivery**:
   Upload an artist headshot from the profile setup UI. Image URLs will be delivered over HTTPS via `https://res.cloudinary.com/...` with auto-format (`f_auto`) and quality optimization (`q_auto`).

---

## 4. Local Development Startup

1. **Start Backend Server**:
   ```bash
   cd backend
   npm install
   npx prisma generate
   npm run dev
   ```
   Backend listens on `http://localhost:5000`.

2. **Start Frontend Server**:
   ```bash
   npm install
   npm run dev
   ```
   Frontend listens on `http://localhost:3000`.

---

## 5. Production Build & Deployment Commands

### Backend Build
```bash
cd backend
npx prisma validate
npx prisma db push
npx prisma generate
npm run build
```

### Backend Startup (Production)
```bash
npm run start
```

### Frontend Build
```bash
npx tsc --noEmit
npm run lint
npm run build
```

---

## 6. API Health Check Endpoint

- **Endpoint**: `GET /api/health`
- **Authentication**: Unauthenticated (Public)
- **Response**:
  ```json
  {
    "success": true,
    "message": "DCA API is healthy",
    "database": "connected",
    "cloudinary": "configured"
  }
  ```

---

## 7. Security Best Practices

1. **JWT Secret Rotation**: Ensure `JWT_SECRET` in production contains a minimum 32-character random string.
2. **CORS Restrictions**: Never set `origin: "*"` on production servers. `FRONTEND_URL` must match the production domain exactly.
3. **Database SSL**: Production `DATABASE_URL` must use encrypted connections (`?sslmode=require`).
4. **Git Protection**: `.env` and `.env.local` files must remain strictly listed in `.gitignore`. Never commit Cloudinary API secrets.
