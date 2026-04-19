export const AboutCard = ({ icon, title, description }) => {
  return (
    <div className="w-full h-72 md:w-55 bg-linear-to-b from-primary-light to-primary rounded-xl flex flex-col items-center text-center text-white shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-default shrink-0">
      <div className="pt-8.5 flex flex-col items-center h-full">
        <div className="w-14.5 h-14.5 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
          <img src={icon} alt={title} className="w-6 h-6 object-contain" />
        </div>

        <h3 className="text-base font-bold mb-4 leading-tight px-2">{title}</h3>

        <p className="text-white/80 text-xs leading-relaxed px-3 mb-8.5">
          {description}
        </p>
      </div>
    </div>
  );
};
