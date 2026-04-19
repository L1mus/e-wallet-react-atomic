import { useState } from "react";
import { useNavigate } from "react-router";
import { Pencil, Trash2 } from "lucide-react";
import User from "../../assets/icons/2 User.svg?react";

import Avatar from "../../components/atoms/Avatar";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";

const Profile = () => {
  const navigate = useNavigate();
  const userFromRedux = {
    avatarSrc: null,
    fullName: "Ghaluh Wizard",
    phone: "08085550111",
    email: "Ghaluhwizard23@gmail.com",
  };

  const [formData, setFormData] = useState({
    fullName: userFromRedux.fullName || "",
    phone: userFromRedux.phone || "",
    email: userFromRedux.email || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Menyimpan data ke Redux...", formData);
  };

  const currentAvatar = userFromRedux.avatarSrc || "/defaultAvatar.jpg";

  return (
    <div className="w-full pb-10">
      <div className="flex items-center gap-2 mb-6 text-primary px-4 md:px-0">
        <User className={"text-2xl font-bold"} />
        <h1 className="text-xl font-bold text-black">Profile</h1>
      </div>

      <div className="w-full bg-white md:border md:border-gray-200 md:rounded-xl md:shadow-sm p-4 md:p-8">
        <div className="mb-8">
          <h3 className="font-semibold text-black text-base mb-4">
            Profile Picture
          </h3>

          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="bg-gray-50 rounded-xl p-4 w-32 h-32 flex items-center justify-center shrink-0 border border-gray-100">
              <Avatar
                imageSrc={currentAvatar}
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-3 w-full md:w-auto">
              <Button className="flex items-center justify-center gap-2 py-2.5  text-sm">
                <Pencil size={16} />
                Change Profile
              </Button>

              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 py-2.5 px-6 border border-danger text-danger hover:bg-danger/10 text-sm"
              >
                <Trash2 size={16} />
                Delete Profile
              </Button>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            The profile picture must be 512 x 512 pixels or less
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter Full Name"
          />

          <Input
            label="Phone"
            name="phone"
            type="number"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter Your Number Phone"
          />

          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            disabled={true}
            placeholder="Enter Your Email"
            className="bg-gray-50 cursor-not-allowed opacity-70"
          />

          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Password
            </label>
            <button
              type="button"
              className="text-primary text-sm font-medium hover:underline cursor-pointer"
              onClick={() => navigate("/dashboard/profile/change-password")}
            >
              Change Password
            </button>
          </div>

          <div>
            <label className="block text-sm font-semibold text-black mb-2 ">
              Pin
            </label>
            <button
              type="button"
              className="text-primary text-sm font-medium hover:underline cursor-pointer"
              onClick={() => navigate("/dashboard/profile/change-pin")}
            >
              Change Pin
            </button>
          </div>

          <div className="mt-4">
            <Button
              type="submit"
              className="w-full py-3.5 font-bold shadow-md transition-none hover:scale-100 "
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
