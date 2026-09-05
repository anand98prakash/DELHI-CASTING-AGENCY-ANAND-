# Developer UAT Execution Checklist

---

## 1. Pre-UAT Environment Preparation
- [x] Backend API server compiled & running on `http://localhost:5000`
- [x] Frontend application compiled & running on `http://localhost:3000`
- [x] PostgreSQL database connected (`dca_db`)
- [x] Cloudinary media service configured & connected (`https://res.cloudinary.com/r3rhrvms/...`)
- [x] Test dataset available (43 Artists, 16 Brands, 7 Admins, 12 Castings)
- [x] Admin TOTP 2FA enabled & functional
- [x] Backend TypeScript check passing (`npx tsc --noEmit` -> Code 0)
- [x] Backend build passing (`npm run build` -> Code 0)
- [x] Frontend TypeScript check passing (`npx tsc --noEmit` -> Code 0)
- [x] Frontend lint passing (`npm run lint` -> 0 Errors)
- [x] Frontend build passing (`npm run build` -> Code 0)
- [x] Environment secrets (`JWT_SECRET`, `DATABASE_URL`, `CLOUDINARY_API_SECRET`, `MFA_ENCRYPTION_KEY`) verified non-committed and loaded via `.env`

---

## 2. During Client UAT Support
- [ ] Monitor server logs for unexpected errors or exceptions.
- [ ] Provide client with safe UAT credentials out-of-band.
- [ ] Log every client-reported observation into `docs/UAT-BUG-LOG.md`.
- [ ] Assign UAT Bug IDs (`UAT-BUG-XXX`) and severity ratings (`P0`, `P1`, `P2`, `P3`).
- [ ] Differentiate functional bugs from new feature change requests.
- [ ] Reproduce reported bugs locally before applying patches.
- [ ] Do NOT modify existing production database records or Admin credentials during UAT.

---

## 3. Post-UAT Handover & Transition
- [ ] Resolve confirmed P0/P1 UAT blockers.
- [ ] Re-run regression test suite (`scratch_sec_test.ts` & E2E checks).
- [ ] Update UAT results matrix in `docs/CLIENT-UAT-GUIDE.md`.
- [ ] Obtain signed client acceptance form (`docs/UAT-SIGNOFF.md`).
- [ ] Prepare production server deployment when requested.
- [ ] Resume PayU payment gateway integration once client merchant credentials are provided.
