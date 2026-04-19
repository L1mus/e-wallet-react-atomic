import React from "react";
import Modal from "./Modal";
import { AlertCircle } from "lucide-react";
import cn from "../../utils/cn";

const ModalConfirm = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm",
  variant = "danger",
}) => {
  const variantStyles = {
    danger: "bg-danger text-white hover:bg-danger/90",
    primary: "bg-primary text-white hover:bg-primary/90",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600",
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <div className="w-14 h-14 rounded-full bg-danger/10 flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8 text-danger" />
        </div>
        <h3 className="text-xl font-extrabold text-black mb-3">{title}</h3>
        <p className="text-grey text-sm mb-8 leading-relaxed">{message}</p>

        <div className="flex flex-col gap-3">
          <button
            onClick={onConfirm}
            className={cn(
              "w-full py-3 rounded-xl font-bold text-sm transition-all cursor-pointer",
              variantStyles[variant],
            )}
          >
            {confirmText}
          </button>

          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl font-bold text-sm text-grey hover:text-gray-600 transition-all cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalConfirm;
