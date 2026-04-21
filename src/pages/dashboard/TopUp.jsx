import { useState } from "react";
import { Banknote, BadgeCheck } from "lucide-react";
import Upload from "../../assets/icons/Upload.svg?react";

import Avatar from "../../components/atoms/Avatar";
import InputRadio from "../../components/atoms/InputRadio";

const TopUp = () => {
  const [nominal, setNominal] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("bri");

  const user = {
    name: "Ghaluh 1",
    phone: "(239) 555-0108",
    avatar: "https://i.pravatar.cc/150?u=1",
    isVerified: true,
  };

  const paymentMethods = [
    { id: "bri", name: "Bank Rakyat Indonesia", logo: "/bri.png" },
    { id: "dana", name: "Dana", logo: "/dana.png" },
    { id: "bca", name: "Bank Central Asia", logo: "/bca.png" },
    { id: "gopay", name: "Gopay", logo: "/gopay.png" },
    { id: "ovo", name: "Ovo", logo: "/ovo.png" },
  ];

  const tax = 4000;
  const orderAmount = nominal ? parseInt(nominal) : 0;
  const subTotal = orderAmount > 0 ? orderAmount + tax : 0;

  const formatIdr = (amount) => {
    return new Intl.NumberFormat("id-ID").format(amount);
  };

  return (
    <div className="w-full pb-10">
      <div className="hidden md:flex items-center gap-2 mb-6 text-primary">
        <Upload className={"text-2xl"} />
        <h1 className="text-xl font-bold text-black">Top Up Account</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        <div className="lg:col-span-2 flex flex-col gap-8 bg-white md:border md:border-grey-light md:rounded-xl md:shadow-sm p-4 md:p-8">
          <div>
            <h3 className="font-bold text-black text-lg mb-4">
              Account Information
            </h3>
            <div className="bg-grey-light rounded-xl p-4 flex items-center gap-4">
              <Avatar
                imageSrc={user.avatar}
                className="w-16 h-16 rounded-xl object-cover shadow-sm"
              />
              <div className="flex flex-col items-start gap-1">
                <span className="font-bold text-black text-base">
                  {user.name}
                </span>
                <span className="text-grey text-sm">{user.phone}</span>
                {user.isVerified && (
                  <span className="inline-flex items-center gap-1 bg-primary text-white text-xs font-bold px-2 py-1 rounded-md mt-1">
                    <BadgeCheck size={14} /> Verified
                  </span>
                )}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-black text-lg mb-1">Amount</h3>
            <p className="text-grey text-sm mb-4">
              Type the amount you want to transfer to your e-wallet account
            </p>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Banknote className="text-gray-400 w-5 h-5" />
              </div>
              <input
                type="number"
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
                placeholder="Enter Nominal Transfer"
                className="w-full border border-grey-light rounded-xl pl-12 pr-4 py-3.5 outline-none text-grey font-medium focus:border-primary transition-colors shadow-sm"
              />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-black text-lg mb-1">
              Payment Method
            </h3>
            <p className="text-grey text-sm mb-4">
              Choose your payment method for top up account
            </p>
            <div className="flex flex-col gap-3">
              {paymentMethods.map((method) => (
                <InputRadio
                  key={method.id}
                  nameInput="paymentMethod"
                  valueInput={method.id}
                  labelName={method.name}
                  logo={method.logo}
                  checked={selectedMethod === method.id}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white md:border border-grey-light md:rounded-xl md:shadow-sm p-4 md:p-6 lg:sticky lg:top-8">
            <h3 className="font-bold text-black text-lg mb-6">Payment</h3>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-grey text-sm font-medium">Order</span>
                <span className="text-black font-bold text-sm">
                  Rp. {formatIdr(orderAmount)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-grey text-sm font-medium">Delivery</span>
                <span className="text-black font-bold text-sm">Rp. 0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-grey text-sm font-medium">Tax</span>
                <span className="text-black font-bold text-sm">
                  Rp. {formatIdr(tax)}
                </span>
              </div>
            </div>

            <div className="border-t-[1.5px] border-dashed border-grey-light pt-5 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-800 font-bold text-base">
                  Sub Total
                </span>
                <span className="text-black font-bold text-base">
                  Rp. {formatIdr(subTotal)}
                </span>
              </div>
            </div>

            <button className="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-primary/90 transition-all shadow-md active:scale-[0.99] cursor-pointer">
              Submit
            </button>

            <p className="text-xs text-grey mt-4 leading-relaxed">
              *Get Discount if you pay with Bank Central Asia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUp;
