// components/Navbar.jsx

import { Search, ChevronDown, Bell, Code } from "lucide-react";

export default function Navbar() {
  return (
    <section className="w-full ">
      {/* ===================== NAVBAR CONTAINER ===================== */}
     <nav className="relative flex flex-wrap md:flex-nowrap items-center px-3 py-3.5 rounded-none xl:rounded-xl bg-gradient-to-r from-[#0b0a17] via-[#15142e] to-[#0b0a17] text-white shadow-lg">

  {/* LEFT */}
  <div className="flex items-center gap-3 sm:gap-6">
    <div className="flex items-center gap-2 cursor-pointer">
      <Code className="w-8 h-8" strokeWidth={3} />
      <span className="text-md font-semibold tracking-wide">
        Worcspace
      </span>
    </div>

    <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] transition-colors">
      Worcspace 1
      <ChevronDown className="w-4 h-4 text-white/80" />
    </button>
  </div>

  {/* CENTER → DESKTOP ONLY */}
  <div className="absolute left-1/2 transform -translate-x-1/2 w-2/3 max-w-sm hidden md:block">
    <div className="relative flex items-center text-gray-400">
      <Search className="absolute w-4 h-4 left-3" />

      <input
        type="text"
        placeholder="Search..."
        className="w-full py-2.5 pl-10 pr-12 text-sm text-gray-200 bg-white/10 rounded-xl placeholder:text-gray-400 outline-none focus:shadow-[0_4px_12px_rgba(79,70,229,0.4)]"
      />

      <div className="absolute right-3 text-sm text-gray-400">⌘K</div>
    </div>
  </div>

  {/* RIGHT */}
  <div className="ml-auto flex items-center gap-3 sm:gap-5">
    <button className="text-gray-400">
      <Bell className="w-5 h-5" />
    </button>

    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-secondary)] font-bold shadow">
      GK
    </button>
  </div>

  {/* ✅ NEW → SEARCH FOR SMALL SCREENS */}
  <div className="w-full mt-3 md:hidden">
    <div className="relative">
      <Search className="absolute w-4 h-4 left-3 top-1/2 -translate-y-1/2 text-gray-400" />

      <input
        type="text"
        placeholder="Search..."
        className="w-full py-2.5 pl-10 pr-12 text-sm text-gray-200 bg-white/10 rounded-xl placeholder:text-gray-400 outline-none focus:shadow-[0_4px_12px_rgba(79,70,229,0.4)]"
      />

      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
        ⌘K
      </div>
    </div>
  </div>

</nav>
    </section>
  );
}
