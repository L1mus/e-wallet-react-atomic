import { Outlet } from "react-router";
import Sidebar from "../organism/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex bg-grey-light/30">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
