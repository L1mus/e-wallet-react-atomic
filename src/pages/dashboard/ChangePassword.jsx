import { useState } from "react";
import User from "../../assets/icons/2 User.svg?react";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    existingPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password Data Submitted:", formData);
  };

  return (
    <div className="w-full pb-10">
      <div className="flex items-center gap-2 mb-6 text-primary px-4 md:px-0">
        <User className={"text-2xl font-bold"} />
        <h1 className="text-xl font-bold text-black">Profile</h1>
      </div>

      <div className="w-full bg-white md:border md:border-gray-200 md:rounded-xl md:shadow-sm p-4 md:p-8">
        <h2 className="font-bold text-black text-lg mb-6">Change Password</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input
            label="Existing Password"
            name="existingPassword"
            type="password"
            value={formData.existingPassword}
            onChange={handleInputChange}
            placeholder="Enter Your Existing Password"
          />

          <Input
            label="New Password"
            name="newPassword"
            type="password"
            value={formData.newPassword}
            onChange={handleInputChange}
            placeholder="Enter Your New Password"
          />

          <Input
            label="Confirm New Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Re-Type Your New Password"
          />

          <div className="mt-4">
            <Button type="submit" className="w-full py-3.5 font-bold shadow-md">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
