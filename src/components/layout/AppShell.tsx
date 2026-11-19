
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ClipboardList,
  Truck,
  MapPin,
  Bell,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Queue Management", href: "/queues", icon: ClipboardList },
  { name: "Vehicles", href: "/vehicles", icon: Truck },
  { name: "Checkpoints", href: "/checkpoints", icon: MapPin },
];

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-slate-950 text-white transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-800 px-6">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">TQMS</h1>
            <p className="text-xs text-slate-400">
              Transport Queue Management
            </p>
          </div>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-400 lg:hidden"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 space-y-2 px-4 py-6">
          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Main Menu
          </p>

          {navigation.map((item) => {
            const Icon = item.icon;
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon size={19} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-slate-800 p-5">
          <p className="text-xs text-slate-500">TQMS Frontend</p>
          <p className="mt-1 text-sm text-slate-300">Version 1.0</p>
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <button
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close navigation overlay"
        />
      )}

      {/* Main area */}
      <div className="min-h-screen lg:ml-64">
        {/* Top navigation */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-slate-600 lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>

            <div>
              <p className="text-sm font-semibold text-slate-800">
                Transport Queue Management System
              </p>
              <p className="text-xs text-slate-500">
                Manage your transport operations
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="relative rounded-full p-2 text-slate-500 hover:bg-slate-100"
              aria-label="Notifications"
            >
              <Bell size={20} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                A
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-slate-800">
                  Admin User
                </p>
                <p className="text-xs text-slate-500">Administrator</p>
              </div>
              <ChevronDown size={16} className="text-slate-400" />
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-5 sm:p-8">{children}</main>
      </div>
    </div>
  );
}
