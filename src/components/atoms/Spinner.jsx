import React from "react";
import { Loader2 } from "lucide-react";
import cn from "../../utils/cn";

const Spinner = ({ size = 24, className }) => {
  return (
    <Loader2
      size={size}
      className={cn("animate-spin text-primary", className)}
    />
  );
};

export default Spinner;
