import { X } from "lucide-react";
import cn from "../../utils/cn";
import SidebarContent from "../molecules/SidebarContent";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50 md:hidden transition-opacity"
        />
      )}

      <aside
        className={cn(
          "flex flex-col bg-white border-l md:border-r md:border-l-0 border-grey-light",
          "md:flex md:w-1/6 md:min-w-48 md:sticky md:top-0 md:h-screen md:translate-x-0",
          "fixed top-0 right-0 z-50 h-full w-3/4 max-w-xs",
          "transition-transform duration-300 ease-in-out",
          isOpen
            ? "translate-x-0 shadow-2xl"
            : "translate-x-full md:translate-x-0",
        )}
      >
        <div className="flex justify-between items-center px-6 pt-6 md:hidden">
          <span className="font-bold text-lg text-primary">Menu</span>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-grey-light text-black-light cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <SidebarContent onClose={onClose} />
      </aside>
    </>
  );
};

export default Sidebar;
