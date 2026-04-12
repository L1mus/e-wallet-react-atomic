import React from "react";
import cn from "../../utils/cn.js";

const Button = ({
  children = "",
  isDisabled = false,
  typeButton = "rectangel",
  isHaveIcon = false,
  isFullwidth = false,
  // eslint-disable-next-line no-unused-vars
  Icon,
  iconClassName,
  variant = "rectangelBlue",
  className,
  ...props
}) => {
  return (
    <>
      <button
        disabled={isDisabled}
        className={
          typeButton === "rectangel"
            ? cn(
                "cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-z-1 hover:scale-105  rounded-md h-12 px-5 py-3 flex justify-center items-center",
                "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:hover:scale-0 disabled:hover:translate-z-0 disabled:transition-none",

                {
                  "bg-primary text-white hover:opacity-80 ":
                    variant === "rectangelBlue",
                  "bg-white  text-primary hover:outline-white hover:outline-2":
                    variant === "rectangelWhite",
                },
                isFullwidth ? "w-max" : "w-full",
                className,
              )
            : cn(
                "cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-z-1 hover:scale-110 rounded-full w-12 h-12 p-4 flex justify-center items-center",
                "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:hover:scale-100 disabled:hover:translate-y-0 disabled:transition-none",
                {
                  "bg-primary text-white": variant === "cicleBlue",
                  "bg-white text-primary": variant === "cicleWhite",
                },
              )
        }
        {...props}
      >
        {isHaveIcon ? (
          <div className="flex gap-2 items-center justify-center">
            {children === "" ? (
              <Icon className={iconClassName} />
            ) : (
              <div className="flex gap-2.5 items-center justify-center">
                <Icon className={iconClassName} />
                <span>{children}</span>
              </div>
            )}
          </div>
        ) : (
          children
        )}
      </button>
    </>
  );
};

export default Button;
