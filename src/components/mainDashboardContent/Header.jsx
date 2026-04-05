// reusable header component for the dashboard
// components/mainDashboardContent/Header.jsx

import { Search } from "lucide-react";
import Button from "./Button";
import { Plus } from "lucide-react";

const Header = ({ onOpen }) => {
  return (
   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 bg-gray-50">
      {/* LEFT - TITLE */}
      <h2 className="text-2xl font-semibold text-[var(--color-secondary)]">
        Knowledge Base
      </h2>

      {/* RIGHT - SEARCH + BUTTON */}
      <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg outline-none"
          />
        </div>

        {/* Button */}
        <Button
          onClick={onOpen}
         className="w-fit sm:w-auto self-start sm:self-auto cursor-pointer"
        >
          <Plus className="w-4 h-4 stroke-current" />
          Create New
        </Button>
      </div>
    </div>
  );
};

export default Header;
