import { Experience } from "./Experience/Experience";
import Link from "next/link";

const Experiences = ({ business_history, services }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-12 lg:p-36 gap-16">
      <div className="left w-full lg:w-1/2">
        <h3
          className="text-3xl md:text-4xl mb-12 font-semibold text-black"
          data-aos="fade-left"
        >
          {business_history?.title}
        </h3>
        <div className="flex items-center justify-between gap-10 flex-col md:flex-row">
          <div
            className="w-full md:w-2/5 bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col items-center justify-center p-6"
            data-aos="fade-left"
          >
            <h1
              className="text-[100px] text-white font-bold"
              style={{ lineHeight: "100px" }}
            >
              {business_history?.experience_number}
            </h1>
            <h4 className="text-white text-lg whitespace-nowrap">
              Years of experiences
            </h4>
          </div>
          <div data-aos="fade-left">
            <p className="leading-loose text-black">
              {business_history?.short_description}
            </p>
            <Link
              className="text-blue-600 font-bold mt-10 flex gap-4"
              href="/about"
            >
              Learn More About Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      {/* Experience Iitems */}
      <div className="right w-full lg:w-1/2">
        {services?.map(
          (service) =>
            service.is_years_of_business === "1" && (
              <Experience
                key={service.id}
                title={service.title}
                percentage={parseInt(service.business_percentage)}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Experiences;
