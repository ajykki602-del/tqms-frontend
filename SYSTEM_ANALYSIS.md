# System Analysis – Transport Queue Management System (TQMS)

## 1. Introduction

The Transport Queue Management System (TQMS) is designed to help manage vehicles and monitor their movement through transport checkpoints. It provides a structured way to register queues, track vehicle journeys, record checkpoint activities, and monitor queue statuses.

This project focuses on developing a modern, responsive frontend prototype based on observations of an existing TQMS application. The prototype demonstrates the dashboard, queue management, and queue details interfaces using sample data.

## 2. Objectives

The main objectives of the system are:

- Provide a centralized view of transport queue activities.
- Display pending, active, and completed queues.
- Allow users to search, filter, and view queue records.
- Present relevant vehicle and journey information.
- Demonstrate the queue lifecycle from registration to journey completion.
- Provide a maintainable and scalable frontend structure.

## 3. System Users

The observed system suggests the following user roles:

- **Administrator:** Monitors queue activities and manages system operations.
- **Checkpoint Staff:** Handles vehicle check-in activities and records checkpoint information.

These roles are identified from the observed workflow; role-based authentication and permissions are not implemented in the current prototype.

## 4. Existing System Workflow

Based on the observed application screens, the queue workflow can be represented as follows:

1. **Pending Queue:** A newly registered vehicle appears in the pending queue.
2. **Queue Approval:** The queue is reviewed and relevant journey information is entered.
3. **Active Queue (In Job):** Once approved, the queue becomes active and the vehicle proceeds on its journey.
4. **Checkpoint Check-in:** Checkpoint staff can record information such as gross weight, driver contact, materials, remarks, and payment details.
5. **Journey Completion:** The journey is ended and the queue is marked as completed.

A vehicle may have multiple checkpoint entries during its journey.

## 5. Functional Requirements

The frontend prototype addresses the following requirements:

| Module | Functional requirements |
|---|---|
| Dashboard | Display queue statistics, queue overview, quick actions, and recent queue records. |
| Queue Management | Display queue records and their current statuses. |
| Search | Search queues using vehicle registration numbers or queue numbers. |
| Filtering | Filter records by queue status, vehicle type, and card type. |
| Pagination | Navigate through queue records in manageable groups. |
| Queue Details | Display vehicle information, route, entry date, queue status, and checkpoint section. |
| Queue Status | Demonstrate transitions between Pending, In Job, and Completed. |
| Navigation | Provide shared navigation between the main application sections. |

## 6. Data Requirements

The queue records used in the prototype contain the following fields:

- Queue ID
- Vehicle registration number
- Vehicle type
- Card type
- Journey route
- Entry date
- Queue status

The observed checkpoint workflow also involves information such as:

- Checkpoint name
- Gross vehicle weight
- Driver phone number
- Material details
- Remarks
- Checkpoint payment information

These additional checkpoint fields are documented as part of the system analysis but are not yet integrated into the prototype's data model.

## 7. Non-Functional Requirements

- **Usability:** The interface should be simple, clear, and easy to navigate.
- **Responsiveness:** Pages should adapt to different screen sizes.
- **Maintainability:** Components and data should be organized for easier updates.
- **Scalability:** The frontend structure should support additional modules and features.
- **Reliability:** The application should handle missing queue records and provide appropriate feedback.
- **Data safety:** Demonstration data should remain separate from the original production system.

## 8. Technical Architecture

The application uses a component-based frontend architecture.

**Technology stack:**

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Lucide React

**Main project structure:**

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

The shared `AppShell` component provides the sidebar and top navigation. Queue data is maintained centrally in `src/data/queues.ts`, while the application pages handle their respective displays and interactions.

TypeScript interfaces and status types help maintain consistency across queue records.

## 9. Current Implementation and Limitations

The current prototype includes:

- Dashboard with queue statistics and recent records.
- Queue management page with search, filters, status tabs, and pagination.
- Queue details page with vehicle and journey information.
- Demonstration of queue status updates.
- Shared navigation and responsive layout.
- Sample queue records for demonstration.

The following limitations should be considered:

- The application uses local mock data rather than a production database.
- Status changes are managed through frontend state and are not permanently stored.
- No backend API or database integration is currently implemented.
- Checkpoint history and check-in operations are not yet fully implemented.
- Vehicle and checkpoint management pages are not yet implemented.
- Authentication and role-based access control are outside the current prototype scope.

## 10. Future Enhancements

The system can be extended with the following improvements:

1. Develop backend APIs for queue and vehicle management.
2. Integrate a database for persistent data storage.
3. Implement complete checkpoint check-in and check-out functionality.
4. Maintain a complete history of vehicle checkpoint entries.
5. Add vehicle registration and checkpoint management modules.
6. Implement authentication and role-based access control.
7. Add input validation, error handling, and confirmation workflows.
8. Introduce automated testing and deployment.

## 11. Conclusion

The TQMS frontend prototype demonstrates the core queue monitoring workflow through a modern and structured user interface. It provides a foundation for further development by organizing the application into reusable components and clearly separating queue data from presentation logic.

The current implementation demonstrates the main dashboard, queue management, and queue details functionality and can serve as a starting point for a complete TQMS application.