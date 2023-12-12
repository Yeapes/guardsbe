import Image from "next/image";
import React, { useEffect } from "react";

const WhoWeAre = () => {
  useEffect(() => {});
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-18 xl:px-24 py-6 flex flex-col lg:flex-row items-center gap-12">
      <div
        className="wwa-image flex items-center bg-contain bg-no-repeat bg-center gap-6 w-full max-w-full lg:w-1/2"
        style={{
          backgroundImage: `url(${new URL(
            "https://thepixelcurve.com/html/techwix/techwix/assets/images/shape/about-shape2.png"
          ).toString()})`,
        }}
      >
        <Image
          data-aos="fade-right"
          className="rounded-lg w-full"
          src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
          height={500}
          width={120}
          alt="working in a desk"
        />
        <Image
          data-aos="fade-right"
          className="rounded-lg mt-32 w-full"
          src="https://images.unsplash.com/photo-1504643220124-8317cca212bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          height={500}
          width={120}
          alt=""
        />
      </div>
      <div className="wwa-content w-full lg:w-1/2">
        <h5
          className="text-lg uppercase text-blue-500 font-semibold"
          data-aos="fade-left"
        >
          Who We Are
        </h5>
        <h2
          className="text-3xl py-4 font-semibold text-black"
          data-aos="fade-left"
        >
          Highly Tailored IT Design, Management & Support Services.
        </h2>
        <p className="text-gray-700" data-aos="fade-left">
          Accelerate innovation with world-class tech teams We’ll match you to
          an entire remote team of incredible freelance talent for all your
          software development needs.
        </p>
        <hr className="border-1 border-gray-400 my-6" data-aos="fade-left" />
        <div
          className="flex items-center flex-col md:flex-row justify-between gap-6"
          data-aos="fade-left"
        >
          <div>
            <h4 className="text-2xl font-semibold text-black">Our Mission</h4>
            <p className="py-2 text-gray-700">
              Accelerate innovation with world-class tech teams. We help
              businesses elevate their value.
            </p>
          </div>
          <div data-aos="fade-left">
            <h4 className="text-2xl font-semibold text-black">Custom Code</h4>
            <p className="py-2 text-gray-700">
              Accelerate innovation with world-class tech teams. We help
              businesses elevate their value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
