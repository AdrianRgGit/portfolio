const MyProjectsBentoCard = ({
  title,
  subtitle,
  badge,
  colSpan = 1,
  highlighted = false,
  className = "bg-blue-600",
}) => {
  return (
    <div
      className={`relative col-span-${colSpan} flex flex-col justify-between rounded-xl border-4 border-green-400 p-4 ${className}`}
    >
      <span className="mb-2 inline-block rounded-full bg-green-200 px-2 py-1 text-xs text-white">
        {badge}
      </span>

      <div>
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="text-sm text-gray-200">{subtitle}</p>
      </div>

      {highlighted && (
        <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-green-400" />
      )}
    </div>
  );
};

export default MyProjectsBentoCard;
