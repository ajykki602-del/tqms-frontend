# Transport Queue Management System (TQMS)

A modern, responsive frontend prototype for a Transport Queue Management System, developed using Next.js, React, TypeScript, and Tailwind CSS.

## Project Overview

The application provides a dashboard and queue management interface for monitoring vehicle queues and their journey statuses at transport checkpoints.

The frontend is based on the workflow and interface observations of an existing TQMS application. It uses sample data for demonstration and does not connect to the original production system.

## Key Features

- **Dashboard:** Overview of pending queues, active queues, completed queues, and registered vehicles.
- **Queue Management:** View queue records, search, filter, and navigate through queue listings.
- **Queue Details:** View vehicle information, route, queue status, and checkpoint history section.
- **Queue Status Management:** Demonstrate transitions between Pending, In Job, and Completed.
- **Responsive Layout:** Shared sidebar and navigation layout designed for desktop and smaller screens.
- **Mock Data:** Sample queue records for demonstrating the application without modifying production data.

## Technology Stack

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Lucide React

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── queues/
│       ├── page.tsx
│       └── [id]/
│           └── page.tsx
├── components/
│   └── layout/
│       └── AppShell.tsx
└── data/
    └── queues.ts
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the project directory:

```bash
cd tqms-frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

To verify and build the application:

```bash
npm run build
```

## Application Routes

| Route | Description |
|---|---|
| `/` | Dashboard |
| `/queues` | Queue Management |
| `/queues/[id]` | Queue Details |

## Data and Implementation Notes

The application currently uses locally defined mock queue data in `src/data/queues.ts`.

Interactive queue status changes are handled through React state. These changes are intended for demonstration and are not persisted to a database or external backend.

The checkpoint history section currently displays an empty-state message because checkpoint records have not yet been integrated into the mock dataset.

## Future Improvements

- Backend and database integration.
- REST API implementation for queue operations.
- Vehicle and checkpoint management pages.
- Check-in and end-journey workflows with validation.
- Persistent queue and checkpoint history.
- Authentication and role-based access control.
- Automated testing and deployment.

## Project Status

Frontend prototype completed with a successful Next.js production build.
