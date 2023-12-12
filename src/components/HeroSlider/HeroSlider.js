"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide/Slide";
const HeroSlider = ({ sliders }) => {
  useEffect(() => {
    import("slick-carousel");
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative min-h-[20vh] md:min-h-[30vh] lg:min-h-[60vh] xl:min-h[80vh] max-h-[80vh]">
      <Slider className="hero-sliders" {...settings}>
        {sliders?.map((slider, index) => (
          <Slide
            key={index}
            firstTitle={slider.title}
            secondTitle={slider.subtitle}
            description={slider.description}
            imageUrl={slider.image1}

            // imageUrl="https://thepixelcurve.com/html/techwix/techwix/assets/images/hero-bg3.jpg"
          />
        ))}
        {/* <Slide
          firstTitle="Technology Related Consultancy"
          secondTitle="We transform ideas into technology"
          description="We provide the most responsive and functional IT design for companies and business worldwide"
          imageUrl="https://thepixelcurve.com/html/techwix/techwix/assets/images/hero-bg3.jpg"
        />
        <Slide
          firstTitle="Technology Related Consultancy"
          secondTitle="We transform ideas into technology"
          description="We provide the most responsive and functional IT design for companies and business worldwide"
          imageUrl="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        />

        <Slide
          firstTitle="Technology Related Consultancy"
          secondTitle="We transform ideas into technology"
          description="We provide the most responsive and functional IT design for companies and business worldwide"
          imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
        /> */}
      </Slider>
    </div>
  );
};

export default HeroSlider;
