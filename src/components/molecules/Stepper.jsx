import React from "react";
import cn from "../../utils/cn";

const Stepper = ({ steps, activeStep }) => {
  return (
    <div className="flex items-center gap-2 mb-8">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center text-sm font-normal text-white transition-colors",
                index === activeStep ? "bg-primary" : "bg-grey",
              )}
            >
              {index + 1}
            </div>

            <span
              className={cn(
                "text-sm font-medium",
                index === activeStep ? "text-primary" : "text-gray-500",
              )}
            >
              {step}
            </span>
          </div>

          {index < steps.length - 1 && (
            <div className="w-10 sm:w-16 border-t-[1.5px] border-dashed border-gray-400 mx-1 md:mx-3 hidden sm:block" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
