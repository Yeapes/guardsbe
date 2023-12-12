import React from "react";
import Speaker from "./Speaker/Speaker";

const Speakers = ({ eventsData }) => {
  return (
    <div className="px-6 py-12 md:px-12 lg:px-24 xl:px-48">
      <h4 className="text-black font-serif tracking-widest text-center uppercase font-bold">
        Speakers
      </h4>
      <h1 className="font-bold text-5xl font-sans text-black text-center mb-6">
        Our Speakers
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12">
        {eventsData?.speakers?.length === 0 ? (
          <p className="text-center text-black">No speakers data to show</p>
        ) : (
          eventsData?.speakers?.map((speaker) => (
            <Speaker
              key={speaker.id}
              profile={speaker.image}
              name={speaker.name}
              designation={speaker.title}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Speakers;
