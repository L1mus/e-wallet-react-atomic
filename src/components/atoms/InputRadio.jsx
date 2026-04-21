const InputRadio = ({
  nameInput,
  valueInput,
  labelName,
  logo,
  checked,
  onChange,
}) => {
  return (
    <label className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-colors p-4 rounded-xl cursor-pointer">
      <input
        name={nameInput}
        id={valueInput}
        type="radio"
        value={valueInput}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 border-grey focus:ring-primary cursor-pointer checked:bg-primary"
      />

      <div className="w-16 flex items-center justify-center">
        <img
          src={logo}
          alt={`logo ${labelName}`}
          className="max-h-6 object-contain"
        />
      </div>

      <span className="text-gray-600 font-medium cursor-pointer">
        {labelName}
      </span>
    </label>
  );
};

export default InputRadio;
