import React from "react";

const EventTime = ({ eventsData }) => {
  return (
    <div
      className="flex -mt-20 z-10 relative items-center justify-center gap-8 mx-6 mb-6 md:mx-20 lg:mx-36 xl:mx-64 p-12"
      style={{
        background:
          "linear-gradient(to left, rgba(247,0,104) 0%,rgba(68,16,102,1) 100%)",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-7xl font-bold ">160</h1>
        <p>Days</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-7xl font-bold ">:</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-7xl font-bold ">03</h1>
        <p>Hours</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-7xl font-bold ">:</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-7xl font-bold ">10</h1>
        <p>Minutest</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-7xl font-bold ">:</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-7xl font-bold ">60</h1>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default EventTime;
