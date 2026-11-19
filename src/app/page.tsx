
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Truck,
  CheckCircle2,
  ClipboardList,
  Activity,
  ChevronDown,
} from "lucide-react";

const stats = [
  {
    title: "Pending Queues",
    value: "24",
    change: "+12.5%",
    description: "Compared to last week",
    icon: Clock,
  },
  {
    title: "Active Queues",
    value: "18",
    change: "+8.2%",
    description: "Compared to last week",
    icon: Activity,
  },
  {
    title: "Completed Today",
    value: "142",
    change: "+18.4%",
    description: "Compared to yesterday",
    icon: CheckCircle2,
  },
  {
    title: "Registered Vehicles",
    value: "1,284",
    change: "+4.6%",
    description: "Compared to last month",
    icon: Truck,
  },
];

const recentQueues = [
  { id: "192274", vehicle: "State-2-C1-SD-2323", type: "Container", checkpoint: "Jhapa Checkpoint", status: "In Job", time: "10:42 AM" },
  { id: "192273", vehicle: "State-1-HA-5554", type: "Truck", checkpoint: "Maiwakholа Checkpoint", status: "Pending", time: "10:25 AM" },
  { id: "192272", vehicle: "State-5-H-DS-3334", type: "Container", checkpoint: "Sidinba Checkpoint", status: "In Job", time: "09:58 AM" },
  { id: "192271", vehicle: "State-3-PA-6677", type: "Truck", checkpoint: "Jhapa Checkpoint", status: "Completed", time: "09:30 AM" },
  { id: "192270", vehicle: "State-1-KA-3434", type: "Mini Truck", checkpoint: "Maiwakholа Checkpoint", status: "Pending", time: "09:12 AM" },
];

export default function Home() {
  return (
    <div className="text-slate-800">
      {/* Welcome section */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Welcome back, Admin 👋
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Here&apos;s what&apos;s happening with your transport operations today.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
          November 16, 2026
        </div>
      </div>

      {/* Statistics cards */}
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">
                  {stat.title}
                </span>
                <span className="rounded-lg bg-blue-50 p-2 text-blue-600">
                  <Icon size={19} />
                </span>
              </div>

              <p className="mt-4 text-3xl font-bold tracking-tight">
                {stat.value}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span className="flex items-center gap-1 font-semibold text-emerald-600">
                  <ArrowUpRight size={14} />
                  {stat.change}
                </span>
                <span className="text-slate-400">{stat.description}</span>
              </div>
            </div>
          );
        })}
      </section>

      {/* Queue overview and quick actions */}
      <section className="mt-8 grid gap-5 xl:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-bold text-slate-800">Queue Overview</h3>
              <p className="mt-1 text-xs text-slate-400">
                Current queue distribution
              </p>
            </div>

            <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600">
              This week <ChevronDown size={13} className="ml-2 inline" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-slate-600">Completed queues</span>
                <strong>142</strong>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[78%] rounded-full bg-blue-500" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-slate-600">Active queues</span>
                <strong>18</strong>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[42%] rounded-full bg-violet-500" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-slate-600">Pending queues</span>
                <strong>24</strong>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[28%] rounded-full bg-amber-500" />
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-slate-100 pt-5 text-center">
            <div>
              <p className="text-xl font-bold">184</p>
              <p className="mt-1 text-xs text-slate-400">Total queues</p>
            </div>
            <div>
              <p className="text-xl font-bold text-emerald-600">77%</p>
              <p className="mt-1 text-xs text-slate-400">Completion rate</p>
            </div>
            <div>
              <p className="text-xl font-bold">12</p>
              <p className="mt-1 text-xs text-slate-400">Checkpoints</p>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="font-bold">Quick Actions</h3>
          <p className="mt-1 text-xs text-slate-400">
            Frequently used operations
          </p>

          <div className="mt-6 space-y-3">
            <Link
              href="/queues"
              className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <span className="rounded-lg bg-blue-100 p-2 text-blue-600">
                <ClipboardList size={18} />
              </span>
              <span>
                <strong className="block text-sm">View Queues</strong>
                <small className="text-xs text-slate-400">
                  Manage transport queues
                </small>
              </span>
            </Link>

            <Link
              href="/vehicles"
              className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <span className="rounded-lg bg-violet-100 p-2 text-violet-600">
                <Truck size={18} />
              </span>
              <span>
                <strong className="block text-sm">Vehicles</strong>
                <small className="text-xs text-slate-400">
                  Manage registered vehicles
                </small>
              </span>
            </Link>

            <Link
              href="/checkpoints"
              className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <span className="rounded-lg bg-emerald-100 p-2 text-emerald-600">
                <CheckCircle2 size={18} />
              </span>
              <span>
                <strong className="block text-sm">Checkpoints</strong>
                <small className="text-xs text-slate-400">
                  Manage checkpoint records
                </small>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent queues */}
      <section className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 p-6">
          <div>
            <h3 className="font-bold">Recent Queues</h3>
            <p className="mt-1 text-xs text-slate-400">
              Latest transport queue activity
            </p>
          </div>

          <Link
            href="/queues"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            View all queues →
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-6 py-4 font-semibold">Queue No.</th>
                <th className="px-6 py-4 font-semibold">Vehicle Number</th>
                <th className="px-6 py-4 font-semibold">Vehicle Type</th>
                <th className="px-6 py-4 font-semibold">Checkpoint</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Time</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {recentQueues.map((queue) => (
                <tr key={queue.id} className="transition hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-blue-600">
                    #{queue.id}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {queue.vehicle}
                  </td>
                  <td className="px-6 py-4 text-slate-500">{queue.type}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-slate-500">
                    {queue.checkpoint}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        queue.status === "In Job"
                          ? "bg-blue-50 text-blue-700"
                          : queue.status === "Pending"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      {queue.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-slate-400">
                    {queue.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <p className="mt-8 text-center text-xs text-slate-400">
        TQMS · Transport Queue Management System · Demo Dashboard
      </p>
    </div>
  );
}
