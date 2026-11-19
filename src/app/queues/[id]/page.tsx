
import Link from "next/link";
import { initialQueues } from "@/data/queues";
import {
  ArrowLeft,
  Truck,
  MapPin,
  CalendarDays,
  User,
  Phone,
  Weight,
  CheckCircle2,
  Clock,
  CircleDot,
} from "lucide-react";

export default async function QueueDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const queue = initialQueues.find((item) => item.id === id);

  if (!queue) {
    return (
      <div className="rounded-xl border bg-white p-8 text-center">
        <h2 className="text-xl font-bold">Queue Not Found</h2>
        <Link href="/queues" className="mt-4 inline-block text-blue-600">
          Back to Queues
        </Link>
      </div>
    );
  }


  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/queues"
          className="mb-4 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900"
        >
          <ArrowLeft size={16} />
          Back to Queues
        </Link>

        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-slate-500">
              Queue Management / Queue Details
            </p>
            <h1 className="mt-1 text-2xl font-bold text-slate-900">
              Queue #{id}
            </h1>
          </div>

          <span className="w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            {queue.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <section className="rounded-xl border border-slate-200 bg-white p-5 lg:col-span-2">
          <h2 className="mb-5 text-lg font-semibold text-slate-900">
            Vehicle Information
          </h2>


          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Info icon={<Truck size={18} />} label="Vehicle Number" value={queue.vehicle} />
            <Info icon={<Truck size={18} />} label="Vehicle Type" value={queue.type} />
            <Info icon={<CalendarDays size={18} />} label="Card Type" value={queue.cardType} />
            <Info icon={<CircleDot size={18} />} label="Queue Number" value={`#${queue.id}`} />
            <Info icon={<CalendarDays size={18} />} label="Entry Date" value={queue.entryDate} />
            <Info icon={<MapPin size={18} />} label="Route" value={queue.route} />
          </div>
        </section>


        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="mb-5 text-lg font-semibold text-slate-900">
            Journey Details
          </h2>

          <div className="space-y-5">
            <Info icon={<MapPin size={18} />} label="From" value={queue.route.split(" → ")[0]} />
            <Info icon={<MapPin size={18} />} label="To" value={queue.route.split(" → ")[1]} />
          </div>

          <div className="mt-6 border-t border-slate-100 pt-5">
            <p className="text-sm text-slate-500">Journey Progress</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">2 Checkpoints</p>
            <p className="mt-1 text-xs text-slate-400">
              Demo information
            </p>
          </div>
        </section>
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="mb-6 flex items-center gap-2">
          <MapPin size={20} className="text-blue-600" />
          <h2 className="text-lg font-semibold text-slate-900">
            Checkpoint History
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">
              Checkpoint History
            </h2>

            <div className="py-8 text-center text-sm text-slate-500">
              No checkpoint entries are available for this demo queue yet.
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap justify-end gap-3">
        <button className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
          Check In
        </button>
        <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
          End Journey
        </button>
      </div>
    </div>
  );
}

function Info({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 text-slate-400">{icon}</div>
      <div>
        <p className="text-xs text-slate-500">{label}</p>
        <p className="mt-1 text-sm font-semibold text-slate-800">{value}</p>
      </div>
    </div>
  );
}
