import React from "react";

const InputRadio = ({ nameInput, valueInput, labelName, logo }) => {
  return (
    <>
      <div className="flex items-center gap-3 bg-grey-light p-3 rounded-lg cursor-pointer">
        <input
          name={nameInput}
          id={nameInput}
          type="radio"
          value={valueInput}
        />
        <div>
          <img src={logo} alt={`logo ${nameInput}`} />
        </div>
        <label className="cursor-pointer" htmlFor={nameInput}>
          {labelName}
        </label>
      </div>
    </>
  );
};

export default InputRadio;
