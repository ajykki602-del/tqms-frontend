
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Search,
  Filter,
  Eye,
  Trash2,
  CheckCircle2,
  Clock,
  Truck,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  X,
} from "lucide-react";

type Queue = {
  id: string;
  vehicle: string;
  type: string;
  cardType: string;
  route: string;
  entryDate: string;
  status: "Pending" | "In Job";
};

const initialQueues: Queue[] = [
  { id: "192274", vehicle: "State-2-C1-SD-2323", type: "Container 10 Wheeler", cardType: "Trip", route: "Jhapa → Sidinba", entryDate: "Nov 05, 2026", status: "In Job" },
  { id: "192273", vehicle: "State-1-HA-5554", type: "Truck", cardType: "Trip", route: "Maiwakholа → Sidinba", entryDate: "Nov 05, 2026", status: "Pending" },
  { id: "192272", vehicle: "State-5-H-DS-3334", type: "Container 10 Wheeler", cardType: "Trip", route: "Jhapa → Sidinba", entryDate: "Nov 05, 2026", status: "In Job" },
  { id: "192271", vehicle: "State-3-PA-6677", type: "Truck", cardType: "Local", route: "Jhapa → Maiwakholа", entryDate: "Nov 04, 2026", status: "Pending" },
  { id: "192270", vehicle: "State-1-KA-3434", type: "Mini Truck", cardType: "Trip", route: "Maiwakholа → Sidinba", entryDate: "Nov 04, 2026", status: "Pending" },
  { id: "192269", vehicle: "State-2-BA-8899", type: "Pickup", cardType: "Local", route: "Jhapa → Sidinba", entryDate: "Nov 04, 2026", status: "In Job" },
  { id: "192268", vehicle: "State-4-PA-1212", type: "Truck", cardType: "Trip", route: "Jhapa → Maiwakholа", entryDate: "Nov 03, 2026", status: "Pending" },
  { id: "192267", vehicle: "State-1-HA-7777", type: "Container", cardType: "Trip", route: "Maiwakholа → Sidinba", entryDate: "Nov 03, 2026", status: "In Job" },
];

export default function QueuesPage() {
  const [queues, setQueues] = useState(initialQueues);
  const [search, setSearch] = useState("");
  const [vehicleType, setVehicleType] = useState("All");
  const [cardType, setCardType] = useState("All");
  const [activeTab, setActiveTab] = useState<"All" | "Pending" | "In Job">("All");
  const [page, setPage] = useState(1);

  const router = useRouter();

  const pageSize = 5;

  const filteredQueues = queues.filter((queue) => {
    const matchesSearch =
      queue.vehicle.toLowerCase().includes(search.toLowerCase()) ||
      queue.id.includes(search);
    const matchesVehicle = vehicleType === "All" || queue.type === vehicleType;
    const matchesCard = cardType === "All" || queue.cardType === cardType;
    const matchesStatus = activeTab === "All" || queue.status === activeTab;

    return matchesSearch && matchesVehicle && matchesCard && matchesStatus;
  });

  const totalPages = Math.max(1, Math.ceil(filteredQueues.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const visibleQueues = filteredQueues.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const [selectedQueue, setSelectedQueue] = useState<Queue | null>(null);
  const [deleteQueueId, setDeleteQueueId] = useState<string | null>(null);

  function confirmDelete() {
    if (deleteQueueId) {
      setQueues((current) => current.filter((queue) => queue.id !== deleteQueueId));
      setDeleteQueueId(null);
    }
  }

  function updateStatus(id: string, status: Queue["status"]) {
    setQueues((current) =>
      current.map((queue) => queue.id === id ? { ...queue, status } : queue)
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-5 md:p-8">
      <div className="mb-7">
        <p className="text-xs text-slate-400">Pages / Queue Management</p>
        <h1 className="mt-2 text-2xl font-bold text-slate-800">Queue Management</h1>
        <p className="mt-1 text-sm text-slate-500">
          Monitor and manage pending and active transport queues.
        </p>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Total Queues</span>
            <Truck className="text-blue-600" size={20} />
          </div>
          <p className="mt-3 text-2xl font-bold">{queues.length}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Pending Queues</span>
            <Clock className="text-amber-500" size={20} />
          </div>
          <p className="mt-3 text-2xl font-bold">
            {queues.filter((q) => q.status === "Pending").length}
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Active Queues</span>
            <CheckCircle2 className="text-emerald-600" size={20} />
          </div>
          <p className="mt-3 text-2xl font-bold">
            {queues.filter((q) => q.status === "In Job").length}
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-5 md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="font-bold text-slate-800">Transport Queues</h2>
              <p className="mt-1 text-xs text-slate-400">View and manage all queue records</p>
            </div>
            <button
              onClick={() => {
                setSearch("");
                setVehicleType("All");
                setCardType("All");
                setActiveTab("All");
                setPage(1);
              }}
              className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
            >
              <Filter size={15} /> Reset filters
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <div className="relative min-w-[220px] flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
              <input
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                placeholder="Search vehicle or queue number..."
                className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <select
              value={vehicleType}
              onChange={(e) => { setVehicleType(e.target.value); setPage(1); }}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-600 outline-none focus:border-blue-500"
            >
              <option value="All">All Vehicle Types</option>
              <option>Container 10 Wheeler</option>
              <option>Truck</option>
              <option>Mini Truck</option>
              <option>Pickup</option>
              <option>Container</option>
            </select>

            <select
              value={cardType}
              onChange={(e) => { setCardType(e.target.value); setPage(1); }}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-600 outline-none focus:border-blue-500"
            >
              <option value="All">All Card Types</option>
              <option>Trip</option>
              <option>Local</option>
            </select>
          </div>

          <div className="mt-5 flex gap-5 border-b border-slate-100">
            {(["All", "Pending", "In Job"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setPage(1); }}
                className={`border-b-2 pb-3 text-sm font-medium transition ${
                  activeTab === tab
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                {tab === "In Job" ? "Active Queue" : tab === "Pending" ? "Pending Queue" : "All Queues"}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3 p-5 md:p-6">
          {visibleQueues.length === 0 ? (
            <div className="py-12 text-center">
              <Truck className="mx-auto text-slate-300" size={36} />
              <p className="mt-3 font-semibold text-slate-600">No queues found</p>
              <p className="mt-1 text-sm text-slate-400">Try changing your search or filters.</p>
            </div>
          ) : (
            visibleQueues.map((queue) => (
              <div key={queue.id} className="flex flex-col justify-between gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-slate-50/60 md:flex-row md:items-center">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                    <Truck size={22} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-slate-800">{queue.vehicle}</h3>
                      <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                        queue.status === "Pending" ? "bg-amber-50 text-amber-700" : "bg-blue-50 text-blue-700"
                      }`}>{queue.status}</span>
                    </div>
                    <p className="mt-1 text-sm text-slate-500">Queue #{queue.id} · {queue.type} · {queue.cardType}</p>
                    <p className="mt-2 text-xs text-slate-400">{queue.route} <span className="mx-2">•</span> Entry: {queue.entryDate}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => router.push(`/queues/${queue.id}`)}
                    className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-white">
                    <Eye size={15} /> View
                  </button>
                  {queue.status === "Pending" ? (
                    <button
                      onClick={() => updateStatus(queue.id, "In Job")}
                      className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                    >
                      Approve
                    </button>
                  ) : (
                    <button
                      onClick={() => updateStatus(queue.id, "Pending")}
                      className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                    >
                      End Journey
                    </button>
                  )}
                  <button
                    onClick={() => setDeleteQueueId(queue.id)}
                    aria-label={`Delete queue ${queue.id}`}
                    className="rounded-lg border border-red-100 p-2 text-red-500 hover:bg-red-50"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 px-5 py-4">
          <p className="text-xs text-slate-500">
            Showing {filteredQueues.length === 0 ? 0 : (currentPage - 1) * pageSize + 1}
            {"–"}{Math.min(currentPage * pageSize, filteredQueues.length)} of {filteredQueues.length} queues
          </p>
          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={17} />
            </button>
            <span className="px-2 text-sm text-slate-600">Page {currentPage} of {totalPages}</span>
            <button
              disabled={currentPage === totalPages || filteredQueues.length === 0}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </div>

      {selectedQueue && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Queue Details</h2>
              <button onClick={() => setSelectedQueue(null)} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100" aria-label="Close details">
                <X size={19} />
              </button>
            </div>
            <div className="mt-6 space-y-4">
              <div><p className="text-xs text-slate-400">Queue Number</p><p className="mt-1 font-semibold">#{selectedQueue.id}</p></div>
              <div><p className="text-xs text-slate-400">Vehicle Number</p><p className="mt-1 font-semibold">{selectedQueue.vehicle}</p></div>
              <div><p className="text-xs text-slate-400">Vehicle Type</p><p className="mt-1 font-semibold">{selectedQueue.type}</p></div>
              <div><p className="text-xs text-slate-400">Card Type</p><p className="mt-1 font-semibold">{selectedQueue.cardType}</p></div>
              <div><p className="text-xs text-slate-400">Route</p><p className="mt-1 font-semibold">{selectedQueue.route}</p></div>
              <div><p className="text-xs text-slate-400">Entry Date</p><p className="mt-1 font-semibold">{selectedQueue.entryDate}</p></div>
              <div><p className="text-xs text-slate-400">Status</p><p className="mt-1 font-semibold">{selectedQueue.status}</p></div>
            </div>
            <button onClick={() => setSelectedQueue(null)} className="mt-7 w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
              Close
            </button>
          </div>
        </div>
      )}

      {deleteQueueId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600"><Trash2 size={22} /></div>
            <h2 className="mt-4 text-lg font-bold">Delete Queue?</h2>
            <p className="mt-2 text-sm text-slate-500">Are you sure you want to delete queue #{deleteQueueId}? This action cannot be undone.</p>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setDeleteQueueId(null)} className="flex-1 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-slate-600">Cancel</button>
              <button onClick={confirmDelete} className="flex-1 rounded-lg bg-red-600 py-2.5 text-sm font-semibold text-white hover:bg-red-700">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
