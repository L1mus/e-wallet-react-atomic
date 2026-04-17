import React from "react";
import TableContent from "../molecules/TableContent";

const Table = ({ imageSrc, name, phoneNumber, children, classNameIcon }) => {
  return (
    <table className="table-auto w-full odd:bg-grey-light">
      <TableContent
        imageSrc={imageSrc}
        username={name}
        phoneNumber={phoneNumber}
        children={children}
        classNameIcon={classNameIcon}
      />
    </table>
  );
};

export default Table;
