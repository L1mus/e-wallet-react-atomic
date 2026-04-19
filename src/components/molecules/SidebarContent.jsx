import { useNavigate } from "react-router";
import SidebarNavItem from "./SidebarNavItem";
import LayoutDashboard from "../../assets/icons/dashboard-two.svg?react";
import ArrowLeftRight from "../../assets/icons/Send.svg?react";
import History from "../../assets/icons/history.svg?react";
import CreditCard from "../../assets/icons/Upload.svg?react";
import UserRound from "../../assets/icons/2 User.svg?react";
import LogOut from "../../assets/icons/Log Out.svg?react";

const menuItems = [
  { path: "/dashboard", label: "Dashboard", Icon: LayoutDashboard },
  { path: "/dashboard/transfer", label: "Transfer", Icon: ArrowLeftRight },
  { path: "/dashboard/history", label: "History", Icon: History },
  { path: "/dashboard/topup", label: "Top Up", Icon: CreditCard },
  { path: "/dashboard/profile", label: "Profile", Icon: UserRound },
];

const SidebarContent = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onClose();
    navigate("/login");
  };

  return (
    <div className="flex flex-col pt-6">
      {menuItems.map((item) => (
        <SidebarNavItem
          key={item.path}
          path={item.path}
          label={item.label}
          Icon={item.Icon}
          onClick={onClose}
        />
      ))}

      <SidebarNavItem
        label="Logout"
        Icon={LogOut}
        isDestructive
        onClick={handleLogout}
      />
    </div>
  );
};

export default SidebarContent;
