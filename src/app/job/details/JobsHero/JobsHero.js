import HeroSection from "@/components/HeroSection/HeroSection";
import React from "react";

const JobsHero = () => {
  return (
    <div>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        pageBreadcumb="Jobs"
        pageName="All Jobs"
      />
    </div>
  );
};

export default JobsHero;
