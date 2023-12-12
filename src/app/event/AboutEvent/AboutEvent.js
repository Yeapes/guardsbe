import Image from "next/image";
import React from "react";

const AboutEvent = ({ eventsData }) => {
  return (
    <div className="py-12 px-6 md:px-12 lg:px-24 xl:px-64 flex flex-col lg:flex-row items-center justify-between">
      <div className="w-full lg:w-1/2">
        <h4
          className="font-semibold text-xl font-serif"
          style={{
            background:
              "linear-gradient(to left, rgba(247,0,104) 0%,rgba(68,16,102,1) 25%,rgba(247,0,104,1) 75%,rgba(68,16,102,1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ABOUT EVENT
        </h4>
        <h2 className="text-4xl py-4 text-black font-bold font-sans ">
          Welcome to the {eventsData.title}
        </h2>
        <p className="leading-loose text-black text-lg">
          {eventsData.description}
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <Image
          className="rounded-full border-white shadow-2xl object-cover aspect-square"
          style={{ borderWidth: "12px" }}
          src={eventsData.image_right}
          height={400}
          width={400}
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutEvent;
