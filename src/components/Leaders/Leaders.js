"use client";
import Slider from "react-slick";
import Leader from "./Leader/Leader";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Leaders.css";

const Leaders = ({ team }) => {
  useEffect(() => {
    import("slick-carousel");
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    // arrows: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="team" className="bg-black p-12 md:p-24 lg:px-64 py-24">
      <h4
        className="text-blue-600 text-center text-lg uppercase font-semibold"
        data-aos="fade-right"
      >
        Our Proficient Crew
      </h4>
      <h2
        className="text-4xl text-center  font-semibold mt-6 mb-12 text-white"
        data-aos="fade-right"
      >
        Crafting Success with Our Experts
      </h2>
      <div>
        <Slider {...settings} className="leaders">
          {team?.map((member) => (
            <Leader
              key={member.id}
              imageUrl={member.image}
              name={member.name}
              designation={member.designation}
              fb={member.fb_id}
              twitter={member.twitter_id}
              instagram={member.instagram_id}
              linkedin={member.linkedin_id}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Leaders;
