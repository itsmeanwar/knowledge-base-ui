// components/mainDashboardContent/Card.jsx
// reusable card component for CardGrid.jsx

import { MoreVertical } from "lucide-react";

const Card = ({
  title = "Test",
  description = "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  date = "14/07/2025",
}) => {
  return (
    <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
      {/* Header: Title + Options */}
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-semibold text-gray-700">{title}</h3>

        <MoreVertical
          className="text-gray-400 cursor-pointer hover:text-gray-600"
          size={18}
        />
      </div>

      {/* Description */}
      <p className="text-xs text-gray-500 mt-2 leading-relaxed pr-3 pb-6">
        {description}
      </p>

      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>

      {/* Footer */}
      <p className="text-xs text-gray-500">
        Created On: <span className="font-bold">{date}</span>
      </p>
    </div>
  );
};

export default Card;
