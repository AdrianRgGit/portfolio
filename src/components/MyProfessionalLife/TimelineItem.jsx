import TimelineCircle from "./TimelineCircle";

const TimelineItem = ({ exp }) => {
  return (
    <article className="timeline-item relative flex h-full w-screen flex-none items-center justify-center px-12 md:px-24">
      <div className="relative flex w-full max-w-6xl items-center justify-between">
        {exp.side === "left" ? (
          <>
            <div className="content border-theme-green bg-theme-white z-10 max-w-md rounded-lg border p-8 text-left shadow-lg">
              <h4 className="text-font-green text-2xl font-extrabold">
                {exp.year}
              </h4>
              <h3 className="text-font-gray mt-2 text-xl font-semibold">
                {exp.company}
              </h3>
              <p className="text-md text-font-gray mt-1 font-medium">
                {exp.title}
              </p>
              <p className="text-font-gray mt-4 leading-relaxed">
                {exp.description}
              </p>
            </div>

            <div className="relative flex h-full w-12 items-center justify-center">
              <TimelineCircle />
            </div>

            <div className="text-font-gray ml-8 max-w-xs font-medium italic">
              {exp.explanation}
            </div>
          </>
        ) : (
          <>
            <div className="text-font-gray mr-8 max-w-xs text-right font-medium italic">
              {exp.explanation}
            </div>

            <div className="relative flex h-full w-12 items-center justify-center">
              <TimelineCircle />
            </div>

            <div className="content border-theme-green bg-theme-white z-10 max-w-md rounded-lg border p-8 text-right shadow-lg">
              <h4 className="text-font-gray text-2xl font-extrabold">
                {exp.year}
              </h4>
              <h3 className="text-font-gray mt-2 text-xl font-semibold">
                {exp.company}
              </h3>
              <p className="text-md text-font-gray mt-1 font-medium">
                {exp.title}
              </p>
              <p className="text-font-gray mt-4 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </>
        )}
      </div>
    </article>
  );
};

export default TimelineItem;
