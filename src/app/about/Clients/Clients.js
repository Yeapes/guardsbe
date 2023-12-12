"use client";
import Slider from "react-slick";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Client from "@/components/Clients/Client/Client";

const Clients = ({ clients }) => {
  useEffect(() => {
    import("slick-carousel");
  }, []);

  var settings = {
    dots: false,
    infinite: true,
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
      <div>
        <Slider {...settings} className="clients">
          {clients?.map((client) => (
            <Client key={client.id} clientLogo={client.image} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
