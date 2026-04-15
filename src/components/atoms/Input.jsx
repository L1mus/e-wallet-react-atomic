import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "../../utils/cn";

/**
 * Input Component
 * @param {String} props.label
 * @param {String} props.type
 * @param {Number} props.placeholder
 * @param {String} props.icon
 * @param {String} props.error
 * @param {String} props.className
 * @param {object} props.props
 * @returns {JSX.element}
 */
export const Input = ({
  label,
  type = "text",
  placeholder,
  icon,
  error,
  className,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const currentType = isPassword && showPassword ? "text" : type;

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label htmlFor={label} className="text-base font-normal text-black">
          {label}
        </label>
      )}

      <div className="relative flex items-center w-full">
        {icon && (
          <div className="absolute left-4 pointer-events-none flex items-center justify-center">
            <img src={icon} alt="" className="w-5 h-5 opacity-50" />
          </div>
        )}

        <input
          type={currentType}
          id={label}
          placeholder={placeholder}
          className={cn(
            "w-full h-11 bg-white border rounded-lg text-black text-sm transition-all duration-200 placeholder:text-grey",
            "outline-none",
            icon ? "pl-12" : "pl-4",
            isPassword ? "pr-12" : "pr-4",
            error
              ? "border-danger focus:border-danger focus:ring-1 focus:ring-danger"
              : "border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary",
            className,
          )}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 p-1 rounded-md hover:bg-gray-50 transition-colors outline-none flex items-center justify-center text-gray-400 hover:text-primary"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        )}
      </div>

      {error && (
        <span className="text-xs font-medium text-danger">{error}</span>
      )}
    </div>
  );
};
