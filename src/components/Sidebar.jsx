// components/Sidebar.jsx

import {
  Bot,
  Cpu,
  Library,
  MonitorSmartphone,
  Layers,
  Zap,
  PlaySquare,
  Shield,
  BookOpen,
  Key,
  Building2,
  Puzzle,
} from "lucide-react";

import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  const myProjects = [
    { icon: Bot, label: "Agents" },
    { icon: Cpu, label: "AI Models" },
    { icon: Library, label: "Library" },
  ];

  const orchestrator = [
    { icon: Bot, label: "Published" },
    { icon: MonitorSmartphone, label: "Machines" },
    { icon: Layers, label: "Queues" },
    { icon: Zap, label: "Triggers" },
    { icon: PlaySquare, label: "Jobs" },
    { icon: PlaySquare, label: "Executions" },
    { icon: Shield, label: "Vault" },
    { icon: BookOpen, label: "Knowledge Base", active: true },
    { icon: Key, label: "Key Store" },
  ];

  const admin = [
    { icon: Building2, label: "Tenant" },
    { icon: Puzzle, label: "Integrations" },
  ];

  return (
    <aside className="w-64 h-full bg-gray-50 border-r border-dotted border-gray-200 py-6 overflow-y-auto scrollbar-thin">
      {/* MY PROJECTS */}
      <h3 className="px-6 text-xs font-semibold text-gray-400 mb-3 uppercase">
        My Projects
      </h3>

      <ul className="space-y-1 ml-3 mr-3">
        {myProjects.map((item) => (
          <SidebarItems key={item.label} {...item} />
        ))}
      </ul>

      {/* ORCHESTRATOR */}
      <h3 className="px-6 text-xs font-semibold text-gray-400 mt-6 mb-3 uppercase">
        Orchestrator
      </h3>

      <ul className="space-y-1 ml-2 mr-3">
        {orchestrator.map((item) => (
          <SidebarItems key={item.label} {...item} />
        ))}
      </ul>

      {/* ADMIN */}
      <h3 className="px-6 text-xs font-semibold text-gray-400 mt-6 mb-3 uppercase">
        Admin
      </h3>

      <ul className="space-y-1 ml-2 mr-3">
        {admin.map((item) => (
          <SidebarItems key={item.label} {...item} />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
