# Delhi Casting Agency — Client UAT Guide

---

## 1. Purpose

This document provides the official **User Acceptance Testing (UAT) Guide** for the **Delhi Casting Agency (DCA)** application. 

The purpose of UAT is to allow client stakeholders and reviewers to verify that the delivered application satisfies all core business workflows, role permissions, and user experience requirements. 

> [!NOTE]
> UAT is focused on functional acceptance and workflow validation by business reviewers. Comprehensive technical security audits, rate-limiting tests, and adversarial security reviews have already been conducted and passed in previous verification phases.

---

## 2. System Overview & User Roles

The DCA platform supports three distinct user roles:

### **1. ARTIST**
Artists are actors, models, dancers, voice artists, child artists, or influencers looking for casting opportunities.
- **Capabilities**:
  - Register a new account.
  - Log in with email and password.
  - Complete personal, physical, and portfolio details.
  - Upload profile photos and headshot media.
  - Monitor profile verification status (`PENDING_REVIEW` -> `APPROVED`).
  - Browse approved, active casting calls.
  - Apply to casting calls with a note.
  - Receive real-time in-app notifications when shortlisted, selected, or rejected.
  - Log out.

### **2. BRAND / AGENCY**
Brands and Casting Directors post job listings and recruit talent for films, TV commercials, fashion shows, and web series.
- **Capabilities**:
  - Register a new Brand account.
  - Log in with email and password.
  - Complete company profile details.
  - Post new Casting Calls (which enter `PENDING_REVIEW` moderation queue).
  - Track casting call approval status.
  - View applicant rosters for approved casting calls.
  - Manage candidates: Shortlist, Select, or Reject applicants.
  - Receive notifications when candidates apply or when castings are moderated.
  - Log out.

### **3. ADMIN**
DCA Administrators moderate platform quality, approve profiles and job postings, and monitor system analytics.
- **Capabilities**:
  - Log in with password.
  - Complete mandatory Multi-Factor Authentication (TOTP 2FA) using an authenticator app.
  - Access the Admin Dashboard & System Analytics.
  - Review pending Artist profiles -> Approve or Reject.
  - Review pending Casting Calls -> Approve or Reject.
  - View payment and entitlement analytics.
  - Log out.

---

## 3. Current Testing Environment

- **Frontend Application URL**: `http://localhost:3000`
- **Backend API URL**: `http://localhost:5000`
- **Health Diagnostics Endpoint**: `http://localhost:5000/api/health`
  - Expected Response: `{"success": true, "database": "connected", "cloudinary": "configured"}`

> [!IMPORTANT]
> The current environment is running locally for internal UAT verification. Testing by remote client stakeholders across external networks requires deployment to a staging or production URL, which will be executed during the subsequent deployment phase.

---

## 4. Test Account Information

> [!SECURITY NOTE]
> Actual passwords and sensitive API keys are NOT stored in documentation. Dedicated test credentials will be provided to client testers through a secure out-of-band channel.

- **ARTIST DEMO ACCOUNT**:
  - Email: `<provided separately>`
  - Password: `<provided securely>`
- **BRAND DEMO ACCOUNT**:
  - Email: `<provided separately>`
  - Password: `<provided securely>`
- **ADMIN DEMO ACCOUNT**:
  - Email: `<provided separately>`
  - Password: `<provided securely>`
  - 2FA Method: Authenticator App (Google Authenticator / Authy)

*System secrets (`JWT_SECRET`, `DATABASE_URL`, `CLOUDINARY_API_SECRET`, `RAZORPAY_KEY_SECRET`, `MFA_ENCRYPTION_KEY`) remain securely encrypted in server environment files.*

---

## 5. Artist UAT Workflow

### **ARTIST-001 — Registration**
1. Navigate to `http://localhost:3000/register`.
2. Select **Artist**, fill in required registration details (password minimum 8 characters), and click **Register**.
3. **Expected Result**: Account is created successfully and user is redirected to profile setup.

### **ARTIST-002 — Login**
1. Navigate to `http://localhost:3000/login`.
2. Enter Artist credentials and click **Login**.
3. **Expected Result**: Artist logs in successfully and opens the Artist dashboard.

### **ARTIST-003 — Profile Setup & Persistence**
1. Complete bio, physical attributes (height, weight, etc.), and skills.
2. Click **Save Profile**.
3. Refresh the browser page or log out and log in again.
4. **Expected Result**: Profile details remain saved accurately in the database.

### **ARTIST-004 — Media Upload**
1. Upload a profile photo and headshots (JPEG, PNG, or WebP).
2. Click **Save**.
3. **Expected Result**: Images upload successfully and display via secure Cloudinary HTTPS links (`https://res.cloudinary.com/...`).

### **ARTIST-005 — Profile Approval Status**
1. Observe initial profile status shows `PENDING_REVIEW`.
2. After Admin approves the profile, refresh or check dashboard.
3. **Expected Result**: Profile status updates to `APPROVED`.

### **ARTIST-006 — Browse Casting Calls**
1. Navigate to `http://localhost:3000/casting-calls`.
2. **Expected Result**: Approved, active casting calls are displayed.

### **ARTIST-007 — Application Submission**
1. Select an approved casting call and click **Apply**.
2. Enter an optional application note and submit.
3. **Expected Result**: Application is submitted with status `PENDING`.

### **ARTIST-008 — Duplicate Application Protection**
1. Attempt to apply to the exact same casting call a second time.
2. **Expected Result**: Application is rejected with a message indicating you have already applied.

### **ARTIST-009 — In-App Notifications**
1. When a Brand shortlists or selects your application, check the header notification bell.
2. **Expected Result**: In-app notification appears detailing status update.

### **ARTIST-010 — Logout**
1. Click **Logout**.
2. **Expected Result**: User session is ended and local storage authentication data is cleared.

---

## 6. Brand UAT Workflow

### **BRAND-001 — Registration**
1. Navigate to `http://localhost:3000/register/brand`.
2. Complete brand registration form and submit.
3. **Expected Result**: Brand account is created with `BRAND` role.

### **BRAND-002 — Login**
1. Log in with Brand credentials.
2. **Expected Result**: Brand dashboard opens cleanly.

### **BRAND-003 — Brand Profile Setup**
1. Enter company name, industry, and contact details, then click **Save**.
2. **Expected Result**: Brand profile saves and persists.

### **BRAND-004 — Create Casting Call**
1. Click **Post New Casting**.
2. Fill in title, description, category, location, and compensation, then submit.
3. **Expected Result**: Casting call is created with initial status `PENDING_REVIEW`.

### **BRAND-005 — Moderation Wait State**
1. Check casting list before Admin approval.
2. **Expected Result**: Casting is not yet visible in the public feed.

### **BRAND-006 — Admin Approval**
1. Admin approves the casting call in Admin Panel.
2. **Expected Result**: Casting call status changes to `APPROVED`.

### **BRAND-007 — Public Visibility**
1. Open `http://localhost:3000/casting-calls`.
2. **Expected Result**: The approved casting call appears in the public list.

### **BRAND-008 — View Candidate Roster**
1. Open casting management view as the owning Brand.
2. **Expected Result**: Roster of applied Artists is displayed.

### **BRAND-009 — Shortlist Candidate**
1. Click **Shortlist** on an applicant.
2. **Expected Result**: Applicant status updates to `SHORTLISTED`.

### **BRAND-010 — Reject Candidate**
1. Click **Reject** on an applicant.
2. **Expected Result**: Applicant status updates to `REJECTED`.

### **BRAND-011 — Select Candidate**
1. Click **Select** on an applicant.
2. **Expected Result**: Applicant status updates to `SELECTED`.

### **BRAND-012 — Logout**
1. Click **Logout**.
2. **Expected Result**: Brand session is safely invalidated.

---

## 7. Admin UAT Workflow

### **ADMIN-001 — Login Password Verification**
1. Navigate to `http://localhost:3000/login` and enter Admin credentials.
2. **Expected Result**: Password verified; system prompts for 2FA verification code.

### **ADMIN-002 — Multi-Factor Authentication (TOTP 2FA)**
1. Open authenticator app and enter the 6-digit code.
2. **Expected Result**: Full Admin JWT issued; Admin Dashboard opens.

### **ADMIN-003 — Dashboard Analytics**
1. View overall statistics, total user count, and pending queues.
2. **Expected Result**: Real-time system stats display cleanly.

### **ADMIN-004 — Artist Moderation Queue**
1. Navigate to **Pending Artists**.
2. **Expected Result**: List of artists awaiting verification is shown.

### **ADMIN-005 — Approve Artist**
1. Click **Approve** on a pending artist profile.
2. **Expected Result**: Profile transitions to `APPROVED`; notification sent to Artist.

### **ADMIN-006 — Reject Artist**
1. Click **Reject** on a pending artist profile.
2. **Expected Result**: Profile transitions to `REJECTED`.

### **ADMIN-007 — Casting Moderation Queue**
1. Navigate to **Pending Castings**.
2. **Expected Result**: List of brand job submissions awaiting review is shown.

### **ADMIN-008 — Approve Casting**
1. Click **Approve** on a pending casting call.
2. **Expected Result**: Casting transitions to `APPROVED` and becomes public.

### **ADMIN-009 — Reject Casting**
1. Click **Reject** on a pending casting call.
2. **Expected Result**: Casting transitions to `REJECTED` and remains hidden.

### **ADMIN-010 — Payment & Entitlement Analytics**
1. View payment analytics tab.
2. **Expected Result**: Subscription and entitlement statistics render cleanly.

### **ADMIN-011 — Logout**
1. Click **Logout**.
2. **Expected Result**: Admin session is revoked server-side.

---

## 8. Demonstration Security Checks

### **SEC-UAT-001 — Artist Access Control**
1. Log in as Artist and attempt to open `http://localhost:3000/admin/dashboard`.
2. **Expected Result**: Access denied; user redirected or shown HTTP 403.

### **SEC-UAT-002 — Brand Access Control**
1. Log in as Brand and attempt to open `http://localhost:3000/admin/dashboard`.
2. **Expected Result**: Access denied; user redirected or shown HTTP 403.

### **SEC-UAT-003 — Profile Isolation**
1. Log in as Artist A and view profile page.
2. **Expected Result**: Displays strictly Artist A's profile.

### **SEC-UAT-004 — Brand Casting Ownership**
1. Log in as Brand B and attempt to edit Brand A's casting call.
2. **Expected Result**: Access denied; operation blocked.

---

## 9. Casting Call Lifecycle Flow

```
   BRAND CREATES CASTING
           │
           ▼
    [PENDING_REVIEW] ───(Admin Rejects)───> [REJECTED] (Not Public)
           │
     (Admin Approves)
           │
           ▼
      [APPROVED] ───> Visible in Public Feed
           │
    (Brand Closes Job)
           │
           ▼
       [CLOSED] ───> Applications Blocked
```

---

## 10. Application Lifecycle Flow

```
   ARTIST SUBMITS APPLICATION
               │
               ▼
           [PENDING]
           │       │
  (Brand Shortlists) (Brand Rejects)
       │               │
       ▼               ▼
 [SHORTLISTED]    [REJECTED]
       │
 (Brand Selects)
       │
       ▼
  [SELECTED]
```
*Every status update triggers an automated in-app notification to the Artist.*

---

## 11. Notification Summary

Notifications are automatically generated for:
1. **Artist Profile Approved**: Sent when Admin approves an artist.
2. **Artist Profile Rejected**: Sent when Admin rejects an artist.
3. **Casting Call Approved**: Sent to Brand when Admin approves a casting posting.
4. **Casting Call Rejected**: Sent to Brand when Admin rejects a casting posting.
5. **Application Shortlisted**: Sent to Artist when Brand shortlists them.
6. **Application Rejected**: Sent to Artist when Brand rejects them.
7. **Application Selected**: Sent to Artist when Brand selects them for a role.

---

## 12. Client UAT Test Case Matrix

| Test ID | Role | Workflow Description | Expected Result | Client Result | Notes |
| :--- | :--- | :--- | :--- | :---: | :--- |
| **UAT-001** | Public | Open Homepage (`http://localhost:3000`) | Homepage loads with hero section and categories | `[ ] Not Tested` | |
| **UAT-002** | Public | Browse `/talents`, `/actors`, `/models` | Talent directory displays listed artists | `[ ] Not Tested` | |
| **UAT-003** | Artist | Register new Artist account | Account created; opens profile setup | `[ ] Not Tested` | |
| **UAT-004** | Artist | Log in with Artist credentials | Dashboard opens cleanly | `[ ] Not Tested` | |
| **UAT-005** | Artist | Complete profile details & save | Profile persists across page refresh | `[ ] Not Tested` | |
| **UAT-006** | Artist | Upload profile photo & headshots | Media uploads & displays via Cloudinary | `[ ] Not Tested` | |
| **UAT-007** | Admin | Approve pending Artist profile | Status updates to `APPROVED` | `[ ] Not Tested` | |
| **UAT-008** | Brand | Register new Brand account | Account created with `BRAND` role | `[ ] Not Tested` | |
| **UAT-009** | Brand | Complete Brand profile details | Brand company profile saves | `[ ] Not Tested` | |
| **UAT-010** | Brand | Create new Casting Call | Posting created with status `PENDING_REVIEW` | `[ ] Not Tested` | |
| **UAT-011** | Admin | Approve pending Casting Call | Status updates to `APPROVED` | `[ ] Not Tested` | |
| **UAT-012** | Public | View `/casting-calls` | Approved casting appears in public list | `[ ] Not Tested` | |
| **UAT-013** | Artist | Apply to approved Casting Call | Application created with status `PENDING` | `[ ] Not Tested` | |
| **UAT-014** | Artist | Re-apply to same Casting Call | Rejection message displayed (Single entry) | `[ ] Not Tested` | |
| **UAT-015** | Brand | View casting candidate roster | List of applied artists displayed | `[ ] Not Tested` | |
| **UAT-016** | Brand | Shortlist candidate | Candidate status changes to `SHORTLISTED` | `[ ] Not Tested` | |
| **UAT-017** | Brand | Reject candidate | Candidate status changes to `REJECTED` | `[ ] Not Tested` | |
| **UAT-018** | Brand | Select candidate | Candidate status changes to `SELECTED` | `[ ] Not Tested` | |
| **UAT-019** | Artist | View In-App Notification bell | Status update notification displayed | `[ ] Not Tested` | |
| **UAT-020** | Admin | View Admin Dashboard statistics | System counts and metrics render | `[ ] Not Tested` | |
| **UAT-021** | Admin | Log in with TOTP 2FA PIN | 6-digit code grants Admin access | `[ ] Not Tested` | |
| **UAT-022** | All | Perform Logout | Session ended; stored token invalidated | `[ ] Not Tested` | |
| **UAT-023** | Artist | Attempt opening `/admin/dashboard` | Access blocked (HTTP 403 / Redirect) | `[ ] Not Tested` | |
| **UAT-024** | Public | Register with password < 8 chars | Validation error message displayed | `[ ] Not Tested` | |
| **UAT-025** | All | View UI on Mobile screen | Responsive layout renders cleanly | `[ ] Not Tested` | |

---

## 13. Bug Reporting Guidelines & Template

If an issue is observed during UAT, please record it using the template below:

```text
BUG ID: [e.g., UAT-BUG-001]
DATE: [YYYY-MM-DD]
ROLE: [Artist / Brand / Admin / Public]
PAGE / URL: [e.g., http://localhost:3000/casting-calls]
TEST CASE: [e.g., UAT-013]
STEPS TO REPRODUCE:
  1. ...
  2. ...
EXPECTED RESULT:
ACTUAL RESULT:
SCREENSHOT / VIDEO: [Attach image or recording]
SEVERITY: [P0 Critical / P1 High / P2 Medium / P3 Low]
```

### Severity Definitions
- **P0 — Critical**: Security flaw, system crash, or data corruption.
- **P1 — High**: Core business workflow blocked (e.g., unable to apply or post casting).
- **P2 — Medium**: Secondary feature flaw with workarounds available.
- **P3 — Low**: Minor UI alignment, cosmetic layout, or text typo issue.

---

## 14. UAT Rules & Guidelines

1. **Structured Testing**: Execute one test case at a time following the provided steps.
2. **Dedicated Test Accounts**: Use provided UAT credentials or create dedicated test accounts.
3. **Preserve System Config**: Do not alter database configuration or server environment settings.
4. **No Real Payments**: Real payment gateway testing is currently out of scope. Do not attempt card transactions.
5. **Clear Feedback**: Include exact steps and screenshots when reporting bugs.

---

## 15. Known Out-of-Scope Items

- **Payment Gateway Integration (PayU)**: **ON HOLD** *(Pending client merchant account credentials)*.
- **Real Card / Payment Operations**: **NOT PERFORMED**.
- **Server Deployment**: **OUT OF SCOPE** *(Testing is performed in local environment)*.
- **Remote Network Access**: Testing across external domains requires deployment to a staging server in a later phase.

---

## 16. UAT Acceptance Criteria

UAT is considered **ACCEPTED & COMPLETE** when:
- [ ] Core Artist workflow accepted
- [ ] Core Brand workflow accepted
- [ ] Core Admin workflow & 2FA accepted
- [ ] Casting Call lifecycle accepted
- [ ] Application submission & roster management accepted
- [ ] In-app notification delivery accepted
- [ ] Responsive UI layout accepted
- [ ] Zero unresolved P0 (Critical) issues
- [ ] Zero unresolved P1 (High) blockers
- [ ] Known out-of-scope items acknowledged

---

## 17. UAT Sign-Off Form

**Project Name**: Delhi Casting Agency (DCA)  
**Client Representative**: ___________________________  
**Company / Organization**: ___________________________  
**Date**: ___________________________  

**Final Acceptance Decision**:
- `[ ] ACCEPTED`
- `[ ] ACCEPTED WITH MINOR ISSUES`
- `[ ] NOT ACCEPTED`

**Client Comments**:
________________________________________________________________________________  
________________________________________________________________________________  

**Sign-off Approval**:  
Name: ___________________________  
Designation: ___________________________  
Signature: ___________________________  
