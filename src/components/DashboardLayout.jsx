// components/DashboardLayout.jsx
// DashboardLayout.jsx with header, pagination, form, cardgrid, modal 

import Header from "./mainDashboardContent/Header";
import Modal from "./mainDashboardContent/Modal";
import { useState } from "react";
import Pagination from "./mainDashboardContent/Pagination";
import CardGrid from "./mainDashboardContent/CardGrid";
import Form from "./mainDashboardContent/Form";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex flex-col ">
      {/* Header */}
      <Header onOpen={() => setOpen(true)} />

      {/* Body */}
      <div className="flex flex-col h-full bg-gray-50">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
          <div className="mx-auto">
            <CardGrid />
          </div>
        </div>

        {/* Pagination fixed at bottom */}
        <Pagination />
      </div>
      {/* Modal */}
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <Form onClose={() => setOpen(false)} />
      </Modal>
    </div>
  );
};

export default DashboardLayout;
