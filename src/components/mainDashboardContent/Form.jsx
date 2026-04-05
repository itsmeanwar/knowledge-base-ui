// components/mainDashboardContent/Form.jsx

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Button from "./Button";
import { toast } from "react-toastify";

const Form = ({ onClose }) => {
  const defaultState = {
    name: "",
    description: "",
    vectorStore: "Qdrant",
    embeddingModel: "text-embedding-ada-002",
  };

  const [state, setState] = useState(defaultState);

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit
  const handleSubmit = () => {
    if (!state.name.trim()) {
      toast.error("Name is required");
      return;
    }

    if (!state.vectorStore) {
      toast.error("Select Vector Store");
      return;
    }

    if (!state.embeddingModel) {
      toast.error("Select Embedding Model");
      return;
    }

    //  Success
    toast.success("Knowledge Base Created Successfully!");

    //  Reset to defaults (important)
    setState(defaultState);

    //  Close modal
    onClose();
  };

  return (
    <div className="flex flex-col gap-4">
      
      {/* Name */}
      <div className="flex flex-col gap-1">
        <label className="text-[14px] font-semibold text-gray-700">
          Name (Cannot be edited later)
          <span className="text-red-600">*</span>
        </label>

        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
          className="border border-gray-200 text-gray-500 rounded-md px-3 py-2 text-sm outline-none bg-gray-50"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col gap-1">
        <label className="text-[14px] font-semibold text-gray-700">
          Description
        </label>

        <textarea
          rows={4}
          name="description"
          value={state.description}
          onChange={handleChange}
          placeholder="Description"
          className="border border-gray-200 text-gray-500 rounded-md px-3 py-2 text-sm outline-none resize-none bg-gray-50"
        />
      </div>

      {/* Vector Store */}
      <div className="flex flex-col gap-1">
        <label className="text-[14px] font-semibold text-gray-700">
          Vector Store <span className="text-red-600">*</span>
        </label>

        <div className="relative">
          <select
            name="vectorStore"
            value={state.vectorStore}
            onChange={handleChange}
            className="appearance-none w-full border border-gray-200 rounded-md px-3 py-2 pr-8 text-sm outline-none bg-gray-50 text-gray-500"
          >
            <option value="">Select option</option>
            <option value="Qdrant">Qdrant</option>
            <option value="Pinecone">Pinecone</option>
          </select>

          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Embedding Model */}
      <div className="flex flex-col gap-1">
        <label className="text-[14px] font-semibold text-gray-700">
          LLM Embedding Model <span className="text-red-600">*</span>
        </label>

        <div className="relative">
          <select
            name="embeddingModel"
            value={state.embeddingModel}
            onChange={handleChange}
            className="appearance-none w-full border border-gray-200 rounded-md px-3 py-2 pr-8 text-sm outline-none bg-gray-50 text-gray-500"
          >
            <option value="">Select option</option>
            <option value="text-embedding-ada-002">
              text-embedding-ada-002
            </option>
            <option value="bge-small">bge-small</option>
          </select>

          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-end mt-10 pb-4">
        <Button
          onClick={handleSubmit}
          className="cursor-pointer flex items-center gap-2 text-xs font-semibold"
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export default Form;