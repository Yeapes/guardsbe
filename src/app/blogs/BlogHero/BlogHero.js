import HeroSection from "@/components/HeroSection/HeroSection";
import React from "react";

const BlogHero = ({ blogData }) => {
  return (
    <div>
      <HeroSection
        pageBreadcumb="Blogs"
        pageName="Blogs"
        backgroundImage="https://thepixelcurve.com/html/techwix/techwix/assets/images/bg/page-banner.jpg"
      />
    </div>
  );
};

export default BlogHero;
