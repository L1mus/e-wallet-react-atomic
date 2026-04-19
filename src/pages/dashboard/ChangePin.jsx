import { useState } from "react";
import User from "../../assets/icons/2 User.svg?react";

import Button from "../../components/atoms/Button";
import PinInput from "../../components/atoms/PinInput";

const ChangePin = () => {
  const [pin, setPin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("PIN Submitted:", pin);
  };

  return (
    <div className="w-full pb-10">
      <div className="flex items-center gap-2 mb-6 text-primary px-4 md:px-0">
        <User className={"text-2xl font-bold"} />
        <h1 className="text-xl font-bold text-black font-lexend">Profile</h1>
      </div>

      <div className="w-full bg-white md:border md:border-gray-200 md:rounded-xl md:shadow-sm p-6 md:p-12 flex flex-col items-center">
        <div className="text-center mb-10">
          <h2 className="font-bold text-black text-xl mb-2 font-lexend">
            Change Pin 👋
          </h2>
          <p className="text-gray-500 text-sm font-lexend">
            Please save your pin because this so important.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg flex flex-col gap-10"
        >
          <div className="flex justify-center">
            <PinInput
              length={6}
              value={pin}
              onChange={(newPin) => setPin(newPin)}
            />
          </div>

          <Button
            type="submit"
            className="w-full py-3.5 font-lexend font-bold shadow-md"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChangePin;
