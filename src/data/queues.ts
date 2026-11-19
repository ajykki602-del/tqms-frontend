
export type QueueStatus = "Pending" | "In Job" | "Completed";

export interface Queue {
  id: string;
  vehicle: string;
  type: string;
  cardType: string;
  route: string;
  entryDate: string;
  status: QueueStatus;
}

export const initialQueues: Queue[] = [
  {
    id: "192274",
    vehicle: "State-2-C1-SD-2323",
    type: "Container 10 Wheeler",
    cardType: "Trip",
    route: "Jhapa → Sidinba",
    entryDate: "Nov 05, 2026",
    status: "In Job",
  },
  {
    id: "192273",
    vehicle: "State-1-HA-5554",
    type: "Truck",
    cardType: "Trip",
    route: "Maiwakholа → Sidinba",
    entryDate: "Nov 05, 2026",
    status: "Pending",
  },
  {
    id: "192272",
    vehicle: "State-5-H-DS-3334",
    type: "Container 10 Wheeler",
    cardType: "Trip",
    route: "Jhapa → Sidinba",
    entryDate: "Nov 05, 2026",
    status: "In Job",
  },
  {
    id: "192271",
    vehicle: "State-3-PA-6677",
    type: "Truck",
    cardType: "Local",
    route: "Jhapa → Maiwakholа",
    entryDate: "Nov 04, 2026",
    status: "Pending",
  },
  {
    id: "192270",
    vehicle: "State-1-KA-3434",
    type: "Mini Truck",
    cardType: "Trip",
    route: "Maiwakholа → Sidinba",
    entryDate: "Nov 04, 2026",
    status: "Pending",
  },
  {
    id: "192269",
    vehicle: "State-2-BA-8899",
    type: "Pickup",
    cardType: "Local",
    route: "Jhapa → Sidinba",
    entryDate: "Nov 04, 2026",
    status: "In Job",
  },
  {
    id: "192268",
    vehicle: "State-4-PA-1212",
    type: "Truck",
    cardType: "Trip",
    route: "Jhapa → Maiwakholа",
    entryDate: "Nov 03, 2026",
    status: "Pending",
  },
  {
    id: "192267",
    vehicle: "State-1-HA-7777",
    type: "Container",
    cardType: "Trip",
    route: "Maiwakholа → Sidinba",
    entryDate: "Nov 03, 2026",
    status: "In Job",
  },
];
