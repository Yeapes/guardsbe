"use client";
import Slider from "react-slick";
import Client from "./Client/Client";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clients = ({ clients }) => {
  useEffect(() => {
    import("slick-carousel");
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
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
          slidesToScroll: 1,
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
    <div className="p-12 md:p-24 lg:px-64 py-24">
      <h1 className="text-3xl lg:text-5xl text-center font-semibold pb-6 text-black">
        Thrilled Customers
      </h1>
      <div>
        <Slider {...settings} className="clients">
          {clients?.map((client, index) => (
            <Client key={index} clientLogo={client.image} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
