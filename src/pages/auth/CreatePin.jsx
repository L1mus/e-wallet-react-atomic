import { useState } from "react";
import { useLocation, useNavigate, Navigate } from "react-router";
import { AuthLayout } from "../../components/templates/AuthLayout";
import PinInput from "../../components/atoms/PinInput";
import Button from "../../components/atoms/Button";
import imgBill from "../../assets/images/wallet.png";
import { useDispatch, useSelector } from "react-redux";
import { registerActions } from "../../redux/slice/registerSlice";
import { loginActions } from "../../redux/slice/loginSlice";
import { toast } from "react-toastify";

/**
 * Dual-purpose page for creating or confirming a 6-digit security PIN.
 * Dynamically resolves user context by prioritizing active Redux sessions over router location state.
 * * Supported Flows:
 * 1. Post-Registration: Retrieves data via `location.state` and redirects to Login upon completion.
 * 2. Active Session (Dashboard): Retrieves data via Redux `loginUser`, synchronizes the active session, and redirects to Dashboard.
 * * @component
 * @returns {JSX.Element} The PIN creation interface within the AuthLayout wrapper.
 */

const CreatePin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { loginUser } = useSelector((state) => state.loginReducer);
  const stateRegister = useSelector((state) => state.registerReducer);
  const actionRegister = registerActions;
  const actionLoginr = loginActions;
  const userData = location.state?.userData || loginUser;
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

  const handleFinish = async () => {
    if (confirmPin !== firstPin) {
      setError("The PIN does not match. Please try again");
      return;
    }

    try {
      await dispatch(
        actionRegister.createPinUser({
          email: userData.email,
          pin: confirmPin,
        }),
      ).unwrap();

      toast.success("PIN successfully created!", { autoClose: 1500 });

      if (loginUser) {
        dispatch(actionLoginr.updateUserPin(confirmPin));
        navigate("/dashboard");
      } else {
        navigate("/auth/login");
      }
    } catch (err) {
      setError(err || "Failed to create PIN");
      toast.error("Failed to save PIN");
    }
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
          variant="rectangelBlue"
          isFullWidth
          onClick={step === 1 ? handleNextStep : handleFinish}
          isLoading={stateRegister.isLoading}
        >
          {step === 1 ? "Continue" : "Confirm"}
        </Button>
      </div>
    </AuthLayout>
  );
};

export default CreatePin;
