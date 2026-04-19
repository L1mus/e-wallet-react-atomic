import { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "../organism/Sidebar";
import Header from "../organism/Header";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-grey-light/30">
      <Header
        isLogin={true}
        isDashboard={true}
        onOpenSidebar={() => setIsSidebarOpen(true)}
      />

      <div className="flex flex-1 relative">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="flex-1 p-6 md:p-7 bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
