import React from "react";

const SecondaryHeading = ({ headingText, textColor }) => {
  return (
    <div className={`text-center text-lg uppercase font-semibold ${textColor}`}>
      {headingText}
    </div>
  );
};

export default SecondaryHeading;
