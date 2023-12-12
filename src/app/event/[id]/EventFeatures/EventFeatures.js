import React from "react";
import FeatureItem from "./FeatureItem/FeatureItem";

const EventFeatures = () => {
  return (
    <div className="py-12 px-6 md:px-12 lg:px-20 xl:px-48 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      <div className="p-6">
        <h5
          className="text-black text-lg tracking-widest uppercase font-sans"
          style={{
            background:
              "linear-gradient(to left, rgba(247,0,104) 0%,rgba(68,16,102,1) 25%,rgba(247,0,104,1) 75%,rgba(68,16,102,1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Features
        </h5>
        <h2 className="text-black text-5xl font-bold font-serif">
          Our Features
        </h2>
      </div>
      <FeatureItem
        icon="https://cdn-icons-png.flaticon.com/512/2941/2941483.png"
        title="Great Speakers"
        shortDesc="Dolor sit amet consectetur elit sed do eiusmod tempor incd."
      />
      <FeatureItem
        icon="https://cdn-icons-png.flaticon.com/512/2941/2941483.png"
        title="Experience"
        shortDesc="Dolor sit amet consectetur elit sed do eiusmod tempor incd."
      />
      <FeatureItem
        icon="https://cdn-icons-png.flaticon.com/512/2941/2941483.png"
        title="Networking"
        shortDesc="Dolor sit amet consectetur elit sed do eiusmod tempor incd."
      />
      <FeatureItem
        icon="https://cdn-icons-png.flaticon.com/512/2941/2941483.png"
        title="Party"
        shortDesc="Dolor sit amet consectetur elit sed do eiusmod tempor incd."
      />
      <FeatureItem
        icon="https://cdn-icons-png.flaticon.com/512/2941/2941483.png"
        title="New People"
        shortDesc="Dolor sit amet consectetur elit sed do eiusmod tempor incd."
      />
    </div>
  );
};

export default EventFeatures;
