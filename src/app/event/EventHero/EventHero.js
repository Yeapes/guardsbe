import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./EventHero.css";

const EventHero = ({ eventsData }) => {
  const backgroundImage = eventsData?.bg_image;
  const eventName = eventsData.title;
  const eventDate = eventsData.event_date;

  return (
    <div
      data-aos="fade-left"
      className="bg-cover opacity-80 px-12 py-48 bg-center overflow-hidden relative"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "",
        opacity: 0.8,
      }}
    >
      <h3 className="text-center text-yellow-400 text-4xl font-semibold">
        {eventsData?.event_date}
      </h3>
      <h1 className="text-white text-6xl text-center font-bold">
        {eventsData?.title}
      </h1>
      <div className="flex items-center justify-center gap-12 mt-6">
        <div className="seats">
          <p className="text-yellow-400">{eventsData?.seat}</p>
        </div>
        <div className="flex items-center justify-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="yellow"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="yellow"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <p className="text-yellow-400">Speakers</p>
        </div>
        <div className="flex items-center justify-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="yellow"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <p className="text-yellow-400">{eventsData?.location}</p>
        </div>
      </div>
    </div>
  );
};

export default EventHero;
