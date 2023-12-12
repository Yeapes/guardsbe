import Image from "next/image";
import React, { useEffect } from "react";
import "./Cta.css";

const Cta = () => {
  useEffect(() => {});
  return (
    <div
      className="bg-cover bg-center bg-no-repeat flex flex-col md:flex-row gap-6 rounded-xl items-center justify-between my-12 mx-8 sm:mx-12 md:mx-18 lg:mx-24 xl:mx-32 p-12 md:p-20"
      style={{
        backgroundImage: `url(${new URL(
          "https://thepixelcurve.com/html/techwix/techwix/assets/images/bg/cta-bg5.jpg"
        ).toString()})`,
      }}
    >
      <div className="w-full md:w-1/2" data-aos="fade-right">
        <h1 className="cta-heading relative text-4xl font-semibold leading-snug text-center md:text-left pl-0 md:pl-6">
          To make requests for further information, contact us
        </h1>
      </div>
      <div
        className="w-full md:w-1/2 flex flex-col items-center justify-center"
        data-aos="fade-left"
      >
        <Image
          src="https://thepixelcurve.com/html/techwix/techwix/assets/images/cta-icon2.png"
          height={50}
          width={50}
          alt=""
        />
        <h3 className="text-lg">Call Us For Any inquiry</h3>
        <h2 className="text-2xl md:text-2xl lg:text-4xl text-blue-600 font-semibold">
          +44 920 090 505
        </h2>
      </div>
    </div>
  );
};

export default Cta;
