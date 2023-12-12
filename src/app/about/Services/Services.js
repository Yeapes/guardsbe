import PrimaryHeading from "@/components/PrimaryHeading/PrimaryHeading";
import SecondaryHeading from "@/components/SecondaryHeading/SecondaryHeading";
import Service from "@/components/Services/Service/Service";
import React from "react";

const Services = ({ services }) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-12"
      style={{
        backgroundImage: `url(${new URL(
          "https://thepixelcurve.com/html/techwix/techwix/assets/images/bg/choose-us-bg3.jpg"
        ).toString()})`,
      }}
    >
      <SecondaryHeading
        headingText="Reason to Choose Us"
        textColor="text-blue-400"
      />
      <PrimaryHeading
        headingText="We provide truly prominent IT solutions."
        textColor="text-black"
      />
      <div className="py-8 px-6 md:px-12 lg:px-20 xl:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
  );
};

export default Services;
