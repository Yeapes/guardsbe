import React from "react";
import Service from "./Service/Service";

const Services = ({ services }) => {
  return (
    <div
      className="bg-cover pb-36"
      style={{
        backgroundImage: `url(${new URL(
          "https://thepixelcurve.com/html/techwix/techwix/assets/images/bg/service-bg3.jpg"
        ).toString()})`,
      }}
    >
      <div className="relative -mt-12 lg:-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-8 sm:px-12 md:px-18 xl:px-24 gap-10 -top-6 lg:-top-12">
          {services?.map((service) => (
            <Service
              key={service.id}
              imageUrl={service.image}
              title={service.title}
              description={service.short_description}
              url="#"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
