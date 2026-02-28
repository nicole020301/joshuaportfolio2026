const InformationSummary = ({ item }) => {
  return (
    <div className="stat-card text-center">
      <div className="relative z-10 py-5 px-3">
        <p className="stat-card-number text-2xl xxs:text-3xl sm:text-4xl leading-none mb-1">
          {item.description}
        </p>
        <p className="text-[10px] xxs:text-xs sm:text-sm text-gray-500 font-medium tracking-wide uppercase">
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default InformationSummary;
