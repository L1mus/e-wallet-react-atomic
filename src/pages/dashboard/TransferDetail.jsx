import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Banknote, BadgeCheck, Star } from "lucide-react";
import Avatar from "../../components/atoms/Avatar";
import Stepper from "../../components/molecules/Stepper";
import ModalPin from "../../components/organism/ModalPin";
import ModalStatus from "../../components/organism/ModalStatus";
import Input from "../../components/atoms/Input";
import PinInput from "../../components/atoms/PinInput";
import ArrowLeftRight from "../../assets/icons/Send.svg?react";
import Bill from "../../assets/icons/u_money-bill.svg";

const TransferDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const user = location.state?.user || {
    name: "Ghaluh 1",
    phone: "(239) 555-0108",
    avatar: "https://i.pravatar.cc/150?u=1",
    isVerified: true,
  };

  const [isPinModalOpen, setIsPinModalOpen] = useState(false);
  const [statusModal, setStatusModal] = useState({
    isOpen: false,
    status: null,
  });

  const handlePinSubmit = (pin) => {
    console.log("PIN Submit:", pin);
    setIsPinModalOpen(false);

    setTimeout(() => {
      setStatusModal({ isOpen: true, status: "success" });
    }, 500);
  };

  const handleTransferAgain = () => {
    setStatusModal({ isOpen: false, status: null });
    navigate("/transfer");
  };

  return (
    <div className="w-full pb-10">
      <div className="mb-6">
        <div
          className="hidden md:flex items-center gap-2 mb-6 text-primary cursor-pointer w-fit"
          onClick={() => navigate(-1)}
        >
          <ArrowLeftRight />
          <h1 className="text-xl font-bold text-black">Transfer Money</h1>
        </div>
        <Stepper
          steps={["Find People", "Set Nominal", "Finish"]}
          activeStep={1}
        />
      </div>

      <div className="w-full bg-white md:border md:border-grey-light md:rounded-xl md:shadow-sm md:p-8">
        <div className="mb-8 px-4 md:px-0">
          <h3 className="font-bold text-black text-lg mb-4">
            People Information
          </h3>
          <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-between border border-grey-light">
            <div className="flex items-center gap-4">
              <Avatar
                imageSrc={user.avatar}
                className="w-16 h-16 rounded-xl object-cover shadow-sm"
              />
              <div className="flex flex-col items-start gap-1">
                <span className="font-semibold text-black text-sm">
                  {user.name}
                </span>
                <span className="text-grey text-sm">{user.phone}</span>
                {user.isVerified && (
                  <span className="inline-flex items-center gap-1 bg-primary text-white text-sm font-normal px-2 py-1 rounded-md mt-1">
                    <BadgeCheck size={16} /> Verified
                  </span>
                )}
              </div>
            </div>
            <Star className="text-gray-400 w-6 h-6 mr-2" />
          </div>
        </div>

        <div className="mb-8 px-4 md:px-0">
          <h3 className="font-bold text-black text-lg mb-1">Amount</h3>
          <p className="text-gray-500 text-sm mb-4">
            Type the amount you want to transfer and then press continue to the
            next steps.
          </p>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Banknote className="text-grey w-5 h-5" />
            </div>
            <Input
              type={"number"}
              placeholder={"Enter Nominal Transfer"}
              icon={Bill}
              className={"placeholder:font-medium"}
            />
          </div>
        </div>

        <div className="mb-10 px-4 md:px-0">
          <h3 className="font-bold text-black text-lg mb-1">Notes</h3>
          <p className="text-grey text-sm mb-4">
            You can add some notes for this transfer such as payment coffee or
            something
          </p>
          <textarea
            placeholder="Enter Some Notes"
            className="w-full border border-grey-light rounded-xl p-4 outline-none text-grey font-medium focus:border-primary min-h-35 resize-y placeholder:font-medium"
          ></textarea>
        </div>

        <div className="px-4 md:px-0">
          <button
            onClick={() => setIsPinModalOpen(true)}
            className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all cursor-pointer"
          >
            Submit & Transfer
          </button>
        </div>
      </div>

      <ModalPin
        isOpen={isPinModalOpen}
        onClose={() => setIsPinModalOpen(false)}
        onConfirm={handlePinSubmit}
        transferToName={user?.name}
      >
        <PinInput />
      </ModalPin>

      <ModalStatus
        isOpen={statusModal.isOpen}
        status={statusModal.status}
        transferToName={user?.name}
        primaryAction={{
          label: statusModal.status === "success" ? "Done" : "Try Again",
          onClick: () => setStatusModal({ isOpen: false, status: null }),
        }}
        secondaryAction={{
          label:
            statusModal.status === "success"
              ? "Transfer Again"
              : "Back To Dashboard",
          onClick: handleTransferAgain,
        }}
      />
    </div>
  );
};

export default TransferDetail;
