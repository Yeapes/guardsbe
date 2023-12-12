import Image from "next/image";
import React from "react";

const Option = ({ icon, optionName, optionDetails }) => {
  return (
    <div className="bg-white p-3 md:p-6 rounded-3xl">
      <div className="icon">
        <Image
          className="h-8 mx-auto"
          src={icon}
          height={50}
          width={50}
          alt={optionName}
        />
      </div>
      <div className="option-name text-gray-500 text-lg md:text-xl text-center">
        {optionName}
      </div>
      <div className="option-details text-lg md:text-xl text-black text-center">
        {optionDetails}
      </div>
    </div>
  );
};

export default Option;
