"use client";
import Slider from "react-slick";
import CaseStudyItem from "./CaseStudyItem/CaseStudyItem";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CaseStudy = ({ case_studies }) => {
  useEffect(() => {
    import("slick-carousel");
  }, []);

  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 4,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#003366] py-12 lg:py-24">
      <h5
        className="text-2xl text-blue-500 font-semibold text-center"
        data-aos="fade-left"
      >
        From our Case Studies
      </h5>
      <h1
        className="text-white text-5xl text-center font-bold mb-12 mt-8"
        data-aos="fade-left"
      >
        We Delivered Best Solutions
      </h1>
      <div>
        <Slider {...settings} className="gap-6 case-study-slider">
          {case_studies?.map((item) => (
            <CaseStudyItem
              key={item.id}
              imageUrl={item.image}
              secondTitle={item.title}
              description={item.short_description}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CaseStudy;
