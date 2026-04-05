// reusable card grid component for the dashboard
// components/mainDashboardContent/CardGrid.jsx

import Card from "./Card";

const cardData = [
  {
    id: 1,
    title: "Test",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "14/07/2025",
  },
  {
    id: 2,
    title: "Test",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "14/07/2025",
  },
  {
    id: 3,
    title: "Test",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "14/07/2025",
  },
  {
    id: 4,
    title: "Test",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "14/07/2025",
  },
  {
    id: 5,
    title: "Test",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "14/07/2025",
  },
  {
    id: 6,
    title: "Test",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "14/07/2025",
  },
];

const CardGrid = () => {
  return (
    <div className="border border-gray-200 rounded-xl p-2 bg-gray-50">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {cardData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
