import React from "react";
import cn from "../../utils/cn";

const Input = ({
  placeholder,
  id,
  name,
  typeInput,
  iconRight,
  iconLeft,
  isHaveIcon = true,
}) => {
  return (
    <>
      <div
        className={cn(
          "h-11 border border-black text-black-light focus:border-primary",
        )}
      >
        <input type={typeInput} />
      </div>
    </>
  );
};

export default Input;
