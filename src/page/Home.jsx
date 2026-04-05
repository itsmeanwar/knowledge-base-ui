// page/Home.jsx

import DashboardLayout from "../components/DashboardLayout";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


const Home = () => {
  return (
    <section className="h-screen flex flex-col overflow-hidden bg-gray-50">
      {/* Center Container */}
      <div className="max-w-[1600px] w-full mx-auto flex flex-col h-full">
        {/* Navbar */}
        <Navbar />

        {/* Content Area */}
        <div className="flex flex-1 min-h-0">
          {/* Sidebar */}
          <div className="w-64 hidden md:block">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-y-auto scrollbar-thin">
            <DashboardLayout />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
