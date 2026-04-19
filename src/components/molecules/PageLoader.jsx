import Spinner from "../atoms/Spinner";

const PageLoader = ({ isOpen, text = "Loading, please wait..." }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-white/60 backdrop-blur-[3px] transition-opacity animate-in fade-in duration-300">
      <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center gap-4 border border-gray-100">
        <Spinner size={40} className="text-primary" />
        <span className="text-gray-600 font-medium text-sm animate-pulse">
          {text}
        </span>
      </div>
    </div>
  );
};

export default PageLoader;
