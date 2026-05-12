# Manifest ProjectOS

Lightweight executive dashboard for **Flynn Advisors** and **Manifest Industries** built with Next.js, TypeScript, Tailwind CSS, Airtable-ready data access, and Recharts.

## Included Pages
1. Executive Dashboard
2. Flynn Advisors Dashboard
3. Manifest Industries Dashboard
4. Project Detail Page
5. Opportunity Register
6. Agreement Tracker
7. Milestone/Vesting Tracker
8. Compliance Tracker
9. Relationship Map
10. Finance-Lite Dashboard

## Local Setup
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Environment Variables
Copy and configure:
```bash
cp .env.example .env.local
```
Use Airtable API key/base ID and either Clerk or Google auth credentials.

## Airtable Schema (initial)
Use Airtable as the source of truth for structured records.

### Projects
- Name (single line text)
- Entity (single select: Flynn Advisors, Manifest Industries)
- Status (single select: Active, Pipeline, At Risk, Closed)
- Owner (single line text)
- Due Date (date)
- Risk Level (single select: Low, Medium, High)
- Economics Summary (currency/text)
- SharePoint/VDR URL (URL)

### Opportunities
- Opportunity Name
- Linked Project (link to Projects)
- Stage
- Capture Owner
- Est. Value
- Probability %
- Target Award Date

### Agreements
- Agreement Name
- Linked Project
- Type (MOU, Teaming, Subcontract, JV)
- Counterparty
- Effective Date
- Expiration Date
- Status
- Doc URL

### Milestones
- Milestone Name
- Linked Project
- Milestone Date
- Vesting / Earnout %
- Status

### Compliance
- Risk Item
- Linked Project
- Risk Level
- Mitigation Owner
- Due Date
- Status

### Relationships
- Relationship Name
- Org / Stakeholder
- Entity Owner
- Interaction Type
- Last Touchpoint
- Next Action

### FinanceLite
- Linked Project
- Commercial Terms Summary
- Retainer Amount
- Invoice Number
- Invoice Status
- Success Fee Trigger
- Reimbursables

## Design Notes
- Clean, professional, dense-but-readable card layout.
- Neutral palette (not overly colorful SaaS styling).
- Filter-ready tables for entity, project, status, owner, due date, and risk.
- No custom accounting, CRM, or file storage workflows.

## Deployment (Vercel)
1. Push repository to GitHub.
2. Import project in Vercel.
3. Set environment variables from `.env.example`.
4. Build command: `npm run build`; output handled by Next.js.
5. Deploy.

## Auth Strategy
- Preferred: Clerk (fastest Next.js integration).
- Alternative: Google OAuth for lightweight SSO.

## Mock Data Included
AAFS Bosnia, Project Marauder, Pretis Modernization, GSAP, Quantum HPC, Radiance, Pilgrim, Rogue, IDEMIA NSS, Medusa JV.
