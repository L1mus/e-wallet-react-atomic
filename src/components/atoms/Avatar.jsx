import React from "react";
import cn from "../../utils/cn";

const Avatar = ({ isClickable = false, imageSrc, className, ...props }) => {
  return (
    <>
      {isClickable ? (
        <button
          className={cn(
            "w-12 h-12 shadow-lg rounded-full shadow-black border-none cursor-pointer overflow-hidden",
            className,
          )}
          {...props}
        >
          <img
            className="w-full h-auto object-contain"
            src={imageSrc}
            alt="icon Avatar"
          />
        </button>
      ) : (
        <div
          className={cn(
            "w-12 h-12 shadow-lg rounded-full shadow-black border-none cursor-pointer overflow-hidden",
            className,
          )}
          {...props}
        >
          <img
            className="w-full h-auto object-contain"
            src={imageSrc}
            alt="icon Avatar"
          />
        </div>
      )}
    </>
  );
};

export default Avatar;
