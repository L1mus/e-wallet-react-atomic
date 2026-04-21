import Modal from "./Modal";

const ModalStatus = ({
  isOpen,
  onClose,
  status,
  transferToName,
  primaryAction,
  secondaryAction,
}) => {
  const isSuccess = status === "failed";

  const content = {
    success: {
      titlePrefix: "Yeay Transfer ",
      titleHighlight: "Success",
      titleColor: "text-success",
      message: "Thank you for using this application for your financial",
      imagePlaceholder: "/Contact us-pana 1.png",
    },
    failed: {
      titlePrefix: "Oops Transfer ",
      titleHighlight: "Failed",
      titleColor: "text-danger",
      message: "Sorry Theres is an issue for your transfer, try again later !",
      imagePlaceholder: "/Oh no-cuate 1.png",
    },
  };

  const currentContent = isSuccess ? content.success : content.failed;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full flex flex-col items-center">
        {transferToName && (
          <div className="w-full border-b border-grey-light pb-4 mb-6">
            <h2 className="text-base font-bold text-grey tracking-wide uppercase">
              TRANSFER TO {transferToName}
            </h2>
          </div>
        )}

        <div className="w-full flex justify-center mb-6">
          <img
            src={currentContent.imagePlaceholder}
            alt={`${status} illustration`}
            className="w-auto h-40 object-contain"
          />
        </div>

        <div className="text-center mb-8 w-full">
          <h3 className="text-[26px] font-bold text-black mb-3">
            {currentContent.titlePrefix}
            <span className={currentContent.titleColor}>
              {currentContent.titleHighlight}
            </span>
          </h3>
          <p className="text-grey text-sm leading-relaxed px-4">
            {currentContent.message}
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <button
            onClick={primaryAction?.onClick}
            className="w-full py-4 rounded-xl font-bold text-base bg-primary text-white hover:bg-primary/90 transition-all cursor-pointer"
          >
            {primaryAction?.label}
          </button>

          <button
            onClick={secondaryAction?.onClick}
            className="w-full py-4 rounded-xl font-bold text-base bg-white border border-primary text-primary hover:bg-primary/5 transition-all cursor-pointer"
          >
            {secondaryAction?.label}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalStatus;
