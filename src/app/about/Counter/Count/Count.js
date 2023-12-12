import React, { useEffect } from "react";

const Count = ({ number, countText }) => {
  useEffect(() => {});
  return (
    <div data-aos="fade-left">
      <h1 className="text-white text-center text-5xl pb-3 font-semibold">
        {number}
      </h1>
      <p className="text-white text-center text-lg">{countText}</p>
    </div>
  );
};

export default Count;
