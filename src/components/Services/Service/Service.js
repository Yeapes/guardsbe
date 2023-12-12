import Image from "next/image";
import Link from "next/link";

const Service = ({ imageUrl, title, description, url, hasReadMore }) => {
  return (
    <div className="bg-white p-4 lg:p-6 rounded-lg" data-aos="fade-right">
      <Image
        className="mb-6"
        height={40}
        width={40}
        src={imageUrl}
        alt={title}
      />
      <h2 className="text-2xl font-semibold md:text-3xl xl:text-2xl mb-6 text-black">
        {title}
      </h2>
      <p className="leading-normal text-xl text-black mb-6">{description}</p>

      {hasReadMore ? (
        <div>
          <Link className="flex items-center justify-start" href={url}>
            <button className="bg-blue-100 p-2 rounded-full mr-3">
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
            <p className="inline text-blue-500">Read More</p>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Service;
