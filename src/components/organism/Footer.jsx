// import { Phone, Mail, Twitter, Facebook, Instagram, Github } from "lucide-react";
import iconMoneyWallet from "../assets/icons/Money-Wallet.svg";
import iconPhone from "../assets/icons/Phone.svg";
import iconMail from "../assets/icons/mail.svg";
import iconGithub from "../assets/icons/u_github.svg";
import iconInstagram from "../assets/icons/u_instagram.svg";
import iconTwitter from "../assets/icons/u_twitter-alt.svg";
import iconFacebook from "../assets/icons/facebook.svg";

export const Footer = () => {
  return (
    <footer className="w-full bg-primary pt-16 pb-8 px-6 lg:px-33 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <img
              src={iconMoneyWallet}
              alt="Logo E-Wallet"
              className="w-8 h-8 object-contain"
            />
            <h1 className="text-white font-medium text-2xl tracking-wide">
              E-Wallet
            </h1>
          </div>
          <p className="text-white/80 text-base leading-relaxed max-w-70">
            Clarity gives you the blocks and components you need to create a
            truly professional website.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-white font-semibold text-base tracking-widest uppercase">
            Get In Touch
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-white cursor-pointer hover:opacity-80 transition-opacity">
              <img
                src={iconPhone}
                alt="icon Phone"
                className="w-5 h-5 object-contain"
              />
              <span className="text-base font-medium">+62 5637 8882 9901</span>
            </div>
            <div className="flex items-center gap-3 text-white cursor-pointer hover:opacity-80 transition-opacity">
              <img src={iconMail} alt="" className="w-5 h-5 object-contain" />
              <span className="text-base font-medium">contact@zwallet.com</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-white font-semibold text-base tracking-widest uppercase">
            Social Media
          </h3>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-primary hover:bg-gray-100 hover:scale-105 transition-all"
            >
              <img
                src={iconTwitter}
                alt="Twitter"
                className="w-5 h-5 object-contain"
              />
            </a>
            <a
              href="#"
              className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-primary hover:bg-gray-100 hover:scale-105 transition-all"
            >
              <img
                src={iconFacebook}
                alt="Facebook"
                className="w-5 h-5 object-contain"
              />
            </a>
            <a
              href="#"
              className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-primary hover:bg-gray-100 hover:scale-105 transition-all"
            >
              <img
                src={iconInstagram}
                alt="Instagram"
                className="w-5 h-5 object-contain"
              />
            </a>
            <a
              href="#"
              className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-primary hover:bg-gray-100 hover:scale-105 transition-all"
            >
              <img
                src={iconGithub}
                alt="GitHub"
                className="w-5 h-5 object-contain"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-white font-semibold text-base tracking-widest uppercase">
            Newsletter
          </h3>
          <div className="flex flex-col gap-3">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <img
                  src={iconMail}
                  alt=""
                  className="w-5 h-5 object-contain opacity-50"
                />
              </div>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full h-11 pl-12 pr-4 bg-white rounded-[5px] text-black text-sm outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
            </div>
            <button className="w-full h-11 bg-white text-primary font-semibold text-sm rounded-[5px] hover:bg-gray-100 transition-colors shadow-sm cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="border-white/20 mt-16 mb-8" />
      <div className="text-center text-white/80 text-[14px]">
        © Copyright 2026, All Rights Reserved by ClarityUI
      </div>
    </footer>
  );
};
