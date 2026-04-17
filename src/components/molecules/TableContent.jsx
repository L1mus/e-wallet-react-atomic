import React, { Children } from "react";
import Avatar from "../atoms/Avatar";

const TableContent = ({
  imageSrc,
  username,
  phoneNumber,
  children,
  classNameIcon,
  ...props
}) => {
  return (
    <>
      <tbody>
        <tr className="">
          <td className="px-4 py-4 place-items-center">
            <Avatar imageSrc={imageSrc} className={"rounded-lg"} />
          </td>
          <td className="px-4 py-4 text-center">{username}</td>
          <td className="px-4 py-4 text-center">{phoneNumber}</td>
          <td className="px-4 py-4 text-center">
            <button
              className={`cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-z-1 hover:scale-120 ${classNameIcon}`}
              {...props}
            >
              {children}
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default TableContent;
