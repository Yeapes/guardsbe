import React, { useEffect } from "react";
import Link from "next/link";
import { Experience } from "@/components/Experiences/Experience/Experience";
import Image from "next/image";

const Solutions = ({ services, who_we_are }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-12 lg:p-36 gap-16">
      <div className="left w-full lg:w-1/2">
        <h3
          className="text-3xl md:text-4xl mb-12 font-semibold text-black"
          data-aos="fade-left"
        >
          {who_we_are?.title}
        </h3>
        <div>{/* <p>{who_we_are?.short_description}</p> */}</div>
        <hr className="my-6" />
        <div className="flex items-center justify-between gap-10 flex-col md:flex-row">
          <div
            className="flex items-center justify-start "
            data-aos="fade-up-right"
          >
            <div className="max-w-[34%] border-r pr-6">
              <Image
                src={who_we_are?.signature}
                height={30}
                width={200}
                alt=""
              />
              <h4 className="font-semibold text-2xl text-black">
                Alen Morno Sin
              </h4>
              <p className="text-gray-500 ">CEO, Techmax</p>
            </div>
            <div className="max-w-[66%] ps-12">
              <p className="text-lg font-medium text-gray-400">
                Call to ask any questions.
              </p>
              <h1 className="text-3xl font-semibold text-blue-600">
                {who_we_are?.number}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Experience Iitems */}
      <div className="right w-full lg:w-1/2">
        <p className="leading-snug pb-6 text-black" data-aos="fade-right">
          {who_we_are?.short_description}
        </p>
        {services?.map((experience) => (
          <Experience
            key={experience.id}
            title={experience.title}
            percentage={experience.business_percentage}
          />
        ))}
      </div>
    </div>
  );
};

export default Solutions;
