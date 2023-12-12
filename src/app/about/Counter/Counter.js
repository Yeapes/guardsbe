import React from "react";
import Count from "./Count/Count";

const Counter = () => {
  return (
    <div
      className="rounded-lg mx-4 md:mx-12 lg:mx-18 xl:mx-36 my-12 px-12 py-20 bg-no-repeat bg-cover bg-center gap-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center"
      style={{
        backgroundImage: `url(${new URL(
          "https://thepixelcurve.com/html/techwix/techwix/assets/images/bg/counter-bg2.jpg"
        ).toString()})`,
      }}
    >
      <Count number="350+" countText="Completed Projects" />
      <Count number="1000+" countText="Sleepless Nights" />
      <Count number="300+" countText="Robotic Automation" />
      <Count number="90%" countText="Website Analyze" />
    </div>
  );
};

export default Counter;
