import { useState } from "react";
import { useLocation, useNavigate, Navigate } from "react-router";
import { AuthLayout } from "../../components/templates/AuthLayout";
import PinInput from "../../components/atoms/PinInput";
import Button from "../../components/atoms/Button";
import { getData, saveData } from "../../utils/storage";
import imgBill from "../../assets/images/wallet.png";
import { toast } from "react-toastify";

const CreatePin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state?.userData;
  console.log(userData);

  const [step, setStep] = useState(1);
  const [firstPin, setFirstPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [error, setError] = useState("");

  if (!userData) return <Navigate to="/register" replace />;

  const handleNextStep = () => {
    if (firstPin.length < 6) {
      setError("The PIN must be 6 digits");
      return;
    }
    setError("");
    setStep(2);
  };

  const handleFinish = () => {
    if (confirmPin !== firstPin) {
      setError("The PIN does not match. Please try again");
      return;
    }

    const db = getData();
    const newUser = {
      ...userData,
      id: Date.now(),
      pin: confirmPin,
      balance: 0,
      isVerified: true,
      profilePicture: `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.name)}&background=random`,
    };

    db.users.push(newUser);
    saveData(db);
    toast.success("Account successfully created! Please log in", {
      autoClose: 1000,
    });
    navigate("/login");
  };

  return (
    <AuthLayout
      title={step === 1 ? "Create Security PIN" : "Confirm Your PIN"}
      subtitle={
        step === 1
          ? "Create a 6-digit PIN to secure your E-Wallet transactions."
          : "Please type your 6-digit PIN again to confirm."
      }
      imagePath={imgBill}
    >
      <div className="w-full h-full flex flex-col gap-8 mt-2">
        <PinInput
          key={step}
          length={6}
          onChange={step === 1 ? setFirstPin : setConfirmPin}
          error={error}
        />

        <Button
          variant="primary"
          isFullWidth
          onClick={step === 1 ? handleNextStep : handleFinish}
        >
          {step === 1 ? "Continue" : "Confirm & Register"}
        </Button>
      </div>
    </AuthLayout>
  );
};

export default CreatePin;
