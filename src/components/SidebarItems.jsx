// components/SidebarItems.jsx

import React from "react";

const SidebarItems = ({ icon: Icon, label, active }) => {
  return (
    <li
      className={`group relative flex items-center text-sm gap-3 px-6 py-2.5 rounded-xl cursor-pointer transition-all duration-200
      ${
        active
          ? "bg-indigo-50 text-indigo-700 font-medium"
          : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
      }`}
    >
      {/* Left indicator */}
      <span
        className={`absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-r-sm bg-indigo-800
        ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
      ></span>

      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </li>
  );
};

export default SidebarItems;
