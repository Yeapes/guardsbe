"use client";

import Slider from "react-slick";
import TestimonialItem from "./TestimonialItem/TestimonialItem";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = ({ testimonials }) => {
  useEffect(() => {
    import("slick-carousel");
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-6 sm:p-8 md:p-12 lg:px-36 xl:px-64 lg:py-24">
      <h4
        className="text-xl text-center text-blue-600 uppercase "
        data-aos="fade-right"
      >
        CUSTOMER EXPERIENCES
      </h4>
      <h2
        className="text-4xl text-center text-black font-semibold mt-8"
        data-aos="fade-right"
      >
        Real Stories, Genuine Satisfaction, Forever.
      </h2>

      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((testimonial) => (
          <TestimonialItem
            key={testimonial.id}
            imageUrl={testimonial.image}
            review={testimonial.message}
            name={testimonial.name}
            designation={testimonial.designation}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
