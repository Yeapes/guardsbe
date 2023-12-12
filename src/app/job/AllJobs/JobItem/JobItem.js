import Image from "next/image";
import Link from "next/link";
import React from "react";

const JobItem = ({
  id,
  icon,
  jobType,
  jobTitle,
  location,
  salary,
  salaryType,
  link,
}) => {
  return (
    <Link
      href={`job/${id}`}
      className="flex gap-6 flex-col md:flex-row items-center justify-between border rounded-lg p-6"
    >
      <div className="flex items-center justify-between gap-6">
        <div>
          <Image src={icon} width={50} height={50} alt={jobTitle} />
        </div>
        <div>
          <h3 className="text-green-500 font-semibold text-xxl">{jobType}</h3>
          <h2 className="text-black font-semibold text-2xl">{jobTitle}</h2>
        </div>
      </div>
      <div className="flex items-center justify-between gap-6">
        <div>
          <h3 className="text-black">{location}</h3>
          <h4 className="text-black">
            {salary} / <span className="text-gray-400">{salaryType}</span>
          </h4>
        </div>
        <Link
          className="text-white bg-blue-600 px-6 py-2 text-xl rounded-lg"
          href={link}
        >
          Apply
        </Link>
      </div>
    </Link>
  );
};

export default JobItem;
