import { useState } from "react";
import { Menu, X } from "lucide-react";
import cn from "../../utils/cn";
import SidebarContent from "../molecules/SidebarContent";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <button
        onClick={openMenu}
        className="fixed top-21 left-4 z-40 flex items-center justify-center w-10 h-10 bg-white rounded-md shadow-md text-black-light md:hidden"
      >
        <Menu size={20} />
      </button>

      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-x-0 top-19 bottom-0 z-40 bg-black/40 md:hidden"
        />
      )}

      <aside
        className={cn(
          "flex flex-col bg-white border-r border-grey-light",
          "md:flex md:w-1/6 md:min-w-48 md:sticky md:top-19 md:h-[calc(100vh-76px)]",
          "fixed top-19 left-0 z-50 h-[calc(100vh-76px)] w-3/4 max-w-xs",
          "transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "-translate-x-full",
          "md:relative md:top-0 md:translate-x-0",
        )}
      >
        <div className="flex justify-end px-4 pt-4 md:hidden">
          <button
            onClick={closeMenu}
            className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-grey-light text-black-light"
          >
            <X size={18} />
          </button>
        </div>

        <SidebarContent onClose={closeMenu} />
      </aside>
    </>
  );
};

export default Sidebar;
