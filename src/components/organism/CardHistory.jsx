import React from "react";
import Avatar from "../atoms/Avatar";

const CardHistory = ({ name, status, imageSrc, amount }) => {
  return (
    <>
      <div className="grid grid-cols-2 items-center sm:grid-cols-3 p-1">
        <div className="flex gap-3 items-center sm:col-span-2 sm:justify-evenly">
          <Avatar imageSrc={imageSrc} className="rounded-lg" />
          <div>
            <p className="font-semibold text-sm">{name}</p>
            <p className="text-xs">{status}</p>
          </div>
        </div>
        <p className="text-end font-semibold">{amount}</p>
      </div>
    </>
  );
};

export default CardHistory;
