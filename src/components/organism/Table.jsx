import React from "react";

const Table = ({ children }) => {
  return (
    <div className="w-full overflow-x-auto custom-scrollbar">
      <table className="w-full border-collapse min-w-0 md:min-w-175 table-auto">
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
