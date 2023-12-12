import HeroSection from "@/components/HeroSection/HeroSection";
import React from "react";

const CoursesHero = ({ backgroundImage, pageBreadcumb, pageName }) => {
  return (
    <div>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
        pageBreadcumb="Courses"
        pageName="Courses"
      />
    </div>
  );
};

export default CoursesHero;
