import Avatar from "../atoms/Avatar";

const CardHistory = ({ name, status, imageSrc, amount }) => {
  return (
    <div className="flex items-center justify-between py-2 gap-2">
      <div className="flex items-center gap-3 overflow-hidden">
        <Avatar
          imageSrc={imageSrc}
          className="rounded-lg w-10 h-10 sm:w-11 sm:h-11 shadow-sm shrink-0"
        />

        <div className="flex flex-col overflow-hidden">
          <p className="font-semibold text-sm text-black truncate">{name}</p>
          <p className="text-xs text-grey mt-0.5 truncate">{status}</p>
        </div>
      </div>

      <p className="font-semibold text-sm text-right shrink-0">{amount}</p>
    </div>
  );
};

export default CardHistory;
