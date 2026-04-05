// components/mainDashboardContent/Pagination.jsx

import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const Pagination = () => {
  return (
    <div className="w-full flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-4 py-4 text-[11px] sm:text-xs text-gray-700 overflow-hidden">
      
      {/* LEFT */}
      <span className="font-bold">6 rows</span>

      {/* RIGHT */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">

        {/* Rows per page */}
        <div className="flex items-center gap-2">
          <span className="whitespace-nowrap font-bold">Rows per page</span>

          <div className="relative">
            <select className="appearance-none border border-gray-200 rounded px-2 py-1 pr-6 text-gray-700 cursor-pointer">
              <option value="10">10</option>
            </select>

            <ChevronDown className="absolute right-1 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Separator (hidden on small screens) */}
        <span className="hidden sm:block text-gray-300">|</span>

        {/* Page indicator */}
        <span className="whitespace-nowrap font-bold">Page 1 of 1</span>

        {/* Navigation buttons */}
        <div className="flex flex-wrap items-center gap-1">
          {[ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight].map(
            (Icon, i) => (
              <button
                key={i}
                className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded text-gray-400 cursor-pointer hover:text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="pagination button"
              >
                <Icon size={12} />
              </button>
            )
          )}
        </div>

      </div>
    </div>
  );
};

export default Pagination;