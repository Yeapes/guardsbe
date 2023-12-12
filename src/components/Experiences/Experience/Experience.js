export const Experience = ({ title, percentage }) => {
  return (
    <div>
      <h5
        className="font-semibold text-xl mb-4 text-black"
        data-aos="zoom-out-right"
      >
        {title}
      </h5>
      <div className="mb-8">
        <div className="bg-white relative h-[10px] w-full rounded-2xl">
          <div
            style={{
              width: `${percentage}%`,
            }}
            data-aos="zoom-out-right"
            className={`experience-bar bg-blue-400 absolute top-0 left-0 h-full w-[${percentage}%] rounded-2xl`}
          >
            <span className="bg-black absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white">
              <span className="bg-black absolute bottom-[-2px] left-0 -z-10 h-3 w-3 -translate-x-1/2 rotate-45 rounded-sm"></span>
              {percentage}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
