import iconMoneyWallet from "../../assets/icons/Money-Wallet.svg";

/**
 * Layout template for authentication-related pages.
 * Features a split-screen design with an illustration on the right and a form on the left.
 * * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - Main form content or page elements.
 * @param {string} props.title - Main heading displayed above the form.
 * @param {string} props.subtitle - Brief description displayed below the title.
 * @param {string} props.imagePath - Path to the illustration image on the right panel.
 * @returns {JSX.Element} A responsive layout spanning the full viewport height.
 */

export const AuthLayout = ({ children, title, subtitle, imagePath }) => {
  return (
    <div className="relative min-h-screen bg-primary-light flex">
      <div className="relative z-10 w-full min-h-screen md:w-1/2 bg-white md:rounded-r-[40px] shadow-[10px_0_30px_rgba(0,0,0,0.15)] flex flex-col justify-center items-center px-8 py-31.5 lg:px-12 md:py-41">
        <div className="w-full">
          <div className="mb-5 md:mt-0">
            <div className="flex items-center gap-2 mb-4 lg:mb-5">
              <img
                src={iconMoneyWallet}
                alt="Logo"
                className="w-8 h-8 object-contain"
              />
              <h1 className="text-primary font-medium text-xl tracking-wide">
                E-Wallet
              </h1>
            </div>

            <h1 className="text-2xl lg:text-3xl font-medium text-grey mb-1 leading-tight">
              {title}
            </h1>
            <p className="text-sm lg:text-base font-normal text-grey leading-snug">
              {subtitle}
            </p>
          </div>

          <div className="w-full">{children}</div>
        </div>
      </div>

      <div className="hidden md:flex absolute top-0 right-0 w-1/2 h-full items-center justify-center pointer-events-none bg-primary overflow-hidden">
        <div className="relative z-20 flex items-center justify-center w-full h-full">
          <div
            className="absolute w-225 h-full rounded z-0"
            style={{
              background: "radial-gradient(circle, #7096FF 0%, #3868FD 87%)",
              opacity: 0.8,
            }}
          />
          <div className="absolute w-100 h-100 bg-white/10 rounded-full blur-3xl z-1 translate-y-20 pointer-events-none" />
          <img
            src={imagePath}
            alt="Illustration"
            className="relative z-10 w-4/5 max-w-125 object-contain hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};
