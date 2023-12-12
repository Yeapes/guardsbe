import React from "react";

const PrimaryHeading = ({ headingText, textColor }) => {
  return (
    <div
      className={`text-4xl text-center font-semibold mt-6 mb-12 ${textColor}`}
    >
      {headingText}
    </div>
  );
};

export default PrimaryHeading;
