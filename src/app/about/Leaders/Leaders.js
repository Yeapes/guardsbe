"use client";
import PrimaryHeading from "@/components/PrimaryHeading/PrimaryHeading";
import SecondaryHeading from "@/components/SecondaryHeading/SecondaryHeading";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Leader from "@/components/Leaders/Leader/Leader";

const Leaders = ({ team }) => {
  useEffect(() => {
    import("slick-carousel");
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div
      className="w-full bg-cover no-repeat p-12 md:p1-16 lg:px-36 lg:py-24"
      style={{
        backgroundImage: `url(${new URL(
          "https://thepixelcurve.com/html/techwix/techwix/assets/images/bg/team-bg1.jpg"
        ).toString()})`,
      }}
    >
      <SecondaryHeading
        textColor="text-blue-600"
        headingText="Our expert team "
      />
      <PrimaryHeading
        className="text-white"
        headingText="We have world expert team"
        textColor="text-text-black"
      />
      <Slider {...settings}>
        {team?.map((teamMember) => (
          <Leader
            key={teamMember.id}
            imageUrl={teamMember.image}
            name={teamMember.name}
            designation={teamMember.designation}
            fb={teamMember.fb_id}
            twitter={teamMember.twitter_id}
            behance={teamMember.instagram_id}
            linkedin={teamMember.linkedin_id}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Leaders;
