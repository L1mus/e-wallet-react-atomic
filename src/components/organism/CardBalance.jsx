import React from "react";

const CardBalance = ({
  children,
  // eslint-disable-next-line no-unused-vars
  Icon,
  iconStyle,
  title,
  balance,
  growthIndicators,
  growthPeriod,
}) => {
  return (
    <>
      <div className="border-2 rounded-lg border-grey-light w-full lg:h-37 p-2 flex flex-col gap-2 items-center sm:border sm:items-start justify-center bg-white">
        <div className="flex gap-2 items-center">
          <div className="text-primary ">{children}</div>
          <p className="text-xs sm:text-base">{title}</p>
        </div>
        <p className="text-xs sm:text-sm lg:text-base font-semibold text-center">
          Rp {balance}
        </p>
        <div className="flex gap-0.5 items-center sm:gap-1">
          <p className="text-xs sm:text-sm">{growthIndicators}</p>
          <p>
            <Icon className={iconStyle} />
          </p>
          <p className="text-[8px] tracking-tighter sm:text-sm">
            {growthPeriod}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardBalance;
