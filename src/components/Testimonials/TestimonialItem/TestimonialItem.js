import Image from "next/image";
import React, { useEffect } from "react";
import "./Testimonialitem.css";

const DEFAULT_IMAGE = process.env.DEFAULT_IMAGE;

const TestimonialItem = ({ imageUrl, review, name, designation }) => {
  useEffect(() => {});
  return (
    <div
      className="relative mx-4 mt-24 md:mt-6  md:mx-12 mb-6"
      data-aos="fade-left"
    >
      {imageUrl !== undefined ? (
        <Image
          className="rounded-lg h-24 object-cover object-left border-b-8 border-blue-600 border-r-8 absolute left-[35%] md:-left-12 -top-[20%] md:top-[20%]"
          src={imageUrl}
          height={100}
          width={100}
          alt={name}
        />
      ) : (
        <Image
          className="rounded-lg border-b-8 border-blue-600 border-r-8 absolute left-[35%] md:-left-12 -top-[20%] md:top-[20%]"
          src={DEFAULT_IMAGE}
          height={100}
          width={100}
          alt={name}
        />
      )}

      <div className="shadow-xl p-8 md:p-12 ps-8 md:ps-20 rounded-lg text-black">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/3114/3114649.png"
          height={36}
          width={36}
          alt="message-box"
        />
        <p className="leading-loose mt-6">{review}</p>
        <p className="mt-6">
          <strong>{name}</strong> / {designation}
        </p>
      </div>
    </div>
  );
};

export default TestimonialItem;
