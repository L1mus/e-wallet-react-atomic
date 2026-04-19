import React from "react";
import cn from "../../utils/cn";

const TableContent = ({ children, className, ...props }) => {
  return (
    <tr className={cn("transition-colors", className)} {...props}>
      {children}
    </tr>
  );
};

export default TableContent;
