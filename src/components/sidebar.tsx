// components/sidebar.tsx
import { Home, Settings } from "lucide-react";
import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-muted/10 hidden md:block">
      <nav className="p-6 space-y-2">
        <Link
          href="/home"
          className="flex items-center gap-2 text-sm font-medium"
        >
          <Home className="w-4 h-4" /> Home
        </Link>
        <Link
          href="/settings"
          className="flex items-center gap-2 text-sm font-medium"
        >
          <Settings className="w-4 h-4" /> Settings
        </Link>
      </nav>
    </aside>
  );
}
