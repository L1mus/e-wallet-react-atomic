import Star from "../../assets/icons/star.svg";
/**
 * ReviewCard
 * @typedef {object} ReviewCardProps
 * @param {String} props.avatar
 * @param {String} props.name
 * @param {Number} props.rating
 * @param {String} props.text
 * @returns {JSX.element}
 */

export const ReviewCard = ({ avatar, name, rating = 5, text }) => {
  return (
    <div className="w-full max-w-92 min-h-100 bg-[#E8E8E84D] rounded-xl flex flex-col items-center text-center shadow-sm border border-black/5 shrink-0 lg:shrink">
      <div className="py-10 px-6 flex flex-col items-center h-full">
        <img
          src={avatar}
          alt={name}
          className="w-14.5 h-14.5 rounded-full object-cover mb-4 shadow-sm"
        />

        <h4 className="text-lg font-bold text-black mb-2">{name}</h4>

        <div className="flex items-center gap-2 mb-6">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={Star} alt="star" className="w-4 h-4" />
            ))}
          </div>
          <span className="text-black font-bold text-base">
            {rating.toFixed(1)}
          </span>
        </div>

        <div className="text-3xl leading-none text-black mb-4 font-extrabold">
          “
        </div>

        <p className="text-grey text-base leading-relaxed italic">“{text}”</p>
      </div>
    </div>
  );
};
