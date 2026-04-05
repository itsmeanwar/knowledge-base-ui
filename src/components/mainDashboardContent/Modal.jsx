// components/mainDashboardContent/Modal.jsx

import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Right Drawer */}
      <div
        className={`absolute top-0 right-0 h-full w-full sm:w-[400px] md:w-[450px] lg:w-[500px] rounded-tl-[10px] rounded-bl-[10px] bg-gray-50 shadow-lg transform transition-transform duration-300
  ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header (Title + Close) */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-sm font-semibold text-gray-700">
            Create New Knowledge Base <br />
            <span className="block text-[12px] font-normal text-gray-500">
              Best for quick answers from documents, websites and text files.
            </span>
          </h2>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-1 rounded-md cursor-pointer transition"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto h-[calc(100%-80px)] scrollbar-thin">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
