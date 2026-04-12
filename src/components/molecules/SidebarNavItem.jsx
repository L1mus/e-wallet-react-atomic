import { NavLink } from "react-router";
import cn from "../../utils/cn";
import Button from "../atoms/Button";

const SidebarNavItem = ({
  path,
  label,
  Icon,
  isDestructive = false,
  onClick,
}) => {
  if (path) {
    return (
      <NavLink
        to={path}
        end
        onClick={onClick}
        className={({ isActive }) =>
          cn(
            "group flex items-center gap-3 w-full px-6 py-3 rounded-md",
            "text-sm font-semibold transition-colors duration-200",
            isActive
              ? "bg-primary text-white"
              : "text-black-light hover:text-primary",
          )
        }
      >
        {({ isActive }) => (
          <>
            <Icon
              size={18}
              className={cn(
                "shrink-0 transition-colors duration-200",
                isActive ? "text-white" : "text-grey group-hover:text-primary",
              )}
            />
            <span>{label}</span>
          </>
        )}
      </NavLink>
    );
  }

  return (
    <Button
      isHaveIcon={true}
      Icon={Icon}
      iconClassName={cn(
        "w-5 h-5 shrink-0",
        isDestructive ? "text-danger" : "text-grey",
      )}
      variant="rectangelWhite"
      isFullwidth={true}
      onClick={onClick}
      className={cn(
        "justify-start gap-3 px-6 py-3 h-auto rounded-md outline-none",
        "text-sm font-semibold",
        isDestructive
          ? "text-danger hover:text-danger/80 transition-none  hover:scale-100"
          : "text-black-light",
      )}
    >
      {label}
    </Button>
  );
};

export default SidebarNavItem;
