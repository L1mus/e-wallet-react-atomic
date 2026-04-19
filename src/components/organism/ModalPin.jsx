import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Modal from "./Modal";
import PinInput from "../atoms/PinInput";
import Button from "../atoms/Button";

const pinSchema = z.object({
  pin: z.string().length(6, "PIN must be 6 digits"),
});

const ModalPin = ({ isOpen, onClose, onConfirm, transferToName }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(pinSchema),
    defaultValues: { pin: "" },
  });

  const onSubmit = (data) => {
    onConfirm(data.pin);
    reset();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
        {transferToName && (
          <div className="w-full border-b border-grey-light pb-4 mb-8">
            <h2 className="text-sm font-bold text-grey tracking-wide uppercase">
              TRANSFER TO {transferToName}
            </h2>
          </div>
        )}

        <div className="text-left mb-8">
          <h3 className="text-3xl font-bold text-black mb-2">
            Enter Your Pin 👋
          </h3>
          <p className="text-grey text-sm">Enter Your Pin For Transaction</p>
        </div>

        <div className="mb-10 w-full">
          <Controller
            name="pin"
            control={control}
            render={({ field }) => (
              <PinInput
                value={field.value}
                onChange={field.onChange}
                error={!!errors.pin}
              />
            )}
          />
          {errors.pin && (
            <p className="text-danger text-xs mt-2 font-medium">
              {errors.pin.message}
            </p>
          )}
        </div>

        <Button typeButton="submit" children="Submit" isFullwidth={true} />

        <div className="mt-5 text-center">
          <span className="text-sm text-gray-500">
            Forgot Your Pin?
            <Button typeButton="button" children="Submit" isFullwidth={true} />
          </span>
        </div>
      </form>
    </Modal>
  );
};

export default ModalPin;
